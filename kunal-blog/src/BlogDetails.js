import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {useState} from 'react'
const BlogDetails = () => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(()=> {
            history.push('/');
        })
    }
    useFetch(
        'http://localhost:8000/blogs/' + id, data, setData, isLoading, setIsLoading, error, setError
    );
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>Blog Title - {data.title}</h2>
                    <p>Written by {data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;