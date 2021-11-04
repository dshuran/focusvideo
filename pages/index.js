
export default function Home() {
  return (
      <div className='bg-yellow-300 flex justify-center'>
          <div className='max-w-2xl flex-grow h-60 mt-10 flex flex-col'>
              <input
                  type='text'
                  placeholder='Paste video link there'
                  className='mb-16 rounded-2xl p-2 pl-4 border focus:border-blue-600 text-gray-700 shadow text-lg appearance-none font-semibold focus:outline-none focus:shadow-outline'
              />
              <div className='bg-gray-500'>
                  Block for video
              </div>
          </div>
      </div>
  )
}
