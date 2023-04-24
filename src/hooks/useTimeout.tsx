import { useEffect, useRef, useCallback, MutableRefObject } from "react";

export function useTimeout(callback: () => void, delay: number) {
  const callbackRef = useRef(callback) as MutableRefObject<() => void>;
  const timeoutRef = useRef() as MutableRefObject<any>;

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
  }, []);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  return {
    clear,
    reset,
  };
}
