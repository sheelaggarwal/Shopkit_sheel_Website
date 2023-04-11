import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Feature from '../Feature/Feature';
import FeatureProducts from '../FeatureProducts/FeatureProducts';
import Banner from '../Banner/Banner';
import NewArrivals from '../NewArrivals/NewArrivals';
import CrazyDealsBanner from '../CrazyDealsBanner/CrazyDealsBanner';
import Banner3 from '../Banner3/Banner3';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

export default function LandingPage(){
    return(
        <>
        <Header/>
        <Hero/>
        <Feature/>
        <FeatureProducts/>
        <Banner/>
        <NewArrivals/>
        <CrazyDealsBanner/>
        <Banner3/>
        <NewsLetter/>
        <Footer/>
        
        </>
    )
}