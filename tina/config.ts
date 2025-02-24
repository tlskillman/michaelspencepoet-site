import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // This is set in Netlify
  token: process.env.TINA_TOKEN, // Also set in Netlify

  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  collections: [
    {
      name: "content",
      label: "Site Content",
      path: "",
      fields: [
        { name: "bio", label: "Biography", component: "textarea" },
        { name: "works", label: "Published Works", component: "textarea" },
        { name: "themes", label: "Poetic Themes", component: "textarea" },
      ],
    },
  ],
});
