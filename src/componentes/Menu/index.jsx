import { useState } from 'react';
import styles from './menu.module.css';
import { Link } from 'react-router-dom';
import { List } from 'phosphor-react';

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  let menuClass = styles.menu;
  let itemClass = styles.item;
  let linkClass = styles.link;
  let homeClass = styles.home; // Alteração aqui

  if (open) {
    menuClass = styles.menuOpen;
    itemClass = styles.itemOpen;
    linkClass = styles.linkOpen;
    homeClass = styles.homeOpen; // Alteração aqui
  }

  return (
    <nav>
      <List size={32} onClick={handleMenu} className={homeClass} /> {/* Alteração aqui */}
      <ul className={menuClass}>
        <li className={itemClass}>
          <Link className={linkClass} to="/">Home</Link>
        </li>
        <li className={itemClass}>
          <Link className={linkClass} to="/sobre">Sobre</Link>
        </li>
        <li className={itemClass}>
          <Link className={linkClass} to="/comentarios">Comentários</Link>
        </li>
        <li className={itemClass}>
          <Link className={linkClass} to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;