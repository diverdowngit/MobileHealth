import React, { Fragment, useContext, useEffect, useState } from "react"; 
import TherapistsContext from "../context/TherapistsContext"
import TherapistCard from './TherapistCard';
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";
import FilteredTherapists from "../Components/FilteredTherapists/FilteredTherapists"

const TherapistList = () => {
    const { filteredTherapists, fetchAPI } = useContext(TherapistsContext);
    const [page, setPage]= useState({
      offset: 0,
      data: filteredTherapists.slice(0,5),
      perPage: 5,
      currentPage: 1
    })

    useEffect(() => {
      if (!filteredTherapists.length)
      fetchAPI(); 
    }, [])
    // useEffect(() => {
      
    //   setPage( )     
    // }, [])
    const setPagination= (e) =>{   
      console.log(page)
      console.dir(e.target.innerText)
      let selectedPage
      if (e.target.innerText === "Previous" && (parseInt(page.currentPage))-1 >= 1 ) {
        console.log("rte")
        selectedPage= parseInt(page.currentPage)-1}
      else if (e.target.innerText === "Next" ) {
        selectedPage = parseInt(page.currentPage) +1}
      else {
        selectedPage = e.target.innerText}
      const offset = selectedPage * page.perPage;
      setPage( prevState =>({
          ...prevState,
          currentPage: selectedPage ,
          offset: offset,
          data: filteredTherapists.slice(offset, offset+ prevState.perPage)
             })) 
    }
  
    return (<Fragment>    
                <ul>
                  {filteredTherapists.length && page.data.map(therapist => <TherapistCard therapist={therapist} /> )}
                  
                </ul> 
                {/* pageination */}
                <MDBRow>
      <MDBCol>
       
        <MDBPagination className="mb-5" color="green">
          <MDBPageItem>
            <MDBPageNav  aria-label="Previous">
              <span onClick={setPagination} aria-hidden="true" name="prev">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav onClick={setPagination}>
              1
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav onClick={setPagination}>2</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav onClick={setPagination}>3</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav aria-label="Previous">
              <span  onClick={setPagination} aria-hidden="true">Next</span>
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      </MDBCol>
    </MDBRow>
                
            </Fragment>)
}

export default TherapistList;