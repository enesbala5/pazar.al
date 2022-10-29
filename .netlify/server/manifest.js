export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Aeonik-Light.woff","fonts/Aeonik-Light.woff2","fonts/Aeonik-Medium.woff","fonts/Aeonik-Medium.woff2","fonts/Aeonik-Regular.woff","fonts/Aeonik-Regular.woff2","icon.png","images/heart.png","manifest.json","maskable_icon.png","sitemap.xml","service-worker.js"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".json":"application/json",".xml":"application/xml"},
	_: {
		entry: {"file":"_app/immutable/start-b899828f.js","imports":["_app/immutable/start-b899828f.js","_app/immutable/chunks/index-996b2f17.js","_app/immutable/chunks/singletons-806c10ce.js","_app/immutable/chunks/control-03134885.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/_server.ts.js')
			},
			{
				id: "/api/createPost",
				pattern: /^\/api\/createPost\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/createPost/_server.ts.js')
			},
			{
				id: "/api/getLatestPosts",
				pattern: /^\/api\/getLatestPosts\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/getLatestPosts/_server.ts.js')
			},
			{
				id: "/api/getLatestPosts/count",
				pattern: /^\/api\/getLatestPosts\/count\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/getLatestPosts/count/_server.ts.js')
			},
			{
				id: "/api/getPost",
				pattern: /^\/api\/getPost\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/getPost/_server.ts.js')
			},
			{
				id: "/kerkim",
				pattern: /^\/kerkim\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/krijo",
				pattern: /^\/krijo\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/postim/[id]",
				pattern: /^\/postim\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				page: { layouts: [0,,], errors: [1,3], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
