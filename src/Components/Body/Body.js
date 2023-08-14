import 'bootstrap/dist/css/bootstrap.min.css'



import { useState, useEffect } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../../src/App.css'


import SlideShowHomepage from './SlideshowHomepage/Slideshow.Component'
import WarrantyIconComponent from './warrantyIcon/warrantyIconComponent'
import SaleSummerComponent from './saleSummerList/saleSummerComponent'
import BrandListIcon from './brandListLogo/brandListLogoComponent'
import FavourCollectionComponent from './collectionProduct/newestPorductCollection/favourCollectionComponent'
import SummerCollectionComponent from './collectionProduct/summerCollection/summerCollectionComponent'
import DiscoverComponent from './collectionProduct/discoverCollection/discoverComponent'

const Body = () => {


    return (
        <main>
            <SlideShowHomepage />
            <WarrantyIconComponent />
            <SaleSummerComponent />
            <BrandListIcon />
            <FavourCollectionComponent />
            <SummerCollectionComponent />
            <DiscoverComponent />
        </main>
    )
}

export default Body