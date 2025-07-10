import { useTheme } from "../../hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-lg text-white hover:text-purple-400 transition"
      aria-label="Toggle theme"
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
