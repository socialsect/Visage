import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "65828bip",
  dataset: "production",
  apiVersion: "2025-09-05",
  useCdn: true,
});
