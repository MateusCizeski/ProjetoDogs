import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as Adicionar } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../hooks/useMedia';

export default function UserHeaderNav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const navigate = useNavigate();
  const pathname = useLocation();

  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  function handleLogout() {
    userLogout();
    navigate('/login');
  }
  return (
    <>
      { mobile && <button aria-label='Menu' className={`${styles.mobileButton} ${mobileMenu && styles.mobileActive}`} onClick={() => setMobileMenu(!mobileMenu)}></button> }
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end>
          <MinhasFotos /> 
          {mobile && 'Minhas fotos'}
        </NavLink>

        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>

        <NavLink to="/conta/postar">
          <Adicionar />
          {mobile && 'Adicionar'}
        </NavLink>
      
        <button onClick={handleLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}
