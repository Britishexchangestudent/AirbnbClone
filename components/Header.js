import Image from "next/image";
import {
  SearchIcon,
  GlobalAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:p-5 md:px-10">
      {/* Left Side */}
      <div className="relative flex items-center h-10 cursor-pointer mr-2">
        <Image
          src="http://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Search */}
      <div className="flex items-center md:border-2 border-gray-200 rounded-full max-w-full bg-gray-100 py-2 px-2 md:shadow-sm">
        <input
          type="text"
          className="w-full flex-grow bg-transparent rounded-full pl-2 focus:outline-none text-sm text-gray-600 placeholder-gray-400"
          placeholder="Search..."
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="hidden sm:inline-flex  sm:h-6 cursor-pointer" />
        <div className="flex space-x-2 border-2 p-2 items-center rounded-full cursor-pointer shadow-sm hover:shadow-md transition duration-150 active:scale-90">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
