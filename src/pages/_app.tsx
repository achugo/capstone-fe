import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
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
