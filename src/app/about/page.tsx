import type { Metadata } from "next";
import AboutDetail from "@/src/components/about/AboutDetail";
import PageTransition from "@/src/components/PageTransition";

export const metadata: Metadata = {
  title: "About",
  description: "Hoshicoの自己紹介ページです。",
};

export default async function Aboutage() {
  return (
    <PageTransition>
      <AboutDetail />
    </PageTransition>
  );
}
