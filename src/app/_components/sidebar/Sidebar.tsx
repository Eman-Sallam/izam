'use client';

import { useCallback, useState } from 'react';
import { cn } from '@/lib/utils';
import { ISidebarProps } from '@/types';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { ArrowLeft, Settings, Text } from 'lucide-react';
import SidebarList from './SidebarList';
import SidebarListDragDrop from './SidebarListDragDrop';
import { SlSettings } from 'react-icons/sl';
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from 'react-icons/io';

const Sidebar = ({ navItems }: ISidebarProps) => {
  const [openSidebar, setOpenSidebar] = useState<boolean[]>(
    Array(navItems.length).fill(false)
  );

  const handleOpenSidebarSubList = useCallback((index: number) => {
    setOpenSidebar((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  }, []);

  const [smallScreenSidebar, setSmallScreenSidebar] = useState<boolean>(false);
  const handleSmallScreenSidebar = () => {
    setSmallScreenSidebar((prev) => !prev);
  };

  /* Drag and drop */
  const [openEditMode, setOpenEditMode] = useState(false);
  const handleOpenEditMode = () => {
    setOpenEditMode((prev) => !prev);
  };

  return (
    <section className="flex flex-col bg-white">
      <div className="flex flex-col">
        <div className="hidden md:flex md:justify-between py-8 border-b border-gray-200 mb-4 px-5">
          <h3 className="text-xl font-medium">Menu</h3>

          {openEditMode ? (
            <>
              <span className="flex flex-row">
                <IoIosCloseCircleOutline
                  size={40}
                  onClick={handleOpenEditMode}
                  className="text-red-600"
                />
                <IoIosCheckmarkCircleOutline
                  size={40}
                  onClick={handleOpenEditMode}
                  className="text-primary"
                />
              </span>
            </>
          ) : (
            <SlSettings onClick={handleOpenEditMode} size={'26px'} />
          )}
        </div>
        <div
          className="md:hidden p-3 bg-gray-500 w-full flex justify-end items-center px-5"
          onClick={handleSmallScreenSidebar}
        >
          <span className="text-md font-semibold w-3/5">Companies</span>
          <div className="-rotate-180">
            <Text />
          </div>
        </div>
        <div
          className={cn(
            ' z-[100] md:z-10 md:min-h-[70vh] md:mt-2 md:static flex flex-col gap-2 w-full   fixed top-0 right-0 transform transition-transform duration-500 px-5 ease-in-out',
            {
              'translate-x-0 h-full': smallScreenSidebar === true,
              'translate-x-full md:translate-x-0 h-full':
                smallScreenSidebar === false,
            }
          )}
        >
          <div className="md:hidden flex justify-between">
            <ArrowLeft
              size={31}
              className="md:hidden"
              onClick={handleSmallScreenSidebar}
            />
            <Settings onClick={handleOpenEditMode} size={31} />
          </div>
          {openEditMode ? (
            <SortableContext
              items={navItems}
              strategy={verticalListSortingStrategy}
            >
              <SidebarListDragDrop
                navItems={navItems}
                openSidebar={openSidebar}
                handleOpenSidebarSubList={handleOpenSidebarSubList}
              />
            </SortableContext>
          ) : (
            <SidebarList
              handleOpenSidebarSubList={handleOpenSidebarSubList}
              navItems={navItems}
              openSidebar={openSidebar}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
