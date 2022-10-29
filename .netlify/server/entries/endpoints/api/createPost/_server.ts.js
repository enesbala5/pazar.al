import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const createPost = async () => {
  await prisma.post.create({
    data: {
      title: "Range Rover 2022",
      description: "Super mjet 2",
      price: 103589.99,
      eur: false,
      old_price: 103589.99,
      city: "Tirana",
      country: "Albania",
      category: "Makine"
    }
  });
};
async function GET({ url }) {
  createPost();
  return new Response(String(true));
}
export {
  GET
};
