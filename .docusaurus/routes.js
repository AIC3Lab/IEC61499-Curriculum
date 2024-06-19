import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/IEC61499-Curriculum/fr/markdown-page',
    component: ComponentCreator('/IEC61499-Curriculum/fr/markdown-page', '118'),
    exact: true
  },
  {
    path: '/IEC61499-Curriculum/fr/my-react-page',
    component: ComponentCreator('/IEC61499-Curriculum/fr/my-react-page', 'bd9'),
    exact: true
  },
  {
    path: '/IEC61499-Curriculum/fr/docs',
    component: ComponentCreator('/IEC61499-Curriculum/fr/docs', '086'),
    routes: [
      {
        path: '/IEC61499-Curriculum/fr/docs',
        component: ComponentCreator('/IEC61499-Curriculum/fr/docs', 'e39'),
        routes: [
          {
            path: '/IEC61499-Curriculum/fr/docs',
            component: ComponentCreator('/IEC61499-Curriculum/fr/docs', '26c'),
            routes: [
              {
                path: '/IEC61499-Curriculum/fr/docs/category/module-1',
                component: ComponentCreator('/IEC61499-Curriculum/fr/docs/category/module-1', '195'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/fr/docs/category/module-2',
                component: ComponentCreator('/IEC61499-Curriculum/fr/docs/category/module-2', '36d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/fr/docs/intro',
                component: ComponentCreator('/IEC61499-Curriculum/fr/docs/intro', '5af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/fr/docs/Module1/presentation',
                component: ComponentCreator('/IEC61499-Curriculum/fr/docs/Module1/presentation', 'df6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/fr/docs/Module1/quiz',
                component: ComponentCreator('/IEC61499-Curriculum/fr/docs/Module1/quiz', '66a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/fr/docs/Module2/presentation',
                component: ComponentCreator('/IEC61499-Curriculum/fr/docs/Module2/presentation', 'd8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/fr/docs/Module2/quiz',
                component: ComponentCreator('/IEC61499-Curriculum/fr/docs/Module2/quiz', '85f'),
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
    path: '/IEC61499-Curriculum/fr/',
    component: ComponentCreator('/IEC61499-Curriculum/fr/', '3d7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
