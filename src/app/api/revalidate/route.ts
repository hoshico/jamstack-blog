import { type NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import crypto from "node:crypto";

export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get("X-MICROCMS-Signature");
    const body = await req.text();

    // デバッグ用：署名をログ出力
    console.log(" Received signature:", signature);
    console.log("🔥 Body:", body);

    // 一時的に署名検証をスキップ（本番では削除）
    if (process.env.NODE_ENV === "development") {
      console.log(" Skipping signature verification in development");
    } else {
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
    }

    // 署名が正しい場合、JSONとしてパース
    const jsonBody = JSON.parse(body);
    const id = jsonBody.id;
    console.log("🔥 jsonBody: ", jsonBody);

    // トップページを再検証（ISR）
    revalidatePath("/");

    // 特定の記事が更新された場合、その記事の詳細ページのみを再検証
    if (id) {
      console.log("🔥 revalidating: /blog/${id}", id);
      revalidatePath(`/blog/${id}`);
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
