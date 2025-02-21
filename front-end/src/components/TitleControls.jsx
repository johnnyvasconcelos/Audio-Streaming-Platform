import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
const TitleControls = ({ title, path, carouselId, visibleItems, totalItems }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [currentMargin, setCurrentMargin] = useState(0);
  const moveLeft = () => {
    const carousel = document.getElementById(carouselId);
    const itemsArea = carousel.querySelector('.items-area');
    if (!itemsArea) return;
    const margin = parseInt(window.getComputedStyle(itemsArea).marginLeft.replace('px', '')) || 0;
    if (margin < 0) {
      setCurrentMargin(margin + 280);
      itemsArea.style.marginLeft = `${margin + 280}px`;
    }
  };
  const moveRight = () => {
    const carousel = document.getElementById(carouselId);
    const itemsArea = carousel.querySelector('.items-area');
    if (!itemsArea) return;
    const margin = parseInt(window.getComputedStyle(itemsArea).marginLeft.replace('px', '')) || 0;
    let maxMargin;
    if (isHome) {
      maxMargin = -(visibleItems - 4) * 280;
    } else {
      maxMargin = -(totalItems - visibleItems) * 280;
    }
    if (margin > maxMargin) {
      setCurrentMargin(margin - 280);
      itemsArea.style.marginLeft = `${margin - 280}px`;
    }
  };
  return (
    <>
      <div className="title-container flex">
        <div className="title-area flex start">
          <h2>{title}</h2>
          {isHome && <Link className="main__link btn" to={path}>view all</Link>}
        </div>
        <div className="carousel__controls flex end">
          <span className={currentMargin === 0 ? 'invisible' : ''} onClick={moveLeft}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
          <span className={currentMargin <= -(isHome ? visibleItems - 4 : totalItems - visibleItems) * 280 ? 'invisible' : ''} onClick={moveRight}>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </div>
      </div>
    </>
  );
};
export default TitleControls;