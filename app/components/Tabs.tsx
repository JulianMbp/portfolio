'use client';

import { Tab } from '@headlessui/react';
import React from 'react';
import TabContent1 from "@/app/components/Tabs/TabContentSocialWork";
import TabContent2 from "@/app/components/Tabs/TabContentBooks";
import TabContent3 from "@/app/components/Tabs/TabContentEps";
import TabContent4 from "@/app/components/Tabs/TabContentHackaton";
import TabContent5 from "@/app/components/Tabs/TabContentHackatonAI";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Tabs: React.FC = () => {
  const categories = {
    'Hackaton PotencIA Summit 2024': <TabContent5/>,
    'EPS': <TabContent3/>,
    'Venta de Cursos': <TabContent2/>,
    'Hackaton Nexo Digital': <TabContent4/>,
    'Trabajo Social': <TabContent1/>
  };

  return (
    <div className='w-full max-w-6xl px-2 py-16 sm:px-0 mx-auto'>
      <Tab.Group>
        <Tab.List className='md:flex grid grid-cols-1 space-x-1 rounded-xl bg-blue-900/20 p-1 md:m-10 md:mb-0'>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg  text-2xl p-5  font-medium leading-5 dark:text-slate-50',
                  'ring-red-950 ring-opacity-60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'dark:bg-red-950 bg-red-600 shadow'
                    : 'dark:text-white hover:bg-white/[0.12] dark:hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {Object.values(categories).map((content, idx) => (
            <Tab.Panel key={idx} className='rounded-xl bg-red-800 shadow md:mx-10'>
              <p>{content}</p>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
