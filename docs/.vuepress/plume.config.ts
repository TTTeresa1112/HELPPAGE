/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar'
import collections from './collections'

/**
 * @see https://theme-plume.vuejs.press/config/theme/
 */
export default defineThemeConfig({
  logo: '/logo.svg',

  collections: [ 
    { type: 'doc',
      dir: 'guide',
      title: 'Help Center',
      linkPrefix: '/guide/',
      sidebar: [

      {
        text: 'ARES Guide',
        collapsed: false,
        items: [
          {
            text:'Reviewer Guide',
            link: 'ares/reviewer/reviewerindex.md',
          //  collapsed: true,
          //  items:['ares/reviewer/index/reviewerfaq.md', 'ares/reviewer/index/reviewertest.md'],
          },
          // {
          //  text:'Author Guide',
          //  link: 'ares/author/authorindex.md',
          //  items:['ares/author/index/authorfaq.md'],
          // },
          {
            text:'Editor Guide',
            link: 'ares/editor/editorindex.md',
          //  items:['ares/editor/index/editorfaq.md'],
          },
        ]
      },
      {
        text: 'Proofreading Center',
        collapsed: false,
        items: ['proof/proof.md'] // 对应 docs/guide/proof.md
      },
    ] },
  ],

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'linkedin', link: 'https://www.linkedin.com/company/open-exploration/' },
    { icon: 'x', link: 'https://twitter.com/Open_Explor' },
  ],
  navbarSocialInclude: ['linkedin', 'x'], // 允许显示在导航栏的 social 社交链接
   aside: true, // 页内侧边栏， 默认显示在右侧
   outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
   footer: {
     message: 'Copyright © 2026 Open Exploration Publishing Inc. All rights reserved.',
     copyright: '',
   },

  /**
   * @see https://theme-plume.vuejs.press/config/theme/#profile
   */
  // profile: {
  //  avatar: '/image/logo.svg',
  //  name: 'OEP USER GUIDE',
  //  description: 'oep user guide',
    // circle: true,
    // location: '',
    // organization: '',
  // },

    navbar: [
      { text: 'Help Center', link: '/guide/proof/proof.md' },
      {
        text: 'ARES RE System',
        badge: {
          text: 'ARES',
          color: '#1e88e5',
        },
        link: 'https://www.aressystem.com/',
      },
      { 
        text: 'ARES MS System',
        badge: {
          text: 'ARES',
          color: '#1e88e5',
        },
        items: [
          { text: 'Exploration of Medicine', link: 'https://em.aressystem.com/' },
          { text: 'Exploration of Targeted Anti-tumor Therapy', link: 'https://etat.aressystem.com/' },
          { text: 'Exploration of Immunology', link: 'https://ei.aressystem.com/' },
          { text: 'Exploration of Neuroprotective Therapy', link: 'https://ent.aressystem.com/' },
          { text: 'Exploration of Digestive Diseases', link: 'https://edd.aressystem.com/' },
          { text: 'Exploration of Neuroscience', link: 'https://en.aressystem.com/' },
          { text: 'Exploration of Musculoskeletal Diseases', link: 'https://emd.aressystem.com/' },
          { text: 'Exploration of Drug Science', link: 'https://eds.aressystem.com/' },
          { text: 'Exploration of Asthma & Allergy', link: 'https://eaa.aressystem.com/' },
          { text: 'Exploration of Foods and Foodomics', link: 'https://eff.aressystem.com/' },
          { text: 'Exploration of Digital Health Technologies', link: 'https://edht.aressystem.com/' },
          { text: 'Exploration of Cardiology', link: 'https://ec.aressystem.com/' },
          { text: 'Exploration of BioMat-X', link: 'https://ebmx.aressystem.com/' },
          { text: 'Exploration of Endocrine and Metabolic Diseases', link: 'https://eemd.aressystem.com/' }
        ],
      },
      { text: 'Journal', link: 'https://www.explorationpub.com/Index/AllJournals' },
    ],

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/theme/#transition */
   transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
     appearance: 'circle-clip',  // 启用 深色模式切换过渡动画, 或配置cc
   },

})
