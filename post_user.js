const axios = require('axios');

async function makePostRequest(firstName,lastName,email) {
  try{
    let array = await axios.get('http://localhost:3000/users/');
    let res =  await axios.post('http://localhost:3000/users/', param = {
      id: array.length-1,
      first_name: firstName,
      last_name: lastName,
      email: email
    });
    console.log(res.data);
  }catch(error){
    console.log(error.response.statusText);
  }
}

makePostRequest("Diana","Gonzalez","ejemploQWERTY@gmail.com");

/* 
//*Other implementation
async function makePostRequest(firstName,lastName,email) {
  try{
    let array = await axios.get('http://localhost:3000/users/');
    let res =  await axios.post('http://localhost:3000/users/',{
      id: array.length-1,
      first_name: firstName,
      last_name: lastName,
      email: email
    });
    console.log(res.data);
  }catch(error){
    console.log(error.response.statusText);
  }
}

makePostRequest("Diana","Gonzalez","ejemploQWERTY@gmail.com");
*/