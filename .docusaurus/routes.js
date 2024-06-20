import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/IEC61499-Curriculum/__docusaurus/debug',
    component: ComponentCreator('/IEC61499-Curriculum/__docusaurus/debug', '05e'),
    exact: true
  },
  {
    path: '/IEC61499-Curriculum/__docusaurus/debug/config',
    component: ComponentCreator('/IEC61499-Curriculum/__docusaurus/debug/config', '769'),
    exact: true
  },
  {
    path: '/IEC61499-Curriculum/__docusaurus/debug/content',
    component: ComponentCreator('/IEC61499-Curriculum/__docusaurus/debug/content', '8b8'),
    exact: true
  },
  {
    path: '/IEC61499-Curriculum/__docusaurus/debug/globalData',
    component: ComponentCreator('/IEC61499-Curriculum/__docusaurus/debug/globalData', '753'),
    exact: true
  },
  {
    path: '/IEC61499-Curriculum/__docusaurus/debug/metadata',
    component: ComponentCreator('/IEC61499-Curriculum/__docusaurus/debug/metadata', '20e'),
    exact: true
  },
  {
    path: '/IEC61499-Curriculum/__docusaurus/debug/registry',
    component: ComponentCreator('/IEC61499-Curriculum/__docusaurus/debug/registry', 'a06'),
    exact: true
  },
  {
    path: '/IEC61499-Curriculum/__docusaurus/debug/routes',
    component: ComponentCreator('/IEC61499-Curriculum/__docusaurus/debug/routes', '110'),
    exact: true
  },
  {
    path: '/IEC61499-Curriculum/markdown-page',
    component: ComponentCreator('/IEC61499-Curriculum/markdown-page', '75b'),
    exact: true
  },
  {
    path: '/IEC61499-Curriculum/my-react-page',
    component: ComponentCreator('/IEC61499-Curriculum/my-react-page', '9d4'),
    exact: true
  },
  {
    path: '/IEC61499-Curriculum/docs',
    component: ComponentCreator('/IEC61499-Curriculum/docs', '120'),
    routes: [
      {
        path: '/IEC61499-Curriculum/docs',
        component: ComponentCreator('/IEC61499-Curriculum/docs', '9eb'),
        routes: [
          {
            path: '/IEC61499-Curriculum/docs',
            component: ComponentCreator('/IEC61499-Curriculum/docs', '1d1'),
            routes: [
              {
                path: '/IEC61499-Curriculum/docs/category/module-1',
                component: ComponentCreator('/IEC61499-Curriculum/docs/category/module-1', '15e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/category/module-2',
                component: ComponentCreator('/IEC61499-Curriculum/docs/category/module-2', 'ca7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/intro',
                component: ComponentCreator('/IEC61499-Curriculum/docs/intro', '870'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module1/presentation',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module1/presentation', 'f48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module1/quiz',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module1/quiz', 'c5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module2/presentation',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module2/presentation', '159'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module2/quiz',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module2/quiz', '406'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/IEC61499-Curriculum/',
    component: ComponentCreator('/IEC61499-Curriculum/', 'fe8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
