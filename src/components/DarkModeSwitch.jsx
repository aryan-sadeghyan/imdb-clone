"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "stytem" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className='cursor-pointer'>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdOutlineWbSunny
            className='text-xl hover:text-amber-500'
            onClick={() => {
              setTheme("light");
            }}
          />
        ) : (
          <FaMoon
            className='text-xl hover:text-amber-500'
            onClick={() => {
              setTheme("dark");
            }}
          />
        ))}
    </div>
  );
}
