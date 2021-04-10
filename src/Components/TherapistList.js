import React, { Fragment, useContext, useEffect } from "react"; 
import TherapistsContext from "../context/TherapistsContext"
import TherapistCard from './TherapistCard';
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";


const TherapistList = () => {
    const { data, fetchAPI } = useContext(TherapistsContext);
  
    useEffect(() => {
      fetchAPI()
    } , []);



    
  
    return (<Fragment>    
                <ul>
                  {data.length && data.map(therapist => <TherapistCard therapist={therapist} /> )}
                  
                </ul>
                {/* pageination */}
                <MDBRow>
      <MDBCol>
        <MDBPagination className="mb-5" color="green">
          <MDBPageItem>
            <MDBPageNav aria-label="Previous">
              <span aria-hidden="true">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              1
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>2</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>3</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav aria-label="Previous">
              <span aria-hidden="true">Next</span>
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      </MDBCol>
    </MDBRow>
                
            </Fragment>)
}

export default TherapistList;