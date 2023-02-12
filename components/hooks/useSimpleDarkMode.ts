import { useCallback, useEffect, useState } from 'react';

type Props = (isDark?: boolean) => {
  isDarkMode: boolean;
  toggle: (isDark?: boolean) => void;
};

// クラス名の切り替えのみを行う
export const useSimpleDarkmode: Props = (isInitiaDark = false) => {
  const [isDarkMode, toggleTheme] = useState<boolean>(isInitiaDark);

  const toggle = useCallback((isDark?: boolean) => {
    if (typeof isDark === 'undefined') {
      toggleTheme((pre) => !pre);
      return;
    }
    toggleTheme(isDark);
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
