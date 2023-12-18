import React from 'react';
import styles from './FeedPhotoItem.module.css';
import Image from '../helper/Image';

export default function FeedPhotoItem({ foto, setModalPhoto }) {

  function handleClick() {
    setModalPhoto(foto);
  }
  
  return (
    <li className={styles.foto} onClick={handleClick}>
      <Image src={foto.src} alt={foto.title}/>
      <span className={styles.visualizacao}>{foto.acessos}</span>
    </li>
  )
}
