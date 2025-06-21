import AboutDetail from "@/src/components/about/AboutDetail";

export default async function Aboutage() {
  const generatedAt = new Date().toISOString();
  return <AboutDetail generatedAt={generatedAt} />;
}
