import Header from "./containers/Header/Header";
import Banner from "./containers/Banner/Banner";
import Blog from "./containers/Blog/Blog";
import News from "./containers/News/News";
import "./assets/styles/elements/Main.scss";

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <div className="blog-news-container">
      <Blog/>
     <News/>
     </div>
    </div>
  ) 
}

export default App;
