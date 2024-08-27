import React from "react";
import { Card } from "./card";
import "./main-card.css";
import im4 from "./../../assets/imges/11.jpg";
import im5 from "./../../assets/imges/22.jpg";
import im6 from "./../../assets/imges/33.jpg";
import im7 from "./../../assets/imges/44.jpg";

const CardData = [
  {
    img: im4,
    title: "Smug and learn: Tracing with Smugmug",
    description:
      "Error are half the story.Left untreated, Performance problem can become errors. if your customer problem can be timout.",
  },
  {
    img: im5,
    title: "performance monitor by Sentry",
    description:
      "Built for the developer, Sentry’s performance monitoring cuts the guesswork out of figuring out what’s slowing down your...",
  },
  {
    img: im6,
    title: "Sentry for mobile application",
    description:
      "Mobile app crash reporting and run time errors in a single view, give you a holistic overview of your application's heal...",
  },
  {
    img: im7,
    title: "Sentry for Games",
    description:
      "Your game's code is telling you more than what your logs let on. Whether you’re building the latest FPS or a turn-based ...",
  },
];

export const MainCard = () => {
  return (
    <div className="main-card">
      {CardData.map((item, index) => (
        <Card
          key={index}
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
