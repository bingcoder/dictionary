import { defineConfig } from "vitepress";

import catalogue from "../src/public/catalogue";

function genSidebar(t: string) {
  return catalogue
    .filter((item) => item.tags.includes(t))
    .map((item) => ({
      text: item.name,
      link: `/${item.url}.html`,
    }));
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Dictionary",
  description: "My Dictionary Site",
  srcDir: "src",
  // mpa: true,
  locales: {
    root: {
      label: "中文",
      lang: "zh-CN",
      title: "词典",
      description: "我的词典",
      themeConfig: {
        darkModeSwitchLabel: "切换主题",
        docFooter: {
          prev: "上一篇",
          next: "下一篇",
        },
        outlineTitle: "页面内容",
        returnToTopLabel: "返回顶部",
        sidebarMenuLabel: "菜单",
        nav: [
          { text: "首页", link: "/" },
          {
            text: "单词",
            items: [
              { text: "大学英语", link: "/CET4_T.html" },
              {
                text: "考研",
                link: "/KaoYan_3_T.html",
              },
              {
                text: "专业英语",
                link: "/archVocabulary.html",
              },
            ],
          },
        ],
        sidebar: ["大学英语", "考研", "专业英语"].map((item) => ({
          text: item,
          items: genSidebar(item),
        })),
        notFound: {
          title: "页面未找到",
          quote: "哎呀，您好像迷失在网络的小胡同里啦，别着急，赶紧回头是岸！",
          linkText: "返回首页",
        },
      },
    },
  },
  themeConfig: {
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  head: [["script", { async: "", src: "/search.js" }]],
});
