import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", () => {
  const appTheme = ref("light");

  const setTheme = (theme: "dark" | "light") => {
    appTheme.value = theme;
  };

  const isDarkTheme = () => {
    return appTheme.value === "dark";
  };

  const initAppTheme = () => {
    const windowPreferenceDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    appTheme.value = windowPreferenceDark ? "dark" : "light";
  };

  watch(appTheme, (value, oldValue) => {
    document.body.classList.remove(oldValue);
    document.body.classList.add(value);
  });

  return { appTheme, setTheme, isDarkTheme, initAppTheme };
});
