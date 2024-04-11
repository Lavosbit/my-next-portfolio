import groq from "groq";

import { client } from "../../../../sanity/lib/client";

export async function POST() {
  const query = groq`
    *[_type == 'post'] {
        _id,
        title,
        body
    }
  `;
  const data = await client.fetch(query);
  return Response.json({ data });
}
