# oep-user-guide

网站使用 [vuepress](https://vuepress.vuejs.org/) 和 [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume) 构建生成。

## Install

```sh
pnpm i
```

## Usage

```sh
# 启动开发服务
pnpm docs:dev
# 构建生产包
pnpm docs:build
# 本地预览生产服务
pnpm docs:preview
# 更新 vuepress 和主题
pnpm vp-update
```

## 文档

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)

第一步：检查并配置 package.json
在你的项目根目录下，应该有一个 package.json 文件。请打开它，找到 "scripts" 部分。

我们需要确保里面有 构建（build） 的命令。通常看起来是这样的：

JSON

{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}

npm run build
# 或者 pnpm
pnpm docs:build

# 进入生成的目录 (假设是 docs/.vuepress/dist)
cd docs/.vuepress/dist

# 启动服务
npx http-server