import React from 'react';
import { fallDown as Menu } from 'react-burger-menu'

const SideMenu = ({
  openMenu,
  setOpenMenu,
  setHowToPlayModal,
  handleTestConnection
}: any) => {
  const handleClick = (link: string) => {
    switch (link) {
      case 'howToPlay':
        setHowToPlayModal(true)
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
      <p onClick={() => handleClick('testConnection')}>About</p>
      <p onClick={() => handleClick('testConnection')}>Test conection with server</p>
    </Menu>
  )
}

export default SideMenu;
