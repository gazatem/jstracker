import * as Cookies from "js-cookie";
import randomatic  from 'randomatic';

export default class TrackPage{

    get client(){

        console.log("Tracker3", tracker);
        let clientId = Cookies.get('clientId');
        if(clientId === undefined){
            clientId = randomatic('A0', 30);
            Cookies.set('clientId', clientId, { expires: 7 });
        }
        return clientId;
    }

     get pageName() {
        let name = "Test Page";
        return name;
    }
}