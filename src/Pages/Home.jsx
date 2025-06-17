import React from 'react';
import Banner from './Banner';
import SharemealWork from './SharemealWork';
import SharemealBenifit from './SharemealBenifit';
import Testimonials from './Testimonials';
import FoodContainer from '../Components/FoodContainer';


const Home = () => {
    return (
     <div>
        <Banner></Banner>
        <SharemealWork></SharemealWork>
        <FoodContainer></FoodContainer>
        <SharemealBenifit></SharemealBenifit>
        <Testimonials></Testimonials>
     </div>
    );
};

export default Home;
