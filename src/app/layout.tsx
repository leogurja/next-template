import "@/styles/index.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  // EDIT: change title and description
  title: "NextTemplate",
  description: "App description",

  // EDIT: add your own keywords
  keywords: [],
  robots: {
    follow: true,
    index: true,
  },

  // EDIT: other useful options you should consider:
  // creator: "",
  // openGraph: {
  //   type: "website",
  //   url: "/",
  //   title: "Example title",
  //   description:
  //     "Example description",
  //   locale: "en_US",
  //   images: "https://example.com/og-preview.webp",
  // },
  // twitter: {
  //   title: "Example title",
  //   description:
  //     "Example description",
  //   card: "summary_large_image",
  //   images: "https://example.com/twitter-preview.webp",
  //   site: "https://example.com",
  // },
};

export const viewport: Viewport = {
  // EDIT: change colorScheme and themeColor accordingly
  colorScheme: "dark",
  themeColor: "#0c0a09",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full overflow-x-hidden scroll-smooth">
      <body className="min-h-screen w-full antialiased">
        <noscript>Your browser does not support JavaScript.</noscript>
        {children}
      </body>
    </html>
  );
}
