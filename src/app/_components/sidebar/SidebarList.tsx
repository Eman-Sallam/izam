'use client';

import { ISidebarItem } from '@/types';
import Link from 'next/link';
import { Fragment } from 'react';
import SidebarItem from './SidebarItem';

type SidebarListProps = {
  handleOpenSidebarSubList: (index: number) => void;
  navItems: ISidebarItem[];
  openSidebar: boolean[];
};

const SidebarList = ({
  handleOpenSidebarSubList,
  navItems,
  openSidebar,
}: SidebarListProps) => {
  return (
    <>
      {navItems.map((item: ISidebarItem, index: number) =>
        item?.visible !== false ? (
          <Fragment key={item.id}>
            <SidebarItem
              item={item}
              openSidebar={openSidebar}
              handleOpenSidebarSubList={handleOpenSidebarSubList}
              index={index}
            />
            <div
              className={`transition-all duration-500 overflow-hidden w-full flex flex-col gap-1 ${
                openSidebar[index]
                  ? 'max-h-screen opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              {item?.children &&
                item?.children.length > 0 &&
                item?.children.map(
                  (subL: ISidebarItem) =>
                    (subL?.visible || subL?.visible === undefined) && (
                      <Link
                        key={subL.id}
                        href={subL.target || '#'}
                        className="p-4  text-gray-700 rounded text-lg font-medium self-end w-11/12"
                        passHref
                      >
                        {subL.title}
                      </Link>
                    )
                )}
            </div>
          </Fragment>
        ) : null
      )}
    </>
  );
};

export default SidebarList;
