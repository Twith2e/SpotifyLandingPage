import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useContext, useEffect, useRef, useState } from "react";
import { AudioContext } from "./AudioContext";

export default function Circle(props) {
  const {
    playSong,
    pauseSong,
    isPlaying,
    songUrl,
    setActiveButton,
    activeButton,
  } = useContext(AudioContext);
  const prevUrl = useRef(null);

  function handlePlayPause() {
    if (songUrl !== props.songUrl) {
      if (isPlaying) {
        pauseSong();
        setActiveButton(true);
      }
      playSong(props.songUrl);
    } else {
      if (isPlaying) {
        pauseSong();
        setActiveButton(false);
      } else {
        playSong(props.songUrl);
        setActiveButton(true);
      }
    }
  }

  useEffect(() => {
    prevUrl.current = props.songUrl;
  }, [props.songUrl]);

  return (
    <div
      key={props.id}
      className="d-flex flex-column mt-3 align-items-start rounded-3 play-card"
    >
      <img
        className="rounded-circle"
        height={150}
        width={150}
        src={props.src}
        alt=""
      />
      <a
        className="text-white fz-16 text-truncate"
        style={{ width: "150px" }}
        href=""
      >
        {" "}
        {props.artistName}{" "}
      </a>
      <a className="fz-14 grey" href="">
        {" "}
        {props.profession}{" "}
      </a>
      <div
        key={props.id}
        className="playbtn-container d-flex align-items-center justify-content-center rounded-circle p-2"
      >
        <button onClick={handlePlayPause} className="btn p-0">
          {songUrl === props.songUrl && activeButton && isPlaying ? (
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="Svg-sc-ytk21e-0 dYnaPI"
              height={30}
              fill="#000"
            >
              <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
            </svg>
          ) : (
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="Svg-sc-ytk21e-0 bneLcE"
              xmlns="http://www.w3.org/2000/svg"
              height="30"
            >
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

Circle.defaultProps = {
  profession: "Artist",
};
