'use client';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import ThemeToggle from './theme-toggle';
import Image from 'next/image';
import logo from '@/public/logo.png';


export default function Header() {
  const headerItems = [
    { label: 'Ellie Lok', href:'/'},
    { label: 'Contact', href:'/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 
 ">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between" >
      <div className="flex justify-between  items-center ">
        <Image
         src={logo}
          alt="Logo"
          width={40}
          height={40}
          className=""
        />
        

        {headerItems.map((item) => (
        <a
          key={item.label}
          href={`${item.href.toLowerCase()}`}
          className="text-black hover:text-blue transition-colors dark:text-white"
        >
          {item.label}
        </a>
      ))}
      </div>

      <div className='flex justify-between items-center'>
        <ThemeToggle />
      </div>
      </div>
      </div>
    </header>
  );
}
