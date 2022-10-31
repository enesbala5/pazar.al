import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-c02df1bb.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-c02df1bb.js","_app/immutable/chunks/index-80a18114.js","_app/immutable/chunks/navigation-fd1ef1e2.js","_app/immutable/chunks/singletons-4bb42092.js","_app/immutable/chunks/stores-02639a13.js","_app/immutable/chunks/forms-47cae44f.js","_app/immutable/chunks/Heart-2661cfb6.js","_app/immutable/chunks/nav-067344d4.js"];
export const stylesheets = ["_app/immutable/assets/_layout-43b04b5e.css"];
