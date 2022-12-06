import React, { useState } from 'react';
import styles from '../../styles/iconStyles';

const AboutIcon = (
  { media }: {
    media: {
      link: string,
      styleIcon: React.CSSProperties,
      styleHover: React.CSSProperties,
    }
  }
) => {
  const { link, styleIcon, styleHover } = media
  const [iconStyle, setIconStyle] = useState(styleIcon)
  const handleMouse = (style: React.CSSProperties) => setIconStyle(style);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
      <input
        onMouseOver={() => handleMouse(styleHover)}
        onMouseLeave={() => handleMouse(styleIcon)}
        style={{ ...iconStyle, ...styles.icon }}
        type="button"
      />
    </a>
  )
}

export default AboutIcon;
