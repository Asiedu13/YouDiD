import React from 'react'
import Image from 'next/image';

const MainHeader = () => {
  return (
    <header className="w-[100vw] shadow-xl mb-9 h-20 flex justify-around sm:flex-row">
      <div className="flex items-center  px-4 text-xl">
        <Image src={"/media/imgs/appIcon.png"} width={40} height={40} alt='App Icon' />
        <h1 className="ml-[10px] font-bold">YouDiD</h1>
      </div>
      <nav className="flex border-2 flex bg-white-200 w-[590px]">
        <ul className="flex flex-1 w-full p-3 h-full flex-col md:flex-row items-center justify-around">
          <li>Home</li>
          <li>Events</li>
          <li>Feedback</li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader