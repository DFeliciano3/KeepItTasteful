import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RecipesContainer from "../containers/RecipesContainer";
import Navbar from "../navigation/Navbar";
import RecipeCard from "./recipes/RecipeCard";
import RecipeForm from "./recipes/RecipeForm";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
import Home from "./Home";
import About from "./About";

function App (){
    return (
       <div className="App">
        <Router>
            <Navbar />
            <Header />
            <Switch>
                <Route path="/recipes/new">
                    <RecipeForm />
                </Route>
                <Route path="/recipes/:id">
                    <RecipeCard />
                </Route>
                <Route path="/recipes">
                    <RecipesContainer />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>404</h1>
                </Route>
            </Switch> 
        </Router>
        <Footer />
       </div> 
    )
}



export default App;