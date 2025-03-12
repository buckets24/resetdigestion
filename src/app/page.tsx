import Script from 'next/script'
import { VSLProvider } from './context/VSLContext'
import Headline from './components/Headline'
import Video from './components/Video'
import BeforeDrop from './components/ViewWrapper/BeforeDrop'
import Comments from './components/Comments'
import { COMMENTS } from './config/comments.config'
import Footer from './components/Footer'

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
        <div className="bg-[#f7f6f4] w-full">
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

              <div className="m-auto max-w-[780px] w-full">
                <div className="mt-4 text-center !py-[12px] border-t border-b border-t-black/50 border-b-black/50">
                  <span className="text-[17px] text-[#00000080] font-[700]">As Seen On</span>
                  <div className="pt-4 row">
                    <div className="col-12">
                      <img
                        className="hidden w-full m-auto md:block"
                        src="https://resetdigestion.com/pages/er-vslfb-v2/asseenond.png?v=562"
                        style={{ maxWidth: '772px' }}
                      />
                      <img
                        className="block w-full m-auto md:hidden"
                        src="https://resetdigestion.com/pages/er-vslfb-v2/asseenonm.png?v=562"
                        style={{ maxWidth: '343px' }} />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </BeforeDrop>
          {/* Footer */}
          <Footer />
        </div>
      </VSLProvider>
    </>
  )
}
