import React, { useState, useEffect, useContext } from "react";
import {
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
import TherapistsContext from "../../context/TherapistsContext";

const SearchForm = () => {
  const { checkAvailability, filteredTherapists } = useContext(
    TherapistsContext
  );

  const [categories, setCategories] = useState({
    massage: { selected: false, displayName: "Massage Therapist" },
    physioTherapist: { selected: false, displayName: "Physical Therapist" },
    speechTherapist: { selected: false, displayName: "Speech Therapist" },
    nutritionTherapist: { selected: false, displayName: "Nutrition Therapist" },
  });

  const [postalCode, setPostalCode] = useState("");

  const handleChange = (e) => {
    setCategories({
      ...categories,
      [e.target.name]: {
        selected: e.target.checked,
        displayName: categories[e.target.name].displayName,
      },
    });
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
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <h2 className="font-weight-bold mb-3 p-0" style={{color: "green"}}>
              <strong>FIND THE RIGHT MEDICAL SERVICE</strong>
            </h2>
            <br />
            <br/>
            <SearchCheckBox
              categories={categories}
              handleChange={handleChange}
            />
            <br />
            <h3>Select the postal code nearest you</h3>
            <MDBInput
              onChange={(e) => setPostalCode(e.target.value)}
              label="Valid Postcode"
              background
              size="lg"
            />
            <MDBBtn
              onClick={(e) => checkAvailability(e, categories, postalCode)}
              color="green"
              size="md"
              className=""
            >
              Find Therapists now
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SearchForm;
