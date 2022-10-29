import { e as error } from "../../../../chunks/index2.js";
const loadFromApi = async (fetch, query) => {
  let url = "/api/getPost";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(query.id)
  });
  if (!response.ok) {
    throw error(404, "Postimi nuk u gjet");
  }
  const data = await response.json();
  return data;
};
const load = async ({ params, fetch }) => {
  const data = await loadFromApi(fetch, params);
  return data;
};
export {
  load,
  loadFromApi
};
