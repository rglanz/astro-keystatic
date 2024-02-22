import { config, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "cloud",
  },
  cloud: {
    project: "cedar-studios/astro-keystatic",
  },

  singletons: {
    post: singleton({
      label: "Post",
      path: "/src/content/post/",
      format: { contentField: "content" },
      schema: {
        title: fields.text({ label: "Title" }),
        content: fields.document({
          label: "Content",
          formatting: true,
          links: true,
        }),
      },
    }),
  },
});
