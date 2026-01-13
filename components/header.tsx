'use client';
import * as React from 'react';
import Link from 'next/link';
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeToggle from './theme-toggle';
import Image from 'next/image';
import logo from '@/public/logo.png';

export default function Header() {
  const headerItems = [
    { label: 'Ellie Lok', href: '/' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Gradient background overlay */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/90 via-white/50 to-transparent dark:from-gray-900/90 dark:via-gray-900/50 dark:to-transparent z-50 pointer-events-none" />

      {/* Header content */}
      <div className="flex flex-col fixed top-2 left-5 right-5 xl:left-1/15 xl:right-1/15 z-50">
        <div className="flex flex-row justify-between mb-3">
        <div className="order-first flex flex-row gap-10 ">
          <a href="/" className="flex flex-row items-center gap-3">
            <Image src={logo} alt="Logo" width={30} height={30} className="" />
            <div className="text-black dark:text-white">Ellie Lok</div>
            <div className="text-gray-500 dark:text-white">Studio</div>
          </a>

          <NavigationMenu className="">
            <NavigationMenuList className="flex-wrap">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} !bg-transparent !text-black dark:!text-white hover:!bg-white dark:hover:!bg-black focus:!bg-white dark:focus:!bg-black`}
                >
                  <Link href="/docs">Blog</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuTrigger className="!bg-transparent !text-black dark:!text-white hover:!bg-white dark:hover:!bg-black focus:!bg-white dark:focus:!bg-black">
                  Editions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      <NavigationMenuLink
                        asChild
                        className="!bg-transparent !text-black dark:!text-white hover:!bg-white dark:hover:!bg-black focus:!bg-white dark:focus:!bg-black"
                      >
                        <Link href="/history/2510-halloween">
                          <div className="font-medium">Halloween '25</div>
                          <div className="text-muted-foreground">
                            🎃 Made for the spooky season.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        asChild
                        className="!bg-transparent !text-black dark:!text-white hover:!bg-white dark:hover:!bg-black focus:!bg-white dark:focus:!bg-black"
                      >
                        <Link href="#">
                          <div className="font-medium">Art Nouveau '26</div>
                          <div className="text-muted-foreground">
                            💐 Story behind the edition
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-row order-last">
          <NavigationMenu>
            <NavigationMenuList className="flex-wrap">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} !bg-transparent !text-black dark:!text-white hover:!bg-white dark:hover:!bg-black focus:!bg-white dark:focus:!bg-black`}
                >
                  <Link href="/docs">Snapshots</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
        </div>
      </div>
      </div>
    </>
  );
}
