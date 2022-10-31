import { c as create_ssr_component, b as add_attribute, v as validate_component, e as escape, f as createEventDispatcher, d as subscribe, i as is_promise, n as noop, h as each } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import { n as nav } from "../../../chunks/nav.js";
import { H as Heart } from "../../../chunks/Heart.js";
import { c as card, S as SearchForm } from "../../../chunks/SearchForm.js";
import { e as error } from "../../../chunks/index2.js";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const NoResults = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", classNames, 0)} viewBox="${"0 0 400.641 348.048"}"><g id="${"Group_34"}" data-name="${"Group 34"}" transform="${"translate(-880.084 -1413)"}"><path id="${"Path_1"}" data-name="${"Path 1"}" d="${"M469.05,275.94a56.007,56.007,0,0,1,49.422,28.453c15.625,27.121,6.844,60.93-19.344,76.09-26.184,15.133-59.859,5.9-75.438-21.2-15.625-27.121-6.777-60.93,19.406-76.09a53.71,53.71,0,0,1,25.953-7.254Zm-.586-23.426a76.411,76.411,0,0,0-37.109,10.3c-37.426,21.652-49.871,70.359-28.031,108.24,20.383,35.422,63.914,49.555,100.05,33.574l24.988,43.355a11.764,11.764,0,1,0,20.383-11.754l-25.5-44.3c27.477-24.309,34.8-65.957,15.613-99.3a79.814,79.814,0,0,0-70.387-40.121Z"}" transform="${"translate(730.407 1307.144)"}" fill-rule="${"evenodd"}"></path><path id="${"Path_2"}" data-name="${"Path 2"}" d="${"M198.06,105.86c-26.184,0-48.383,19.707-48.383,44.918v215.54c0,25.211,22.2,44.918,48.383,44.918H394.38c12.543,0,12.543-18.836,0-18.836l-196.32,0c-17.02,0-29.586-11.953-29.586-26.082V176.832h295.59v55.352c0,12.539,18.82,12.539,18.82,0l0-81.41c0-25.211-22.227-44.918-48.414-44.918Z"}" transform="${"translate(730.407 1307.144)"}" fill-rule="${"evenodd"}"></path><path id="${"Path_3"}" data-name="${"Path 3"}" d="${"M284.59,237.21a11.762,11.762,0,0,0-8.164,20.227l23.266,23.3-23.266,23.3a11.765,11.765,0,1,0,16.621,16.656l23.238-23.3,23.238,23.3a11.789,11.789,0,0,0,16.687-16.656l-23.27-23.3,23.27-23.3a11.782,11.782,0,1,0-16.7-16.625l-23.238,23.27-23.238-23.27a11.669,11.669,0,0,0-8.449-3.6Z"}" transform="${"translate(730.407 1307.144)"}"></path></g></svg>`;
});
const KerkimError = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  console.log(id);
  const returnHome = () => {
    goto(nav.index);
  };
  const contactSupport = () => {
    goto(nav.suport);
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.returnHome === void 0 && $$bindings.returnHome && returnHome !== void 0)
    $$bindings.returnHome(returnHome);
  if ($$props.contactSupport === void 0 && $$bindings.contactSupport && contactSupport !== void 0)
    $$bindings.contactSupport(contactSupport);
  return `<section class="${"mx-2 my-4 rounded-md bg-gradient-to-t from-neutral-800 to-transparent p-4 text-left"}">${validate_component(NoResults, "NoResults").$$render($$result, { classNames: "w-24 h-24 fill-white" }, {}, {})}
	<p class="${"mt-4 w-5/6 text-xl"}">Nuk u gjeten rezultate per
		${id === void 0 ? `kerkimin tuaj.` : `kerkimin
			<span class="${"font-medium underline underline-offset-1 "}">&quot;${escape(id)}&quot;.</span>`}</p>
	<div class="${"mt-4 text-sm opacity-80"}"><p>Provoni te kerkoni me terma me te pergjithshem.</p></div>
	<div class="${"mt-8 space-x-2 text-sm"}"><button class="${"buttonPrimary"}">Return Home</button>
		<button class="${"buttonSecondary"}">Kontaktoni Suportin</button></div></section>`;
});
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageNumber, itemsAmount, itemsPerPage } = $$props;
  const dispatch = createEventDispatcher();
  function updatePageNumber() {
    dispatch("updatePageNumber", { pageNumber });
  }
  if ($$props.pageNumber === void 0 && $$bindings.pageNumber && pageNumber !== void 0)
    $$bindings.pageNumber(pageNumber);
  if ($$props.itemsAmount === void 0 && $$bindings.itemsAmount && itemsAmount !== void 0)
    $$bindings.itemsAmount(itemsAmount);
  if ($$props.itemsPerPage === void 0 && $$bindings.itemsPerPage && itemsPerPage !== void 0)
    $$bindings.itemsPerPage(itemsPerPage);
  {
    updatePageNumber();
  }
  return `${itemsAmount > 0 ? `
	<section class="${"mt-6 "}"><div class="${"flex w-full items-center justify-between rounded-md bg-indigo-400 bg-opacity-20"}"><div class="${"flex w-full items-center justify-around px-2"}">
				<button class="${""}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"h-5 w-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"}"></path></svg></button>
				
				<button class="${""}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"h-5 w-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15.75 19.5L8.25 12l7.5-7.5"}"></path></svg></button>
				<div class="${"flex items-center"}"><p class="${"text-xs uppercase opacity-70"}">Faqja</p>
					<p class="${"mx-2 font-medium"}">${escape(pageNumber)}</p></div>
				
				<button class="${""}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"h-5 w-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M8.25 4.5l7.5 7.5-7.5 7.5"}"></path></svg></button></div>

			
			<div class="${"border-l border-white border-opacity-20 py-3 px-3"}"><p class="${"whitespace-nowrap text-xs font-medium uppercase"}">Ruani Kerkimin</p></div></div></section>
	<section class="${"mt-4 text-xs uppercase"}"><p class="${"text-sm "}"><span class="${"text-xs opacity-80"}">Showing</span>
			${escape(`${pageNumber * itemsPerPage - itemsPerPage + 1} - ${pageNumber * itemsPerPage < itemsAmount ? pageNumber * itemsPerPage : itemsAmount}`)} <span class="${"text-xs opacity-80"}">of</span>
			${escape(itemsAmount)}</p></section>` : ``}`;
});
const Euro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", classNames, 0)} viewBox="${"0 0 6.583 9.216"}"><path id="${"Path_28"}" data-name="${"Path 28"}" d="${"M.989,36.279c0,.056,0,.109,0,.165v.329c0,.056,0,.109,0,.165H.658a.658.658,0,0,0,0,1.317H1.24a4.445,4.445,0,0,0,4.19,2.962h.494a.658.658,0,0,0,0-1.317H5.431a3.128,3.128,0,0,1-2.754-1.646h2.59a.658.658,0,0,0,0-1.317H2.308c0-.053,0-.109,0-.165v-.329c0-.056,0-.111,0-.165H5.266a.658.658,0,1,0,0-1.317H2.676a3.128,3.128,0,0,1,2.754-1.646h.494a.658.658,0,1,0,0-1.317H5.431a4.445,4.445,0,0,0-4.19,2.962H.658a.658.658,0,1,0,0,1.317Z"}" transform="${"translate(0 -32)"}"></path></svg>`;
});
const Lek = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", classNames, 0)} viewBox="${"0 0 756.283 438.246"}"><g id="${"Group_98"}" data-name="${"Group 98"}" transform="${"translate(-592.129 -321.81)"}"><path id="${"Path_41"}" data-name="${"Path 41"}" d="${"M1091.42,539.47c-32.85-70.97-108.85-106.22-184.57-85.8-93.86,25.32-141.6,134.2-96.86,220.9,36.51,70.76,118.05,102.9,193,75.95a141.013,141.013,0,0,0,40.51-22.34c9.97-7.96,13.36-18.76,10.4-30.87-2.87-11.76-10.8-19.21-22.82-21.99-9.27-2.15-17.47.26-24.95,5.72-15.34,11.18-32.5,17.78-51.42,18.5-33.77,1.29-61.32-11.56-82.12-38.32a81.691,81.691,0,0,1-14.05-27.26h7.52q103.98,0,207.95-.02c18.56-.01,31.35-13,31.27-31.54A149.91,149.91,0,0,0,1091.42,539.47ZM859.39,573.46c6.15-27.95,40.06-65.29,89.57-65.43,50.01-.15,83.86,37.47,90.11,65.43Z"}"></path><path id="${"Path_42"}" data-name="${"Path 42"}" d="${"M1347.56,736.32c-2.71,12.1-10.53,19.88-22.61,22.84-10.31,2.53-19.42-.43-27.37-7.25q-44.94-38.565-89.88-77.14c-1.73-1.48-3.52-2.89-6.09-5.01-.14,2.77-.29,4.5-.29,6.23-.02,17.83.05,35.66-.03,53.49-.08,15.72-11.41,28.66-26.38,30.33-15.72,1.76-29.69-8.29-33.21-23.97a26.9,26.9,0,0,1-.53-5.95q-.045-183.72.01-367.44a30,30,0,0,1,59.18-7.18,41.4,41.4,0,0,1,.91,9.9q.075,82.98.03,165.97v7.11c2.79-2.29,4.56-3.68,6.27-5.15q44.955-38.55,89.91-77.1c16.69-14.25,39.86-9.35,48.38,10.05,5.23,11.9,2.35,25.47-7.95,34.55-14.37,12.67-29.03,25-43.58,37.47q-36.615,31.38-73.26,62.75a42.629,42.629,0,0,1-4.03,2.61c12.43,10.66,23.54,20.2,34.66,29.73q42.5,36.42,85.01,72.84C1346.09,714.04,1350.27,724.16,1347.56,736.32Z"}"></path><path id="${"Path_43"}" data-name="${"Path 43"}" d="${"M777.42,757.68a33.163,33.163,0,0,1-11.66,2.18q-71.5.21-143,.07c-17.64-.03-30.58-13.01-30.59-30.7q-.075-188.25-.02-376.49c.01-17.76,13.17-31.03,30.39-30.93,16.86.09,29.75,13.45,29.75,31.08q.045,169.485.01,338.98v7.93h6.99c35.66,0,71.33-.06,106.99.04a29.97,29.97,0,0,1,11.14,57.84Z"}"></path></g></svg>`;
});
const ProductItem_svelte_svelte_type_style_lang = "";
const css = {
  code: ".transition-scale.svelte-1bst17d{transition:all 2s;transition-timing-function:cubic-bezier(0.17, 0.67, 0.83, 0.67)}",
  map: null
};
const ProductItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { card: card2 } = $$props;
  let { product } = $$props;
  let { skeleton = false } = $$props;
  if ($$props.card === void 0 && $$bindings.card && card2 !== void 0)
    $$bindings.card(card2);
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  $$result.css.add(css);
  return `${card2 ? `<section class="${"group relative mx-2 my-4 mb-12 min-h-[30vh] rounded-md"}"><div class="${"absolute top-0 left-0 z-10 h-full w-full cursor-pointer overflow-hidden rounded-md"}"><img src="${"https://imageio.forbes.com/specials-images/imageserve/629a9b78906d4154a84fcbbd/2022-Land-Rover-Range-Rover-7/960x0.jpg?format=jpg&width=960"}"${add_attribute("alt", product.title, 0)} class="${"transition-scale h-full w-full object-cover group-active:scale-110 lg:group-hover:scale-110 lg:group-active:scale-100 svelte-1bst17d"}">
			<div class="${"absolute bottom-0 z-20 h-2/3 w-full rounded-md bg-gradient-to-t from-black to-transparent "}"></div></div>

		
		<div class="${"absolute bottom-8 z-30 cursor-pointer px-4"}"><h3 class="${"text-xl"}">${escape(product.title)}</h3>
			<p class="${"opacity-70"}">${escape(product.description)}</p></div>

		<div class="${"absolute bottom-0 left-2.5 z-30 translate-y-1/2 rounded-sm bg-neutral-900 p-1.5 font-medium"}"><section class="${"flex items-center rounded-sm bg-indigo-600 py-0.5 px-2"}"><div aria-label="${"Currency Used"}" class="${"mr-2 opacity-80"}">${product.eur ? `${validate_component(Euro, "Euro").$$render($$result, { classNames: "fill-white h-2.5" }, {}, {})}` : `${validate_component(Lek, "Lek").$$render($$result, { classNames: "fill-white h-2.5" }, {}, {})}`}</div>
				<p>${escape(product.price.toLocaleString())}</p></section></div>

		
		<div class="${"absolute bottom-0 z-30 flex w-full cursor-pointer items-center justify-end p-4"}">${validate_component(Heart, "Heart").$$render(
    $$result,
    {
      classNames: "h-5 fill-white w-5 opacity-80 "
    },
    {},
    {}
  )}</div></section>` : `<section class="${"relative my-4 mx-4 mb-6 flex h-auto items-center "}"><div class="${"absolute left-0 h-full w-1/3 cursor-pointer "}"><img src="${"https://imageio.forbes.com/specials-images/imageserve/629a9b78906d4154a84fcbbd/2022-Land-Rover-Range-Rover-7/960x0.jpg?format=jpg&width=960"}"${add_attribute("alt", product.title, 0)} class="${"h-full w-full rounded-md object-cover"}"></div>
		<div class="${"invisible w-1/3"}"></div>
		<div class="${"w-2/3 cursor-pointer py-4 pl-4"}"><h3 class="${""}">${escape(product.title)}</h3>
			<p class="${"text-sm opacity-70"}">${escape(product.description)}</p>

			<section aria-label="${"Pricing and User Actions"}" class="${"mt-3 flex w-full items-center justify-between"}"><section class="${"flex items-center rounded-sm bg-indigo-600 py-0.5 px-2"}"><div aria-label="${"Currency Used"}" class="${"mr-2 opacity-80"}">${product.eur ? `${validate_component(Euro, "Euro").$$render($$result, { classNames: "fill-white h-2.5" }, {}, {})}` : `${validate_component(Lek, "Lek").$$render($$result, { classNames: "fill-white h-2.5" }, {}, {})}`}</div>
					<p class="${"text-sm"}">${escape(product.price.toLocaleString())}</p></section>
				${validate_component(Heart, "Heart").$$render(
    $$result,
    {
      classNames: "h-5 fill-white w-5 opacity-80 "
    },
    {},
    {}
  )}</section></div></section>`}`;
});
const ProductItemSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { card: card2 } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.card === void 0 && $$bindings.card && card2 !== void 0)
    $$bindings.card(card2);
  return `${card2 ? `<section class="${"group relative mx-2 my-4 mb-12 min-h-[30vh] animate-pulse rounded-md"}"><div class="${"absolute top-0 left-0 z-10 h-full w-full overflow-hidden rounded-md"}"><div class="${"h-full w-full bg-neutral-800"}"></div>
			<div class="${"absolute bottom-0 z-20 h-full w-full rounded-md bg-gradient-to-t from-transparent to-neutral-700 "}"></div></div>

		
		<div class="${"absolute bottom-8 z-30 w-full px-4"}"><div class="${"mb-2 h-5 " + escape(
    index % 3 ? "w-2/3" : index % 5 ? "w-3/4" : index % 2 ? "w-1/2" : " w-1/3",
    true
  ) + " rounded-md bg-neutral-700"}"></div>
			<div class="${"" + escape(
    index % 3 ? "w-1/3" : index % 5 ? "w-1/2" : index % 2 ? "w-3/4" : "w-2/3",
    true
  ) + " h-3 rounded-md bg-neutral-700"}"></div></div>

		<div class="${"absolute bottom-0 left-2.5 z-30 translate-y-1/2 rounded-md bg-neutral-900 p-1.5 font-medium"}"><section class="${"flex h-6 w-16 items-center rounded-sm bg-indigo-700 py-0.5 px-2"}"><div aria-label="${"Currency Used"}" class="${"mr-2 opacity-80"}"></div></section></div>
		<div class="${"absolute bottom-0 z-30 flex w-full items-center justify-end p-4"}">${validate_component(Heart, "Heart").$$render($$result, { classNames: "h-5 fill-neutral-700 w-5" }, {}, {})}</div></section>` : `<section class="${"relative my-4 mb-6 flex h-[12vh] animate-pulse items-center px-4"}"><div class="${"h-full w-1/3 rounded-md bg-neutral-700"}"></div>
		<div class="${"w-2/3 pl-4"}"><div class="${"mb-2 h-5 " + escape(
    index % 3 ? "w-2/3" : index % 5 ? "w-3/4" : index % 2 ? "w-1/2" : " w-1/3",
    true
  ) + " rounded-md bg-neutral-700"}"></div>
			<div class="${"" + escape(
    index % 3 ? "w-1/3" : index % 5 ? "w-1/2" : index % 2 ? "w-3/4" : "w-2/3",
    true
  ) + " h-4 rounded-md bg-neutral-700"}"></div>

			<section aria-label="${"Pricing and User Actions"}" class="${"mt-3 flex w-full items-center justify-between"}"><section class="${"flex h-5 w-16 items-center rounded-md bg-indigo-600 py-0.5 px-2 "}"></section>
				${validate_component(Heart, "Heart").$$render($$result, { classNames: "h-5 fill-neutral-700 w-5" }, {}, {})}</section></div></section>`}`;
});
const getLatestPosts = async (params) => {
  let url = nav.api.getLatestPosts;
  console.log("params getLatest", JSON.stringify(params));
  const response = await fetch(url, {
    method: "POST",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Basic " + Credential
    }),
    cache: "no-cache",
    body: JSON.stringify(params)
  });
  if (!response.ok) {
    throw error(404, "Posts not found");
  }
  const data = await response.json();
  return await data;
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $card, $$unsubscribe_card;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_card = subscribe(card, (value) => $card = value);
  let params = {};
  let itemsAmount = 0;
  let paginate;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"relative"}"><div class="${"fixed top-0 -z-50 h-full min-h-screen w-full bg-neutral-900"}"></div>

	<div class="${"absolute top-0 z-0 h-[40vh] w-full rounded-xl bg-gradient-to-b from-indigo-700 to-neutral-900"}"></div>

	<div class="${"absolute top-0 w-full"}"><div class="${"p-4"}">${validate_component(SearchForm, "SearchForm").$$render(
      $$result,
      {
        onIndex: false,
        searchInput: params.id !== void 0 ? params.id : "",
        params,
        paginate
      },
      {
        paginate: ($$value) => {
          paginate = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			${validate_component(Pagination, "Pagination").$$render(
      $$result,
      {
        pageNumber: params.faqja !== void 0 ? params.faqja : 1,
        itemsAmount,
        itemsPerPage: 15
      },
      {},
      {}
    )}</div>
		${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
			${each(Array(5), (_, i) => {
          return `${validate_component(ProductItemSkeleton, "ProductItemSkeleton").$$render($$result, { index: i, card: $card }, {}, {})}`;
        })}
		`;
      }
      return function(data) {
        return `
			${data.length ? each(data, (postim, i) => {
          return `${validate_component(ProductItem, "ProductItem").$$render($$result, { card: $card, product: postim }, {}, {})}`;
        }) : `${validate_component(KerkimError, "KerkimError").$$render($$result, { id: params.id }, {}, {})}
				`}
		`;
      }(__value);
    }(getLatestPosts(params))}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_card();
  return $$rendered;
});
export {
  Page as default
};
