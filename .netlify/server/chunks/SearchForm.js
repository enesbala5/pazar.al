import { c as create_ssr_component, b as add_attribute, e as escape, f as subscribe, v as validate_component } from "./index.js";
import { w as writable } from "./index3.js";
import { p as page } from "./stores.js";
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", classNames, 0)} viewBox="${"0 0 20.326 20.326"}"><path id="${"XMLID_223_"}" d="${"M23.83,21.435l-4.3-4.3a8.485,8.485,0,1,0-2.4,2.4l4.3,4.3a1.694,1.694,0,0,0,2.4-2.4ZM6.541,12.469A5.929,5.929,0,1,1,12.469,18.4,5.935,5.935,0,0,1,6.541,12.469Z"}" transform="${"translate(-4 -4)"}"></path></svg>`;
});
const Arrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", classNames, 0)} viewBox="${"0 0 8.177 5.841"}"><path id="${"Path_20"}" data-name="${"Path 20"}" d="${"M2.584,8.336H8.191L6.842,6.987a.554.554,0,0,1-.169-.4A.591.591,0,0,1,7.257,6a.551.551,0,0,1,.4.169L9.984,8.493a.56.56,0,0,1,.193.427.53.53,0,0,1-.189.423L7.66,11.671a.551.551,0,0,1-.4.169.591.591,0,0,1-.584-.584.554.554,0,0,1,.169-.4L8.191,9.5H2.584a.584.584,0,1,1,0-1.168Z"}" transform="${"translate(-2 -6)"}"></path></svg>`;
});
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", classNames, 0)} viewBox="${"0 0 14 14"}"><g id="${"Group_69"}" data-name="${"Group 69"}" transform="${"translate(-38.472 -271.472)"}"><g id="${"Rectangle_46"}" data-name="${"Rectangle 46"}" transform="${"translate(38.472 271.472)"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"1.5"}"><rect width="${"6"}" height="${"6"}" stroke="${"none"}"></rect><rect x="${"0.75"}" y="${"0.75"}" width="${"4.5"}" height="${"4.5"}" fill="${"none"}"></rect></g><g id="${"Rectangle_47"}" data-name="${"Rectangle 47"}" transform="${"translate(46.472 271.472)"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"1.5"}"><rect width="${"6"}" height="${"6"}" stroke="${"none"}"></rect><rect x="${"0.75"}" y="${"0.75"}" width="${"4.5"}" height="${"4.5"}" fill="${"none"}"></rect></g><g id="${"Rectangle_48"}" data-name="${"Rectangle 48"}" transform="${"translate(46.472 279.472)"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"1.5"}"><rect width="${"6"}" height="${"6"}" stroke="${"none"}"></rect><rect x="${"0.75"}" y="${"0.75"}" width="${"4.5"}" height="${"4.5"}" fill="${"none"}"></rect></g><g id="${"Rectangle_49"}" data-name="${"Rectangle 49"}" transform="${"translate(38.472 279.472)"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"1.5"}"><rect width="${"6"}" height="${"6"}" stroke="${"none"}"></rect><rect x="${"0.75"}" y="${"0.75"}" width="${"4.5"}" height="${"4.5"}" fill="${"none"}"></rect></g></g></svg>`;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", classNames, 0)} viewBox="${"0 0 16.64 13"}"><path id="${"Path_16"}" data-name="${"Path 16"}" d="${"M25.72,39.58H35.6a1.04,1.04,0,1,0,0-2.08H25.72a1.04,1.04,0,1,0,0,2.08ZM22.08,37.5H21.04a1.04,1.04,0,1,0,0,2.08h1.04a1.04,1.04,0,0,0,0-2.08Zm3.64,7.28H35.6a1.04,1.04,0,0,0,0-2.08H25.72a1.04,1.04,0,1,0,0,2.08ZM22.08,42.7H21.04a1.04,1.04,0,1,0,0,2.08h1.04a1.04,1.04,0,0,0,0-2.08ZM35.6,48.42H25.72a1.04,1.04,0,0,0,0,2.08H35.6a1.04,1.04,0,0,0,0-2.08Zm-13.52,0H21.04a1.04,1.04,0,0,0,0,2.08h1.04a1.04,1.04,0,0,0,0-2.08Z"}" transform="${"translate(-20 -37.5)"}"></path></svg>`;
});
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", classNames, 0)} viewBox="${"0 0 15.166 14.218"}"><path id="${"Path_22"}" data-name="${"Path 22"}" d="${"M0,27.848A.947.947,0,0,1,.948,26.9h1.62a2.369,2.369,0,0,1,4.342,0h7.307a.948.948,0,1,1,0,1.9H6.91a2.369,2.369,0,0,1-4.342,0H.948A.947.947,0,0,1,0,27.848Zm5.687,0a.948.948,0,1,0-.948.948A.947.947,0,0,0,5.687,27.848Zm5.687-4.739a.948.948,0,1,0-.948.948A.947.947,0,0,0,11.374,23.109Zm-.948-2.37A2.365,2.365,0,0,1,12.6,22.161h1.62a.948.948,0,1,1,0,1.9H12.6a2.369,2.369,0,0,1-4.342,0H.948a.948.948,0,1,1,0-1.9H8.255A2.365,2.365,0,0,1,10.426,20.739ZM5.687,17.422a.948.948,0,1,0,.948.948A.947.947,0,0,0,5.687,17.422Zm2.171,0h6.359a.948.948,0,0,1,0,1.9H7.858a2.369,2.369,0,0,1-4.342,0H.948a.948.948,0,0,1,0-1.9H3.516a2.369,2.369,0,0,1,4.342,0Z"}" transform="${"translate(0 -16)"}"></path></svg>`;
});
const Dollar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${escape(classNames, true) + " -mx-0.5"}" viewBox="${"0 0 7.872 14"}"><path id="${"Path_21"}" data-name="${"Path 21"}" d="${"M19.84,0a.874.874,0,0,1,.875.875v.976c.044.005.085.011.129.019.29.044,1.151.183,1.507.273a.876.876,0,0,1-.429,1.7c-.254-.066-1.028-.191-1.337-.238a4.378,4.378,0,0,0-2.146.134c-.5.191-.708.462-.763.766a.91.91,0,0,0,.036.563.953.953,0,0,0,.353.366,7.437,7.437,0,0,0,2,.73l.077.022a8.592,8.592,0,0,1,2.434.938,2.512,2.512,0,0,1,1.143,2.7,2.8,2.8,0,0,1-1.794,2.1,4.568,4.568,0,0,1-1.214.3v.9a.875.875,0,1,1-1.75,0v-.954c-.011,0-.025,0-.036-.005h-.005a11.554,11.554,0,0,1-2.5-.719.874.874,0,0,1,.711-1.6,10.009,10.009,0,0,0,2.056.591,4.084,4.084,0,0,0,2.078-.145A1.055,1.055,0,0,0,22,9.5a.91.91,0,0,0-.036-.563.953.953,0,0,0-.353-.366,7.437,7.437,0,0,0-2-.73l-.077-.022a8.592,8.592,0,0,1-2.434-.938A2.669,2.669,0,0,1,16.124,5.8a2.658,2.658,0,0,1-.172-1.616A2.784,2.784,0,0,1,17.817,2.1a4.83,4.83,0,0,1,1.148-.273V.875A.874.874,0,0,1,19.84,0Z"}" transform="${"translate(-15.9)"}"></path></svg>`;
});
const card = writable(true);
const Clear = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}"${add_attribute("class", classNames, 0)}><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg>`;
});
const SearchForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $card, $$unsubscribe_card;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_card = subscribe(card, (value) => $card = value);
  let { onIndex = true } = $$props;
  let { params = {} } = $$props;
  let { searchInput = "" } = $$props;
  const updateParamsField = (resetPage = true) => {
    if (searchInput !== "") {
      params.id = searchInput;
    }
    if (resetPage) {
      params.faqja = 1;
    }
  };
  const searchProduct = (resetPage = true) => {
    if (searchInput !== params.id) {
      updateParamsField(resetPage);
    }
  };
  const paginate = () => {
    searchProduct(false);
  };
  let searchBar;
  let searchBarFocused = false;
  if ($$props.onIndex === void 0 && $$bindings.onIndex && onIndex !== void 0)
    $$bindings.onIndex(onIndex);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  if ($$props.searchInput === void 0 && $$bindings.searchInput && searchInput !== void 0)
    $$bindings.searchInput(searchInput);
  if ($$props.paginate === void 0 && $$bindings.paginate && paginate !== void 0)
    $$bindings.paginate(paginate);
  $$unsubscribe_page();
  $$unsubscribe_card();
  return `<form class="${""}"><section class="${"relative"}"><input type="${"text"}" class="${"" + escape(onIndex ? "bg-neutral-800" : "bg-indigo-600", true) + " w-full rounded-md border-0 px-5 py-3.5 outline-none focus:ring-0"}"${add_attribute("this", searchBar, 0)}${add_attribute("value", searchInput, 0)}>
		
		${searchInput !== "" && !searchBarFocused && $page.url.pathname != "/" ? `<button class="${"" + escape(onIndex ? "bg-indigo-700" : "", true) + " absolute right-2 top-1/2 flex aspect-square h-9 -translate-y-1/2 items-center justify-center rounded-md p-1"}">${validate_component(Clear, "Clear").$$render($$result, { classNames: "fill-white w-5/6 h-5/6" }, {}, {})}</button>` : `<button class="${"" + escape(onIndex ? "bg-indigo-700" : "", true) + " absolute right-2 top-1/2 z-50 flex aspect-square h-9 -translate-y-1/2 items-center justify-center rounded-md p-1"}">${validate_component(Search, "Search").$$render($$result, { classNames: "fill-white w-2/3 h-2/3" }, {}, {})}</button>`}</section>

	${!onIndex ? `
		<section class="${"mt-3 flex space-x-3"}"><div class="${"flex w-full overflow-hidden rounded-md bg-indigo-400 bg-opacity-20"}"><button class="${"" + escape($card ? "bg-neutral-50" : "bg-transparent", true) + " flex h-full w-1/2 grow items-center justify-center p-1.5"}"><div class="${"mx-2"}">${validate_component(Grid, "Grid").$$render(
    $$result,
    {
      classNames: "\r\n							" + ($card ? "stroke-indigo-700" : "stroke-white") + "\r\n							fill-transparent w-4 h-4 bg-transparent"
    },
    {},
    {}
  )}</div></button>
				<button class="${"" + escape(!$card ? "bg-neutral-50" : "bg-transparent", true) + " flex h-full w-1/2 grow items-center justify-center p-1.5"}"><div class="${"mx-2"}">${validate_component(List, "List").$$render(
    $$result,
    {
      classNames: (!$card ? "fill-indigo-700" : "fill-white") + " w-4 h-4"
    },
    {},
    {}
  )}</div></button></div>

			<div class="${"flex w-full items-center justify-center overflow-hidden rounded-md bg-indigo-400 bg-opacity-20 px-2"}"><div class="${"mx-auto flex items-center"}"><div id="${"Expensive"}" class="${"flex items-center"}">${validate_component(Dollar, "Dollar").$$render($$result, { classNames: "fill-white  w-3.5 h-3.5" }, {}, {})}
						${validate_component(Dollar, "Dollar").$$render($$result, { classNames: "fill-white  w-3.5 h-3.5" }, {}, {})}
						${validate_component(Dollar, "Dollar").$$render($$result, { classNames: "fill-white  w-3.5 h-3.5" }, {}, {})}</div>
					${validate_component(Arrow, "Arrow").$$render(
    $$result,
    {
      classNames: "fill-white min-w-[0.75rem] w-3 mx-1.5"
    },
    {},
    {}
  )}
					<div id="${"Cheap"}">${validate_component(Dollar, "Dollar").$$render($$result, { classNames: "fill-white w-3.5 h-3.5" }, {}, {})}</div></div></div>

			<div class="${"flex w-full items-center justify-center overflow-hidden rounded-md bg-indigo-400 bg-opacity-20 px-2"}"><div class="${"flex items-center"}">${validate_component(Settings, "Settings").$$render(
    $$result,
    {
      classNames: "w-3.5 h-3.5 fill-white min-w-[0.875rem]"
    },
    {},
    {}
  )}
					<p class="${"ml-2 text-sm font-medium uppercase"}">Opsione</p></div></div></section>` : ``}</form>`;
});
export {
  SearchForm as S,
  card as c
};
