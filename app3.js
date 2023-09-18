
const axios = require('axios');
 axios
 .get("https://deprem.afad.gov.tr/apiv2/event/filter?start=2020-09-14&end=2021-09-15")
 .then((response)=>{
    console.log(response.data[0])
 })