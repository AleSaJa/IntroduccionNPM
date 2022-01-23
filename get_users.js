const axios = require('axios');

async function makeGetRequest() {
  try{
    let res = await axios.get('http://localhost:3000/users/');  
    let data = res.data;
    console.log(data);
  }catch(error){
    console.log(error.response.statusText);
  }
}

makeGetRequest();

/*
//*Implementation with loop for
const axios = require('axios');

async function makeGetRequest() {
  try{
    let res = await axios.get('http://localhost:3000/users/');
    let data = res.data;
    for(element of data){
      console.log(element);
    }
  }catch(error){
    console.log(error.response.statusText);
  }
}

makeGetRequest();
 */