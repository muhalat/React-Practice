import Navbar from './Navbar';
import Home from './Homepage';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
  // const title = 'Welcome to the new blog'
  // const likes = 40
  // const link = 'google.com'
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}>
            
            </Route>
            <Route path="/Create" element={<Create />}>
              
            </Route>
            <Route path="/blogs/:id" element={<BlogDetails />}>
              
            </Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
/*<div className="App">
       <Navbar />
      
      <div className="content">
        <Create />
        <Home />
    
        <h1>{title}</h1>
        <p>liked {likes} times</p>
        <p>{Math.floor(Math.random()*10)}</p>
        <a href={link}>Google</a> 
      </div>
    </div> */
export default App;
