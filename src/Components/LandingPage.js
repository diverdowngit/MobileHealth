import React, { Fragment } from "react";

import OffersPanel from "./OffersPanel";
import Testimonials from "./Testimonials";
import SearchForm from "./SearchForm/SearchForm";
import Header from "./Header/Header";

const LandingPage = () => {
  return (
    <Fragment>
      <Header />
      <SearchForm />
      <OffersPanel />
      <Testimonials />
    </Fragment>
  );
};

export default LandingPage;
