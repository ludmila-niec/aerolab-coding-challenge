import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import Category from './screens/Category'
import History from "./screens/History";
import PageNotFound from './components/PageNotFound'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "90vh" }}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/home" component={Home} />
          <Route path='/category/:category_name' component={Category} />
          <Route path="/history" component={History} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
