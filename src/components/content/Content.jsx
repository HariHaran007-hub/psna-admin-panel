import { LocationOn } from "@mui/icons-material";
import React from "react";
import ReactPlayer from "react-player/lazy";
import "./content.scss";

const Content = (props) => {
  return (
    <div className="contentContainer">
      <div className="content">
        {props.complaintProps.title && <h2>{props.complaintProps.title}</h2>}
        {props.complaintProps && (
          <div className="description">
            <h4>Description: </h4>
            <p>{props.complaintProps.description}</p>
          </div>
        )}

        {props.complaintProps.location && (
          <div className="loc">
            <LocationOn className="locationIcon" />
            <span className="locHead">Location: </span>
            <span className="locValue">{props.complaintProps.location}</span>
          </div>
        )}

        <div className="imageListContainer">
          <span className="imgHead">Images: </span>
          <div className="imgList">
            {props.complaintProps.imageUrlList &&
              props.complaintProps.imageUrlList.map((url) => (
                <img key={url} src={url} />
              ))}
          </div>
        </div>
        {props.complaintProps.videoUrl && (
          <div>
            <span className="videoHead">Video: </span>
            <ReactPlayer
              className="videoContainer"
              width={"100%"}
              height={"200px"}
              // playing={true}
              loop={true}
              // controls={true}
              // url={[
              //   {
              //     src: `${props.complaintProps.videoUrl}.mp4`,
              //     type: "video/mp4",
              //   },
              // ]}

              url={`${props.complaintProps.videoUrl}.mp4`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
