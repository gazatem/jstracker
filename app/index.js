import _ from 'lodash';

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello kedici','webpack !!!'], ' ');
    console.log("sdasdsa dsadasds");
  return element;
}

document.body.appendChild(component());