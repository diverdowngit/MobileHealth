import React, { Fragment } from "react"; 

import OffersPanel from "./OffersPanel";
import Testimonials from "./Testimonials";
import SearchForm from "./SearchForm"

export default ()=>{
    return     <Fragment>   
       
        <h1>THis will be the LandingPage</h1>
        <SearchForm/>
        <OffersPanel/>
        <Testimonials/>

        </Fragment>
}