import { useTimeout } from "./useTimeout";
import { useEffect } from "react";

export function useDebounce(
  callback: () => void,
  delay: number,
  dependencies: any[]
) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
