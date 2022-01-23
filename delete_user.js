const axios = require('axios');

async function makeDeleteRequest(userNum) {
    try{
        let res = await axios.delete(`http://localhost:3000/users/${userNum}`);
        console.log(res.status);
    }catch(error){
        console.log(error.response.statusText);
    }
}

makeDeleteRequest(7);



/* 
//*Implementation with parameter first_name
async function makeDeleteRequest(nameUser) {
    try{
        let response = await axios.get("http://localhost:3000/users/");
        let array = response.data;
        for(element of array){
            if(element.first_name==nameUser){
                let res = await axios.delete(`http://localhost:3000/users/${element.id}`);
                // console.log(res.status);
                break;
            }
        }
    }catch(error){
        console.log(error.response.statusText);
    }
}

makeDeleteRequest("Alejandro"); 
*/