import { Comments } from "./comments";
import React from "react";
import "./main-components.css";

const commentsData = [
  {
    para: `Sentry’s high-quality tooling helps Disney+ maintain high-quality service to its tens  of millions of global subscribers.`,
    h11: "Andrew Hay",
    h12: "Director of Streaming Services",
  },
  {
    para: `Sentry’s high-quality tooling helps Disney+ maintain high-quality service to its tens  of millions of global subscribers.`,
    h11: "Babar",
    h12: "Director of Streaming Services",
  },
  {
    para: `Sentry’s high-quality tooling helps Disney+ maintain high-quality service to its tens  of millions of global subscribers.`,
    h11: "Andrew Hay",
    h12: "Director of Streaming Services",
  },
  {
    para: `Sentry’s high-quality tooling helps Disney+ maintain high-quality service to its tens  of millions of global subscribers.`,
    h11: "Babar",
    h12: "Director of Streaming Services",
  },
  {
    para: `Sentry’s high-quality tooling helps Disney+ maintain high-quality service to its tens  of millions of global subscribers.`,
    h11: "Andrew Hay",
    h12: "Director of Streaming Services",
  },
  {
    para: `Sentry’s high-quality tooling helps Disney+ maintain high-quality service to its tens  of millions of global subscribers.`,
    h11: "Babar",
    h12: "Director of Streaming Services",
  },
  {
    para: `Sentry’s high-quality tooling helps Disney+ maintain high-quality service to its tens  of millions of global subscribers.`,
    h11: "Andrew Hay",
    h12: "Director of Streaming Services",
  },
  {
    para: `Sentry’s high-quality tooling helps Disney+ maintain high-quality service to its tens  of millions of global subscribers.`,
    h11: "Babar",
    h12: "Director of Streaming Services",
  },
];

const filteredComments = commentsData.filter((item) => item.h11 !== "Babar");

export const MainComments = () => {
  return (
    <div className={"comments"}>
      {filteredComments.map((item, index) => (
        <Comments key={index} para={item.para} h11={item.h11} h12={item.h12} />
      ))}
    </div>
  );
};
