import YouTube from "react-youtube";

export default function Home() {
    const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
      <div className='bg-yellow-300 flex justify-center'>
          <div className='max-w-2xl flex-grow mt-10 flex flex-col'>
              <input
                  type='text'
                  placeholder='Paste video link there'
                  className='mb-16 rounded-2xl p-2 pl-4 border focus:border-blue-600 text-gray-700 shadow text-lg appearance-none font-semibold focus:outline-none focus:shadow-outline'
              />
              <div className='flex justify-center'>
                  <YouTube videoId="1PetRVcM2sk" opts={opts} className='flex-grow'/>
              </div>
          </div>
      </div>
    )
}
