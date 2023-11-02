import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: "f6ad9e27-c87b-4579-b1fe-b1825f5de726",
  clientToken: "pub027f750930bbecccf7191c56e9a949a2",
  site: "us5.datadoghq.com",
  service: "capstone-fe",
  env: "staging",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "mask-user-input",
});
export default function App({ Component, pageProps }: AppProps) {
  const [location, setLocation] = useState(false);

  const onSuccess = (position: GeolocationPosition) => {
    localStorage.setItem(
      "location",
      JSON.stringify({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    );
  };

  const onError = (error: GeolocationPositionError) => {
    toast.error("Unfortunately, device location could not be retrieved");
  };
  useEffect(() => {
    navigator && navigator.geolocation.getCurrentPosition(onSuccess, onError);
    return () => {};
  }, []);

  return (
    <>
      <Component {...pageProps} />;
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}
