'use client';
import * as React from 'react';
import Link from 'next/link';
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react';
import { Mail, Phone, Copy, Check, Github } from 'lucide-react';
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
import { ArrowUpRight } from 'lucide-react';

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
            <div className="font-semibold text-black dark:text-white " >Ellie L.</div>
            <div className="font-semibold text-gray-500 dark:text-gray-400">Developer</div>
          </a>

          <NavigationMenu className="">
            <NavigationMenuList className="flex-wrap">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} !bg-transparent !text-black dark:!text-white hover:!bg-white dark:hover:!bg-black focus:!bg-white dark:focus:!bg-black`}
                >
                  <Link href="/blog">Blog</Link>
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
                        <Link href="/history/2510-halloween" target="_blank" rel="noopener noreferrer" className="group">
                          <div className="inline-flex items-center gap-1 font-semibold group-hover:text-blue-600 dark:group-hover:text-[#93f5fa] transition-colors">
                            Halloween '25
                            <ArrowUpRight className="w-5 h-5 transition-all duration-200 stroke-current group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-600 dark:group-hover:text-[#93f5fa]" />
                          </div>
                          <div className="text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-[#93f5fa] transition-colors">
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
                            💐 Story behind this edition. Under construction.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>M
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-row order-last">
          <NavigationMenu>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} !bg-transparent !text-black dark:!text-white hover:!bg-white dark:hover:!bg-black focus:!bg-white dark:focus:!bg-black`}
                >
                  <Link href="/snapshots">Snapshots</Link>
                </NavigationMenuLink>
          </NavigationMenu>
          <a
              href="https://github.com/ellielok"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity p-2 
               hover:bg-white dark:hover:bg-black rounded-sm"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-white transition-colors" />
            </a>
            <a
              href="https://github.com/ellielok"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity p-2 
               hover:bg-white dark:hover:bg-black rounded-sm"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-white transition-colors" />
            </a>
          <ThemeToggle />

        </div>
      </div>
      </div>
    </>
  );
}
