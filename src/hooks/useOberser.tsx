import { MutableRefObject, useCallback, useEffect, useState } from "react";

interface IUseObserver extends MutableRefObject<HTMLDivElement> {}

export function useOberser({ current }: IUseObserver) {
  const [isEntry, setIsEntry] = useState(false);

  const handleObserver: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        setIsEntry(entry.isIntersecting);
      });
    },
    []
  );

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };

    const observer: IntersectionObserver = new IntersectionObserver(
      handleObserver,
      options
    );

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [current]);

  return { isEntry };
}
