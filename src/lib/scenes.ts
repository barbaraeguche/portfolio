export interface AsciiScene {
  label: string;
  image: string;
}

const SCENES: AsciiScene[] = [
  {
    label: "ice skating",
    image: "/scenes/ice-skating.png",
  },
  {
    label: "picnic with friends",
    image: "/scenes/picnic-with-friends.png",
  },
  {
    label: "brunch dates",
    image: "/scenes/brunch-dates.png",
  },
  {
    label: "at the cinema",
    image: "/scenes/at-the-cinema.png",
  },
  {
    label: "reading",
    image: "/scenes/reading.png",
  },
];

export default SCENES;