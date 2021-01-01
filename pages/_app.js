import "../style.css";

export default function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export function reportWebVitals(metric) {
  switch (metric.name) {
    case "FCP":
      // handle FCP results
      //First Contentful Paint (FCP)
      break;
    case "LCP":
      // handle LCP results
      //Largest Contentful Paint (LCP)
      break;
    case "CLS":
      // handle CLS results
      //Cumulative Layout Shift (CLS)
      break;
    case "FID":
      // handle FID results
      // First Input Delay (FID)
      break;
    case "TTFB":
      // handle TTFB results
      // Time to First Byte (TTFB)
      break;
    case "Next.js-hydration":
      // handle hydration results
      // time take to start and finsh hydrating
      break;
    case "Next.js-route-change-to-render":
      // handle route-change to render results
      // time take to start rendering afer route change
      break;
    case "Next.js-render":
      // handle render results
      // time take to finish rendering after route change
      break;
    default:
      break;
  }
}
