import React from "react";
import { MDBInput, MDBFormInline } from "mdbreact";

export default function SearchCheckBox({ categories, handleChange }) {
  return (
    <div>
      <MDBFormInline>
        {" "}
        <h5>Select the Therapist thats right for you.</h5>
      </MDBFormInline>
      <MDBFormInline>
        {Object.keys(categories).map((category) => (
          <MDBInput
            key={category}
            label={categories[category].displayName}
            type="checkbox"
            name={category}
            containerClass="mr-2"
            onChange={handleChange}
          />
        ))}
      </MDBFormInline>
    </div>
  );
}
