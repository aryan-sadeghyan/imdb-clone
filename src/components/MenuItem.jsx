import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address}>
      <Icon className=' sm:hidden text-2xl' />
      <p className='hidden sm:inline hover:text-amber-500'>{title}</p>
    </Link>
  );
}
