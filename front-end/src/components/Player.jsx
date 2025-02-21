import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { songsArray } from '../assets/database/songs';
import { artistArray } from '../assets/database/artists';
const Player = () => {
    const { id } = useParams();
    const songIndex = songsArray.findIndex((song) => song._id === id);
    const songObj = songsArray[songIndex];
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
    useEffect(() => {
        if (audioPlayer.current) {
            audioPlayer.current.load();
            if (isPlaying) {
                audioPlayer.current.play();
            }
        }
    }, [songObj]);
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
    return (
        <section className="play__details">
            <div className="container flex">
            <Link to={`/artist/${artistOb._id}`} className="song__album">
                <img src={`/${artistOb.image}.webp`} alt={artistOb.name} />
            </Link>
            <div className="player flex column">
                <div className="buttons flex">
                    <Link
                        to={songIndex > 0 ? `/song/${songsArray[songIndex - 1]._id}` : '#'}
                        className="prev"
                        onClick={() => setIsPlaying(false)}
                    >
                        <FontAwesomeIcon icon={faBackward} />
                    </Link>
                    <span className="play">
                        <FontAwesomeIcon icon={isPlaying ? faCirclePause : faCirclePlay} onClick={playPause} />
                    </span>
                    <Link
                        to={songIndex < songsArray.length - 1 ? `/song/${songsArray[songIndex + 1]._id}` : '#'}
                        className="next"
                        onClick={() => setIsPlaying(false)}
                    >
                        <FontAwesomeIcon icon={faForward} />
                    </Link>
                </div>
                <div className="bar__progress flex">
                    <span className="music__initial">{formatTime(currentTime)}</span>
                    <div className="bar" ref={progressBar}></div>
                    <span className="music__time">{songObj.duration}</span>
                </div>
                <audio ref={audioPlayer} className="audio__player" controls>
                    <source src={`/musics/${songObj.audio}.mp3`} type="audio/mpeg" />
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
}
export default Player