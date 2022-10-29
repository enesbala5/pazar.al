import { c as create_ssr_component, d as subscribe, e as escape } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="${"w-full rounded-md text-center text-7xl font-medium"}">${escape($page.status)}</div>
<p>${escape((_a = $page.error) == null ? void 0 : _a.message)}</p>`;
});
export {
  Error as default
};
