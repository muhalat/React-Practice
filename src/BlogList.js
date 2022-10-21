const BlogList = ({blogs,})=>{
    
    //Another way to do it
// const BlogList = (props) => {
//     const blogs = props.blogs; 

    return ( 
            <div className="blog-list">
                {blogs.map((blog)=>(
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Content: {blog.body}</p>
                        <p>Written by {blog.author}</p>
                        {/* <button onClick={()=>deleteBlog(blog.id)}>Delete Blog</button> */}
                    </div>
                ))}
                </div>
     );
}
 
export default BlogList;