import sum from './sum';
import axios from 'axios';
const Carousel = require('vanilla-js-carousel');

console.log(sum(1, 2));
function handleClick(e) {
  e.preventDefault();
  console.log('it Works mira:');
  const userText = document.getElementById('userText').value;
  switch (userText.toLowerCase()) {
    default:
      alert('Type something first');
      break;
    case 'hello':
      alert('Hi there');
      break;
    case 'goodbye':
      alert('Bye!');
      break;
  }
}
const main = async () => {
  const res = await axios.get(
    'https://fizal.me/pokeapi/api/v2/name/bulbasaur.json'
  );
  console.log(res.data);
  var carousel = new Carousel({
    elem: 'carousel', // id of the carousel container
    autoplay: false, // starts the rotation automatically
    infinite: true, // enables infinite mode
    interval: 0, // interval between slide changes
    initial: 0, // slide to start with
    dots: true, // show navigation dots
    arrows: true, // show navigation arrows
    buttons: false, // hide <play>/<stop> buttons,
    btnStopText: 'Pause', // <stop> button text
  });

  // Show the 3rd slide (Numeration of slides starts at 0)
  carousel.show(2);

  // Move to the next slide
  carousel.next();
};

document.getElementById('submit').addEventListener('click', handleClick);
main();
