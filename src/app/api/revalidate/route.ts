import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const secret = req.headers.get("X-MICROCMS-Signature");
  if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const slug = body.slug;

    // トップページを再検証（ISR）
    revalidatePath("/");

    // 特定の記事が更新された場合、その記事の詳細ページのみを再検証
    if (slug) {
      revalidatePath(`/blog/${slug}`);
    }

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
