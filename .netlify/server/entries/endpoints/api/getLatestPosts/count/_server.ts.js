import { e as error } from "../../../../../chunks/index2.js";
import { d as db } from "../../../../../chunks/db.js";
const POST = async ({ request }) => {
  const query = await request.json();
  console.log("query count", query);
  let count = await db.post.count({
    where: {
      AND: [
        {
          title: {
            contains: query
          }
        },
        {
          archived: {
            equals: false
          }
        }
      ]
    }
  });
  if (count) {
    return new Response(JSON.stringify(count));
  }
  throw error(404, "Nuk ka postime qe pershtaten");
};
export {
  POST
};
