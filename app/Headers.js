export default function(){
    return { referrer: document.referrer, uri: document.documentURI, agent:window.navigator.userAgent };
}