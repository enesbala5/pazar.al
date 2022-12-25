export const nav = {
	index: '/',
	search: '/search',
	post: '/post',
	category: '/categories',

	createListing: '/createPost',
	promotion: '/promotion',

	api: {
		// User
		getUser: '/api/getUser',
		getUserOptions: {
			likes: 'likes',
		},

		// Post
		getPost: '/api/getPost',

		// Search
		getLatestPosts: '/api/getLatestPosts',
		// GetLatestPost Options:
		getLatestPostsOptions: {
			byCategory: '/byCategory',
			byCategoryCount: '/byCategory/count',
		},

		count: '/api/getLatestPosts/count',

		// Create Post
		createPost: '/api/createPost',
		//

		// Likes
		checkIfLiked: '/api/checkIfLiked',
		likePost: '/api/likePost',
		dislikePost: '/api/dislikePost',
	},

	support: '/#',

	register: '/register',
	login: '/login',
	setupAccount: '/setupAccount',
	welcomeScreen: '/welcome',
	admin: '/admin',
	profile: '/profile',

	likes: '/likes',

	terms: '#',
	privacy: '#',
};
