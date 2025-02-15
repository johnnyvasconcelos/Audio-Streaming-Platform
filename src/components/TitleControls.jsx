import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
const TitleControls = ({title}) => {
  return (
    <>
            <div class="title-container flex">
                <div className="title-area flex start">
                  <h2>{title}</h2>
                  <a className="main__link btn" href="#">visualizar tudo</a>
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