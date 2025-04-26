// app/page.tsx
export const revalidate = 60 * 60 * 24 * 7; // 👈 7日間ごとにISR

export default function HomePage() {
  return (
    <main>
      <h1>Hello App Router World 🚀</h1>
      <p>Next.js App Router + ISR構成です！</p>
    </main>
  );
}
