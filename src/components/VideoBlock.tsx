import YouTube, {Options as YouTubeVideoOptions} from "react-youtube";


const YOUTUBE_OPTIONS: YouTubeVideoOptions = {
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        rel: 0,
    },
};

interface IProps {
    videoId: string;
    wasInvalidTry: boolean;
}

export function VideoBlock(props: IProps) {

    const invalidUrlVideoBlockClassnames = props.wasInvalidTry
        ? "border border-red-500"
        : "";

    return (
        <div
            className={`flex justify-center bg-neutral-700 mt-6 p-5 ${invalidUrlVideoBlockClassnames}`}
        >
            {props.videoId ? (
                <YouTube
                    videoId={props.videoId ?? undefined}
                    opts={YOUTUBE_OPTIONS}
                    className="flex-grow max-w-full"
                />
            ) : props.wasInvalidTry ? (
                <span className="font-semibold text-lg text-yellow-400">
              Try pasting valid youtube video url!
            </span>
            ) : (
                <span className="font-semibold text-lg">
              Video will be loaded here :)
            </span>
            )}
        </div>
    )
}