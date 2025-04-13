import {NavLink} from "react-router-dom";
import { useEffect, useState } from 'react';
import "./style.css";

const MyComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const burgerBtn = document.querySelector('.burger-btn');
    const burgerMenu = document.querySelector('.burger-menu');

    const handleClick = () => {
      setIsMenuOpen((prevState) => !prevState);
    };

    burgerBtn.addEventListener('click', handleClick);

    const links = burgerMenu.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        setIsMenuOpen(false);
      });
    });

    return () => {
      burgerBtn.removeEventListener('click', handleClick);
      links.forEach((link) => {
        link.removeEventListener('click', () => {
          setIsMenuOpen(false);
        });
    });
  };
}, []);

  return (
    <div className="burger">
      <button className="burger-btn"></button>
      <nav className={`burger-menu ${isMenuOpen ? 'show' : ''}`}>
        <NavLink to="/" className="burger-link">
          Главная
        </NavLink>
        <NavLink to="/aboutme" className="burger-link">
          Обо мне
        </NavLink>
        <NavLink to="/myskills" className="burger-link">
          Мои навыки
        </NavLink>
        <NavLink to="/projects" className="burger-link">
          Мои работы
        </NavLink>
      </nav>
    </div>
  );
};

export default MyComponent;
