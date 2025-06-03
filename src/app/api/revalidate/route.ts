import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get("X-MICROCMS-Signature");
    const body = await req.text();

    // 署名の検証
    const expectedSignature = crypto
      .createHmac("sha256", process.env.REVALIDATE_SECRET_TOKEN || "")
      .update(body)
      .digest("hex");

    if (!signature || signature !== expectedSignature) {
      console.error("Invalid signature");
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 }
      );
    }

    // 署名が正しい場合、JSONとしてパース
    const jsonBody = JSON.parse(body);
    const slug = jsonBody.slug;
    console.log("🔥 jsonBody: ", jsonBody);

    // トップページを再検証（ISR）
    revalidatePath("/");

    // 特定の記事が更新された場合、その記事の詳細ページのみを再検証
    if (slug) {
      console.log("🔥 revalidating: /blog/${slug}", slug);
      revalidatePath(`/blog/${slug}`);
    }

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error("Error revalidating:", err);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
