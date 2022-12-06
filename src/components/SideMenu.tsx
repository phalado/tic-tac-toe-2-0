import React from 'react';
import { fallDown as Menu } from 'react-burger-menu'
import SideMenuInterface from "../interfaces/SideMenuInterface";

const SideMenu = ({
  openMenu,
  setOpenMenu,
  setHowToPlayModal,
  handleTestConnection,
  aboutModal,
  setAboutModal
}: SideMenuInterface) => {
  const handleClick = (link: string) => {
    switch (link) {
      case 'howToPlay':
        setHowToPlayModal(true)
        break;
      case 'about':
        setAboutModal(true)
        break;
      case 'testConnection':
        handleTestConnection()
        break;
      default:
        break;
    }

    setOpenMenu(false)
  }

  return (
    <Menu
      customBurgerIcon={false}
      isOpen={openMenu}
      outerContainerId={ "header" }
      disableAutoFocus
      right
    >
      <p onClick={() => handleClick('howToPlay')}>How to play</p>
      <p onClick={() => handleClick('about')}>About</p>
      <p onClick={() => handleClick('testConnection')}>Test conection with server</p>
    </Menu>
  )
}

export default SideMenu;
