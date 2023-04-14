import React from 'react';
import styles from './About.module.css'
import Service from './components/service';
import embalar from './embalar.jpg';
import desmontaje from './desmontaje.jpg';
import transportamos from './carga.webp';
import Carousel from '../Carrousel/Carrousel';
import classNames from 'classnames';

export const ABOUT_SECTION_ID = 'about-section';

export default function About() {
  return (
    <div id={ABOUT_SECTION_ID} className={classNames(styles.aboutSection, "section")}>
      <div data-aos="fade-left" className={styles.aboutSectionTitle}>NUESTROS SERVICIOS</div>
      <div data-aos="fade-left" className={styles.aboutDetails}>
        <Service imgUrl={embalar} title={'EMBALAMOS'} description={'Embalamos todos tus contenidos y muebles, con los mejores materiales para que todas tus pertenencias estén perfectas para realizar la mudanza.'} />
        <Service imgUrl={desmontaje} title={'DESMONTAMOS'} description={'Desmontamos todos los muebles que sean necesarios para su transporte, y los protegemos con cuidado para su traslado.'} />
        <Service imgUrl={transportamos} title={'TRANSPORTAMOS'} description={'Cargamos el camión y lo transportamos todo hasta tu nueva residencia. Una vez allí, colocamos y montamos los muebles en tu nuevo espacio.'} />
      </div>
    </div>
  )
}
