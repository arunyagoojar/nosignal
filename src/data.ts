export interface Soundscape {
  id: string;
  title: string;
  image: string;
  zentitle: string;
  zentext: string;
  audiofile: string;
  category: 'nature' | 'meditation' | 'space' | 'fictional';
}

export const cardData: Soundscape[] = [
  { id: 'bluebell', title: "Bluebell Woods", image: "/src/assets/img/Bluebell.jpg", zentitle: "Bluebell Woods", zentext: "ashridge, uk", audiofile: "https://www.youtube.com/watch?t=3674s&v=IsPBplWLImI", category: 'nature' },
  { id: 'forest', title: "Forest", image: "/src/assets/img/forest.jpg", zentitle: "Forest", zentext: "The Amazon", audiofile: "https://www.youtube.com/watch?v=Ur1WFs0UFPE", category: 'nature' },
  { id: 'lakeshore', title: "Lakeshore", image: "/src/assets/img/lake.jpg", zentitle: "Lakeshore", zentext: "Mount Shuksan", audiofile: "https://www.youtube.com/watch?v=qRTVg8HHzUo", category: 'nature' },
  { id: 'foggy', title: "Foggy Morning", image: "/src/assets/img/morning.jpg", zentitle: "Foggy Morning", zentext: "New England, USA", audiofile: "https://www.youtube.com/watch?v=FlsOxRzVd5k", category: 'nature' },
  { id: 'blue_lagoon', title: "Blue Lagoon", image: "/src/assets/img/BlueLagoon.jpg", zentitle: "Blue Lagoon", zentext: "Blue Lagoon, Iceland", audiofile: "https://www.youtube.com/watch?v=iOrpLtUr1u0", category: 'nature' },
  { id: 'snow', title: "Snow Blizzard", image: "/src/assets/img/snow.jpg", zentitle: "Snow Blizzard", zentext: "Rila NP, bulgaria", audiofile: "https://youtu.be/0fHaQdacCmM?si=eIJCU6lHpgVEPb2i", category: 'nature' },

  { id: 'interstellar', title: "Interstellar", image: "/src/assets/img/interstellar.jpg", zentitle: "Interstellar", zentext: "Space", audiofile: "https://www.youtube.com/watch?v=5gO0xpY_Y3E", category: 'space' },
  { id: 'time', title: "Time", image: "/src/assets/img/time.jpg", zentitle: "Time", zentext: "Space", audiofile: "https://www.youtube.com/watch?v=FWCtZoaEnVw", category: 'space' },
  { id: 'cosmicj', title: "Cosmic Journey", image: "/src/assets/img/cosmicj.jpg", zentitle: "Cosmic Journey", zentext: "Space", audiofile: "https://youtu.be/Bne_3PWw8I4?si=XICo7xo0bVXG0-Tk", category: 'space' },
  { id: 'skyspace', title: "Written On The Sky", image: "/src/assets/img/sky-space.jpg", zentitle: "Written On The Sky", zentext: "Space", audiofile: "https://www.youtube.com/watch?v=GSL2MEcyQXQ", category: 'space' },
  { id: 'cosmos', title: "Secrets of the Cosmos", image: "/src/assets/img/cosmos.jpg", zentitle: "Secrets of the Cosmos", zentext: "Space", audiofile: "https://www.youtube.com/watch?v=6hA1HQbF-rI", category: 'space' },

  { id: 'winterfell', title: "Winterfell", image: "/src/assets/img/Winterfell.jpg", zentitle: "Winterfell", zentext: "Game of thrones", audiofile: "https://youtu.be/_N-IREy7C9s?si=9gF3Ydl_tgqML7Xz", category: 'fictional' },
  { id: 'dragonstone', title: "Dragon Stone", image: "/src/assets/img/HOD.jpeg", zentitle: "Dragon Stone", zentext: "House of the dragon", audiofile: "https://www.youtube.com/watch?v=1lqIW0PLUPU", category: 'fictional' },
  { id: 'castamere', title: "The Rains of Castamere", image: "/src/assets/img/Castamere.jpg", zentitle: "The Rains of Castamere", zentext: "Game of thrones", audiofile: "https://www.youtube.com/watch?v=K1K4QapTEgw", category: 'fictional' },
  { id: 'heartlands', title: "The Heartlands", image: "/src/assets/img/rdr2.jpg", zentitle: "The Heartlands", zentext: "Red Dead Redemption 2", audiofile: "https://www.youtube.com/watch?v=c1fS_LRK_jA", category: 'fictional' },
  { id: 'witcher', title: "The Witcher", image: "/src/assets/img/witcher.jpg", zentitle: "The Witcher", zentext: "The Witcher", audiofile: "https://www.youtube.com/watch?v=9osre3R0LvA", category: 'fictional' },
  { id: 'rdr', title: "The Wild West", image: "/src/assets/img/rdr.jpeg", zentitle: "The Wild West", zentext: "Red Dead Redemption 2", audiofile: "https://www.youtube.com/watch?v=npOiHBrSgV0", category: 'fictional' },
  { id: 'dune', title: "Dune", image: "/src/assets/img/dune.jpg", zentitle: "DUNE", zentext: "DUNE", audiofile: "https://www.youtube.com/watch?v=hShxsAlJmfw", category: 'fictional' }
];
