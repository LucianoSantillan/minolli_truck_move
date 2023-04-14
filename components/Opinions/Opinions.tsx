import React from 'react';
import styles from './Opinions.module.css'
import Carousel from '../Carrousel/Carrousel';

export const ABOUT_SECTION_ID = 'about-section';

export default function Opinions() {
  return (
    <div className={styles.opinions}>
      <Carousel />
    </div>
  )
}
