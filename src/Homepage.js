// import { useEffect, useState } from "react"
// import BlogList from "./BlogList";

// const Home = () => {
// // const [name,setName] = useState('mario')
// // const [age, setAge] = useState(40)
// // const [hobby, setHobby] = useState('Sport')


// //     const handleClick = (e) =>{
// //         setName('Muhalat')
// //         setAge(90)
// //         setHobby('Football')
// //     }
//    const [blogs, setBlogs] = useState( null )
//    const [isPending, setIsPending] = useState(true);
// //     [
// //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
// //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
// //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
// //    ]

//     // const deleteBlog = (id) =>{
//     //     const newBlogs = blogs.filter(blog => blog.id!== id)
//     //     setBlogs(newBlogs)
//     // }
//     useEffect(()=>{
//         setTimeout(()=>{
//             fetch(' http://localhost:8000/blogs')
//             .then(res =>{
//                return res.json();
//             })
//             .then(data=>{
            
//                setBlogs(data)
//                setIsPending(false)
//             })
//         }, 1000)
//     }, []);
//     return ( 
//         <div className="home">
//             {/* //conditional Template */}
//             {isPending && <div>Loading...</div>}
//             {blogs && <BlogList blogs={blogs} />}
//             {/* <h1>Homepage</h1>
//             <p>{name} is {age} and likes {hobby}</p>
//             <button onClick={handleClick}>Click me</button> */}
//         </div>
//      );
// }
 
// export default Home;
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;