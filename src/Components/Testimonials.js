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
    <MDBContainer>
      <section className='text-center my-5'>
        <h2 className='h3-responsive  my-5'>What Clients say.</h2>
        <MDBCarousel
          activeItem={1}
          length={3}
          testimonial
          interval={false}
          showIndicators={true}
          showControls={true}
          className='no-flex z-depth-1'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              
                <p>
                  <MDBIcon icon='quote-left' className='green-text'/> Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Quod eos id officiis hic tenetur
                  quae quaerat ad velit ab. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Dolore cum accusamus eveniet
                  molestias voluptatum inventore laboriosam labore sit,
                  aspernatur praesentium iste impedit quidem dolor veniam.
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
                  <MDBIcon icon='quote-left' className='green-text'/> Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore.
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
                  <MDBIcon icon='quote-left' className='green-text'/> Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. Sed ut perspiciatis unde omnis iste natus error
                  sit voluptatem accusantium doloremque laudantium. 
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
