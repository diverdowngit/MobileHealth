import axios from "axios";
import Cookies from "js-cookies";
const { REACT_APP_NAME} = process.env

const login= async (credentials)=>{
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: JSON.stringify(credentials),
//     redirect: 'follow'
//     };

// fetch("https://cherry-cupcake-02141.herokuapp.com/auth/login", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
    //in this try block, you get header with token -> now different actions possible save it
    // 1. set token in cookie of userBrower 2. set in local sotrage 3. keep it in memory of application(safest way) 4. save it as http cookoe
    // here we go for saving it in Cookies
    //  try{   const data= await axios.post('https://wbs-simple-auth.herokuapp.com/auth/login', {
    //         ...credentials
    //     })
    //     const token = data.headers["x-authorization-token"] // this is where token in header is saved
    //     if (token){
    //         Cookies.set('${REACT_APP_NAME}-auth-token', token) // use namespace that is specific for this applcation
    //         return true //Login was successfull
    //     }
    //     console.log(data)
    // } catch (e){
    //     console.log(e)
    // }
   
    //   });
      
    axios( {
        method: 'post',
        url: 'https://cherry-cupcake-02141.herokuapp.com/auth/login',
        headers: { 
          'Content-Type': 'application/json',
        },
        data : credentials
      })
      .then(function (response) {
        console.log(response);
        //!!!!!!!!!!Does not return an token at the moment
        // const token= response.headers["x-authorization-token"];
        const token = "139aoösdgnöqog23ß9ß34"
        if(token){
            Cookies.set(`${REACT_APP_NAME}-auth-token`, token)
            return true
        }  else {
            throw new Error(`Authentication  - failed`)}
      })
      .catch(function (error) {
        console.log(error);
      });

    
}
//send credential // safe token or block user and send error
export {
    login
}
//named export 