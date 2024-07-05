import Link from "next/link";
import MenuItem from "./MenuItem";
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className='flex justify-between p-4 max-w-5xl mx-auto pt-7 font-light items-center '>
      <div className='flex gap-10 text-sm'>
        <MenuItem title='HOME' address='/' Icon={FaHome} />
        <MenuItem title='ABOUT' address='/about' Icon={FaCircleInfo} />
      </div>

      <div className='flex items-center gap-3'>
        <DarkModeSwitch />
        <Link href='/' className='flex gap-1'>
          <span className='px-2  bg-amber-500 font-bold  rounded text-gray-700 text-xl'>
            IMDb
          </span>
          <span className='text-xl hidden sm:inline'>clone</span>
        </Link>
      </div>
    </div>
  );
}
