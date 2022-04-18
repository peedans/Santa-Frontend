import axios from 'axios';


export const listUser =async(authtoken)=>{
    // console.log(authtoken);
   return await axios.get ('http://localhost:7000/users/me',
    {
        headers:{
            authtoken,
        },
    }
    );
}