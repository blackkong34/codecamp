import YouTube, { YouTubeProps } from "react-youtube";
// import { IYoutube } from "../../components/units/board/detail/BoardDetail.presenter";

export interface IYoutube {
  videoId: { videoId: string };
}

export default function Youtube(props: IYoutube["videoId"]) {
  const onPlayerReady: YouTubeProps["onReady"] = (e) => {
    e.target.pauseVideo();
  };
  const opts: YouTubeProps["opts"] = {
    width: "486",
    height: "240",
    playerVars: {
      autoplay: 0,
    },
  };
  return <YouTube videoId={props.videoId} opts={opts} />;
}
