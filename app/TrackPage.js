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
        return { client_id: clientId, api_key: tracker.api_key };
    }

    get product(){
         if(!tracker.product) return {};
         return { id: tracker.product.id, price: tracker.product.price, model: tracker.product.model, name: tracker.product.name };
    }

    get customer(){
         if(!tracker.customer) return {};
         return { id: tracker.customer.id, name: tracker.customer.name, email: tracker.customer.email, phone: tracker.customer.phone };
    }    

}