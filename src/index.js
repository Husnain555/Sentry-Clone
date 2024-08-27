import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./component/Navbar/Navbar";
import { Discord } from "./component/Discod Button/discord";
import { Code } from "./component/code braker/code";
import { GifImage } from "./component/gif-image/gif";
import { Links } from "./component/links/links";
import { Floot } from "./component/Flooting images/floot";
import { Videos } from "./component/Videos/videos";
import { Video2 } from "./component/video2/video2";
import { Background } from "./component/backgroung/background";
import { Trust } from "./component/trust/trust";
import { MainComments } from "./component/comments/main-comments";
import { MainCard } from "./component/cards/main-card";
import { Form } from "./component/form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Navbar />
    <Discord />
    <Code />
    <GifImage />
    <Links />
    <Floot />
    <Videos />
    <Video2 />
    <Background />
    <MainComments />
    <Trust />
    <MainCard />
    <Form />
  </div>,
);
