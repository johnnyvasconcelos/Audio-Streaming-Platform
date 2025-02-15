import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
const MusicItem = () => {
  return (
                <>
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
                </>
  )
}

export default MusicItem