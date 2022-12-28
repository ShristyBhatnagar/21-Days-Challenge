import React from 'react'
import LeftPane from '../shared components/LeftPane/LeftPane';
import RightPane from '../shared components/RightPane/RightPane';
import Middle from '../shared components/Mid/Mid';
import MainPage from '../shared components/Mid/MainPage';
import Footer from '../shared components/Footer/Footer'

const Home = () => {
  return (
    <div>     
    <LeftPane />
    <RightPane />   

    <Middle />
    <MainPage />



    <Footer />
   </div>
  )
}

export default Home