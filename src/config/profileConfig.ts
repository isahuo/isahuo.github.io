import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 暂时继续使用默认占位头像
	avatar: "/assets/images/avatar-placeholder.svg",
	name: "HY",
	bio: "东南大学硕士研究生｜AI Agent 与大模型应用开发",
	// 暂不公开邮箱或其他联系方式，仅保留 GitHub
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/isahuo",
			showName: false,
		},
	],
};
