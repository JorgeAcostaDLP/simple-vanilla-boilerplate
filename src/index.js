import sum from './sum';
import axios from 'axios';
const Carousel = require('vanilla-js-carousel');
let res;
const handleClick = e => {
  e.preventDefault();
  const userText = document.getElementById('userQuestion').value;
  let newText = userText.toLowerCase();

  let zipcode;
  let icecream = [];
  if (newText.includes('is there ice cream in')) {
    zipcode = userText.slice(-6, -1);
    newText = 'is there ice cream in';

    for (let i = 0; i < 761; i++) {
      if (res.data[i].address.includes(zipcode))
        icecream.push(res.data[i].name + ' at ' + res.data[i].address);
    }
    console.log(icecream);
  }
  switch (newText) {
    default:
      document.getElementById(
        'userText'
      ).value += `\nYeah, that would be a NO!`;
      break;
    case 'hello':
      document.getElementById('userText').value += '\nHi there';
      break;
    case 'goodbye':
      document.getElementById('userText').value += '\nGoodbye!';
      break;
    case 'scoops ahoy':
      document.getElementById('userText').value += '\nThats right!!';
      break;
    case 'where are you located?':
      document.getElementById('userText').value +=
        '\nStarcourt mall, Hawkins Indiana';
      break;
    case 'what do you think about kids?':
      let response = Math.round(Math.random());
      response === 1
        ? (document.getElementById(
            'userText'
          ).value += `\nTurns out I'm a pretty damn good babysitter.`)
        : (document.getElementById(
            'userText'
          ).value += `\nMan, kids are the worst! Who needs 'em, anyway?`);
      break;
    case `is there ice cream in`:
      zipcode = zipcode.toString();
      icecream.length >= 1
        ? (document.getElementById(
            'userText'
          ).value += `\nYes there is icecream in ${zipcode.toString()} check it out: ${icecream.map(
            e => `\n${e}`
          )}`)
        : (document.getElementById('userText').value += '\nSorry, NO!');

      break;
  }
};
const openForm = e => {
  e.preventDefault();
  document.getElementById('form').style.display = 'block';
};
const closeForm = e => {
  e.preventDefault();
  document.getElementById('form').style.display = 'none';
  document.getElementById('userText').value = '';
};
document.getElementById('btnSend').addEventListener('click', handleClick);
document.getElementById('btnOpen').addEventListener('click', openForm);
document.getElementById('btnClose').addEventListener('click', closeForm);
const main = async () => {
  res = await axios.get('https://project.wnyc.org/ice-cream/data/places.json');

  var carousel = new Carousel({
    elem: 'carousel', // id of the carousel container
    autoplay: false, // starts the rotation automatically
    infinite: true, // enables infinite mode
    interval: 0, // interval between slide changes
    initial: 0, // slide to start with
    dots: true, // show navigation dots
    arrows: true, // show navigation arrows
    buttons: false, // hide <play>/<stop> buttons,
    btnStopText: 'Pause' // <stop> button text
  });

  // Show the 3rd slide (Numeration of slides starts at 0)
  carousel.show(2);

  // Move to the next slide
  carousel.next();
};
main();
