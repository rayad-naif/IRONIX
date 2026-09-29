import React, { useState, useEffect, createContext, useContext } from 'react';

const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {},
});

export function RouterProvider({ children }) {
  const getHashPath = () => {
    const hash = window.location.hash;
    if (!hash || hash === '#' || hash === '#/') return '/';
    return hash.replace(/^#/, '');
  };

  const [currentPath, setCurrentPath] = useState(getHashPath());

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = getHashPath();
      setCurrentPath(newPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path) => {
    const targetHash = `#${path.startsWith('/') ? path : '/' + path}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ to, children, className = '', onClick, ...props }) {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
