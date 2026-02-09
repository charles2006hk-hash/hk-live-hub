import type { Metadata, Viewport } from "next";
import "./globals.css";

// 設定 Viewport 確保 iPhone 上不會自動縮放，且支持黑底色
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "HK Live Hub",
  description: "Real-time Dashboard for HK",
  manifest: "/manifest.json", // 必須連結到我們之前說的 manifest
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "HK Live",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK" className="bg-black">
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
