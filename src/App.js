import Navbar from './Navbar';
import Home from './Homepage';
function App() {
  // const title = 'Welcome to the new blog'
  // const likes = 40
  // const link = 'google.com'
  return (
    <div className="App">
      <Navbar />
      
      <div className="content">
      <Home />
        {/* <h1>{title}</h1>
        <p>liked {likes} times</p>
        <p>{Math.floor(Math.random()*10)}</p>
        <a href={link}>Google</a> */}
      </div>
    </div>
  );
}

export default App;
