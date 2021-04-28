import React, { useEffect,useState, useContext } from "react";
import {useHistory} from "react-router-dom"
import { MDBContainer,  MDBRow, MDBCol, MDBTabPane, MDBTabContent,  MDBCardHeader,  MDBBtn,MDBNav, MDBNavItem, MDBNavLink, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,MDBView } from "mdbreact";
import '../../App.css'; //Import here your file style
import './Dashboard.css'

import UsersContext from '../../context/UsersContext'
import axios from "axios";

const Dashboard = () => {
    const { usersContext,userContext } = useContext(UsersContext)
   
    const [pill, setPill] = useState("1");
    const [therapistBookings, setTherapistBookings] = useState([]);
    const [bookingAccepted, setBookingAccepted]= useState(false)
    

    const togglePills =(tab) => {
        setPill(tab)
      };

    useEffect(() => {
     (async () => await userContext())()
    }, [])

    useEffect(() => {
      if (usersContext) {
        // console.log({user})
        const getBooking = async ()=>{
          await axios({
            method: "get",
            // url: `${serverUrl}/booking`,
            url: `http://localhost:3000/${usersContext.role}/bookings`,
            headers: {
              "Content-Type": "application/json",
            },
            data: usersContext,
          })
            .then(function (response) {
              setTherapistBookings(response.data)

              response.data.map((res)=>{
                setBookingAccepted((prevState)=>({
                  ...prevState,
                  [response.data.indexOf(res)]: false
                }))
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        getBooking();
      }
    }, [usersContext])

    const acceptBooking=(e)=>{
      setBookingAccepted((prevState)=>({
        ...prevState,
        [Number(e.target.name)]: true
      }))
      console.log(bookingAccepted)
    }

    return (
        
        (<>
        {usersContext ? 
        <MDBContainer>
        <MDBRow className="my-5">
          <MDBCol lg="3">    
            <MDBCard >
            {usersContext.role=== "therapist" && <MDBView >
                <MDBCardImage
                hover
                overlay='white-slight'
                className='card-img-top'
                src={usersContext.profilPhoto}
                alt='Card cap'
                />
            </MDBView>}

          <MDBCardBody className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>{usersContext.first_name} {usersContext.last_name}</strong>
            <MDBCardText>
                {usersContext.specialities}
            </MDBCardText>
            </MDBCardTitle>
            <MDBCardText>
              {usersContext.address.streetName} {usersContext.address.streetNumber}<br/>
              {usersContext.address.city} <br/>
              {usersContext.address.country} <br/>
        {' '}
            </MDBCardText>
            
            <p className='font-weight-bold blue-text'><span class="dot"></span>You are logged in as {usersContext.role}</p>
            {/* <MDBCol md='12' className='d-flex justify-content-center'>
                maybe a button to change something?
            </MDBCol> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
          <MDBCol md="9">
          <MDBRow>
            <MDBCol md="12">
            <div style={{padding:1 + "rem"}}>
            <h2 style={{textAlign:"left"}}>Hello {usersContext.first_name}!</h2>
            <h5>Welcome to your Dashboard. Here you can see your upcoming appointments and make changes in your Profile.</h5>
            </div>
            
              <MDBNav className= "nav-pills">
                <MDBNavItem>
                  <MDBNavLink link to="#" className={pill==="1"? "activeLink": "link"} onClick={()=>togglePills("1")}>
                    Upcoming Bookings
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link to="#" className={pill==="2"? "activeLink": "link"} onClick={()=>togglePills("2")}>
                    Booking History
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent activeItem={pill}>
                <MDBTabPane tabId="1">
                <MDBContainer>
                    <MDBRow>
                       
                       {therapistBookings.length? therapistBookings.map(therapistBooking => (
                        <MDBCol lg="4">
                        <MDBCard  className="text-center">
                        <MDBCardHeader color="green">{'test'}</MDBCardHeader>
                            <MDBCardBody>
                            <MDBCardTitle>Booking</MDBCardTitle>
                            <MDBCardText>
                                
                                <div className='rounded-bottom mdb-color lighten-5 text-center pt-3'>
                                {usersContext.role=== "therapist" && `Client: ${therapistBooking.clientId.first_name},${therapistBooking.clientId.last_name}`}<br/>
                                {usersContext.role=== "client" && `Booking with : ${therapistBooking.therapistId.education},${therapistBooking.therapistId.last_name}`}
                                Location: {therapistBooking.place}<br/>
                                Time: {therapistBooking.time}<br/>
                                <br/>
                                Message: {therapistBooking.message}<br/>
                                
                                <br/>
                                </div>
                                <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                                      <ul className='list-unstyled list-inline font-small'>
                                        <li className='list-inline-item pr-2 white-text'>
                                          {/* <MDBIcon far icon='clock' /> {therapistBooking.last_updated} */}
                                        </li>
                                        {/* <li className='list-inline-item pr-2'>
                                          <a href='#!' className='white-text'>
                                            <MDBIcon far icon='comments' className='mr-1' />
                                            12
                                          </a>
                                        </li>
                                        <li className='list-inline-item pr-2'>
                                          <a href='#!' className='white-text'>
                                            <MDBIcon fab icon='facebook-f' className='mr-1' />
                                            21
                                          </a>
                                        </li>
                                        <li className='list-inline-item'>
                                          <a href='#!' className='white-text'>
                                            <MDBIcon fab icon='twitter' className='mr-1' />5
                                          </a>
                                        </li> */}
                                      </ul>
                                    </div>
                            </MDBCardText>
                            {usersContext.role === "therapist" && <MDBBtn name={therapistBookings.indexOf(therapistBooking)} onClick={acceptBooking} className={bookingAccepted[therapistBookings.indexOf(therapistBooking)]? "acceptedBooking": "bookingPending"} color="green" size="sm">
                            {bookingAccepted[therapistBookings.indexOf(therapistBooking)]? "BOOKING ACCEPTED": "ACCEPT BOOKING"}
                            </MDBBtn>}
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                      )): <MDBCol lg="4"><h5>No Bookings made</h5></MDBCol>}

                    </MDBRow>
                </MDBContainer>
                </MDBTabPane>
                <MDBTabPane tabId="2">
                    <MDBContainer>
                    <h5 className="d-flex align-items-center">
                    Your booking history is empty.
                    </h5>
                    </MDBContainer>
                  
                </MDBTabPane>
              </MDBTabContent>
            </MDBCol>
          </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer> 
      :
      <div className="spinner-grow text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    }
    </>
    )
)
}

export default Dashboard
