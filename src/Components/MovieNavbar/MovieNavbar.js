import React from 'react'
import {Navbar ,Nav,Form,FormControl} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import './MovieNavbar.css'


function MovieNavbar({getTitleSearch , getRateSearch}) {
  const ratingChanged = (newRating) => {
  getRateSearch(newRating);
};
    const handleTitleChange =(e)=>{
      getTitleSearch(e.target.value)
    }
    return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">MingoRoll</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Anime</Nav.Link>
      
    </Nav>
    <Form inline className ="searchArea" >
      <img className="log" src="https://share.ftimg.com/aff/flamingtext/2013/03/09/flamingtext__22864961164285453.png" alt="page logo"/>
      <FormControl 
      type="text"
      placeholder="Search" 
      className="mr-sm-2 searchInput"
      onChange={handleTitleChange} />
      <ReactStars
      count={5}
      onChange={ratingChanged}
      size={28}
      activeColor="#ffd700"
  />
    </Form>
  </Navbar>
    )
}

export default MovieNavbar
