import type { Metadata } from "next";
import AboutDetail from "@/src/components/about/AboutDetail";

export const metadata: Metadata = {
  title: "About",
  description: "Hoshicoの自己紹介ページです。",
};

export default async function Aboutage() {
  return <AboutDetail />;
}
