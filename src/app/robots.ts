import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // EDIT: use your own domain
    sitemap: "https://example.com/sitemap.xml",
  };
}
