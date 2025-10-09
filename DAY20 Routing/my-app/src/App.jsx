
import NavigationProvider from "./components/NavigationProvider";
import Route from "./components/Route";
import "./App.css"; 
import Link from "./components/Link";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <NavigationProvider>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Route href="/">
        <Home />
      </Route>

      <Route href="/about">
        <About />
      </Route>
    </NavigationProvider>
  );
};

export default App;
