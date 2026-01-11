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
import TableOfContents from '@/components/table-of-contents';

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
                  <Link href="/docs">Docs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuTrigger className="!bg-transparent !text-black dark:!text-white hover:!bg-white dark:hover:!bg-black focus:!bg-white dark:focus:!bg-black">
                  List
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      <NavigationMenuLink
                        asChild
                        className="!bg-transparent !text-black dark:!text-white hover:!bg-white dark:hover:!bg-black focus:!bg-white dark:focus:!bg-black"
                      >
                        <Link href="#">
                          <div className="font-medium">Components</div>
                          <div className="text-muted-foreground">
                            Browse all components in the library.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        asChild
                        className="!bg-transparent !text-black dark:!text-white hover:!bg-white dark:hover:!bg-black focus:!bg-white dark:focus:!bg-black"
                      >
                        <Link href="#">
                          <div className="font-medium">Documentation</div>
                          <div className="text-muted-foreground">
                            Learn how to use the library.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        asChild
                        className="!bg-transparent !text-black dark:!text-white hover:!bg-white dark:hover:!bg-black focus:!bg-white dark:focus:!bg-black"
                      >
                        <Link href="#">
                          <div className="font-medium">Blog</div>
                          <div className="text-muted-foreground">
                            Read our latest blog posts.
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
                  <Link href="/docs">Docs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
        </div>
      </div>
      <div className="mb-4">
        <div className="font-bold text-gray-900 dark:text-white/50 tracking-tight">
          The
          <br />
          ArtNouveau
          <br />
          Edition
        </div>
      </div>
      {/* Table of Contents */}
      <div>
      <TableOfContents />
      </div>
    </div>
  );
}
