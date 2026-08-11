# 个人网站（Astro + Firefly）

这是一个基于 [Astro](https://astro.build/) 和 [Firefly](https://github.com/CuteLeaf/Firefly) 定制的个人网站初稿。

当前版本已经：

- 移除大 Banner、背景视频与看板娘
- 保留双侧栏、卡片、深浅色、主题色、搜索、归档、分类和标签
- 隐藏尚未准备好的项目展示
- 清空示例文章，保留自动消失的空内容提示
- 配置 GitHub Pages 自动部署工作流

## 本地预览

需要 Node.js 22 或更高版本，以及 pnpm 9。

```bash
pnpm install
pnpm dev
```

然后访问 `http://localhost:4321/`。

## 主要内容位置

```text
src/config/siteConfig.ts       网站标题、网址和基础设置
src/config/profileConfig.ts    姓名、头像和联系方式
src/config/navBarConfig.ts     顶部导航
src/content/posts/             Markdown 博客文章
src/content/spec/about.md      关于我
src/pages/archive.astro        按发布日期生成的文章时间轴
```

## 构建

```bash
pnpm check
pnpm build
pnpm preview
```

## 致谢与许可

本项目基于 MIT 许可的 [CuteLeaf/Firefly](https://github.com/CuteLeaf/Firefly) 定制；Firefly 基于 [saicaca/fuwari](https://github.com/saicaca/fuwari)。原项目版权与许可声明保留在 `LICENSE` 中。
