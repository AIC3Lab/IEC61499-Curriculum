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
    path: '/IEC61499-Curriculum/docs',
    component: ComponentCreator('/IEC61499-Curriculum/docs', '943'),
    routes: [
      {
        path: '/IEC61499-Curriculum/docs',
        component: ComponentCreator('/IEC61499-Curriculum/docs', 'bfd'),
        routes: [
          {
            path: '/IEC61499-Curriculum/docs',
            component: ComponentCreator('/IEC61499-Curriculum/docs', '233'),
            routes: [
              {
                path: '/IEC61499-Curriculum/docs/category/lectures',
                component: ComponentCreator('/IEC61499-Curriculum/docs/category/lectures', '338'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
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
                path: '/IEC61499-Curriculum/docs/category/module-3',
                component: ComponentCreator('/IEC61499-Curriculum/docs/category/module-3', 'd67'),
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
              },
              {
                path: '/IEC61499-Curriculum/docs/Module3/Lab',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module3/Lab', '9dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module3/Lectures/pptx',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module3/Lectures/pptx', '312'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module3/Lectures/video0',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module3/Lectures/video0', 'eef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module3/Lectures/video1',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module3/Lectures/video1', 'fd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module3/Lectures/video2',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module3/Lectures/video2', 'ce9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module3/Lectures/video3',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module3/Lectures/video3', 'b48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module3/Lectures/video4',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module3/Lectures/video4', '220'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module3/Lectures/video5',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module3/Lectures/video5', '45e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module3/Lectures/video6',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module3/Lectures/video6', '697'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module3/Lectures/video7',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module3/Lectures/video7', '1d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module3/Task',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module3/Task', 'a67'),
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
