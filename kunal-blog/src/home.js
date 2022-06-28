import {useState} from "react";
import useFetch from "./useFetch"
import BlogList from "./bloglist";

const Home = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useFetch(
        'http://localhost:8000/blogs', data, setData, isLoading, setIsLoading, error, setError
    );
    const blogs = data;
    return ( 
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;

//hooks are for variables that you want to be reactive, i.e page re-renders when they change

//<div className="home">
//<h2>Homepage</h2>
//<p>{name} is {age} years old</p>
//<button onClick={
 //   (e)=>handleClick(e)
//}>Click Me!</button>
//</div>

//const [name, setName] = useState("Mario");
//const [age, setAge] = useState(20)
//const handleClick = (e) => {
 //   setName("Luigi")
  //  setAge(25)
   // console.log("Hello there " + name + "!")
    //console.log(e)
//}
/*
{blogs && <BlogList blogs={blogs} blogHeading="All Blogs!" handleDelete={handleDelete}/>}
{blogs && <BlogList blogs={blogs.filter(
    blog => (blog.author === "mario")
)} blogHeading="Mario's blogs!" handleDelete={handleDelete}/>}
<button onClick={()=>setName('luigi')}>Change Name</button> */

/*

*/