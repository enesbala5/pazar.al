import { d as db } from "../../../../chunks/db.js";
const getKeywords = (searchQuery) => {
  if (searchQuery === void 0) {
    return [];
  }
  return searchQuery.split(" ");
};
const POST = async ({ request }) => {
  const query = await request.json();
  let pageNumber = 1;
  const itemsPerPage = 15;
  if (query.faqja !== void 0) {
    pageNumber = Number(query.faqja);
  } else {
    pageNumber = 1;
  }
  let itemsToSkip = pageNumber * itemsPerPage - itemsPerPage;
  let keywords = getKeywords(query.id);
  let data = await db.post.findMany({
    take: itemsPerPage,
    skip: itemsToSkip,
    where: {
      OR: [
        {
          title: {
            contains: query.id
          }
        },
        {
          title: {
            in: keywords
          }
        }
      ],
      AND: [
        {
          archived: false
        }
      ]
    }
  });
  if (data) {
    return new Response(JSON.stringify(data));
  }
  return new Response(JSON.stringify({}));
};
export {
  POST
};
