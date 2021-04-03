import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Layout from './components/Layout/Layout'
import Products from './components/Products/Products'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Layout>
         <Products />
        </Layout>
      </main>
    </>
  );
}

export default App;
