import './App.css';
import Header from "./components/Header"
//import Body from "./components/Body"
import NewsFeed from "./components/Newsfeed"
import Stats from "./components/Stats"

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Header/>
      </div>
      <div className="app__body">
        <div className="app__container">
          <NewsFeed/>
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
