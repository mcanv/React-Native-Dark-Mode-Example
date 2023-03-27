import App from "./App";
import { AppContextProvider } from "./AppContext";
import { registerRootComponent } from "expo";

const AppWrapper = () => {
  return (
    <AppContextProvider>
      <App />
    </AppContextProvider>
  );
};

registerRootComponent(AppWrapper);
