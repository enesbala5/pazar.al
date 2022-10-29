import { e as error } from "../../../../chunks/index2.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const POST = async ({ request }) => {
  const query = await request.json();
  let data = await prisma.post.findFirst({
    where: {
      AND: [
        {
          pid: query
        },
        {
          archived: false
        }
      ]
    }
  });
  if (data) {
    return new Response(JSON.stringify(data));
  }
  throw error(404, "Post Not Found");
};
export {
  POST
};
