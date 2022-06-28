import { Link } from "react-router-dom";

const BlogList = ({blogs, blogHeading}) => {
    return (
        <div className="blogList">
            <h2>{blogHeading}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;