import "./App.scss";
import "./MainNavigation/RESPONSIVE.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Articles from "./Articles/Articles";
import DetailTemplate from "./Articles/COMPONENTS - TEMPLATES/Detail_Template";
import MainNavigation from "./MainNavigation/MainNavigation";
import Home from "./Home/Home";
import About from "./About/COMPONENTS/About";
import Update from "./Updates/Updates";
import BuildYourOwn from "./BuildYourOwn/COMPONENTS/BuildYourOwn";
import Friends from "./Friends/COMPONENTS/Friends";
import Share_Ideas from "./Share Ideas/COMPONENTS/Share Ideas";
import Search from "./Search/Search";
import Create from "./Create/Create";
import Confirmation from "./Confirmation/Confirmation";

function App() {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    fetch("/articlesa")
      .then((res) => res.json())
      .then((data) => {
        setAllArticles(data)
      })
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/articles">
          <Articles />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/detail">
          <DetailTemplate />
        </Route>
        <Route exact path="/signup">
          <BuildYourOwn />
        </Route>
        <Route exact path="/friends">
          <Friends />
        </Route>
        <Route exact path="/shareideas">
          <Share_Ideas />
        </Route>

        <Route exact path='/create'>
          <Create />
        </Route>

        <Route exact path="/create/confirmation">
          <Confirmation />
        </Route>


        {allArticles.map((item) => {
          return (
            <Route path={"/articles/" + item.URL.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')} key={item.URL}>
              <title>{"Article- " + item.Title}</title>
              <DetailTemplate
                title={item.Title}
                thumbnail={item.Thumbnail}
                content={item.Content}
                labels = {item.Label}
              />
            </Route>
          );
        })}


      </Switch>
      <Update />
      <MainNavigation />
    </Router>

  );
}

export default App;
