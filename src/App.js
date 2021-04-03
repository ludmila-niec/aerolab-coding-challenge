import Header from "./components/Header";
import Home from './screens/Home'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Header />
        <main>
          <Switch>
            <Route path='/home' component={Home} />
          </Switch>
        </main>
    </>
  );
}

export default App;
