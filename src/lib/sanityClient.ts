import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "19oqelhk",
    dataset: "production",
    apiVersion: "v1",
    useCdn: true,
});
