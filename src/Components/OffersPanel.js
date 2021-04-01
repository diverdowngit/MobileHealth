import {MDBBtn, MDBContainer } from "mdbreact";

const PanelPage = () => {
return (
  <MDBContainer>

            <MDBBtn color="green">Step 1: Please choose your Service here</MDBBtn>

            <MDBBtn color="green">Step 2: Please book your Appointment here</MDBBtn>
            
            <MDBBtn color="green">Step 3: Please choose your Mobile Service</MDBBtn>

            {/* <div class="hp-types" style={{backgroundColor:'rgb(45, 111, 182)'}}>
                        <p className="hp-title">HP:</p>
                        <p className="hp-type">{pokemonData.stats[0].base_stat}</p>
                    </div> */}

  </MDBContainer>
  );
};

export default PanelPage;