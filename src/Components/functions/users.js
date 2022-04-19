import axios from 'axios';


export const listUser =async(authtoken)=>{
    // console.log(authtoken);
   return await axios.get ('https://final-santa-backend-hbeg0rl6u-peedans.vercel.app/users/me',
    {
        headers:{
            authtoken,
        },
    }
    );
}