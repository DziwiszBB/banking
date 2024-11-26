'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Link } from 'lucide-react'
import { cn } from '@/lib/utils'
//Uzyjemy do tego shadacn
const MobileNav = ({user}: MobileNavProps) => {
    const pathname = usePathname();
  return (
   <section className="w-full max-w-[264px]">
    <Sheet>
  <SheetTrigger>
    <Image
    src="/icons/hamburger.svg"
    width={30}
    height={30}
    alt="menu"
    className="cursor-pointer"
    />
  </SheetTrigger>
  <SheetContent side="left" className="border-none bg-white">
  <Link href='/' className=" cursor-pointer flex items-center gap-1 px-4">
          <Image
           src="/icons/logo.svg"
           width={34}
           height={34}
           alt="Horizon Logo"
           /> 
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
        </Link>
            <div className="mobilenav-sheet">
                <SheetClose asChild>
                    <nav className="mobilenav-sheet_close w-full text-white">
                    {sidebarLinks.map((item) =>
      {
          const isActive = 
          pathname === item.route || pathname.startsWith(`${item.route}/`);
        return (
            <SheetClose asChild key={item.route}>
          <Link href={item.route} key={item.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
            
            
              <Image src={item.imgURL}
                     alt={item.label}
                     width={20}
                     height={20}
                     className={cn({'brightness-[3] invert-0':isActive})}
               />
            
            <p className={cn('text-16 font-semibold text-black-2', { '!text-white': isActive })}>
                {item.label}
            </p>
          </Link>
           </SheetClose>
        )
      })}
    TU BEDZIE  USER
                    </nav>
                </SheetClose>
    TU BEDZIEFOOTER
            </div>
        {sidebarLinks.map((item) =>
      {
          const isActive = 
          pathname === item.route || pathname.startsWith(`${item.route}/`);
        return (
          <Link href={item.route} key={item.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
            
            <div className="relative size-6">
              <Image src={item.imgURL}
                     alt={item.label}
                     fill
                     className={cn({'brightness-[3] invert-0':isActive})}
               />
            </div>
            <p className={cn('sidebar-label', { '!text-white': isActive })}>
  {item.label}
</p>

          </Link>
        )
      })}
  </SheetContent>
</Sheet>

   </section>
  )
}

export default MobileNav
