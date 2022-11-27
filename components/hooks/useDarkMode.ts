import { useCallback, useEffect, useState } from 'react';

type Props = (isDark?: boolean) => {
  isDarkMode: boolean;
  toggle: (isDark?: boolean) => void;
};

export const useDarkmode: Props = (isInitiaDark = false) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(isInitiaDark);

  const toggle = useCallback((isDark?: boolean) => {
    if (typeof isDark === 'undefined') {
      setIsDarkMode(pre => !pre);
      return;
    }
    setIsDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return { isDarkMode, toggle };
};
