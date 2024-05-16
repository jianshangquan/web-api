'use client';
import Scaffold from "@/components/utilities/scaffold";
import ScaffoldBody from "@/components/utilities/scaffold-body";
import { API, APIs } from "@/enum/apis";
import { Apple, Android, BrowserChrome, BrowserSafari } from "@icon-park/react";
import Link from "next/link";





export default function Home() {

  return (
    <Scaffold appBar={{ title: 'Web API Test' }}>
      <ScaffoldBody>
        <div className="w-full h-max gap-2 grid md:grid-cols-4">
          {
            APIs.map((api, index) => {
              return (<Card api={api} key={index} />)
            })
          }
        </div>
      </ScaffoldBody>
    </Scaffold>
  );

  return (
    <main className="w-full h-full flex flex-col gap-3 overflow-hidden">
      <div className="font-bold text-[1.5rem] w-full h-min bg-blue-500 text-white shadow-xl p-3">Web API test</div>
      <div className="w-full h-full overflow-y-auto p-3">
        <div className="w-full h-max gap-2 grid md:grid-cols-4">
          {
            APIs.map((api, index) => {
              return (<Card api={api} key={index} />)
            })
          }
        </div>
      </div>
    </main>
  );
}



function Card({ api }: { api: API }) {
  return (

    <div className="p-3 border-[2px] rounded-2xl flex flex-col justify-start gap-2 h-full group cursor-pointer transition-all duration-300 hover:border-blue-500">
      <Link href={api.url} className="outline-none">
        <div className="flex flex-col justify-start gap-2">
          <div className="h-max w-full flex flex-col gap-1">
            <div className="flex gap-2 justify-between items-center">
              <span className="font-bold text-[1.2rem] group-hover:text-blue-500 transition-all duration-300">{api.name}</span>
              {api.experimental && <span className="px-[0.5rem] py-[0.2rem] h-max text-[0.7rem] bg-orange-100 text-orange-700 rounded-full w-max font-bold">Experimental</span>}
              {api.deprecated == true && <span className="px-[0.5rem] py-[0.2rem] h-max text-[0.7rem] bg-red-500 text-white rounded-full w-max font-bold">Deprecated</span>}
            </div>
            <div className="inline-flex gap-2">
              <span className={`px-[0.5rem] py-[0.2rem] text-[0.7rem] h-max ${api.tested ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} rounded-full w-max font-bold`}>{api.tested ? 'Tested' : 'Not tested'}</span>
            </div>
          </div>
          <span className="text-[0.8rem] font-light">{api.description}</span>
          {
            api.supportedPlatforms && api.supportedPlatforms?.length > 0 && (
              <div className="text-[0.8rem] w-full h-min flex gap-2 items-center whitespace-nowrap">
                Supported platforms
                <div className="flex gap-2 items-center">
                  {(api.supportedPlatforms.includes('ios') || api.supportedPlatforms.includes('macos')) && <Apple theme='filled' size="20" fill="#333" strokeWidth={3} />}
                  {(api.supportedPlatforms.includes('android')) && <Android theme='filled' size="20" fill="#333" strokeWidth={3} />}
                </div>
              </div>
            )
          }
          {
            api.supportedBrowsers && api.supportedBrowsers?.length > 0 && (
              <div className="text-[0.8rem] w-full h-min flex gap-2 items-center whitespace-nowrap">
                Supported browser
                <div className="flex gap-2 items-center">
                  {(api.supportedBrowsers.includes('chrome')) && <BrowserChrome theme='filled' size="20" fill="#333" strokeWidth={3} />}
                  {(api.supportedBrowsers.includes("safari")) && <BrowserSafari theme='filled' size="20" fill="#333" strokeWidth={3} />}
                </div>
              </div>
            )
          }
        </div>
      </Link>
      {(api.mdnSource && api.mdnSource?.length > 0) && <Link href={api.mdnSource} onClick={(event) => event.stopPropagation()} className="underline text-[0.8rem] h-max hover:text-blue-500 font-light italic" target="_blank">MDN web source</Link>}
    </div>
  )
}