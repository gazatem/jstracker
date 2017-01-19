import _ from 'lodash';
import TrackPage from './TrackPage';
 
function component () {
  var element = document.createElement('div');
  let trackPage = new TrackPage();

console.log("Tracker2", tracker);  
  let name = trackPage.pageName;
  element.innerHTML = _.join(['Hello', name], ' ');
  
  return element;
}


document.body.appendChild(component());