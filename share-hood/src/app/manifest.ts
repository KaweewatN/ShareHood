import type {MetadataRoute} from "next";

export default function Manifest(): MetadataRoute.Manifest {
  return {
    name: "ShareHood sharing community",
    short_name: "ShareHood",
    description:
      "ShareHood is a sharing community application that allows users to share their items with others",
    start_url: "/home",
    display: "standalone",
    background_color: "#f7f7f7",
    theme_color: "#f7f7f7",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
