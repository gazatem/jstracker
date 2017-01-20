import axios from 'axios';

export default class PushData{

     static send(data) {
         console.log("Push Data", data);

          axios.post('http://localhost:3030/events', data)
            .then(function (res) {
              console.log("Response", res);
            })
            .catch(function (err) {
              console.log("Error", err.message);
            });

        };
        
}