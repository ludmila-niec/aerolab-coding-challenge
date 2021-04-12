import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import History from "./screens/History";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "90vh" }}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/history" component={History} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
