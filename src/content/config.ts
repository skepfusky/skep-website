/* eslint-disable import/no-unused-modules */
import { z, defineCollection } from "astro:content"

const showcaseType = z.enum(["Browser extension", "Web application"])

const showcaseTechnologies = z.enum([
  "nextjs",
  "sveltekit",
  "astro",
  "plasmo",
  "tauri",
  "flutter",
  "fastapi",
  "mongodb",
  "redis"
])

const showcaseInfras = z.enum([
  "vercel",
  "digitalocean",
  "docker",
  "supabase",
  "aws",
  "gcp"
])

export type ShowcaseTechnologiesLiteral = z.infer<typeof showcaseTechnologies>
export type ShowcaseInfrasLiteral = z.infer<typeof showcaseInfras>

const showcaseSchema = z.object({
  title: z.string(),
  repo: z.string(),
  image: z.string().optional(),
  type: showcaseType,
  date: z.string().transform((s) => new Date(s)),
  excerpt: z.string(),
  details: z.object({
    technologies: z.array(showcaseTechnologies).nullable(),
    infrastructure: z.array(showcaseInfras).nullable()
  })
})

export type ShowcaseSchema = z.infer<typeof showcaseSchema>

const dreamJournalSchema = z.object({
  date: z.string().transform((s) => new Date(s)),
  location: z.string(),
  setting: z.string()
})

export type DreamJournalSchema = z.infer<typeof dreamJournalSchema>

export const collections = {
  showcase: defineCollection({
    type: "content",
    schema: showcaseSchema
  }),
  "dream-journal": defineCollection({
    type: "content",
    schema: dreamJournalSchema
  })
}