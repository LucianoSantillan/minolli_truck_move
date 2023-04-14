import React from 'react';
import styles from './Banner.module.css';
import Button from '@mui/material/Button';
import { scroller as scroll } from 'react-scroll';
import Image from 'next/image';
import lucianoPic from './yo.jpg';
import mudanza from './mudanza.jpg';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import classNames from 'classnames';

const handleClick = () => {
  scroll.scrollTo('about-section', {
    duration: 1000,
    delay: 0, // Delay before scrolling starts
    smooth: 'easeInOutQuint',
  });
};

export default function Banner() {

  return (
    <div className={classNames(styles.banner, "section")}>
      <div className={styles.bannerContent}>
        <Image
          className={styles.backgroundImage}
          src={mudanza}
          alt="Picture of the author"
          placeholder="blur"
        />
        <div data-aos="fade-up-left" className={styles.bannerTextAndBtn}>
          <Logo />
          {/* {isMobile && <div className={styles.movingText}>MUDANZAS EN BARCELONA</div>} */}
          <div className={styles.itemsContainer}>
            <div><span className={styles.circle}></span><span className={styles.itemText}>Equipo de trabajo serio</span></div>
            <div><span className={styles.circle}></span><span className={styles.itemText}>Empaquetado de seguridad</span></div>
            <div><span className={styles.circle}></span><span className={styles.itemText}>Montaje de muebles</span></div>
          </div>
          <div className={styles.buttonsContainer}>
            <Button
              variant="contained"
              startIcon={<PhoneIcon />}
              className={styles.phoneButton}
            >
              +34 123 45 67 89
            </Button>
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              className={styles.whatsappButton}
            >
              +34 987 65 43 21
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Logo: React.FC = () => {

  return (<div className={styles.logo}>
    <LocalShippingIcon className={styles.logoIcon} />
    <span className={styles.mudanzasLogoText}>MUDANZAS</span>
    <span className={styles.minolliLogoText}>MINOLLI</span>
  </div>)

}
