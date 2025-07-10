/* eslint-disable react/prop-types */
import { createContext, useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const THEMES = {
  dark: {
    name: "dark",
    colors: {
      background: "#0B0E17",
      foreground: "#1A1C25",
      text: "#FFFFFF",
      textSecondary: "#A0A0A0",
      textTertiary: "#6B7280",
      primary: "#7A5AF8",
      primaryLight: "#A162E8",
      primaryDark: "#5E43E0",
      primaryText: "#FFFFFF",
      secondary: "#2A2A3B",
      secondaryLight: "#3A3A4D",
      secondaryDark: "#1A1A28",
      card: "#1C1C28",
      cardHover: "#252538",
      cardBorder: "#2A2A3B",
      accent: "#8583FF",
      accentLight: "#9D9BFF",
      accentDark: "#6D6BE0",
      success: "#4BB543",
      successLight: "#6BD563",
      error: "#FF3333",
      errorLight: "#FF5555",
      warning: "#FFA500",
      warningLight: "#FFB732",
      info: "#4285F4",
      infoLight: "#5A9AFF",
      buttonPrimary: "#7A5AF8",
      buttonPrimaryHover: "#6843F3",
      buttonPrimaryText: "#FFFFFF",
      buttonSecondary: "transparent",
      buttonSecondaryHover: "#2A2A3B",
      buttonSecondaryText: "#A162E8",
      buttonSecondaryBorder: "#7A5AF8",
      inputBackground: "#1C1C28",
      inputBorder: "#2A2A3B",
      inputBorderFocus: "#7A5AF8",
      inputText: "#FFFFFF",
      inputPlaceholder: "#6B7280",
      headerBackground: "#0B0E17CC",
      footerBackground: "#0B0E17",
      gradientFrom: "#7A5AF8",
      gradientTo: "#A162E8",
    },
  },
  light: {
    name: "light",
    colors: {
      background: "#FDFCFA",
      foreground: "#F8F6F2",
      text: "#2D3748",
      textSecondary: "#718096",
      textTertiary: "#A0AEC0",
      primary: "#FF6B6B",
      primaryLight: "#FF8E8E",
      primaryDark: "#E55C5C",
      primaryText: "#FFFFFF",
      secondary: "#E6FFFA",
      secondaryLight: "#F0FFF4",
      secondaryDark: "#B2F5EA",
      card: "#FFFFFF",
      cardHover: "#FCFAF7",
      cardBorder: "#EDF2F7",
      accent: "#38B2AC",
      accentLight: "#4FD1C5",
      accentDark: "#319795",
      success: "#48BB78",
      successLight: "#68D391",
      error: "#F56565",
      errorLight: "#FC8181",
      warning: "#ED8936",
      warningLight: "#F6AD55",
      info: "#4299E1",
      infoLight: "#63B3ED",
      buttonPrimary: "#FF6B6B",
      buttonPrimaryHover: "#E55C5C",
      buttonPrimaryText: "#FFFFFF",
      buttonSecondary: "transparent",
      buttonSecondaryHover: "#E6FFFA",
      buttonSecondaryText: "#38B2AC",
      buttonSecondaryBorder: "#38B2AC",
      inputBackground: "#FFFFFF",
      inputBorder: "#E2E8F0",
      inputBorderFocus: "#FF6B6B",
      inputText: "#2D3748",
      inputPlaceholder: "#A0AEC0",
      headerBackground: "#FDFCFACC",
      footerBackground: "#F8F6F2",
      gradientFrom: "#FF6B6B",
      gradientTo: "#FFB88C",
    },
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) {
        return saved === "dark" ? THEMES.dark : THEMES.light;
      }
    }
    return prefersDarkMode ? THEMES.dark : THEMES.light;
  });

  const value = useMemo(
    () => ({
      theme,
      isDarkMode: theme.name === "dark",
      toggleTheme: () =>
        setTheme((prev) => (prev.name === "dark" ? THEMES.light : THEMES.dark)),
      setTheme: (themeName) => {
        setTheme(themeName === "dark" ? THEMES.dark : THEMES.light);
      },
    }),
    [theme]
  );

  useEffect(() => {
    const root = document.documentElement;

    // Set data-theme attribute
    root.setAttribute("data-theme", theme.name);

    // Set Tailwind dark mode class
    root.classList.toggle("dark", theme.name === "dark");

    // Set all CSS variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Set gradient variables
    root.style.setProperty(
      "--color-gradient",
      `linear-gradient(135deg, ${theme.colors.gradientFrom}, ${theme.colors.gradientTo})`
    );

    // Save preference
    localStorage.setItem("theme", theme.name);
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
