import React from 'react';
import { fallDown as Menu } from 'react-burger-menu'

const SideMenu = ({ openMenu, setOpenMenu }: any) => {
  return (
    <Menu
      customBurgerIcon={false}
      isOpen={openMenu}
      outerContainerId={ "header" }
      right
    >
      <p>How to play</p>
      <p>About</p>
      <p>Test conection with server</p>
    </Menu>
  )
}

export default SideMenu;
