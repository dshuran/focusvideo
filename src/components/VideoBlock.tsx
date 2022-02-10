import YouTube, {Options as YouTubeVideoOptions} from "react-youtube";


const YOUTUBE_OPTIONS: YouTubeVideoOptions = {
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        rel: 0,
    },
    width: '2000',
};

interface IProps {
    videoId?: string;
    wasInvalidTry: boolean;
}

export function VideoBlock(props: IProps) {

    const invalidUrlVideoBlockClassnames = props.wasInvalidTry
        ? "border border-red-500"
        : "";

    if (!props.videoId) {
        return null;
    }

    return (
        <div
            className={`flex justify-center bg-neutral-700 mt-6 p-5 ${invalidUrlVideoBlockClassnames}`}
        >
            <YouTube
                videoId={props.videoId}
                opts={YOUTUBE_OPTIONS}
                className="flex-grow max-w-full"
            />
        </div>
    )
}