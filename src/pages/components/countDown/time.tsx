import { useEffect, useState } from "react";

const mintStartTime = 1723713385000; // 1721035241120

export function useTime() {
  const [mintStartCountDown, setMintStartCountDown] = useState<number>(
    () => mintStartTime - Date.now()
  );

  const start = mintStartCountDown <= 0;

  useEffect(() => {
    if (start) {
      return;
    }
    const timer = setInterval(() => {
      const now = Date.now();
      setMintStartCountDown(mintStartTime - now);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [start]);

  return {
    mintStartCountDown,
  };
}
