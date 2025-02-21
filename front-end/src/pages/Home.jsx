import React from 'react';
import Main from "../components/Main";
import Header from '../components/Header.jsx'
import IndexPlayer from '../components/IndexPlayer.jsx'
const Home = () => {
  return (
    <>
    <Header />
    <Main type="home" />
    {/* <IndexPlayer cls="home"/> */}
    </>
  )
}
export default Home