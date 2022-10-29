import { c as create_ssr_component, b as add_attribute } from "./index.js";
const Heart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", classNames, 0)} viewBox="${"0 0 23.387 20"}"><path id="${"Path_34"}" data-name="${"Path 34"}" d="${"M11.145,44.064l.507.548.548-.547a6.645,6.645,0,0,1,5.732-1.823,6.528,6.528,0,0,1,5.454,6.44v.265a6.833,6.833,0,0,1-2.174,5l-8.254,7.706a1.857,1.857,0,0,1-2.531,0L2.174,53.948a6.84,6.84,0,0,1-2.174-5v-.265a6.529,6.529,0,0,1,11.145-4.618c-.041,0,0,0,0,0Zm.507,3.65L9.6,45.576A4.432,4.432,0,0,0,5.815,44.4a4.337,4.337,0,0,0-3.622,4.278v.265a4.645,4.645,0,0,0,1.477,3.4l8.024,7.491,8.025-7.491a4.648,4.648,0,0,0,1.475-3.4v-.265A4.34,4.34,0,0,0,17.572,44.4a4.432,4.432,0,0,0-3.782,1.172Z"}" transform="${"translate(0 -42.152)"}"></path></svg>`;
});
export {
  Heart as H
};
