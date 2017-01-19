import _ from 'lodash';
import TrackPage from './TrackPage';
import push from './PushData';
import Header from './Headers';

function component () {
  var element = document.createElement('div');
  let trackPage = new TrackPage();
  let header = new Header();

  console.log("Header", header.all);

  let name = trackPage.pageName;
  console.log(trackPage.client);
  element.innerHTML = _.join(['Hello', name], ' ');
  
  push.send(trackPage.client);

  return element;
}


document.body.appendChild(component());