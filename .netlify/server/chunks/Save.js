import { c as create_ssr_component, b as add_attribute } from "./index.js";
const Save = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", classNames, 0)} viewBox="${"0 0 16 19.999"}"><g id="${"g1445"}" transform="${"translate(-4 -292.65)"}"><path id="${"rect1441"}" d="${"M6.807,292.65A2.822,2.822,0,0,0,4,295.455v16.2a1,1,0,0,0,1.5.867L12,308.8l6.5,3.717a1,1,0,0,0,1.5-.868v-16.2a2.822,2.822,0,0,0-2.807-2.8Zm0,2H17.193a.783.783,0,0,1,.807.8v14.471l-5.5-3.145a1,1,0,0,0-.992,0L6,309.926V295.455a.783.783,0,0,1,.807-.8Z"}"></path></g></svg>`;
});
export {
  Save as S
};
