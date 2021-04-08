import axios from "axios";
import Cookies from "js-cookies";
const { REACT_APP_NAME} = process.env

const login= async (credentials)=>{
    console.log(credentials)
    //in this try block, you get header with token -> now different actions possible save it
    // 1. set token in cookie of userBrower 2. set in local sotrage 3. keep it in memory of application(safest way) 4. save it as http cookoe
    // here we go for saving it in Cookies
    fetch('https://cherry-cupcake-02141.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: {...credentials}
      })
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
        // const data= await axios.post('https://wbs-simple-auth.herokuapp.com/auth/login', {
        //     ...credentials
        // })
        // const token = data.headers["x-authorization-token"] // this is where token in header is saved
        // if (token){
        //     Cookies.set('${REACT_APP_NAME}-auth-token', token) // use namespace that is specific for this applcation
        //     return true //Login was successfull
        // }
}
//send credential // safe token or block user and send error
export {
    login
}
//named export 