const GET = ({ url }) => {
  console.log(url.searchParams);
  const name = "Developed by: Enes Bala";
  return new Response(String(name));
};
export {
  GET
};
