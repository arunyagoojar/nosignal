'use client'
import dynamic from 'next/dynamic';
import React, { useState, useRef } from 'react';
import Arrow from "./arrow.svg";

import Image from "next/image";
import Bluebell from "./img/Bluebell.jpg"
import Nightingale from "./img/Nightingale.jpg"
import Snow from "./img/snow.jpg"
import Interstellar from "./img/interstellar.jpg"
import Cosmicj from "./img/cosmicj.jpg"
import Cosmos from "./img/cosmos.jpg"
import SkySpace from "./img/sky-space.jpg"
import CentralPerk from "./img/CentralPerk.jpg"
import Winterfell from "./img/Winterfell.jpg"
import HOD from "./img/HOD.jpeg"
import Castamere from "./img/Castamere.jpg"
import Witcher from "./img/witcher.jpg"
import Dune from "./img/dune.jpg"
import Time from "./img/time.jpg"
import Rdr2 from "./img/rdr2.jpg"
import Rdr from "./img/rdr.jpeg"
import Forest from "./img/forest.jpg"
import BlueLagoon from "./img/BlueLagoon.jpg"
import Vishnu from "./img/vishnu.jpeg"
import Tibet from "./img/tibet.jpg"
import Nirvana from "./img/nirvana.jpeg"
import Shiva from "./img/shiva.jpeg"
import Atlantis from "./img/atlantis.png"
import Lake from "./img/lake.jpg"
import Morning from "./img/morning.jpg"



const DynamicReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
});

