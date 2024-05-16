



export declare interface API {
  name: string,
  description?: string
}


const APIs: API[] = [
  {
    name: 'Audio Output Device API',
    description: 'Operating systems commonly allow users to specify that audio should be played from speakers, a Bluetooth headset, or some other audio output device. This API allows applications to provide this same functionality from within a web page.'
  },
  {
    name: 'Audio Output Device API',
    description: 'Operating systems commonly allow users to specify that audio should be played from speakers, a Bluetooth headset, or some other audio output device. This API allows applications to provide this same functionality from within a web page.'
  },
  {
    name: 'Audio Output Device API',
    description: 'Operating systems commonly allow users to specify that audio should be played from speakers, a Bluetooth headset, or some other audio output device. This API allows applications to provide this same functionality from within a web page.'
  },
  {
    name: 'Audio Output Device API',
    description: 'Operating systems commonly allow users to specify that audio should be played from speakers, a Bluetooth headset, or some other audio output device. This API allows applications to provide this same functionality from within a web page.'
  },
  {
    name: 'Audio Output Device API',
    description: 'Operating systems commonly allow users to specify that audio should be played from speakers, a Bluetooth headset, or some other audio output device. This API allows applications to provide this same functionality from within a web page.'
  },
  {
    name: 'Audio Output Device API',
    description: 'Operating systems commonly allow users to specify that audio should be played from speakers, a Bluetooth headset, or some other audio output device. This API allows applications to provide this same functionality from within a web page.'
  },
  {
    name: 'Audio Output Device API',
    description: 'Operating systems commonly allow users to specify that audio should be played from speakers, a Bluetooth headset, or some other audio output device. This API allows applications to provide this same functionality from within a web page.'
  },
  {
    name: 'Audio Output Device API',
    description: 'Operating systems commonly allow users to specify that audio should be played from speakers, a Bluetooth headset, or some other audio output device. This API allows applications to provide this same functionality from within a web page.'
  },
  {
    name: 'Audio Output Device API',
    description: 'Operating systems commonly allow users to specify that audio should be played from speakers, a Bluetooth headset, or some other audio output device. This API allows applications to provide this same functionality from within a web page.'
  },
  {
    name: 'Audio Output Device API',
    description: 'Operating systems commonly allow users to specify that audio should be played from speakers, a Bluetooth headset, or some other audio output device. This API allows applications to provide this same functionality from within a web page.'
  },
]

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col gap-3 overflow-hidden">
      <div className="font-bold text-[1.5rem] w-full h-min bg-blue-500 text-white shadow-xl p-3">Web API test</div>
      <div className="w-full h-full overflow-y-auto p-3">
        <div className="w-full h-max gap-2 grid md:grid-cols-3">
          {
            APIs.map(api => {
              return (<Card api={api} />)
            })
          }
        </div>
      </div>
    </main>
  );
}



function Card({ api }: { api: API }) {
  return (
    <div className="p-2 border rounded-md flex flex-col gap-1 h-max group cursor-pointer">
      <span className="font-bold text-[1.2rem] group-hover:text-blue-500 transition-all duration-300">{api.name}</span>
      <span className="text-[0.8rem] font-light">{api.description}</span>
    </div>
  )
}