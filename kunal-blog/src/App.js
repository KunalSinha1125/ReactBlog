import './App.css';
import Navbar from './navbar'
import Home from './home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './create'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const person = {name: 'Kunal', age: 20}
  //Cannot print booleans or objects as dynamic values
  const myLink = "http://www.bing.com";
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

//<p>Liked {likes} times</p>
//<p>{"test string"}</p> 
//<p>{Math.random() * 10}</p>
//<a href={myLink}>Click here to go to Bing Search</a>
