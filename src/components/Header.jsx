import Link from "next/link";
import MenuItem from "./MenuItem";
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Header() {
  return (
    <div className='flex justify-between p-4 max-w-5xl mx-auto mt-[1rem] font-light '>
      <div className='flex gap-10 text-sm'>
        <MenuItem title='HOME' address='/' Icon={FaHome} />
        <MenuItem title='ABOUT' address='/about' Icon={FaCircleInfo} />
      </div>
      <div>
        <div className='flex items-center gap-1'>
          <Link href='/'>
            <span className='px-2  bg-amber-500 font-bold  rounded text-gray-700 text-xl'>
              IMDb
            </span>
            <span className='text-xl hidden sm:inline'>clone</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
