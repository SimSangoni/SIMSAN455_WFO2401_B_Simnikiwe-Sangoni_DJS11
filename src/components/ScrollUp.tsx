import { useEffect } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

const ScrollToTop: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { pathname } = useLocation();
  const outlet = useOutlet();

  useEffect(() => {
    if (!outlet) {
      window.scrollTo(0, 0);
    }
  }, [pathname, outlet]);

  
  return <>{children}</>;
};

export default ScrollToTop;
