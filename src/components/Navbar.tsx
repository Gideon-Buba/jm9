import React from 'react';
import NavbarContents from "./NavbarContents";

const Navbar: React.FC = () => {
  return (
    <div className='flex justify-around bg-gray-800 py-8'>
      <NavbarContents text='Home' />
      <NavbarContents text='Events' />
      <NavbarContents text='Gallery' />
      <NavbarContents text='Support' />
      <NavbarContents text='Media' />
      <NavbarContents text='Apply' />
      <NavbarContents text='Contact' />
    </div>
  );
}

export default Navbar;
