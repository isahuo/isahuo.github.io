import {
	type NavBarConfig,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

export const navBarConfig: NavBarConfig = {
	links: [
		{
			name: "首页",
			url: "/",
			icon: "material-symbols:home-rounded",
		},
		{
			name: "文章",
			url: "#",
			icon: "material-symbols:article-outline-rounded",
			children: [
				{
					name: "时间轴",
					url: "/archive/",
					icon: "material-symbols:timeline-rounded",
				},
				{
					name: "分类",
					url: "/categories/",
					icon: "material-symbols:folder-open-rounded",
				},
				{
					name: "标签",
					url: "/tags/",
					icon: "material-symbols:tag-rounded",
				},
			],
		},
		{
			name: "专题",
			url: "/topics/",
			icon: "material-symbols:bookmarks-outline-rounded",
		},
		{
			name: "关于我",
			url: "/about/",
			icon: "material-symbols:person-outline-rounded",
		},
		{
			name: "GitHub",
			url: "https://github.com/isahuo",
			external: true,
			icon: "fa7-brands:github",
		},
	],
};

export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};
