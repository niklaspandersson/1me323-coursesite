import { z, defineCollection } from "astro:content";

const labCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    downloads: z.optional(z.string().or(z.array(z.string()))),
    reading: z.optional(z.string().or(z.array(z.string()))),
  }),
});

const assignmentsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    downloads: z.optional(z.string().or(z.array(z.string()))),
    reading: z.optional(z.string().or(z.array(z.string()))),
  }),
});

const aboutCollection = defineCollection({
  type: "content",
});

export const collections = {
  assignments: assignmentsCollection,
  about: aboutCollection,
  labs: labCollection,
};
