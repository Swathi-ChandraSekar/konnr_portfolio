import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls the window to the top whenever the route changes,
// so navigating to a new page always starts at its banner
// instead of keeping the previous page's scroll position.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
