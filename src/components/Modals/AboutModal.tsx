import React from "react";
import Modal from "react-modal";
import AboutIcon from "./AboutIcon"

import styles from "../../styles/aboutModalStyles"
import iconStyles from "../../styles/iconStyles"

const AboutModal = ({ aboutModal, setAboutModal }: any) => {
  Modal.setAppElement("#root");

  const contactIcons: object[] = [
    {
      link: 'https://www.linkedin.com/in/raphael-cordeiro/',
      styleIcon: iconStyles.linkedinIcon,
      styleHover: iconStyles.linkedinIconHover
    },
    {
      link: 'https://github.com/phalado/',
      styleIcon: iconStyles.githubIcon,
      styleHover: iconStyles.githubIconHover
    },
    {
      link: 'https://twitter.com/Phalado',
      styleIcon: iconStyles.twitterIcon,
      styleHover: iconStyles.twitterIconHover
    },
    {
      link: 'https://medium.com/@phalado',
      styleIcon: iconStyles.mediumIcon,
      styleHover: iconStyles.mediumIconHover
    },
  ]

  return (
    <div>
      <Modal
        isOpen={aboutModal}
        style={styles}
        contentLabel="Game Over"
      >
        <img
          style={styles.xIcon}
          src={'./assets/images/xIcon.png'}
          alt="Close modal"
          onClick={() => setAboutModal(false)}
          title="Close Modal"
        />
        <h1 style={styles.title}>About Tic-Tac-Toe 2.0</h1>
        <div>
        <p style={styles.paragraph}>Important: This game is not responsible. I'll work on it in the future.</p>
          <p style={styles.paragraph}>
            This game was developed by
            {' '}
            <a style={styles.link} href="https://phalado.tech" target="_blank" rel="noreferrer">Phalado</a>
          </p>
          <img
            src="./assets/images/phalado-tech-icon.png"
            alt="Phalado Tech Icon"
            style={styles.bigIcon}
          />
          <p style={styles.paragraph}>Check my social medias</p>
          <div style={styles.iconContainer}>
            {contactIcons.map((media: any) => <AboutIcon media={media} />)}
          </div>
          <p style={styles.paragraph}>Or send me a "hi" by email: phalado@gmail.com</p>
        </div>
        <div>
        <p style={styles.paragraph}>
          The idea behind the new rules came from this
          {' '}
          <a style={styles.link} href="https://www.youtube.com/shorts/MIKh7FGeC44" target="_blank" rel="noreferrer">video</a>.
        </p>
        </div>
      </Modal>
    </div>
  )
}

export default AboutModal;
