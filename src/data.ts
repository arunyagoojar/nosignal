export interface Soundscape {
  id: string;
  title: string;
  image: string;
  thumb: string;
  zentitle: string;
  zentext: string;
  audiofile: string;
  category: 'nature' | 'meditation' | 'space' | 'fictional';
}

export const cardData: Soundscape[] = [
  { id: 'bluebell', title: "Bluebell Woods", image: "/img/Bluebell.webp", thumb: "/thumbnails/Bluebell.webp", zentitle: "Bluebell Woods", zentext: "ashridge, uk", audiofile: "https://www.youtube.com/watch?t=3674s&v=IsPBplWLImI", category: 'nature' },
  { id: 'forest', title: "Forest", image: "/img/forest.webp", thumb: "/thumbnails/forest.webp", zentitle: "Forest", zentext: "The Amazon", audiofile: "https://www.youtube.com/watch?v=Ur1WFs0UFPE", category: 'nature' },
  { id: 'lakeshore', title: "Lakeshore", image: "/img/lake.webp", thumb: "/thumbnails/lake.webp", zentitle: "Lakeshore", zentext: "Mount Shuksan", audiofile: "https://www.youtube.com/watch?v=qRTVg8HHzUo", category: 'nature' },
  { id: 'foggy', title: "Foggy Morning", image: "/img/morning.webp", thumb: "/thumbnails/morning.webp", zentitle: "Foggy Morning", zentext: "New England, USA", audiofile: "https://www.youtube.com/watch?v=FlsOxRzVd5k", category: 'nature' },
  { id: 'blue_lagoon', title: "Blue Lagoon", image: "/img/BlueLagoon.webp", thumb: "/thumbnails/BlueLagoon.webp", zentitle: "Blue Lagoon", zentext: "Blue Lagoon, Iceland", audiofile: "https://www.youtube.com/watch?v=iOrpLtUr1u0", category: 'nature' },
  { id: 'snow', title: "Snow Blizzard", image: "/img/snow.webp", thumb: "/thumbnails/snow.webp", zentitle: "Snow Blizzard", zentext: "Rila NP, bulgaria", audiofile: "https://youtu.be/0fHaQdacCmM?si=eIJCU6lHpgVEPb2i", category: 'nature' },

  { id: 'interstellar', title: "Interstellar", image: "/img/interstellar.webp", thumb: "/thumbnails/interstellar.webp", zentitle: "Interstellar", zentext: "Space", audiofile: "https://www.youtube.com/watch?v=5gO0xpY_Y3E", category: 'space' },
  { id: 'time', title: "Time", image: "/img/time.webp", thumb: "/thumbnails/time.webp", zentitle: "Time", zentext: "Space", audiofile: "https://www.youtube.com/watch?v=FWCtZoaEnVw", category: 'space' },
  { id: 'cosmicj', title: "Cosmic Journey", image: "/img/cosmicj.webp", thumb: "/thumbnails/cosmicj.webp", zentitle: "Cosmic Journey", zentext: "Space", audiofile: "https://youtu.be/Bne_3PWw8I4?si=XICo7xo0bVXG0-Tk", category: 'space' },
  { id: 'skyspace', title: "Written On The Sky", image: "/img/sky-space.webp", thumb: "/thumbnails/sky-space.webp", zentitle: "Written On The Sky", zentext: "Space", audiofile: "https://www.youtube.com/watch?v=GSL2MEcyQXQ", category: 'space' },
  { id: 'cosmos', title: "Secrets of the Cosmos", image: "/img/cosmos.webp", thumb: "/thumbnails/cosmos.webp", zentitle: "Secrets of the Cosmos", zentext: "Space", audiofile: "https://www.youtube.com/watch?v=6hA1HQbF-rI", category: 'space' },

  { id: 'winterfell', title: "Winterfell", image: "/img/Winterfell.webp", thumb: "/thumbnails/Winterfell.webp", zentitle: "Winterfell", zentext: "Game of thrones", audiofile: "https://youtu.be/_N-IREy7C9s?si=9gF3Ydl_tgqML7Xz", category: 'fictional' },
  { id: 'dragonstone', title: "Dragon Stone", image: "/img/HOD.webp", thumb: "/thumbnails/HOD.webp", zentitle: "Dragon Stone", zentext: "House of the dragon", audiofile: "https://www.youtube.com/watch?v=1lqIW0PLUPU", category: 'fictional' },
  { id: 'castamere', title: "The Rains of Castamere", image: "/img/Castamere.webp", thumb: "/thumbnails/Castamere.webp", zentitle: "The Rains of Castamere", zentext: "Game of thrones", audiofile: "https://www.youtube.com/watch?v=K1K4QapTEgw", category: 'fictional' },
  { id: 'heartlands', title: "The Heartlands", image: "/img/rdr2.webp", thumb: "/thumbnails/rdr2.webp", zentitle: "The Heartlands", zentext: "Red Dead Redemption 2", audiofile: "https://www.youtube.com/watch?v=c1fS_LRK_jA", category: 'fictional' },
  { id: 'witcher', title: "The Witcher", image: "/img/witcher.webp", thumb: "/thumbnails/witcher.webp", zentitle: "The Witcher", zentext: "The Witcher", audiofile: "https://www.youtube.com/watch?v=9osre3R0LvA", category: 'fictional' },
  { id: 'rdr', title: "The Wild West", image: "/img/rdr.webp", thumb: "/thumbnails/rdr.webp", zentitle: "The Wild West", zentext: "Red Dead Redemption 2", audiofile: "https://www.youtube.com/watch?v=npOiHBrSgV0", category: 'fictional' },
  { id: 'dune', title: "Dune", image: "/img/dune.webp", thumb: "/thumbnails/dune.webp", zentitle: "DUNE", zentext: "DUNE", audiofile: "https://www.youtube.com/watch?v=hShxsAlJmfw", category: 'fictional' }
];
