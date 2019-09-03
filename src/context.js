import React from "react";

export const theme = {
  golden: "theme-golden"
};

export const locale = {
  rainbow:
    navigator.language.substring(0, 2).toUpperCase() ||
    navigator.userLanguage.substring(0, 2).toUpperCase()
};

export const ThemeContext = React.createContext(theme.golden);
export const LocaleContext = React.createContext(locale.rainbow);
