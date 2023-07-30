import React from 'react'
import GalleryCard from '../components/GalleryCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../images/socialkolkata.jpg"

const Gallery = () => {
  return (
    <div>
      <Navbar/>
      <GalleryCard/>
      <Footer />
    </div>
  )
}

export default Gallery;