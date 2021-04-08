import Header from "./components/Header";
import Home from "./screens/Home";
import History from "./screens/History";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/history" component={History} />
        </Switch>
      </main>
    </>
  );
}

export default App;
