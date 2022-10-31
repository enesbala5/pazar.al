import { c as create_ssr_component, b as add_attribute, d as subscribe, v as validate_component, e as escape } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { H as Heart } from "../../chunks/Heart.js";
import { n as nav } from "../../chunks/nav.js";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", classNames, 0)} viewBox="${"0 0 39.799 28.131"}"><g id="${"Group_87"}" data-name="${"Group 87"}" transform="${"translate(-1549.32 -1255.179)"}"><path id="${"Path_39"}" data-name="${"Path 39"}" d="${"M1584.45,1255.18h-6.133a5.848,5.848,0,0,0-3.871,1.491l-5.676,5.67-5.21,5.116-4.933,4.933c-.465.466-.522.486-1.436.486h-3.016a5.01,5.01,0,0,0-4.855,5.039,5.227,5.227,0,0,0,5.124,5.235h5.372a6.034,6.034,0,0,0,4.073-1.678l15.73-15.681a1.313,1.313,0,0,1,1.1-.392h3.884c1.87,0,4.516-2.118,4.516-5.173A5.108,5.108,0,0,0,1584.45,1255.18Zm-.278,7.572h-3.317a3.3,3.3,0,0,0-2.836,1.005l-15.85,15.85a3.305,3.305,0,0,1-2.5.9h-5.227a2.587,2.587,0,0,1-2.526-2.628,2.245,2.245,0,0,1,2.3-2.328h3.586a3.015,3.015,0,0,0,2.328-.895l16.117-16.117a2.961,2.961,0,0,1,2.445-.745h5.518a2.55,2.55,0,0,1,2.246,2.4A2.487,2.487,0,0,1,1584.172,1262.752Z"}" transform="${"translate(0 0)"}"></path><path id="${"path4011"}" d="${"M1846.776,1490.791h-5.509a1.167,1.167,0,0,0,0,2.334h2.824l-5.37,5.37a1.209,1.209,0,1,0,1.758,1.648l5.29-5.3v2.795a1.175,1.175,0,0,0,2.35,0v-5.474A1.289,1.289,0,0,0,1846.776,1490.791Z"}" transform="${"translate(-266.506 -217.277)"}"></path><path id="${"path4011-2"}" data-name="${"path4011"}" d="${"M1647.13,1264.976h5.509a1.167,1.167,0,0,0,0-2.334h-2.824l5.37-5.37a1.209,1.209,0,1,0-1.758-1.649l-5.29,5.305v-2.8a1.175,1.175,0,0,0-2.349,0v5.475A1.289,1.289,0,0,0,1647.13,1264.976Z"}" transform="${"translate(-88.96 0)"}"></path></g></svg>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { onIndex } = $$props;
  let { returnUrl } = $$props;
  console.log($page);
  if ($$props.onIndex === void 0 && $$bindings.onIndex && onIndex !== void 0)
    $$bindings.onIndex(onIndex);
  if ($$props.returnUrl === void 0 && $$bindings.returnUrl && returnUrl !== void 0)
    $$bindings.returnUrl(returnUrl);
  $$unsubscribe_page();
  return `<nav class="${"flex items-center justify-between p-4"}"><section class="${"flex items-center"}"><a href="${"/"}" class="${"h-8 w-8 "}">${validate_component(Logo, "Logo").$$render(
    $$result,
    {
      classNames: "fill-neutral-50 w-full h-full "
    },
    {},
    {}
  )}</a>
		${returnUrl !== void 0 ? `<button class="${"ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-700"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"h-4 w-4 stroke-white"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"}"></path></svg></button>` : ``}</section>

	<div class="${"flex items-center "}">
		<div class="${"mr-4 flex items-center space-x-4 border-r-2 " + escape(onIndex ? " border-neutral-700" : " border-neutral-800", true) + " px-4 pr-4"}"><div class="${"flex h-5 w-5 items-center justify-center opacity-70"}">${validate_component(Heart, "Heart").$$render($$result, { classNames: "fill-white" }, {}, {})}</div></div>
		
		

		
		${$page.data.user ? `<div class="${"flex h-10 w-10 items-center justify-center rounded-full " + escape(onIndex ? " bg-neutral-900" : " bg-neutral-800", true)}"><p class="${"mb-0.5 text-xl text-neutral-50"}">E</p></div>
			<form action="${"/logout"}" method="${"post"}"><button type="${"submit"}">Logout</button></form>` : `<a${add_attribute("href", nav.login, 0)}>Login</a>`}</div></nav>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let onIndex = false;
  const updateOnIndex = (url) => {
    if (url === "/") {
      onIndex = true;
      return;
    }
    onIndex = false;
    return;
  };
  $page.url.pathname;
  let returnUrl = void 0;
  {
    updateOnIndex($page.url.pathname);
  }
  $$unsubscribe_page();
  return `<div class="${"min-h-screen " + escape(onIndex ? "bg-transparent" : "bg-neutral-900", true) + " font-aeonik text-neutral-50"}">${onIndex ? `<div class="${"absolute top-0 -z-10 h-[40vh] w-full bg-gradient-to-b from-neutral-800 to-neutral-900"}"></div>
		<div class="${"absolute -z-20 min-h-screen w-full bg-neutral-900 "}"></div>` : ``}

	
	${validate_component(Nav, "Nav").$$render($$result, { onIndex, returnUrl }, {}, {})}

	
	<main>${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
