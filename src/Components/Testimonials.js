import React from 'react';
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBIcon
} from 'mdbreact';

const TestimonialsPage = () => {
  return (
    <MDBContainer  className="testimonials">
      <section className='text-center my-5'>
        <h2 className='h3-responsive  my-5'>What our Clients say.</h2>
        <MDBCarousel
          activeItem={1}
          length={3}
       
        
          showIndicators={false}
          showControls={false}
          className='no-flex z-depth-1'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              
                <p>
                  <MDBIcon icon='quote-left' className='green-text'/> Great organization, quick appointments.
                </p>
                <h4 className='font-weight-bold'>Anna Deynah</h4>
                <h6 className='font-weight-bold my-3'>Founder at ET Company</h6>
                <MDBIcon icon='star' className='green-text' />
                <MDBIcon icon='star' className='green-text' />
                <MDBIcon icon='star' className='green-text' />
                <MDBIcon icon='star' className='green-text' />
                <MDBIcon far icon='star-half' className='green-text' />
      
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
   
                <p>
                  <MDBIcon icon='quote-left' className='green-text'/> Simply put ... Great team, great Site!!!



I promise you won't be disappointed.



One can only praise without end!
                </p>
                <h4 className='font-weight-bold'>Maria Kate</h4>
                <h6 className='font-weight-bold my-3'>
                  Photographer at Studio LA
                </h6>
                <MDBIcon icon='star' className='green-text' />
                <MDBIcon icon='star' className='green-text' />
                <MDBIcon icon='star' className='green-text' />
                <MDBIcon icon='star' className='green-text' />
                <MDBIcon icon='star' className='green-text' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
                <p>
                  <MDBIcon icon='quote-left' className='green-text'/> I am very pleased! Mobile Health is technically very competent and also top-notch personally! 
                </p>
                <h4 className='font-weight-bold'>John Doe</h4>
                <h6 className='font-weight-bold my-3'>
                  Front-end Developer in NY
                </h6>
                <MDBIcon icon='star' className='green-text' />
                <MDBIcon icon='star' className='green-text' />
                <MDBIcon icon='star' className='green-text' />
                <MDBIcon icon='star' className='green-text' />
                <MDBIcon far icon='star' className='green-text' />
  
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </MDBContainer>
  );
};

export default TestimonialsPage;
