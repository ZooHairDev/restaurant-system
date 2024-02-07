import { useEffect, useRef } from 'react';

const useOutsideClick = (handler, listenCapturing = true) => {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener('click', handleClick, listenCapturing); // true => handle event in the capturing phase

      return () =>
        document.removeEventListener('click', handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
};

export default useOutsideClick;