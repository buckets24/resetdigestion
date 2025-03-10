import Script from 'next/script'
import { VSLProvider } from './context/VSLContext'
import Headline from './components/Headline'
import BeforeDrop from './components/ViewWrapper/BeforeDrop'
import { COMMENTS } from './config/comments.config'
import dynamic from 'next/dynamic'

const Video = dynamic(() => import('./components/Video'), { ssr: false });
const Comments = dynamic(() => import('./components/Comments'), { ssr: false });

export default function Home() {
  return (
    <>
      {/* <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="worker"
      /> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-122527750-1"
        strategy="worker"
      />
      <Script
        src="https://gtmsvr.konsciousketo.com/gtm.js?id=GTM-56TX85F"
        strategy="worker"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          //Second ID config
          gtag('config', 'AW-770742054');
          gtag('config', 'AW-11038484286');
        `}
      </Script>
      <VSLProvider>
        <Headline />
        <Video
          videoId="2dv7bb0ic0"
          timerSeconds={60}
          options={{
            autoPlay: false,
            playbar: false,
            volumeControl: false,
            smallPlayButton: false,
            fullscreenButton: false
          }}
        />
        <BeforeDrop>
          <div
            data-id="beforedrop-container"
            className="w-full overflow-hidden"
          >
            <div className="max-w-[1140px] m-auto">
              <Comments items={COMMENTS} />
            </div>
          </div>
        </BeforeDrop>
      </VSLProvider>
    </>
  )
}
