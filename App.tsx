import "react-native-gesture-handler";
import AppNavigations from "./src/AppNavigations";
import ThemeManager from "./src/components/organisms/ThemeManager";

export default function App() {
  return (
    <ThemeManager>
      <AppNavigations />
    </ThemeManager>
  );
}
