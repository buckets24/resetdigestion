import Script from 'next/script'
import Headline from './components/Headline'
import Video from './components/Video'
export default function Home() {
  return (
    <>
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="worker"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-122527750-1"
        strategy="beforeInteractive"
      />
      <Script
        src="https://gtmsvr.konsciousketo.com/gtm.js?id=GTM-56TX85F"
        strategy="beforeInteractive"
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
      <Headline />
      <Video />
    </>
  )
}
