import React, { useState, useEffect } from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn,
} from "mdbreact";
import "./SearchForm.css";
import SearchCheckBox from "../SearchCheckbox/SearchCheckBox";
import axios from "axios";

const SearchForm = () => {
  // const res = await axios.get('http://mywebsite.com/therapists', { params: { category: "massage" } });
  const URL = "https://cherry-cupcake-02141.herokuapp.com/therapist";

  const [categories, setCategories] = useState({
    massage: { selected: false, displayName: "Massage Therapist" },
    physioTherapist: { selected: false, displayName: "Physio Therapist" },
    speechTherapist: { selected: false, displayName: "Speech Therapist" },
    nutritionTherapist: { selected: false, displayName: "Nutrition Therapist" },
  });

  const handleChange = (e) => {
    setCategories({
      ...categories,
      [e.target.name]: {
        selected: e.target.checked,
        displayName: categories[e.target.name].displayName,
      },
    });
  };

  const checkAvailability = (e) => {
    e.preventDefault();
    const filteredCategories = Object.entries(categories).reduce(
      (acc, [name, { selected }]) => (selected && acc.push(name), acc),
      []
    );

    /*
      const selectedDoctors = [];

      for (const doctor in categories) {
        if (categories[doctor].selected === true) selectedDoctors.push(doctor);
      }
    */
    axios
      .get(URL, {
        params: {
          category: filteredCategories,
        },
      })
      .then((res) => console.log("res", res))
      .catch((err) => console.log("err", err));
  };

  return (
    <MDBCard lg="3" className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://www.minimed.at/fileadmin/_processed_/0/7/csm_Physiotherapie_aeaf6ee751.jpg"
                alt=""
                padding-right="0"
                margin-right="0"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>
                FIND THE RIGHT
                <br></br>
                SERVICE FOR YOU
              </strong>
            </h3>
            <SearchCheckBox
              categories={categories}
              handleChange={handleChange}
            />
            <br></br>
            <p>Postcode | Street | City</p>
            <MDBInput label="" background size="lg" />
            <p>Search for Date</p>
            <MDBInput label="" background size="lg" />
            <MDBBtn
              onClick={checkAvailability}
              color="green"
              size="md"
              className=""
            >
              Check Availability
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SearchForm;
