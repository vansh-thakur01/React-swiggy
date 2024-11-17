import { useEffect, useState } from "react";

const useOnlieStatus = () => {
  const [onLineStatus, setOnlineStatus] = useState(navigator.onLine);
 
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  },[]);

  return onLineStatus;
};

export default useOnlieStatus;
