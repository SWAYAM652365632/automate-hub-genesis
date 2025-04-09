
import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const handleThemeChange = (newTheme: "light" | "dark" | "purple" | "blue" | "green") => {
    setTheme(newTheme);
    toast({
      title: "Theme changed",
      description: `Theme set to ${newTheme} mode`,
      duration: 2000,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Change theme">
          {theme === "light" ? (
            <Sun className="h-5 w-5" />
          ) : theme === "dark" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Palette className="h-5 w-5" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("purple")}>
          <div className="w-4 h-4 rounded-full bg-purple-500 mr-2" />
          <span>Purple</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("blue")}>
          <div className="w-4 h-4 rounded-full bg-blue-500 mr-2" />
          <span>Blue</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("green")}>
          <div className="w-4 h-4 rounded-full bg-green-500 mr-2" />
          <span>Green</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
