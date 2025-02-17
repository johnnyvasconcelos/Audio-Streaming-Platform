import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom'
const TitleControls = ({title, path}) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  return (
    <>
            <div className="title-container flex">
                <div className="title-area flex start">
                  <h2>{title}</h2>
                  {
                    isHome ?
                      <Link className="main__link btn" to={path}>visualizar tudo</Link>
                     :
                    <>
                    </>
                  }
                </div>
                <div className="carousel__controls flex end">
                  <span className="invisible"><FontAwesomeIcon icon={faAngleLeft} /></span>
                  <span><FontAwesomeIcon icon={faAngleRight} /></span>
                </div>
            </div>
    </>
  )
}

export default TitleControls