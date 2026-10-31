import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.buzzler.co.in";

  const routes = [
    "",
    "/services",
    "/services/video",
    "/services/ads",
    "/services/influencer-marketing",
    "/services/branding",
    "/work",
    "/work/bay-breeze-resort",
    "/work/jagannath-heritage-haveli",
    "/work/chilika-eco-retreat",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}
