import TrackPage from './TrackPage';
import push from './PushData';
import headers from './Headers';


document.addEventListener("DOMContentLoaded", function(event) { 
  let trackPage = new TrackPage();
  const data = { client: trackPage.client, headers: headers(), customer: trackPage.customer, product: trackPage.product };
  console.log("Data", data);
  push.send(data);
});