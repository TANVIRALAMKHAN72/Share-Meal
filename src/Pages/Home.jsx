import React from 'react';
import Banner from './Banner';
import SharemealWork from './SharemealWork';
import SharemealBenifit from './SharemealBenifit';
import Testimonials from './Testimonials';
import FoodContainer from '../Components/FoodContainer';
import JoinMovementSection from '../Components/JoinMovementSection';



const Home = () => {
    return (
     <div>
        <Banner></Banner>
        <SharemealWork></SharemealWork>
        <FoodContainer></FoodContainer>
        <SharemealBenifit></SharemealBenifit>
        <Testimonials></Testimonials>
        <JoinMovementSection></JoinMovementSection>
        
     </div>
    );
};

export default Home;
