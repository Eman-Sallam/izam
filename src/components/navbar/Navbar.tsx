import { ListCollapse } from 'lucide-react';
import NavbarIcon from './NavbarIcon';
import SearchSection from './SearchSection';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { GrHomeRounded } from 'react-icons/gr';
import { RiBriefcase4Fill } from 'react-icons/ri';
import { PiUsersThreeBold } from 'react-icons/pi';
import { FiBell, FiMessageSquare } from 'react-icons/fi';

const Navbar = () => {
  return (
    <>
      <nav className="hidden md:block h-navbar-height z-[100] px-12 py-3 bg-black text-white sticky inset-0">
        <div className="h-full flex items-center justify-between gap-5">
          <div className="flex items-center gap-9">
            <Link href="/" className="text-4xl font-bold">
              i<span className="text-green-800">Z</span>AM
            </Link>
            <SearchSection />
          </div>
          <div className="flex gap-9 h-full items-center">
            <NavbarIcon
              icon={<GrHomeRounded size={30} />}
              title="Home"
              href="/"
            />
            <NavbarIcon
              icon={<RiBriefcase4Fill size={30} />}
              title="Jobs"
              href="/"
            />
            <NavbarIcon
              icon={<PiUsersThreeBold size={30} />}
              title="Employers"
              href="/"
            />
            <span className="h-[41px] w-[1px] bg-gray-300  rounded-full opacity-60" />
            <NavbarIcon
              icon={<FiBell size={30} />}
              title="Notifications"
              href="/"
            />
            <div className="relative h-full">
              <span className="absolute bg-red-600 w-4 h-4 rounded-full right-6 top-0 text-xs flex flex-col items-center justify-center">
                1
              </span>
              <NavbarIcon
                icon={<FiMessageSquare size={30} />}
                title="Messaging"
                href="/"
              />
            </div>
            <NavbarIcon
              icon={
                <Avatar className="w-9 h-9">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="text-black">AR</AvatarFallback>
                </Avatar>
              }
              title="Profile"
            />
          </div>
        </div>
      </nav>
      {/* Mobile navbar */}
      <nav className="block md:hidden h-sm-navbar-height z-[100] px-4 py-5 bg-black text-white sticky inset-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="relative">
              <NavbarIcon
                icon={
                  <Avatar className="w-12 h-12 md:w-6 md:h-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                }
                title=""
                href="/"
              />
              <span className="absolute bg-gray-600 flex items-center justify-center rounded-full -right-2 h-6 w-6 bottom-0">
                <ListCollapse size={'10px'} />
              </span>
            </div>
            <div className="flex items-center gap-4">
              <SearchSection className="bg-transparent" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold">
              I<span className="text-green-800">Z</span>AM
            </h1>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
