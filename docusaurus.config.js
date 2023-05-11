// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Аналитика высшего образования',
  tagline: 'Данный проект является образовательно-просветительским. Основная цель — увеличить объём данных, выработать набор инструментов и повысить уровень компетенций людей анализирующих жизнедеятельность университетов 🇷🇺 Российской Федерации. Стандартной выборкой для работы являются университеты участники программы «Приоритет 2030» и «Передовые инженерные школы».',
  favicon: 'img/favicon.ico',

  url: 'https://psal.ru',
  baseUrl: '/',
  organizationName: 'psalru',
  projectName: 'psalru',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/psalru/psalru/tree/master/',
        },
        blog: {
          blogTitle: 'Блог',
          blogSidebarTitle: 'Последнии записи',
          showReadingTime: true,
          editUrl: 'https://github.com/psalru/psalru/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ПСАЛ',
        logo: {
          alt: 'Логотип «ПСАЛ»',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Обучающие материалы',
          },
          {
            to: '/blog',
            label: 'Блог',
            position: 'left'
          },
          {
            href: 'https://github.com/psalru',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Основные разделы сайта',
            items: [
              {
                label: 'Обучающие материалы',
                to: '/docs/intro',
              },
              {
                label: 'Блог',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Связанные с проектом ссылки',
            items: [
              {
                label: 'Репозитории на GitHub',
                href: 'https://github.com/orgs/psalru/repositories',
              },
              {
                label: 'Канал в Телеграмм',
                href: 'https://t.me/psalchannel',
              },
              {
                label: 'Обсуждения в Телеграмм',
                href: 'https://t.me/psalgroup',
              },
            ],
          },
          {
            title: 'Ссылки из уважения',
            items: [
              {
                label: 'Минобрнауки 🇷🇺 России',
                href: 'https://minobrnauki.gov.ru',
              },
              {
                label: 'Приоритет 2030',
                href: 'https://priority2030.ru',
              },
              {
                label: 'Передовые инженерные школы',
                href: 'https://engineers2030.ru',
              },
            ],
          },
        ],
        copyright: `© 2020-${new Date().getFullYear()}. Все авторские материалы проекта используйте по лицензии CC BY 4.0.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = {
  ...config,
  plugins: ['docusaurus-plugin-sass']
};
