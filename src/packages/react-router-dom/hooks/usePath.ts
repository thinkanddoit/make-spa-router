import { useEffect, useState } from "react";

/**
 * window.location.pathname의 변화에 따라 path값을 갱신 및 반환 합니다.
 */

const usePath = () => {
  const [path, setPath] = useState(window.location.pathname);

  const updatePath = () => {
    setPath(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener("popstate", updatePath);
    return () => {
      window.removeEventListener("popstate", updatePath);
    };
  }, []);

  return path;
};

export default usePath;
