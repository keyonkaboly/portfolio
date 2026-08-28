import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keyon Kaboly | Computer Engineering Student & Product Builder",
  description: "Portfolio, resume, and selected work by Keyon Kaboly.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
