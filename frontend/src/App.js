import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import Videos from "./pages/Videos";
import WhatsGood from "./pages/WhatsGood";
import WhereToFind from "./pages/WhereToFind";
import Hive from "./pages/Hive";
import CallUs from "./pages/CallUs";
import OurFamily from "./pages/OurFamily";
import ProductDetails from "./components/ProductDetails";
import { Burger } from "./components/Burger";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Burger />
          <Header />
        </header>

        <main>
          <Route path="/productdetails/:id" component={ProductDetails}></Route>
          <Route path="/ourstory" component={StoryPage}></Route>
          <Route path="/whatsgood" component={WhatsGood}></Route>
          <Route path="/ourfamily" component={OurFamily}></Route>
          <Route path="/findus" component={WhereToFind}></Route>
          <Route path="/hive" component={Hive}></Route>
          <Route path="/videos" component={Videos}></Route>
          <Route path="/callus" component={CallUs}></Route>
          <Route path="/" component={HomePage} exact></Route>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
