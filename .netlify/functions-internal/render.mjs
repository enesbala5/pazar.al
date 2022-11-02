import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Aeonik-Light.woff","fonts/Aeonik-Light.woff2","fonts/Aeonik-Medium.woff","fonts/Aeonik-Medium.woff2","fonts/Aeonik-Regular.woff","fonts/Aeonik-Regular.woff2","icon.png","images/auth/main.jpg","images/heart.png","manifest.json","maskable_icon.png","sitemap.xml","service-worker.js"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".jpg":"image/jpeg",".json":"application/json",".xml":"application/xml"},
	_: {
		entry: {"file":"_app/immutable/start-f355e4c5.js","imports":["_app/immutable/start-f355e4c5.js","_app/immutable/chunks/index-304ec1ce.js","_app/immutable/chunks/singletons-ee03c8b3.js","_app/immutable/chunks/preload-helper-b21cceae.js","_app/immutable/chunks/control-03134885.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js'),
			() => import('../server/nodes/10.js'),
			() => import('../server/nodes/11.js'),
			() => import('../server/nodes/12.js'),
			() => import('../server/nodes/13.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(protected)/admin",
				pattern: /^\/admin\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/_server.ts.js')
			},
			{
				id: "/api/createPost",
				pattern: /^\/api\/createPost\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/createPost/_server.ts.js')
			},
			{
				id: "/api/getLatestPosts",
				pattern: /^\/api\/getLatestPosts\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/getLatestPosts/_server.ts.js')
			},
			{
				id: "/api/getLatestPosts/count",
				pattern: /^\/api\/getLatestPosts\/count\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/getLatestPosts/count/_server.ts.js')
			},
			{
				id: "/api/getPost",
				pattern: /^\/api\/getPost\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/getPost/_server.ts.js')
			},
			{
				id: "/kerkim",
				pattern: /^\/kerkim\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/krijo",
				pattern: /^\/krijo\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(auth)/logout",
				pattern: /^\/logout\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/postim/[id]",
				pattern: /^\/postim\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				page: { layouts: [0,,], errors: [1,4], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(user)/profile",
				pattern: /^\/profile\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(auth)/register",
				pattern: /^\/register\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
