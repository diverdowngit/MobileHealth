import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon,MDBBtn } from "mdbreact";

const OffersPanel2 = () => {

    
    return (
        <MDBContainer >
            <MDBRow class="text-center py-4">
                <MDBCol size="12">
                <h3 class="text-center py-4">How it works</h3>
      
                </MDBCol>
                
            </MDBRow>

            <MDBRow className="text-center d-flex align-items-start">
                <MDBCol size="6" md="4">
                    <i class="fas fa-desktop fa-5x grey-text py-5" ></i>
                <MDBBtn color="green" height="10" href="/therapistlist"> ------- Choose your service ------- </MDBBtn>
                
                </MDBCol>
            

                <MDBCol size="6" md="4">
                    <i class="fas fa-calendar-check fa-5x grey-text py-5"></i>
                <MDBBtn color="green" height="10" href="/therapistlist"> ----------- Book your service --------- </MDBBtn>
                
                </MDBCol>
                <MDBCol size="6" md="4">
                    <i class="fas fa-home fa-5x grey-text py-5"></i>
                <MDBBtn color="green" height="10" href="/therapistlist">----------- Enjoy your service at home ---------</MDBBtn>
                
                </MDBCol>
            </MDBRow>
            {/* //2te Reihe */}
            {/* <MDBRow class="d-flex align-items-center">
                <MDBCol size="6" md="4" class="py-4" >
                <MDBBtn color="green lighten-5" height="10" href="/therapistlist" >Please choose your Service here</MDBBtn>
                </MDBCol >

                <MDBCol size="6" md="4" class="py-4">
                <MDBBtn color="green" height="10" href="/therapistlist">Please choose your Service here</MDBBtn>
                </MDBCol>

                <MDBCol size="6" md="4"class="py-4">
                <MDBBtn color="rgba-grey-light" height="10" href="/therapistlist">Please choose your Service here</MDBBtn>
                </MDBCol>
            </MDBRow> */}
            
        </MDBContainer>
    )
}

export default OffersPanel2
