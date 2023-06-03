export const SITE = {
	name: 'SubashCS',

	origin: 'https://subashcs.com.np',
	basePathname: '/',
	trailingSlash: false,

	title: 'SubashCS — Subash Chandra Sapkota`s Blog',
	description: 'Hi I am Subash Chandra Sapkota. SubashCS is my personal portfolio where I share programming as well as personal experience.',

	googleAnalyticsId: "G-5QRXZK0DW8", // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
