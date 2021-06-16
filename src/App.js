import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import { Switch, Route } from "react-router-dom";

// lazy load routes
const Category = lazy(() => import("./screens/Category"));
const History = lazy(() => import("./screens/History"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));

// TODO create component for fallback

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "90vh" }}>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/home" component={Home} />
            <Route path="/category/:category_name" component={Category} />
            <Route path="/history" component={History} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
