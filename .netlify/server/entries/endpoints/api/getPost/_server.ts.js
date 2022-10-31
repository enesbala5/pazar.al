import { e as error } from "../../../../chunks/index2.js";
import { d as db } from "../../../../chunks/db.js";
const POST = async ({ request }) => {
  const query = await request.json();
  let data = await db.post.findFirst({
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
