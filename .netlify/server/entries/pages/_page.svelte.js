import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { S as SearchForm } from "../../chunks/SearchForm.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${$$result.head += `<!-- HEAD_svelte-14vj72_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Home Page"}"><!-- HEAD_svelte-14vj72_END -->`, ""}


<section class="${"w-full px-4 "}"><div class="${"mb-8 mt-12"}"><h1 class="${"mb-4 text-3xl font-medium"}">Kerko ne Pazar.al</h1>
		${validate_component(SearchForm, "SearchForm").$$render($$result, {}, {}, {})}</div></section>

`;
});
export {
  Page as default
};
