import { useEffect } from "react";

function useScrollToTop() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

export default useScrollToTop;
