import React, { useEffect, useState, useRef } from "react";

import classes from "./styles.module.scss";
import { useParams } from "react-router-dom";

import axios from "axios";

const Watch = (props) => {
  const description = useRef(null);
  const { slug } = useParams();

  const [infoVideo, setInfoVideo] = useState([]);
  const [textShowHideDesc, setTextShowHideDesc] = useState("HIỆN THÊM");

  const handleClickShowHideDesc = () => {
    if (textShowHideDesc === "HIỆN THÊM") {
      description.current.style["-webkit-line-clamp"] = "inherit";
      setTextShowHideDesc("ẨN BỚT");
      return;
    }
    if (textShowHideDesc === "ẨN BỚT") {
      description.current.style["-webkit-line-clamp"] = "3";
      setTextShowHideDesc("HIỆN THÊM");
      return;
    }
  };

  useEffect(() => {
    console.log("description", description.current.offsetHeight);
  }, [description]);

  useEffect(() => {
    axios.get(`/api/video/${slug}`).then((response) => {
      setInfoVideo(response.data[0]);
    });
  }, [slug]);

  return (
    <div className={classes.watch} style={props.style}>
      <div className={classes.title}>{infoVideo.title}</div>
      <div className={classes.video}>
        <iframe
          height="506"
          title="video"
          src={`https://www.youtube.com/embed/${infoVideo.idVideo}?autoplay=1&autohide=0&cc_load_policy=1&modestbranding=1&fs=0&showinfo=0&title=0&rel=0&iv_load_policy=3&mute=0&loop=1`}
          sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className={classes.description}>
        <h4 className="mb-2 font-semibold">Mô tả</h4>
        <p ref={description} className={classes["description-text"]}>
          {infoVideo.description}
        </p>

        {description?.current?.offsetHeight >= 72 && (
          <div
            className={classes["btn-show-hide"]}
            onClick={handleClickShowHideDesc}
          >
            {textShowHideDesc}
          </div>
        )}
      </div>
    </div>
  );
};

export default Watch;
