import React, { useState} from 'react'
import './App.css';
import MovieNavbar from './Components/MovieNavbar/MovieNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieData from './Components/Data/MovieData';
import MovieList from './Components/MovieList/MovieList';
import AddMovie from './Components/AddMovie/AddMovie'
function App() {
  const [titleSearch , setTitleSearch]=useState("");
  const getTitleSearch =(input)=>{
    setTitleSearch(input)
  };
  const [rateSearch, setRateSearch] = useState(0);
  const getRateSearch =(input)=>{
    setRateSearch(input)
  };
  const [movieListData, setMovieListData] = useState(MovieData);
  const getMoviesListData=(input)=>{
    setMovieListData([...movieListData ,input]);
  }
  return (
    <div className="App">
     <MovieNavbar 
     getTitleSearch={getTitleSearch}
     getRateSearch={getRateSearch}
     />
     <div className="addMovie">
     <AddMovie getMoviesListData={getMoviesListData}/>
     </div>
     <div className="App-container">
     <MovieList className="Movie-container" 
      movieListData={movieListData} 
      titleSearch={titleSearch}
      rateSearch={rateSearch}/>
     </div>
    </div>
  );
}

export default App;
