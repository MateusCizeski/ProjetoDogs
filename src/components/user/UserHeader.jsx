import React, { useEffect, useState } from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';


export default function UserHeader() {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch(pathname) {
      case '/conta/postar':
          setTitle('Poste sua foto');
          break;
      case '/conta/estatisticas':
          setTitle('Estatísticas');
          break;
      default:
        setTitle('Minha conta');
    }
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}
