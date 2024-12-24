import AppRoutes from "./routes/App.Routes";
import { UserProvider } from "./context/user.context";

const App = () => {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
};

export default App;
