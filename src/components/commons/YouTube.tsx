import YouTube, { YouTubeProps } from "react-youtube";

export interface IYoutube {
  url: string;
}
export const MATCH_URL_YOUTUBE =
  /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
// const YOUTUBE_REGEXP =
//   /(http:|https:)?(\/\/)?(www\.)?(youtube.com|youtu.be)\/(watch|embed)?(\?v=|\/)?(\S+)?/g;

export default function Youtube(props: IYoutube): JSX.Element {
  const videoId = MATCH_URL_YOUTUBE.test(props.url)
    ? props.url.match(MATCH_URL_YOUTUBE)?.[1]
    : "";

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

  return videoId ? (
    <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
  ) : (
    <></>
  );
}
