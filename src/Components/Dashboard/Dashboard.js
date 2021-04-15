import React, { useEffect,useState, useContext } from "react";
import {useHistory} from "react-router-dom"
import { userContext,logout } from "../../utils/auth";
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent,  MDBCardHeader, MDBCardFooter, MDBBtn,MDBNav, MDBNavItem, MDBNavLink, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,MDBView } from "mdbreact";
import '../../App.css'; //Import here your file style
import './Dashboard.css'
import { FETCH_SINGLE_THERAPIST } from "../../context/actions";
import { FreeCameraOptions } from "mapbox-gl";
import UsersContext from '../../context/UsersContext'
import axios from "axios";

const Dashboard = ({onLogout}) => {
    const { usersContext, setUsersContext} = useContext(UsersContext)
    const history =useHistory();
    const [user, setUser] = useState(null);
    const [pill, setPill] = useState("1")
    

    const togglePills =(tab) => {
        setPill(tab)
      };


    useEffect(()=>{
        const getContext = async ()=>{
            try{
                // Grab User information
                const { data: userData } = await userContext();
                if(!userData) return onLogout()
                setUser(userData)
                //set UserData to UserContext in global
                setUsersContext(userData)
           
            }catch(e){
                //remove Cookie and send user back to login
                console.log(e.message)
                onLogout()           
            }
        }
        getContext();
        console.log(user)
        const getBooking = async ()=>{
          await axios({
            method: "get",
            // url: `${serverUrl}/booking`,
            url: "http://localhost:3000/therapist/booking",
            headers: {
              "Content-Type": "application/json",
            },
            data: user,
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        getBooking();
    }, [])
    return (
        
        (<>
        {user? 
        <MDBContainer>
        <MDBRow className="my-5">
          <MDBCol lg="3">    
            <MDBCard >
            <MDBView >
                <MDBCardImage
                hover
                overlay='white-slight'
                className='card-img-top'
                src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg'
                alt='Card cap'
                />
            </MDBView>

          <MDBCardBody className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>{user.first_name} {user.last_name}</strong>
            <MDBCardText>
                {user.specialities}
            </MDBCardText>
            </MDBCardTitle>
            <MDBCardText>
              {user.address.streetName} {user.address.streetNumber}<br/>
              {user.address.city} <br/>
              {user.address.country} <br/>
        {' '}
            </MDBCardText>
            
            <p className='font-weight-bold blue-text'><span class="dot"></span>You are logged in as Client/Thearpist</p>
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
            <h2 style={{textAlign:"left"}}>Hello {user.first_name}!</h2>
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
                <MDBNavItem>
                  <MDBNavLink link to="#" className={pill==="3"? "activeLink": "link"} onClick={()=>togglePills("3")} >
                    Contact
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent activeItem={pill}>
                <MDBTabPane tabId="1">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol lg="4">
                        <MDBCard  className="text-center">
                        <MDBCardHeader color="success-color">in 2 days</MDBCardHeader>
                            <MDBCardBody>
                            <MDBCardTitle>Special treatment</MDBCardTitle>
                            <MDBCardText>
                                Client:<br/>
                                Location:<br/>
                            </MDBCardText>
                            <MDBBtn color="success" size="sm">
                                See details!
                            </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                        <MDBCol lg="4">
                        <MDBCard className="text-center">
                        <MDBCardHeader color="success-color">in 3 days</MDBCardHeader>
                            <MDBCardBody>
                            <MDBCardTitle>Special treatment</MDBCardTitle>
                            <MDBCardText>
                                Client:<br/>
                                Location:<br/>
                            </MDBCardText>
                            <MDBBtn color="success" size="sm">
                                See details!
                            </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                        <MDBCol lg="4">
                        <MDBCard  className="text-center">
                        <MDBCardHeader color="success-color">in 4 days</MDBCardHeader>
                            <MDBCardBody>
                            <MDBCardTitle>Special treatment</MDBCardTitle>
                            <MDBCardText>
                                Client:<br/>
                                Location:<br/>
                            </MDBCardText>
                            <MDBBtn color="success" size="sm">
                                See details!
                            </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
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
                <MDBTabPane tabId="3">
                <MDBContainer>      
                  <p>
                    Est quis nulla laborum officia ad nisi ex nostrud culpa
                    Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis
                    ipsum nisi elit fugiat commodo sunt reprehenderit laborum
                    veniam eu veniam. Eiusmod minim exercitation fugiat irure ex
                    labore incididunt do fugiat commodo aliquip sit id deserunt
                    reprehenderit aliquip nostrud. Amet ex cupidatat excepteur
                    aute veniam incididunt mollit cupidatat esse irure officia
                    elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit
                    labore ipsum laboris ipsum commodo sunt tempor enim
                    incididunt. Commodo quis sunt dolore aliquip aute tempor
                    irure magna enim minim reprehenderit. Ullamco consectetur
                    culpa veniam sint cillum aliqua incididunt velit ullamco
                    sunt ullamco quis quis commodo voluptate. Mollit nulla
                    nostrud adipisicing aliqua cupidatat aliqua pariatur mollit
                    voluptate voluptate consequat non.
                  </p>
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
