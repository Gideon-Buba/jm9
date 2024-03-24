import React from 'react';

interface NavbarContentsProps {
  text: string;
  active?: boolean;
}

const NavbarContents: React.FC<NavbarContentsProps> = ({ active, text }) => {
  return (
    <div className={`sidebar-contents ${active && 'sidebar-contents-active'}`}>
      <p className="text-white font-extralight hover:bg-teal-500 py-2 px-4 ">{text}</p>
    </div>
  );
};

export default NavbarContents;
