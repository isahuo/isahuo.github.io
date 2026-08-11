import type { SidebarLayoutConfig } from "../types/sidebarConfig";

/**
 * 保留 Firefly 的双侧栏观感，但移除音乐、动态和广告等尚未配置的内容。
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	enable: true,
	position: "both",
	tabletSidebar: "left",
	hideSidebarOnPostPage: false,
	showBothSidebarsOnPostPage: true,
	leftComponents: [
		{
			type: "profile",
			enable: true,
			position: "top",
			showOnPostPage: true,
		},
		{
			type: "announcement",
			enable: true,
			position: "top",
			showOnPostPage: false,
		},
		{
			type: "categories",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			specificConfig: {
				collapseThreshold: 6,
			},
		},
		{
			type: "tags",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			specificConfig: {
				collapseThreshold: 12,
			},
		},
	],
	rightComponents: [
		{
			type: "stats",
			enable: true,
			position: "top",
			showOnPostPage: false,
		},
		{
			type: "calendar",
			enable: true,
			showTitle: false,
			position: "sticky",
			showOnPostPage: false,
			specificConfig: {
				calendar: {
					showHeatmap: true,
				},
			},
		},
		{
			type: "sidebarToc",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			hideOnNonPostPage: true,
		},
	],
	mobileBottomComponents: [
		{
			type: "profile",
			enable: true,
			showOnPostPage: true,
		},
		{
			type: "announcement",
			enable: true,
			showOnPostPage: false,
		},
		{
			type: "categories",
			enable: true,
			showOnPostPage: true,
			specificConfig: {
				collapseThreshold: 6,
			},
		},
		{
			type: "tags",
			enable: true,
			showOnPostPage: true,
			specificConfig: {
				collapseThreshold: 12,
			},
		},
		{
			type: "stats",
			enable: true,
			showOnPostPage: true,
		},
	],
};
