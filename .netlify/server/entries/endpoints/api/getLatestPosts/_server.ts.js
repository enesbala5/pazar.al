import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const getKeywords = (searchQuery) => {
  if (searchQuery === void 0) {
    return [];
  }
  return searchQuery.split(" ");
};
const POST = async ({ request }) => {
  const query = await request.json();
  console.log("query faqja: ", query);
  let pageNumber = 1;
  const itemsPerPage = 15;
  if (query.faqja !== void 0) {
    pageNumber = Number(query.faqja);
  } else {
    pageNumber = 1;
  }
  let itemsToSkip = pageNumber * itemsPerPage - itemsPerPage;
  console.log("itemsToSkip", itemsToSkip);
  let keywords = getKeywords(query.id);
  let data = await prisma.post.findMany({
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
