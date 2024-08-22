const { useState, useEffect, useRef } = require("react");

export const useDetectSticky = (ref, observerSettings = { threshold: [1] }) => {
  const [isSticky, setIsSticky] = useState(false);
  const newRef = useRef();
  ref ||= newRef;

  // mount
  useEffect(() => {
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        observerSettings,
      );

    observer.observe(cachedRef);

    // unmount
    return () => {
      observer.unobserve(cachedRef);
    };
  }, [observerSettings, ref]);

  return [isSticky, ref, setIsSticky];
};
