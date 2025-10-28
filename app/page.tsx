import { ReactNode } from 'react';
import Header from '@/component/header';

import hl from '@/utils/highLight';
import RightColumn from '@/component/right-column';
import { LeftColumn } from '@/component/left-column';

export default function Home() {
  return (

    // REVIEW: I see you want to make sure that
    // 1. You website is one column in small screen, and two columns in large
    //    screen.
    // 2. You want to make sure that in a super width screen, there are two
    //    "margin" columns on the left and right.
    //
    // You implementation is adding a "Left space" <div> and a "Right space"
    // <div>, which only show in super width screen.
    //
    // I have a better idea.
    //
    // First you need to add a outmost <div> with className "w-full px-10", and
    // put the whole content inside it.
    //    - "w-full" means the outmost <div> will take the full width of the
    //      screen.
    //    - "px-10" means the outmost <div> will have 10px padding on the left
    //      and right, no matter the screen size. This makes sure your content
    //      won't touch the edge of the screen.
    //
    // The you can have another inner <div> with className 
    // "flex flex-col lg:flex-row mx-auto max-w-2xl gap-3", 
    // and put the content inside it.
    //    - "flex flex-col lg:flex-row" means the this <div> will be a column in
    //      small screen (top/bottom layout), and a row in large screen
    //      (left/right layout).
    //    - "mx-auto" means the inner <div> will be centered horizontally. 
    //      "mx-auto" is equivalent to "ml-auto mr-auto", which means the left and 
    //      right margin will be auto set.
    //    - "max-w-7xl" means the inner <div> will have a maximum width of
    //      1280px.
    //    - "gap-3" means the inner <div> will have 3px gap between the
    //      children (left column and right column).
    //
    //
    // The "Left space" and "Right space" are not needed anymore. So in the end,
    // you will get something like this:
    //
    // <div className="w-full px-10">
    //   <div className="flex flex-col lg:flex-row mx-auto max-w-screen-xl gap-3">
    //     {/* Left Column  */}
    //     <LeftColumn></LeftColumn>
    //     {/* Right Column */}
    //     <div className="...">...</div>
    //   </div>
    // </div>
    // 
    // This code is much cleaner and easier to understand.
    <div>
    <div
      className="flex flex-col 
                    px-8 py-20
                    lg:flex-row lg:px-0 lg:py-0
                    gap-3"
    >
      {/* Left Space */}
      <div className="hidden lg:block xl:flex-1"></div>

      {/* Left Column  */}
      <LeftColumn></LeftColumn>

      {/* Right Column */}
      <RightColumn></RightColumn>
      
      {/* Right Space */}
      <div className=" hidden xl:block flex-1 "></div>
    </div>
    </div>
  );
}
