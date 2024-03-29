import { logEvent as le } from "firebase/analytics";
import { analytics } from "../services/firebase";
import { useCallback } from "react";

export function useAnalytics() {
  const logEvent = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (eventName: string, eventParams?: { [key: string]: any }) => {
      le(analytics, eventName, eventParams);
      console.log(`Event logged: ${eventName}`);
    },
    []
  );

  return {
    logEvent,
  };
}
