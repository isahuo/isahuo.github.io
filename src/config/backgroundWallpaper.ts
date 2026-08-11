import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

/**
 * 第一版采用纯色背景：不渲染大 Banner、背景视频或波浪过渡。
 * 如果以后想恢复壁纸，只需要在这里切换 mode 并补充 src。
 */
export const backgroundWallpaper: BackgroundWallpaperConfig = {
	mode: "none",
	playerEnable: false,
	src: {},
	common: {
		homeText: {
			enable: false,
		},
		navbar: {
			transparentMode: "semi",
			blur: 0,
		},
		waves: {
			enable: false,
		},
		gradient: {
			enable: false,
		},
		carousel: {
			enable: false,
		},
	},
};
