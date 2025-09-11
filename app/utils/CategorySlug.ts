import { fetchGraphQL } from "@/lib/graphqlClient";

type CategorySlug = {
  category: {
    services: { nodes: { title: string; slug: string }[] };
  } | null;
} | null;

export async function RoleBaseSlug(): Promise<CategorySlug> {
    const ROLE_BASE_SLUG_QUERY = `
        query RoleBaseSlug {
            category(id: "role", idType: SLUG) {
                services(first:8) {
                nodes {
                    title
                    slug
                }
                }
            }
        }
    `;
    const data = await fetchGraphQL(ROLE_BASE_SLUG_QUERY); // ✅ pass slug as a variable
    console.log('Fetched RoleBaseSlug data:', data);
    return data;
}