import './App.css';
import Row from './components/row/Row';
import requests from './api/request';
import Banner from './components/header/banner/Banner';
import Navbar from './components/header/navbar/Navbar';

function App() {
  return (
    <div className="app">
     <Navbar />
     <Banner />
      <Row 
      title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      IsLargeRow />
      <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title = "Documentries" fetchUrl={requests.fetchDocumantaries}/>
    </div>
  );
}

export default App;
