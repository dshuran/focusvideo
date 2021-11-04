import YouTube from "react-youtube";
import {useState} from "react";

export default function Home() {
    const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            rel: 0
        },
    };

    const [videoId, setVideoId] = useState('');
    const [wasInvalidTry, setInvalidTry] = useState(false);

    const handleInputChange = (e) => {
        const url = e.target.value;
        if (isYouTubeVideo(url)) {
            const videoId = getYouTubeVideoID(e.target.value);
            setVideoId(videoId);
            setInvalidTry(false);
        } else {
            setInvalidTry(true)
        }
    }

    return (
      <div className='bg-gray-800 flex justify-center'>
          <div className='max-w-2xl flex-grow mt-10 flex flex-col'>
              <input
                  type='text'
                  placeholder='Paste youtube video link there and enjoy!'
                  onChange={handleInputChange}
                  className='mb-16 rounded-2xl p-2 pl-4 border focus:border-blue-600 text-gray-800 shadow text-lg appearance-none font-semibold focus:outline-none focus:shadow-outline'
              />
              <div className='flex justify-center bg-gray-500 p-5 rounded-2xl'>
                  {
                      videoId ?
                      <YouTube videoId={videoId} opts={opts} className='flex-grow max-w-full'/> :
                      <span className='font-semibold text-lg'>
                          {
                              wasInvalidTry ?
                                  "Try pasting valid youtube video url!" :
                                  "Just paste the youtube video url above and enjoy :)"
                          }

                      </span>
                  }
              </div>
          </div>
      </div>
    )
}

function isYouTubeVideo(url) {
    const youtubeVideoRegex = new RegExp("^((?:https?:)?\\/\\/)?((?:www|m)\\.)?((?:youtube\\.com|youtu.be))(\\/(?:[\\w\\-]+\\?v=|embed\\/|v\\/)?)([\\w\\-]+)(\\S+)?$");
    return youtubeVideoRegex.test(url);
}

function getYouTubeVideoID(url){
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}