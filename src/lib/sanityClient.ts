import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "19oqelhk",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true,
});
