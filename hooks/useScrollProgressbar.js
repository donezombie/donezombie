import { useEffect } from 'react';

export default () => {
  return useEffect(() => {
    const progressBar = document.getElementById("progress-bar");

    if (progressBar) {
      const scrollFunction = () => {
        const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollY = window.scrollY;
        if (typeof maxHeight === "number") {
          progressBar.style.width = (scrollY / maxHeight) * 100 + "%";
        }
      };

      window.addEventListener("scroll", scrollFunction);
      return () => {
        window.removeEventListener("scroll", scrollFunction);
      }
    }
  }, []);
};
