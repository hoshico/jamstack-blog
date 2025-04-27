import { useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { useSimpleDarkmode } from './useSimpleDarkMode';

const Theme = {
  Dark: 'Dark',
  Light: 'Light',
} as const;

type UseDarkMode = (isDark?: boolean) => {
  isDarkMode: boolean;
  presistToggle: (isDark: boolean) => void;
};

export const useSaveTheme: UseDarkMode = () => {
  /**
   * useLocalStorage(key)として
   * setValue("value")でkey: valueをsetできる
   */
  const [value, setValue] =
    useLocalStorage<(typeof Theme)['Dark' | 'Light']>('theme');
  const { isDarkMode, toggle } = useSimpleDarkmode();

  // Todo: isDarkにundefinedが入る
  const presistToggle = (isDark: boolean) => {
    toggle(isDark);
    setValue(isDark ? Theme.Dark : Theme.Light);
  };

  useEffect(() => {
    if (value === Theme.Dark || !('theme' in localStorage)) {
      toggle(true);
      setValue(Theme.Dark);
    } else {
      toggle(false);
      setValue(Theme.Light);
    }
  }, [value, setValue, toggle]);
  return { isDarkMode, presistToggle };
};
