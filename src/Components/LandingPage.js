import React, { Fragment } from "react";

import OffersPanel from "./OffersPanel";
import OffersPanel2 from "./OffersPanel2";
import Testimonials from "./Testimonials";
import SearchForm from "./SearchForm/SearchForm";
import Header from "./Header/Header";

const LandingPage = () => {
  return (
    <Fragment>
      <Header />
      <SearchForm />
      <OffersPanel />
      {/* <OffersPanel2/> */}
      <Testimonials />
    </Fragment>
  );
};

export default LandingPage;