export default function Home() {
  const [uiOpacity, setUiOpacity] = useState({
    bgOpacity: 1,
    textOpacity: 1,
  });

  const [volume, setVolume] = useState(0.7);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const [currentAudio, setCurrentAudio] = useState("https://www.youtube.com/watch?t=3674s&v=IsPBplWLImI");
  const [bgImage, setBgImage] = useState(Bluebell);
  const [currentZenTitle, setCurrentZenTitle] = useState("Bluebell Woods");
  const [currentZenText, setCurrentZenText] = useState("ashridge, uk");

  const cardData = [
    { title: "Bluebell Woods", image: Bluebell, zentitle: "Bluebell Woods", zentext: "ashridge, uk", audiofile: "https://www.youtube.com/watch?t=3674s&v=IsPBplWLImI" },
    { title: "Nightingale", image: Nightingale, zentitle: "Nightingale", zentext: "Bulgaria", audiofile: "https://www.youtube.com/watch?v=NK2_bcQcoD4" },
    { title: "Cafe", image: CentralPerk, zentitle: "Central Perk", zentext: "Central Perk", audiofile: "https://www.youtube.com/watch?v=2BQCIpmzssg" },
    { title: "Forest", image: Forest, zentitle: "Forest", zentext: "The Amazon", audiofile: "https://www.youtube.com/watch?v=Ur1WFs0UFPE" },
    { title: "Lakeshore", image: Lake, zentitle: "Lakeshore", zentext: "Mount Shuksan", audiofile: "https://www.youtube.com/watch?v=qRTVg8HHzUo" },
    { title: "Foggy Morning", image: Morning, zentitle: "Foggy Morning", zentext: "New England, USA", audiofile: "https://www.youtube.com/watch?v=FlsOxRzVd5k" },
    { title: "Blue Lagoon", image: BlueLagoon, zentitle: "Blue Lagoon", zentext: "Blue Lagoon, Iceland", audiofile: "https://www.youtube.com/watch?v=iOrpLtUr1u0" },
    { title: "Snow Blizzard", image: Snow, zentitle: "Snow Blizzard", zentext: "Rila NP, bulgaria", audiofile: "https://youtu.be/0fHaQdacCmM?si=eIJCU6lHpgVEPb2i" },
    { title: "Time", image: Time, zentitle: "Time", zentext: "Space", audiofile: "https://www.youtube.com/watch?v=FWCtZoaEnVw" },
    { title: "ॐ", image: Shiva, zentitle: "ॐ", zentext: "om", audiofile: "https://www.youtube.com/watch?v=TvQ1O8u3Mb8" },
    { title: "The Temple of Nirvana", image: Nirvana, zentitle: "The Temple of Nirvana", zentext: "Nirvana", audiofile: "https://www.youtube.com/watch?v=15tVFFGsI1E" },
    { title: "Sanctuary", image: Tibet, zentitle: "Sanctuary", zentext: "Tibet", audiofile: "https://www.youtube.com/watch?v=nqIAKW92TBM" },
    { title: "The Temple of Vishnu", image: Vishnu, zentitle: "The Temple of Vishnu", zentext: "Lord Vishnu", audiofile: "https://www.youtube.com/watch?v=kBGOxm61oHo" },
    { title: "Angels of Atlantis", image: Atlantis, zentitle: "Angels of Atlantis", zentext: "Atlantis", audiofile: "https://www.youtube.com/watch?v=taD3JFMovOA" },
    { title: "Interstellar", image: Interstellar, zentitle: "Interstellar", zentext: "Space", audiofile: "https://www.youtube.com/watch?v=5gO0xpY_Y3E" },
    { title: "Cosmic Journey", image: Cosmicj, zentitle: "Cosmic Journey", zentext: "Space", audiofile: "https://youtu.be/Bne_3PWw8I4?si=XICo7xo0bVXG0-Tk" },
    { title: "Written On The Sky", image: SkySpace, zentitle: "Written On The Sky", zentext: "Space", audiofile: "https://www.youtube.com/watch?v=GSL2MEcyQXQ" },
    { title: "Secrets of the Cosmos", image: Cosmos, zentitle: "Secrets of the Cosmos", zentext: "Space", audiofile: "https://www.youtube.com/watch?v=6hA1HQbF-rI" },
    { title: "Winterfell", image: Winterfell, zentitle: "Winterfell", zentext: "Game of thrones", audiofile: "https://youtu.be/_N-IREy7C9s?si=9gF3Ydl_tgqML7Xz" },
    { title: "Dragon Stone", image: HOD, zentitle: "Dragon Stone", zentext: "House of the dragon", audiofile: "https://www.youtube.com/watch?v=1lqIW0PLUPU" },
    { title: "The Rains of Castamere", image: Castamere, zentitle: "The Rains of Castamere", zentext: "Game of thrones", audiofile: "https://www.youtube.com/watch?v=K1K4QapTEgw" },
    { title: "The Heartlands", image: Rdr2, zentitle: "The Heartlands", zentext: "Red Dead Redemption 2", audiofile: "https://www.youtube.com/watch?v=c1fS_LRK_jA" },
    { title: "The Witcher", image: Witcher, zentitle: "The Witcher", zentext: "The Witcher", audiofile: "https://www.youtube.com/watch?v=9osre3R0LvA" },
    { title: "The Wild West", image: Rdr, zentitle: "The Wild West", zentext: "Red Dead Redemption 2", audiofile: "https://www.youtube.com/watch?v=npOiHBrSgV0" },
    { title: "Dune", image: Dune, zentitle: "DUNE", zentext: "DUNE", audiofile: "https://www.youtube.com/watch?v=hShxsAlJmfw" },
  ];

  const handleCardClick = (newImage, newZenTitle, newZenText, newAudio) => {
    setUiOpacity({ bgOpacity: 0, textOpacity: 0 });
    setTimeout(() => {
      setBgImage(newImage);
      setCurrentZenTitle(newZenTitle);
      setCurrentZenText(newZenText);
      setCurrentAudio(newAudio);
      setUiOpacity({ bgOpacity: 1, textOpacity: 1 });
    }, 500);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      if (playerRef && playerRef.current) {
        playerRef.current.seekTo(playerRef.current.getCurrentTime(), 'seconds');
      }
      setIsPlaying(true);
    }
  };

  return (
    <main className="mainbg">
      <Image className="bg" src={bgImage} alt="bg" priority style={{ opacity: uiOpacity.bgOpacity, transition: 'opacity 0.5s ease-in-out' }}></Image>
      <section className="zencontent">
        <div className='zengrad'>
          <button className="zentitle">
            Zen Sounds
          </button>
          <h1 className="zentitle2" style={{ opacity: uiOpacity.textOpacity, transition: 'opacity 0.5s ease-in-out' }}>{currentZenTitle}</h1>
          <p className="zentext" style={{ opacity: uiOpacity.textOpacity, transition: 'opacity 0.5s ease-in-out' }}>{currentZenText}</p>
          <button className="playbutton" onClick={handlePlayPause}>
            {isPlaying ? 'Stop Surrounding' : 'Set Surrounding'}
          </button>
          <label className="slider">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              className='level'
              onChange={event => setVolume(parseFloat(event.target.value))}
            />
          </label>
          <DynamicReactPlayer
            ref={playerRef}
            url={currentAudio}
            height={0}
            width={0}
            loop={true}
            controls={false}
            playing={isPlaying}
            volume={volume}
            light={false}
            pip={false}
          />
          <Image className="arrow" src={Arrow} alt="arrow" />
        </div>
        <div className="gradient-blur">
          <section className="catalogue-box" id="catalogue">
            <div className="catalogue-title">
              <h2>Choose your path to relaxation</h2>
              <p>Show your support with a GitHub star</p>
              <a className="catalogue-git" href="https://github.com/arunyagoojar/Calm" target="_blank">github/arunyagoojar</a>
            </div>
            {cardData.slice(0, 9).map((card, index) => (
              <div
                key={index}
                className="card"
                style={{ position: 'relative' }}
                onClick={() => handleCardClick(card.image, card.zentitle, card.zentext, card.audiofile)}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  className='card-img-top'
                  layout="fill"
                  objectFit="cover"
                />
                <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 0 }}></div>
                <p className="ctitle"> {card.title} </p>
                <p className="cloc">{card.zentext}</p>
              </div>
            ))}
          </section>
          <section className="catalogue-box black-bg">
            {cardData.slice(9, 14).map((card, index) => (
              <div
                key={index}
                className="card"
                style={{ position: 'relative' }}
                onClick={() => handleCardClick(card.image, card.zentitle, card.zentext, card.audiofile)}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  className='card-img-top'
                  layout="fill"
                  objectFit="cover"
                />
                <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 0 }}></div>
                <p className="ctitle"> {card.title} </p>
                <p className="cloc">{card.zentext}</p>
              </div>
            ))}
            <div className="catalogue-title2">
              <h2>Divine melodies for meditation</h2>
              <p>Experience serenity with heavenly tunes.</p>
            </div>
          </section>
          <section className="catalogue-box black-bg">
            <div className="catalogue-title catalogue-title2">
              <h2>Harmonic echoes of the universe</h2>
              <p>Featuring tranquil soundscapes from
                <a className="catalogue-git" href="https://www.youtube.com/channel/UCfyUjw4uv_LLMSWtB7Nszig" target="_blank" style={{ paddingLeft: 5 }}> @dhePerissann</a>
              </p>
            </div>
            {cardData.slice(14, 18).map((card, index) => (
              <div
                key={index}
                className="card"
                style={{ position: 'relative' }}
                onClick={() => handleCardClick(card.image, card.zentitle, card.zentext, card.audiofile)}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  className='card-img-top'
                  layout="fill"
                  objectFit="cover"
                />
                <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 0 }}></div>
                <p className="ctitle"> {card.title} </p>
                <p className="cloc">{card.zentext}</p>
              </div>
            ))}
          </section>
          <section className="catalogue-box" id="catalogue">
            <div className="catalogue-title">
              <h2>Cinematic Sound Journeys</h2>
              <p>Discover the sonic realms of fictional universes.</p>
            </div>
            {cardData.slice(18, 25).map((card, index) => (
              <div
                key={index}
                className="card"
                style={{ position: 'relative' }}
                onClick={() => handleCardClick(card.image, card.zentitle, card.zentext, card.audiofile)}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  className='card-img-top'
                  layout="fill"
                  objectFit="cover"
                />
                <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 0 }}></div>
                <p className="ctitle"> {card.title} </p>
                <p className="cloc">{card.zentext}</p>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main >
  );
}