import './App.css';
import Navbar from './navbar'
import Home from './home'

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const person = {name: 'Kunal', age: 20}
  //Cannot print booleans or objects as dynamic values
  const myLink = "http://www.bing.com";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;

//<p>Liked {likes} times</p>
//<p>{"test string"}</p> 
//<p>{Math.random() * 10}</p>
//<a href={myLink}>Click here to go to Bing Search</a>
