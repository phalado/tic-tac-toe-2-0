import React, { useState } from 'react';
import HeaderInterface from '../interfaces/HeaderInterface';
import styles from "../styles/appStyles";
import HowToPlayModal from './Modals/HowToPlayModal';
import SideMenu from './SideMenu';

const Header = ({ howToPlayModal, setHowToPlayModal, handleTestConnection }: HeaderInterface) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Tic-Tac-Toe 2.0</h1>
      <img
        style={styles.menuIcon}
        src='./assets/images/hamburguer-icon-white.png'
        alt='Menu icon'
        onClick={() => setOpenMenu(!openMenu)}
      />
      <div style={styles.menuContainer} id="header">
        <SideMenu
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          setHowToPlayModal={setHowToPlayModal}
          handleTestConnection={handleTestConnection}
        />
      </div>
      <HowToPlayModal howToPlayModal={howToPlayModal} setHowToPlayModal={setHowToPlayModal} />
    </header>
  )
}

export default Header
