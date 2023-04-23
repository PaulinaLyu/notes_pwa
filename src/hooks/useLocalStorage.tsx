import { useState, useEffect, useCallback } from "react";

type ReturnValue<T> = [
  T,
  { setItem: (value: T) => void; removeItem: () => void }
];

const getStorageValue = <T,>(key: string, initialValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.log(error);
    return initialValue;
  }
};

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): ReturnValue<T> {
  const [state, setState] = useState<T>(() =>
    getStorageValue<T>(key, initialValue)
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.log(error);
    }
  }, [state, key]);

  const setItem = useCallback((value: T) => {
    setState(value);
  }, []);

  const removeItem = useCallback(() => {
    setState(initialValue);
  }, []);

  return [state, { setItem, removeItem }];
}
