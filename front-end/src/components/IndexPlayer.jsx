import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { songsArray } from '../assets/database/songs';
import { artistArray } from '../assets/database/artists';

const IndexPlayer = ({cls}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const songObj = songsArray[currentIndex];
    const artistOb = artistArray.find((artist) => artist.name === songObj.artist);

    const audioPlayer = useRef(null);
    const progressBar = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
        const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    // Atualiza a música quando o índice de música mudar
    useEffect(() => {
        if (audioPlayer.current) {
            audioPlayer.current.load();
            if (isPlaying) {
                audioPlayer.current.play();
            }
        }
    }, [currentIndex]);

    useEffect(() => {
        const handleEnded = () => setIsPlaying(false);
        if (audioPlayer.current) {
            audioPlayer.current.addEventListener('ended', handleEnded);
        }
        return () => {
            if (audioPlayer.current) {
                audioPlayer.current.removeEventListener('ended', handleEnded);
            }
        };
    }, []);

    useEffect(() => {
        const updateProgress = () => {
            if (audioPlayer.current) {
                const current = audioPlayer.current.currentTime;
                const duration = audioPlayer.current.duration || 1;
                setCurrentTime(current);
                setProgress((current / duration) * 100);
            }
        };
        if (audioPlayer.current) {
            audioPlayer.current.addEventListener('timeupdate', updateProgress);
        }
        return () => {
            if (audioPlayer.current) {
                audioPlayer.current.removeEventListener('timeupdate', updateProgress);
            }
        };
    }, []);

    useEffect(() => {
        if (progressBar.current) {
            progressBar.current.style.setProperty('--PlayerProgress', `${progress}%`);
        }
    }, [progress]);

    const playPause = () => {
        if (isPlaying) {
            audioPlayer.current.pause();
        } else {
            audioPlayer.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const goToPreviousSong = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0)); // Não permite índice negativo
    };

    const goToNextSong = () => {
        setCurrentIndex((prevIndex) => (prevIndex < songsArray.length - 1 ? prevIndex + 1 : songsArray.length - 1)); // Não permite ultrapassar o último
    };

    return (
        <section className={`play__details ${cls}`}>
            <div className="container flex">
                <div className="song__album">
                    <img src={`/src/assets/images/artists/${artistOb.image}.webp`} alt={artistOb.name} />
                </div>
                <div className="player flex column">
                    <div className="buttons flex">
                        <span className="prev" onClick={goToPreviousSong}>
                            <FontAwesomeIcon icon={faBackward} />
                        </span>
                        <span className="play">
                            <FontAwesomeIcon icon={isPlaying ? faCirclePause : faCirclePlay} onClick={playPause} />
                        </span>
                        <span className="next" onClick={goToNextSong}>
                            <FontAwesomeIcon icon={faForward} />
                        </span>
                    </div>
                    <div className="bar__progress flex">
                        <span className="music__initial">{formatTime(currentTime)}</span>
                        <div className="bar" ref={progressBar}></div>
                        <span className="music__time">{songObj.duration}</span>
                    </div>
                    <audio ref={audioPlayer} className="audio__player" controls>
                        <source src={`/src/assets/musics/${songObj.audio}.mp3`} type="audio/mpeg" />
                        Seu navegador não suporta o elemento de áudio.
                    </audio>
                </div>
                <div className="song__name">
                    <span className="title">
                        <h3>{songObj.name}</h3>
                    </span>
                    <span>
                        <h4>{songObj.artist}</h4>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default IndexPlayer;
