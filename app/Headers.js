import MobileDetect from 'mobile-detect';
export default class Header{

    get all(){
          console.log("referrer", document.referrer);
          console.log("Uri", document.documentURI);

          let md = new MobileDetect(window.navigator.userAgent);
          console.log("User Agent", window.navigator.userAgent);
          console.log("Heaer In", md.os());
    }
}