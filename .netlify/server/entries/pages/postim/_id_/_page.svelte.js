import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../../../chunks/index.js";
import { H as Heart } from "../../../../chunks/Heart.js";
const Save = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", classNames, 0)} viewBox="${"0 0 16 19.999"}"><g id="${"g1445"}" transform="${"translate(-4 -292.65)"}"><path id="${"rect1441"}" d="${"M6.807,292.65A2.822,2.822,0,0,0,4,295.455v16.2a1,1,0,0,0,1.5.867L12,308.8l6.5,3.717a1,1,0,0,0,1.5-.868v-16.2a2.822,2.822,0,0,0-2.807-2.8Zm0,2H17.193a.783.783,0,0,1,.807.8v14.471l-5.5-3.145a1,1,0,0,0-.992,0L6,309.926V295.455a.783.783,0,0,1,.807-.8Z"}"></path></g></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<article class="${"p-2"}"><section class="${"aspect-[4/3] overflow-hidden rounded-md"}"><img src="${"https://imageio.forbes.com/specials-images/imageserve/629a9b78906d4154a84fcbbd/2022-Land-Rover-Range-Rover-7/960x0.jpg?format=jpg&width=960"}" alt="${""}" class="${"h-full object-cover "}"></section>
	<section class="${"mt-4 px-2"}"><section class="${"mt-2 flex items-center justify-between"}"><div class="${"w-fit rounded-md bg-indigo-700 py-0.5 px-2 text-sm"}"><p>${escape(`${data == null ? void 0 : data.city}, ${data == null ? void 0 : data.country}`)}</p></div>

			<div class="${"flex items-center space-x-2"}"><div class="${"flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700 p-2"}">${validate_component(Heart, "Heart").$$render($$result, { classNames: "w-full h-full fill-white " }, {}, {})}</div>
				<div class="${"flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700 p-2"}">${validate_component(Save, "Save").$$render($$result, { classNames: "w-full h-full fill-white " }, {}, {})}</div></div></section>
		<section class="${"mt-4"}"><h1 class="${"text-2xl font-medium"}">${escape(data == null ? void 0 : data.title)}</h1>

			<div class="${"mt-8"}"><h2 class="${"text-lg font-medium"}">Description</h2>
				<p class="${"mt-2"}">${escape(data == null ? void 0 : data.description)}</p></div></section></section></article>`;
});
export {
  Page as default
};
