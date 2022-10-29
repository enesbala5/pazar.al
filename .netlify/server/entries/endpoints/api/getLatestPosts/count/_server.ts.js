import { e as error } from "../../../../../chunks/index2.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const POST = async ({ request }) => {
  const query = await request.json();
  console.log("query count", query);
  let count = await prisma.post.count({
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
