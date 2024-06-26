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
    component: ComponentCreator('/IEC61499-Curriculum/docs', '9f8'),
    routes: [
      {
        path: '/IEC61499-Curriculum/docs',
        component: ComponentCreator('/IEC61499-Curriculum/docs', '35b'),
        routes: [
          {
            path: '/IEC61499-Curriculum/docs',
            component: ComponentCreator('/IEC61499-Curriculum/docs', '3dd'),
            routes: [
              {
                path: '/IEC61499-Curriculum/docs/category/lab',
                component: ComponentCreator('/IEC61499-Curriculum/docs/category/lab', 'ab7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/category/lectures',
                component: ComponentCreator('/IEC61499-Curriculum/docs/category/lectures', '338'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/category/module-0',
                component: ComponentCreator('/IEC61499-Curriculum/docs/category/module-0', '272'),
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
                path: '/IEC61499-Curriculum/docs/category/task',
                component: ComponentCreator('/IEC61499-Curriculum/docs/category/task', '6bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module0/pptx',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module0/pptx', 'fda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module0/video',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module0/video', '272'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module1/pptx',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module1/pptx', '462'),
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
                path: '/IEC61499-Curriculum/docs/Module1/video',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module1/video', 'ed5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module2/pptx',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module2/pptx', '75b'),
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
                path: '/IEC61499-Curriculum/docs/Module2/video',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module2/video', '6cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IEC61499-Curriculum/docs/Module3/Lab/HandsOnLab1',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module3/Lab/HandsOnLab1', 'b08'),
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
                path: '/IEC61499-Curriculum/docs/Module3/Task/Task1',
                component: ComponentCreator('/IEC61499-Curriculum/docs/Module3/Task/Task1', 'f31'),
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
