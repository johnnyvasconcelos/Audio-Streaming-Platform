import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
const Main = () => {
  return (
    <>
    <section className="main section space container flex column">
        <div class="title-container flex">
            <div className="title-area flex start">
              <h2>Artistas</h2>
              <a className="main__link btn" href="#">visualizar tudo</a>
            </div>
            <div className="carousel__controls flex end">
              <span className="invisible"><FontAwesomeIcon icon={faAngleLeft} /></span>
              <span><FontAwesomeIcon icon={faAngleRight} /></span>
            </div>
        </div>
        <div className="items">
          <div className="items-area  flex">
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/0.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/1.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Amo Noite de Chuva com Todas as Forças</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/2.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/3.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/4.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/5.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/6.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/7.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/8.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/9.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          </div>
        </div>
    </section>
    <section className="main space-min section container flex column">
        <div class="title-container flex">
            <div className="title-area flex start">
              <h2>Músicas Populares</h2>
              <a className="main__link btn" href="#">visualizar tudo</a>
            </div>
            <div className="carousel__controls flex end">
            <span className="invisible"><FontAwesomeIcon icon={faAngleLeft} /></span>
            <span><FontAwesomeIcon icon={faAngleRight} /></span>
            </div>
        </div>
        <div className="items">
          <div className="items-area  flex">
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/0.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/1.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/2.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/3.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/4.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/5.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/6.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/7.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/8.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          <a href="#" className="music__item item">
            <div class="image__item">
              <img src="/src/assets/images/albums/9.jpg" alt="ícone" />
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            <div className="text__item">
              <h3>Music Name</h3>
              <h3>Artist</h3>
            </div>
          </a>
          </div>
        </div>
    </section>
    </>
  )
}
export default Main