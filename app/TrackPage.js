import * as Cookies from "js-cookie";
import randomatic  from 'randomatic';
import _ from 'lodash';

export default class TrackPage{

    get client(){
        let clientId = Cookies.get('clientId');
        if(clientId === undefined){
            clientId = randomatic('A0', 30);
            Cookies.set('clientId', clientId, { expires: 7 });
        }
        return { clientId: clientId, apiKey: "12345678" };
    }

    get product(){
         return { prodid: tracker.prodid, price: tracker.price };
    }

    get customer(){
         return { customerId: tracker.customerId };
    }    

}