import React from 'react';
import { Link } from 'react-router-dom';

const menuTranslations = {
  English: {
    home: 'Home',
    movies: 'Movies',
    tvShows: 'TV Shows',
    sports: 'Sports',
    live: 'Live'
  },
  French: {
    home: 'Accueil',
    movies: 'Films',
    tvShows: 'Séries',
    sports: 'Sports',
    live: 'Direct'
  },
  German: {
    home: 'Startseite',
    movies: 'Filme',
    tvShows: 'Fernsehsendungen',
    sports: 'Sport',
    live: 'Live'
  },
  Russian: {
    home: 'Главная',
    movies: 'Фильмы',
    tvShows: 'Телешоу',
    sports: 'Спорт',
    live: 'Прямой эфир'
  },
  Spanish: {
    home: 'Inicio',
    movies: 'Películas',
    tvShows: 'Programas de TV',
    sports: 'Deportes',
    live: 'En Vivo'
  },
  Chinese: {
    home: '主页',
    movies: '电影',
    tvShows: '电视剧',
    sports: '体育',
    live: '直播'
  }
};

const Menu = ({ currentLanguage }) => {
  const menuItems = menuTranslations[currentLanguage];

  return (
    <div className="menu">
      <ul>
        <li><Link to="/">{menuItems.home}</Link></li>
        <li><Link to="/movies">{menuItems.movies}</Link></li>
        <li><Link to="/tv-shows">{menuItems.tvShows}</Link></li>
        <li><Link to="/sports">{menuItems.sports}</Link></li>
        <li><Link to="/live">{menuItems.live}</Link></li>
      </ul>
    </div>
  );
};

export default Menu;
