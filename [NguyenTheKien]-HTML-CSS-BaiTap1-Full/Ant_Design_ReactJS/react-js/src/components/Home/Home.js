import 'antd/dist/antd.min.css';
import React from 'react';
import '../../styles/Home.scss';
import Header from './comp_home/Header';
import Footer from './comp_home/Footer';
import Bottom from './comp_home/Bottom';

  const Home = () => {
    return (
      <div>
       <Header></Header>
       <Footer></Footer>
       <Bottom></Bottom>
      </div>
    );
  };
  
  export default Home;