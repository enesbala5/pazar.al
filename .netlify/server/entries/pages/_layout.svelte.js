import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, d as each, f as subscribe } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { H as Heart } from "../../chunks/Heart.js";
import { n as nav } from "../../chunks/nav.js";
import g from "@sveltekit-i18n/base";
import C from "@sveltekit-i18n/parser-default";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", classNames, 0)} viewBox="${"0 0 39.799 28.131"}"><g id="${"Group_87"}" data-name="${"Group 87"}" transform="${"translate(-1549.32 -1255.179)"}"><path id="${"Path_39"}" data-name="${"Path 39"}" d="${"M1584.45,1255.18h-6.133a5.848,5.848,0,0,0-3.871,1.491l-5.676,5.67-5.21,5.116-4.933,4.933c-.465.466-.522.486-1.436.486h-3.016a5.01,5.01,0,0,0-4.855,5.039,5.227,5.227,0,0,0,5.124,5.235h5.372a6.034,6.034,0,0,0,4.073-1.678l15.73-15.681a1.313,1.313,0,0,1,1.1-.392h3.884c1.87,0,4.516-2.118,4.516-5.173A5.108,5.108,0,0,0,1584.45,1255.18Zm-.278,7.572h-3.317a3.3,3.3,0,0,0-2.836,1.005l-15.85,15.85a3.305,3.305,0,0,1-2.5.9h-5.227a2.587,2.587,0,0,1-2.526-2.628,2.245,2.245,0,0,1,2.3-2.328h3.586a3.015,3.015,0,0,0,2.328-.895l16.117-16.117a2.961,2.961,0,0,1,2.445-.745h5.518a2.55,2.55,0,0,1,2.246,2.4A2.487,2.487,0,0,1,1584.172,1262.752Z"}" transform="${"translate(0 0)"}"></path><path id="${"path4011"}" d="${"M1846.776,1490.791h-5.509a1.167,1.167,0,0,0,0,2.334h2.824l-5.37,5.37a1.209,1.209,0,1,0,1.758,1.648l5.29-5.3v2.795a1.175,1.175,0,0,0,2.35,0v-5.474A1.289,1.289,0,0,0,1846.776,1490.791Z"}" transform="${"translate(-266.506 -217.277)"}"></path><path id="${"path4011-2"}" data-name="${"path4011"}" d="${"M1647.13,1264.976h5.509a1.167,1.167,0,0,0,0-2.334h-2.824l5.37-5.37a1.209,1.209,0,1,0-1.758-1.649l-5.29,5.305v-2.8a1.175,1.175,0,0,0-2.349,0v5.475A1.289,1.289,0,0,0,1647.13,1264.976Z"}" transform="${"translate(-88.96 0)"}"></path></g></svg>`;
});
const toggleBoolean = (object) => {
  return !object;
};
const Popover_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-3lxhqn{position:absolute;top:calc(var(--popover-top) + 10px);left:var(--popover-left)}",
  map: null
};
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bgColor = "bg-neutral-900" } = $$props;
  let { visible = false } = $$props;
  let { element } = $$props;
  let { position } = $$props;
  let { direction = "ltr" } = $$props;
  let { anchor = "left" } = $$props;
  let bottom;
  let left;
  let right;
  let popoverSize;
  const initPosition = () => {
    ({ bottom, left, right } = (element == null ? void 0 : element.getBoundingClientRect()) ?? { bottom: 0, left: 0, right: 0 });
  };
  const toggleVisible = () => visible = toggleBoolean(visible);
  const notVisible = () => visible = visible = false;
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.anchor === void 0 && $$bindings.anchor && anchor !== void 0)
    $$bindings.anchor(anchor);
  if ($$props.toggleVisible === void 0 && $$bindings.toggleVisible && toggleVisible !== void 0)
    $$bindings.toggleVisible(toggleVisible);
  if ($$props.notVisible === void 0 && $$bindings.notVisible && notVisible !== void 0)
    $$bindings.notVisible(notVisible);
  $$result.css.add(css);
  {
    initPosition();
  }
  return `

${visible ? `<section role="${"dialog"}" aria-labelledby="${"Title"}" aria-describedby="${"Description"}" aria-orientation="${"vertical"}" class="${"" + escape(
    anchor === "right" ? "origin-top-right" : "origin-top-left",
    true
  ) + " wrapper z-50 rounded-md " + escape(bgColor, true) + " p-4 svelte-3lxhqn"}" style="${"--popover-top: " + escape(`${bottom}px`, true) + "; --popover-left: " + escape(`${anchor === "right" ? right - popoverSize : left}px`, true)}"><div class="${"" + escape(direction === "rtl" ? "items-end" : "items-start", true) + " flex flex-col space-y-2"}">${slots.default ? slots.default({}) : ``}</div></section>
	<div class="${"fixed top-0 left-0 z-40 h-screen w-screen bg-black opacity-0"}"></div>` : ``}`;
});
var n = Object.defineProperty, M = Object.defineProperties;
var u = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var i = (r, o, e) => o in r ? n(r, o, { enumerable: true, configurable: true, writable: true, value: e }) : r[o] = e, p = (r, o) => {
  for (var e in o || (o = {}))
    f.call(o, e) && i(r, e, o[e]);
  if (s)
    for (var e of s(o))
      P.call(o, e) && i(r, e, o[e]);
  return r;
}, d = (r, o) => M(r, u(o));
var l = (r, o) => {
  var e = {};
  for (var a in r)
    f.call(r, a) && o.indexOf(a) < 0 && (e[a] = r[a]);
  if (r != null && s)
    for (var a of s(r))
      o.indexOf(a) < 0 && P.call(r, a) && (e[a] = r[a]);
  return e;
};
var m = (e) => {
  var a = e, { parserOptions: r = {} } = a, o = l(a, ["parserOptions"]);
  return d(p({}, o), { parser: C(r) });
}, t$1 = class extends g {
  constructor(e) {
    super(e && m(e));
    this.loadConfig = (e2) => super.configLoader(m(e2));
  }
}, v = t$1;
const en = "English";
const sq = "Albanian";
const lang = {
  en,
  sq
};
const config = {
  fallbackLocale: "sq",
  translations: {
    en: { lang },
    sq: { lang }
  },
  loaders: [
    {
      locale: "en",
      key: "register",
      routes: [nav.register],
      loader: async () => (await import("../../chunks/register.js")).default
    },
    {
      locale: "sq",
      key: "register",
      routes: [nav.register],
      loader: async () => (await import("../../chunks/register2.js")).default
    },
    {
      locale: "en",
      key: "login",
      routes: [nav.login],
      loader: async () => (await import("../../chunks/login.js")).default
    },
    {
      locale: "sq",
      key: "login",
      routes: [nav.login],
      loader: async () => (await import("../../chunks/login2.js")).default
    },
    {
      locale: "en",
      key: "generic",
      routes: [nav.register, nav.login],
      loader: async () => (await import("../../chunks/generic.js")).default
    },
    {
      locale: "sq",
      key: "generic",
      routes: [nav.register, nav.login],
      loader: async () => (await import("../../chunks/generic2.js")).default
    }
  ]
};
const { t, loading, locales, locale, loadTranslations, setLocale } = new v(config);
loading.subscribe(($loading) => $loading && console.log("Loading translations..."));
const Albania = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg id="${"Albania"}" xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", classNames, 0)} viewBox="${"0 0 64 42"}"><path id="${"Rounded_Rectangle_7_copy"}" d="${"M5.8,0H58.1A5.807,5.807,0,0,1,64,5.7V36.3A5.72,5.72,0,0,1,58.2,42H5.8A5.784,5.784,0,0,1,0,36.3V5.7A5.784,5.784,0,0,1,5.8,0Z"}" fill="${"#c81125"}"></path><path id="${"Path_1"}" data-name="${"Path 1"}" d="${"M44.3,27.3c-.3-.3-.7-.3-1.2.1-.5,0-1.1.1-2,.1a10.54,10.54,0,0,1,1.1-.7.905.905,0,0,0,1-.3c.3-.3.6-.2,1.1-.1,0-.7-.6-.7-1.3-.5-.4-.2-1.1,0-1.1.5a5.628,5.628,0,0,1-1.4,1,19.2,19.2,0,0,1-2.7-1.1c.2-.2.4-.5.6-.7-1.5-.8-2.7-1.6-3.2-3.2-.2-.5.1-.4.3-.1a2.949,2.949,0,0,0,1.3,1.4c.5.2.7-.3.4-.6a2.633,2.633,0,0,1-.7-1.5.334.334,0,0,1,.6-.2c.7,2,1.6,3.3,2.4,3s.4-.8,0-1a3.025,3.025,0,0,1-1.3-2.1c0-.6.3-.6.6-.1a14.785,14.785,0,0,0,2,2.6c1.1,1.2,2.6,1.5,3.5.8.7-.6,0-1.1-.7-.9-1.4.4-2.9-1.1-3.7-3.3-.1-.3.1-.4.3-.2,2,2.4,3.6,2.6,4.5,1.8.3-.3.7-1.2-.8-.9-1.6.3-2.6-.9-3.8-2.6-.5-.7,0-.8.4-.3a10.405,10.405,0,0,0,1.9,1.4c.8.5,2.3.4,2.5-.5s-.5-.9-1.2-.6c-1.3.4-2.3-.5-3.2-1.5-.4-.5-.2-.8.1-.6l1.8.9a1.989,1.989,0,0,0,2.4-.3c.6-.8-.3-1.3-1.1-.8s-2.6,0-3.3-.9.1-.8.5-.5a3.544,3.544,0,0,0,3.7-.2c.5-.4.5-.7.3-1-.1-.2-.5-.2-.9.1q-2.4,1.5-3.9-.6c-.4-.5.1-.6.5-.4,1.9.9,3.8.3,4.4-1,.3-.6-.3-1.3-.9-.6a3.439,3.439,0,0,1-3.4.9.5.5,0,0,1,0-1c1.4-.2,3.7-1.1,4.3-2.3.6-1-.6-2.1-1.2-.9a5.477,5.477,0,0,1-3.2,2.3c-.5.2-.7.1-.7,0,0-.2-.2-.6-.3-.5-.4.2-1.8.7-2.4.9a1.257,1.257,0,0,0-.9,1.4c0,.6.2,1.6-.8,1.6-1.6,0-.9-2.6,0-3.3a2.9,2.9,0,0,1,2.1-1.1c.6,0,1.3-.2,1.4-.8a5.638,5.638,0,0,1,.7-.1,1.516,1.516,0,0,0,.8-.4c.2-.2.4-.5.2-.6-.1-.1-.5.2-.6.4a.887.887,0,0,1-.5.4c-.2,0-.5.1-.7.1s-.5,0-.6-.1c-.1-.2,0-.3.2-.4s.5-.1.6.1c.1.1.1.2.3.2.2-1-.8-1-1.6-.9-.5-.8-1.8-.2-2.6.2a3.812,3.812,0,0,1-1.5-.1c-.4-.2-.3,0-.2.2a1.374,1.374,0,0,0,.8.5c.2,0,.1.1.1.2a1.769,1.769,0,0,1-.8.5c-.2,0-.3.1-.2.2a.758.758,0,0,0,.4.2c.2,0,.1.1,0,.2a1.382,1.382,0,0,1-.9.5c-.2,0-.2.1-.1.1a.758.758,0,0,0,.4.2c.1,0,.1,0,0,.2-.1.1-.4.4-.6.4-.3-.1-.4,0-.3.1.2.3.2.4-.2.5h0c-.4-.1-.4-.2-.2-.5.1-.1,0-.2-.3-.1-.2.1-.5-.2-.6-.4-.1-.1-.1-.2,0-.2s.4-.1.4-.2c.1-.1,0-.2-.1-.1a1.382,1.382,0,0,1-.9-.5c-.1-.1-.1-.2,0-.2a.52.52,0,0,0,.4-.2c.1-.1,0-.2-.2-.2a1.769,1.769,0,0,1-.8-.5c-.1-.1-.1-.2.1-.2s.6-.4.8-.5c.1-.2.1-.4-.2-.2a2.573,2.573,0,0,1-1.5.1c-.9-.4-2.1-.9-2.6-.2-.8,0-1.8-.1-1.6.9.2,0,.3-.1.3-.2a.56.56,0,0,1,.6-.1c.2.1.4.2.2.4a.614.614,0,0,1-.6.1c-.2,0-.5-.1-.7-.1a.887.887,0,0,1-.5-.4c-.1-.2-.4-.5-.6-.4-.2.2,0,.5.2.6a1.516,1.516,0,0,0,.8.4,5.639,5.639,0,0,1,.7.1c.1.5.8.8,1.4.8a3.457,3.457,0,0,1,2.1.9c.9.8,1.6,3.3,0,3.3-1,0-.8-1-.8-1.6a1.416,1.416,0,0,0-.9-1.4,15.432,15.432,0,0,1-2.4-.9c-.2-.1-.3.3-.3.5s-.2.2-.7,0a5.184,5.184,0,0,1-3.2-2.3c-.6-1.1-1.7,0-1.2.9.7,1.1,2.9,2.1,4.3,2.3.7.1.7.9,0,1-1.3.2-2.6.2-3.4-.9-.6-.8-1.2-.1-.9.6.6,1.3,2.5,1.9,4.4,1,.4-.2.9-.2.5.4-1,1.3-2.2,1.5-3.9.6-.5-.3-.8-.2-.9-.1-.2.3-.3.6.3,1a3.343,3.343,0,0,0,3.7.2c.4-.2,1.3-.4.5.5-.7.9-2.6,1.4-3.3.9-.8-.5-1.7,0-1.1.8a1.989,1.989,0,0,0,2.4.3l1.8-.9c.4-.2.5.1.1.6-.9,1.1-1.9,2-3.2,1.5-.7-.2-1.4-.2-1.2.7s1.7,1,2.5.5a11.7,11.7,0,0,0,1.9-1.4c.5-.4.9-.4.4.3C23,20.1,22,21.3,20.3,21c-1.5-.3-1.1.6-.8.9.9.8,2.6.6,4.5-1.8.2-.2.4-.1.3.2-.9,2.2-2.3,3.7-3.7,3.3-.7-.2-1.4.2-.7.9.8.7,2.4.5,3.5-.8a11.78,11.78,0,0,0,2-2.6c.2-.5.6-.5.6.1a2.578,2.578,0,0,1-1.3,2.1c-.4.2-.8.6,0,1,.8.3,1.7-1,2.4-3a.321.321,0,0,1,.6.2A2.127,2.127,0,0,1,27,23c-.3.3-.1.8.4.6a2.562,2.562,0,0,0,1.3-1.4c.1-.4.4-.5.3.1-.5,1.7-1.7,2.4-3.2,3.2.2.2.4.5.6.7a19.2,19.2,0,0,1-2.7,1.1c-.6-.4-1.2-.6-1.4-1a.73.73,0,0,0-1.1-.5c-.7-.3-1.2-.2-1.3.5a1.376,1.376,0,0,1,1.1.1.744.744,0,0,0,1,.3,9.015,9.015,0,0,0,1.1.7c-.9,0-1.5-.1-2-.1a.823.823,0,0,0-1.2-.1.906.906,0,0,0-1.1.6c.4,0,.8-.2,1,0,.2.4.8.4,1.2.1h2c-.4.2-.8.5-1.1.6-.9-.2-1.4.2-1.3.8a.758.758,0,0,0,.1,1,2.01,2.01,0,0,1,.4-.8c.6.1.9-.1,1.1-.7.4-.2.8-.5,1-.6a.679.679,0,0,1,.8-.1,4.609,4.609,0,0,1,1,.5.6.6,0,0,0,1,.3,1.024,1.024,0,0,1,.5.6c.2-.4.1-.8-.3-.9a.7.7,0,0,0-1-.4,7.93,7.93,0,0,1-.9-.4c.6-.2,2.1-.8,2.6-1a2.086,2.086,0,0,0,1.5.6,10.413,10.413,0,0,1,.5-1.2,12.83,12.83,0,0,1,1.3-2.1c.4-.5.8-.2.8.5-.1,1.6-1.3,4-3,4.1-.6,0-.8.2-.5.6a1.485,1.485,0,0,0,1.8.1c.5-.4.7-.4.6.2-.1.5-.7.7-1.1.7-.6,0-1.4.3-.8.8.6.6,1.6.2,2.3-.6.2-.3.4-.4.4.1a1.351,1.351,0,0,1-1,1.4c-.5.1-1,.2-.8.5a.984.984,0,0,0,1.4.3,3,3,0,0,0,1-.9c.1-.3.3-.1.2.2-.1.8-.6.7-.6,1.4A3.456,3.456,0,0,0,32,35.4a3.456,3.456,0,0,0,1.1-1.9c0-.6-.5-.6-.6-1.4-.1-.4.1-.5.2-.2a2.23,2.23,0,0,0,1,.9c.4.2,1.2.2,1.4-.3.1-.3-.4-.4-.8-.5a1.351,1.351,0,0,1-1-1.4c0-.5.2-.4.4-.1.7.8,1.7,1.1,2.3.6.6-.6-.1-.8-.8-.8-.4,0-1-.2-1.1-.7s.1-.5.6-.2a1.485,1.485,0,0,0,1.8-.1c.3-.4.1-.6-.5-.6-1.7-.1-2.9-2.5-3-4.1,0-.7.4-.9.8-.5a12.829,12.829,0,0,1,1.3,2.1,3.846,3.846,0,0,1,.5,1.2c.4.1,1-.3,1.5-.6.5.2,2.1.8,2.6,1a7.93,7.93,0,0,1-.9.4.669.669,0,0,0-1,.4.593.593,0,0,0-.3.9,2.651,2.651,0,0,1,.5-.6c.3.2.9.2,1-.3l1-.5a.72.72,0,0,1,.8.1c.2.1.6.4,1,.6a.892.892,0,0,0,1.1.7,1.516,1.516,0,0,1,.4.8.758.758,0,0,0,.1-1c.1-.7-.4-1-1.3-.8-.2-.1-.7-.4-1.1-.6h2c.4.3,1,.3,1.2-.1a3.334,3.334,0,0,1,1,0C45.2,27.4,44.8,27.2,44.3,27.3ZM36.2,7.7h0a1.128,1.128,0,0,1,.8-.1c.2.1.3.3,0,.4a2.485,2.485,0,0,1-.8.1C36,8,35.9,7.8,36.2,7.7ZM28,8.1h-.7a.208.208,0,0,1,0-.4,1.185,1.185,0,0,1,.8.1C28.3,7.8,28.2,8,28,8.1Z"}"></path></svg>`;
});
const UnitedStates = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `

<svg id="${"United_States"}" data-name="${"United States"}" xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", classNames, 0)} viewBox="${"0 0 64 42"}"><rect id="${"Rectangle_1"}" data-name="${"Rectangle 1"}" width="${"64"}" height="${"3.2"}" transform="${"translate(0 9.6)"}" fill="${"#fff"}"></rect><path id="${"Path_2"}" data-name="${"Path 2"}" d="${"M0,36.3a4.918,4.918,0,0,0,.4,2.1H63.6a5.222,5.222,0,0,0,.4-2.1V35.2H0Z"}" fill="${"#fff"}"></path><rect id="${"Rectangle_2"}" data-name="${"Rectangle 2"}" width="${"64"}" height="${"3.2"}" transform="${"translate(0 22.4)"}" fill="${"#fff"}"></rect><rect id="${"Rectangle_3"}" data-name="${"Rectangle 3"}" width="${"64"}" height="${"3.2"}" transform="${"translate(0 28.8)"}" fill="${"#fff"}"></rect><rect id="${"Rectangle_4"}" data-name="${"Rectangle 4"}" width="${"64"}" height="${"3.2"}" transform="${"translate(0 16)"}" fill="${"#fff"}"></rect><path id="${"Path_3"}" data-name="${"Path 3"}" d="${"M0,5.7v.7H64V5.7a5.421,5.421,0,0,0-.6-2.5H.6A5.421,5.421,0,0,0,0,5.7Z"}" fill="${"#fff"}"></path><path id="${"Path_4"}" data-name="${"Path 4"}" d="${"M58.2,0H5.8A5.722,5.722,0,0,0,.6,3.2H63.4A5.722,5.722,0,0,0,58.2,0Z"}" fill="${"#bd0a30"}"></path><rect id="${"Rectangle_5"}" data-name="${"Rectangle 5"}" width="${"64"}" height="${"3.2"}" transform="${"translate(0 6.4)"}" fill="${"#bd0a30"}"></rect><rect id="${"Rectangle_6"}" data-name="${"Rectangle 6"}" width="${"64"}" height="${"3.2"}" transform="${"translate(0 12.8)"}" fill="${"#bd0a30"}"></rect><rect id="${"Rectangle_7"}" data-name="${"Rectangle 7"}" width="${"64"}" height="${"3.2"}" transform="${"translate(0 19.2)"}" fill="${"#bd0a30"}"></rect><rect id="${"Rectangle_8"}" data-name="${"Rectangle 8"}" width="${"64"}" height="${"3.2"}" transform="${"translate(0 25.6)"}" fill="${"#bd0a30"}"></rect><rect id="${"Rectangle_9"}" data-name="${"Rectangle 9"}" width="${"64"}" height="${"3.2"}" transform="${"translate(0 32)"}" fill="${"#bd0a30"}"></rect><path id="${"Path_5"}" data-name="${"Path 5"}" d="${"M5.8,42H58.2a5.926,5.926,0,0,0,5.4-3.6H.4A5.821,5.821,0,0,0,5.8,42Z"}" fill="${"#bd0a30"}"></path><path id="${"Path_6"}" data-name="${"Path 6"}" d="${"M58.2,0H31.5V22.4H0V36.3A5.72,5.72,0,0,0,5.8,42H58.2A5.784,5.784,0,0,0,64,36.3V5.7A5.72,5.72,0,0,0,58.2,0Z"}" fill="${"none"}"></path><path id="${"Path_7"}" data-name="${"Path 7"}" d="${"M31.5,0H5.8A5.644,5.644,0,0,0,1.6,1.8h.7L2.6,1l.3.8h.9l-.7.6.3.9-.8-.6-.7.6.3-.9-.7-.5A5.639,5.639,0,0,0,0,5.7V22.4H31.5Z"}" fill="${"#3c3b6e"}"></path><path id="${"Path_8"}" data-name="${"Path 8"}" d="${"M2.2,2.4l-.3.9.7-.6.8.6-.3-.9.7-.6H2.9L2.6,1l-.3.8H1.6l-.1.1Z"}" fill="${"#fff"}"></path><path id="${"Path_9"}" data-name="${"Path 9"}" d="${"M3.1,6.9l.7-.6H2.9l-.3-.9-.3.9H1.4l.8.6-.3.9.7-.6.8.6Z"}" fill="${"#fff"}"></path><path id="${"Path_10"}" data-name="${"Path 10"}" d="${"M3.1,11.4l.7-.6H2.9l-.3-.9-.3.9H1.4l.8.6-.3.8.7-.5.8.5Z"}" fill="${"#fff"}"></path><path id="${"Path_11"}" data-name="${"Path 11"}" d="${"M3.1,15.8l.7-.5H2.9l-.3-.9-.3.9H1.4l.8.5-.3.9.7-.5.8.5Z"}" fill="${"#fff"}"></path><path id="${"Path_12"}" data-name="${"Path 12"}" d="${"M3.1,20.3l.7-.5H2.9l-.3-.9-.3.9H1.4l.8.5-.3.9.7-.5.8.5Z"}" fill="${"#fff"}"></path><path id="${"Path_13"}" data-name="${"Path 13"}" d="${"M5.7,4.6l.8-.5h-1l-.3-.9L5,4.1H4l.8.5-.3.9L5.2,5l.8.5Z"}" fill="${"#fff"}"></path><path id="${"Path_14"}" data-name="${"Path 14"}" d="${"M5.7,9.1l.8-.5h-1l-.3-.9L5,8.6H4l.8.5-.3.9.7-.6L6,10Z"}" fill="${"#fff"}"></path><path id="${"Path_15"}" data-name="${"Path 15"}" d="${"M5.7,13.6l.8-.6h-1l-.3-.8L5,13H4l.8.6-.3.9.7-.6.8.6Z"}" fill="${"#fff"}"></path><path id="${"Path_16"}" data-name="${"Path 16"}" d="${"M5.7,18.1l.8-.6h-1l-.3-.9-.2.9H4l.8.6-.3.9.7-.6L6,19Z"}" fill="${"#fff"}"></path><path id="${"Path_17"}" data-name="${"Path 17"}" d="${"M7.1,3.3l.8-.6.7.6-.3-.9.8-.6h-1L7.9,1l-.3.8H6.7l.7.6Z"}" fill="${"#fff"}"></path><path id="${"Path_18"}" data-name="${"Path 18"}" d="${"M7.9,5.4l-.3.9H6.7l.7.6-.3.9.8-.6.7.6-.3-.9.8-.6h-1Z"}" fill="${"#fff"}"></path><path id="${"Path_19"}" data-name="${"Path 19"}" d="${"M7.9,9.9l-.3.9H6.7l.7.6-.3.8.8-.5.7.5-.3-.8.8-.6h-1Z"}" fill="${"#fff"}"></path><path id="${"Path_20"}" data-name="${"Path 20"}" d="${"M8.1,15.3l-.2-.9-.3.9H6.7l.7.5-.3.9.8-.5.7.5-.3-.9.8-.5Z"}" fill="${"#fff"}"></path><path id="${"Path_21"}" data-name="${"Path 21"}" d="${"M8.3,20.3l.8-.5h-1l-.2-.9-.3.9H6.7l.7.5-.3.9.8-.5.7.5Z"}" fill="${"#fff"}"></path><path id="${"Path_22"}" data-name="${"Path 22"}" d="${"M10,4.6l-.3.9.8-.5.7.5-.3-.9.8-.5h-.9l-.3-.9-.3.9H9.3Z"}" fill="${"#fff"}"></path><path id="${"Path_23"}" data-name="${"Path 23"}" d="${"M10.5,7.7l-.3.9H9.3l.7.5-.3.9.8-.6.7.6-.3-.9.8-.5h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_24"}" data-name="${"Path 24"}" d="${"M10.5,12.2l-.3.8H9.3l.7.6-.3.9.8-.6.7.6-.3-.9.8-.6h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_25"}" data-name="${"Path 25"}" d="${"M10.8,17.5l-.3-.9-.3.9H9.3l.7.6-.3.9.8-.6.7.6-.3-.9.8-.6Z"}" fill="${"#fff"}"></path><path id="${"Path_26"}" data-name="${"Path 26"}" d="${"M13.1,1l-.3.8h-.9l.7.6-.2.9.7-.6.8.6-.3-.9.7-.6h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_27"}" data-name="${"Path 27"}" d="${"M13.1,5.4l-.3.9h-.9l.7.6-.2.9.7-.6.8.6-.3-.9.7-.6h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_28"}" data-name="${"Path 28"}" d="${"M13.1,9.9l-.3.9h-.9l.7.6-.2.8.7-.5.8.5-.3-.8.7-.6h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_29"}" data-name="${"Path 29"}" d="${"M13.1,14.4l-.3.9h-.9l.7.5-.2.9.7-.5.8.5-.3-.9.7-.5h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_30"}" data-name="${"Path 30"}" d="${"M13.4,19.8l-.3-.9-.3.9h-.9l.7.5-.2.9.7-.5.8.5-.3-.9.7-.5Z"}" fill="${"#fff"}"></path><path id="${"Path_31"}" data-name="${"Path 31"}" d="${"M15.7,3.2l-.3.9h-.9l.8.5-.3.9.7-.5.8.5-.3-.9.7-.5H16Z"}" fill="${"#fff"}"></path><path id="${"Path_32"}" data-name="${"Path 32"}" d="${"M15.7,7.7l-.3.9h-.9l.8.5L15,10l.7-.6.8.6-.3-.9.7-.5H16Z"}" fill="${"#fff"}"></path><path id="${"Path_33"}" data-name="${"Path 33"}" d="${"M15.7,12.2l-.3.8h-.9l.8.6-.3.9.7-.6.8.6-.3-.9.7-.6H16Z"}" fill="${"#fff"}"></path><path id="${"Path_34"}" data-name="${"Path 34"}" d="${"M16,17.5l-.3-.9-.3.9h-.9l.8.6L15,19l.7-.6.8.6-.3-.9.7-.6Z"}" fill="${"#fff"}"></path><path id="${"Path_35"}" data-name="${"Path 35"}" d="${"M18.3,1l-.2.8h-1l.8.6-.3.9.7-.6.8.6-.3-.9.8-.6h-1Z"}" fill="${"#fff"}"></path><path id="${"Path_36"}" data-name="${"Path 36"}" d="${"M18.3,5.4l-.2.9h-1l.8.6-.3.9.7-.6.8.6-.3-.9.8-.6h-1Z"}" fill="${"#fff"}"></path><path id="${"Path_37"}" data-name="${"Path 37"}" d="${"M18.3,9.9l-.2.9h-1l.8.6-.3.8.7-.5.8.5-.3-.8.8-.6h-1Z"}" fill="${"#fff"}"></path><path id="${"Path_38"}" data-name="${"Path 38"}" d="${"M18.3,14.4l-.2.9h-1l.8.5-.3.9.7-.5.8.5-.3-.9.8-.5h-1Z"}" fill="${"#fff"}"></path><path id="${"Path_39"}" data-name="${"Path 39"}" d="${"M18.6,19.8l-.3-.9-.2.9h-1l.8.5-.3.9.7-.5.8.5-.3-.9.8-.5Z"}" fill="${"#fff"}"></path><path id="${"Path_40"}" data-name="${"Path 40"}" d="${"M21,3.2l-.3.9h-.9l.7.5-.3.9L21,5l.7.5-.3-.9.8-.5h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_41"}" data-name="${"Path 41"}" d="${"M23.6,5.4l-.3.9h-.9l.7.6-.3.9.8-.6.7.6-.2-.9.7-.6h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_42"}" data-name="${"Path 42"}" d="${"M21,7.7l-.3.9h-.9l.7.5-.3.9.8-.6.7.6-.3-.9.8-.5h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_43"}" data-name="${"Path 43"}" d="${"M21,12.2l-.3.8h-.9l.7.6-.3.9.8-.6.7.6-.3-.9.8-.6h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_44"}" data-name="${"Path 44"}" d="${"M21.3,17.5l-.3-.9-.3.9h-.9l.7.6-.3.9.8-.6.7.6-.3-.9.8-.6Z"}" fill="${"#fff"}"></path><path id="${"Path_45"}" data-name="${"Path 45"}" d="${"M23.6,1l-.3.8h-.9l.7.6-.3.9.8-.6.7.6-.2-.9.7-.6h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_46"}" data-name="${"Path 46"}" d="${"M23.6,9.9l-.3.9h-.9l.7.6-.3.8.8-.5.7.5-.2-.8.7-.6h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_47"}" data-name="${"Path 47"}" d="${"M23.6,14.4l-.3.9h-.9l.7.5-.3.9.8-.5.7.5-.2-.9.7-.5h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_48"}" data-name="${"Path 48"}" d="${"M23.9,19.8l-.3-.9-.3.9h-.9l.7.5-.3.9.8-.5.7.5-.2-.9.7-.5Z"}" fill="${"#fff"}"></path><path id="${"Path_49"}" data-name="${"Path 49"}" d="${"M26.2,3.2l-.3.9H25l.7.5-.2.9.7-.5.8.5-.3-.9.7-.5h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_50"}" data-name="${"Path 50"}" d="${"M26.2,7.7l-.3.9H25l.7.5-.2.9.7-.6.8.6-.3-.9.7-.5h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_51"}" data-name="${"Path 51"}" d="${"M26.2,12.2l-.3.8H25l.7.6-.2.9.7-.6.8.6-.3-.9.7-.6h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_52"}" data-name="${"Path 52"}" d="${"M26.5,17.5l-.3-.9-.3.9H25l.7.6-.2.9.7-.6.8.6-.3-.9.7-.6Z"}" fill="${"#fff"}"></path><path id="${"Path_53"}" data-name="${"Path 53"}" d="${"M28.4,2.4l-.3.9.7-.6.8.6-.3-.9.7-.6h-.9L28.8,1l-.3.8h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_54"}" data-name="${"Path 54"}" d="${"M28.8,5.4l-.3.9h-.9l.8.6-.3.9.7-.6.8.6-.3-.9.7-.6h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_55"}" data-name="${"Path 55"}" d="${"M28.8,9.9l-.3.9h-.9l.8.6-.3.8.7-.5.8.5-.3-.8.7-.6h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_56"}" data-name="${"Path 56"}" d="${"M28.8,14.4l-.3.9h-.9l.8.5-.3.9.7-.5.8.5-.3-.9.7-.5h-.9Z"}" fill="${"#fff"}"></path><path id="${"Path_57"}" data-name="${"Path 57"}" d="${"M29.1,19.8l-.3-.9-.3.9h-.9l.8.5-.3.9.7-.5.8.5-.3-.9.7-.5Z"}" fill="${"#fff"}"></path></svg>`;
});
const Language = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let { bgColor } = $$props;
  const languages = [{ code: "en", name: "English" }, { code: "sq", name: "Shqip" }];
  let element;
  let visible = false;
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  selected = locale.get();
  return `<button class="${"z-20 flex items-center space-x-2 rounded-md " + escape(bgColor, true) + " py-1.5 px-3"}"${add_attribute("this", element, 0)}>${selected === "en" ? `${validate_component(UnitedStates, "UnitedStates").$$render($$result, { classNames: "h-3" }, {}, {})}` : ``}
	${selected === "sq" ? `${validate_component(Albania, "Albania").$$render($$result, { classNames: "h-3" }, {}, {})}` : ``}</button>
${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      element,
      bgColor,
      position: "bottom",
      anchor: "right",
      visible
    },
    {},
    {
      default: () => {
        return `${each(languages, (l2) => {
          return `${l2.code === "en" ? `<button class="${"flex items-center space-x-2 "}">${validate_component(UnitedStates, "UnitedStates").$$render($$result, { classNames: "h-3" }, {}, {})}
				<p>${escape(languages[0].name)}</p>
			</button>` : ``}
		${l2.code === "sq" ? `<button class="${"flex items-center space-x-2 "}">${validate_component(Albania, "Albania").$$render($$result, { classNames: "h-3" }, {}, {})}
				<p>${escape(languages[1].name)}</p>
			</button>` : ``}`;
        })}`;
      }
    }
  )}`;
});
const Logout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<form action="${"/logout"}" method="${"post"}">${slots.default ? slots.default({}) : ``}</form>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { onIndex } = $$props;
  let { returnUrl } = $$props;
  let element;
  let userPanelVisible = false;
  if ($$props.onIndex === void 0 && $$bindings.onIndex && onIndex !== void 0)
    $$bindings.onIndex(onIndex);
  if ($$props.returnUrl === void 0 && $$bindings.returnUrl && returnUrl !== void 0)
    $$bindings.returnUrl(returnUrl);
  {
    $page.data, console.log("page", $page.data.user);
  }
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
		<div class="${"mr-4 flex items-center border-r-2 " + escape(onIndex ? " border-neutral-700" : " border-neutral-800", true) + " pr-4"}">${validate_component(Language, "Language").$$render(
    $$result,
    {
      bgColor: onIndex ? "bg-neutral-900" : "bg-neutral-800"
    },
    {},
    {}
  )}</div>
		<div class="${"mr-4 flex h-5 w-5 items-center justify-center opacity-70"}">${validate_component(Heart, "Heart").$$render($$result, { classNames: "fill-white" }, {}, {})}</div>
		
		

		
		${$page.data.user ? `<div class="${"" + escape(onIndex ? " bg-neutral-900" : " bg-neutral-800", true) + " flex h-10 w-10 items-center justify-center rounded-full"}"${add_attribute("this", element, 0)}><p class="${"mb-0.5 text-xl text-neutral-50 pointer-events-none"}">E</p></div>
			<div class="${"z-50"}">${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      position: "bottom",
      direction: "rtl",
      anchor: "right",
      element,
      visible: userPanelVisible,
      bgColor: onIndex ? "bg-neutral-900" : "bg-neutral-800"
    },
    {},
    {
      default: () => {
        return `<a${add_attribute("href", nav.profile, 0)} class="${""}">Profile</a>
					${validate_component(Logout, "Logout").$$render($$result, {}, {}, {
          default: () => {
            return `<button type="${"submit"}">Log Out</button>`;
          }
        })}`;
      }
    }
  )}</div>` : ``}
		${!$page.data.user ? `<a${add_attribute("href", nav.login, 0)}>Login</a>` : ``}</div></nav>`;
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
  $page.data.language ?? "sq";
  {
    updateOnIndex($page.url.pathname);
  }
  $$unsubscribe_page();
  return `<div class="${"dark min-h-screen " + escape(onIndex ? "bg-transparent" : "bg-neutral-900", true) + " font-aeonik text-neutral-50"}">${onIndex ? `<div class="${"absolute top-0 -z-10 h-[40vh] w-full bg-gradient-to-b from-neutral-800 to-neutral-900"}"></div>
		<div class="${"absolute -z-20 min-h-screen w-full bg-neutral-900 "}"></div>` : ``}

	
	${validate_component(Nav, "Nav").$$render($$result, { onIndex, returnUrl }, {}, {})}
	

	
	<main>
			${slots.default ? slots.default({}) : ``}
		</main></div>`;
});
export {
  Layout as default
};
