import axios from 'axios';


export const register =async(value)=>
    await axios.post ('https://final-santa-backend-hbeg0rl6u-peedans.vercel.app/api//register',value);

export const login =async(value)=>
    await axios.post ('https://final-santa-backend-hbeg0rl6u-peedans.vercel.app/api/login',value);

export const currentUser =async(authtoken)=>{
    // console.log(authtoken);
   return await axios.post ('https://final-santa-backend-hbeg0rl6u-peedans.vercel.app/api/current-user',
    {},
    {
        headers:{
            authtoken,
        },
    }
    );
}

export const currentAdmin =async(authtoken)=>{
    // console.log(authtoken);
   return await axios.post ('https://final-santa-backend-hbeg0rl6u-peedans.vercel.app/api/current-admin',
    {},
    {
        headers:{
            authtoken,
        },
    }
    );
}