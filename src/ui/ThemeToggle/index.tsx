import { useTheme } from "next-themes";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { IconButton } from "../IconButton";

export interface ThemeToggleProps {
  iconSize?: number;
}

export const ThemeToggle = ({ iconSize }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  return (
    <IconButton onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <RiLightbulbFlashFill size={iconSize} />
    </IconButton>
  );
};
