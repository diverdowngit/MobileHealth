import React from "react"; 
import { MDBCarousel,MDBBtn,  MDBJumbotron, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
        <MDBJumbotron>
            <h2 className="h1 display-3">Got a massage and a Döner delivered to my home</h2>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-2" />
            <p>
              It uses utility classes for typgraphy and spacing to space content out
              within the larger container.
            </p>
            <p className="lead">
              <MDBBtn color="primary">Learn More</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
        <MDBJumbotron>
            <h2 className="h1 display-3">I got healed at home</h2>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-2" />
            <p>
              It uses utility classes for typgraphy and spacing to space content out
              within the larger container.
            </p>
            <p className="lead">
              <MDBBtn color="primary">Learn More</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
        <MDBJumbotron>
            <h2 className="h1 display-3">Great!</h2>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-2" />
            <p>
              It uses utility classes for typgraphy and spacing to space content out
              within the larger container.
            </p>
            <p className="lead">
              <MDBBtn color="primary">Learn More</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;