// parameter ใส่state เป็นค่าเริ่มต้นคือ null
// action มีค่าตัวแปรที่ชื่อ type และค่าตัวแปรที่ชื่อ payload
// switch เหมือร if else

// เปรียบเหมือน store
export function userReducer(state=null,action){
    switch(action.type){
        case 'LOGIN':
            return action.payload;
        case 'LOGOUT':
            localStorage.clear()
            return action.payload;
        default:
            return state;
    }
}