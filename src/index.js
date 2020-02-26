import sum from './sum';
import axios from 'axios';
const Carousel = require('vanilla-js-carousel');
let res;
const handleClick = e => {
  e.preventDefault();
  const userText = document.getElementById('userText').value;
  let newText = userText.toLowerCase();
  console.log(newText);
  let zipcode;
  let icecream = [];
  if (newText.includes('is there ice cream in')) {
    zipcode = userText.slice(-6, -1);
    newText = 'is there ice cream in';

    for (let i = 0; i < 761; i++) {
      if (res.data[i].address.includes(zipcode))
        icecream.push(res.data[i].name + ' at ' + res.data[i].url);
    }
    console.log(icecream);
  }
  switch (newText) {
    default:
      alert('Yeah, that would be a NO!');
      break;
    case 'hello':
      alert('Hi there');
      break;
    case 'scoops ahoy':
      alert('Thats right!!');
      break;
    case 'where are you located?':
      alert('Starcourt mall, Hawkins Indiana');
      break;
    case 'what do you think about kids?':
      let response = Math.round(Math.random());
      response === 1
        ? alert(`Turns out I'm a pretty damn good babysitter.
      `)
        : alert(`Man, kids are the worst! Who needs 'em, anyway?

      `);
      break;
    case `is there ice cream in`:
      zipcode = zipcode.toString();
      alert(
        `Yes there is icecream in ${zipcode.toString()} check it out: ${icecream.map(
          e => `\n${e}`
        )}`
      );

      break;
  }
};
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

document.getElementById('submit').addEventListener('click', handleClick);
main();
