import { RANDOMIZED } from '../components/game/settings';

const cats = [{
  'id': 'YdAqiUkUoWA',
  'url': require('../img/cats-1.jpg'),
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': require('../img/cats-2.jpg'),
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': require('../img/cats-3.jpg'),
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': require('../img/cats-4.jpg'),
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': require('../img/cats-5.jpg'),
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': require('../img/cats-6.jpg'),
  'description': '',
}, {
  'id': 'YdAqiUkUoWA1',
  'url': require('../img/cats-1.jpg'),
  'description': '',
}, {
  'id': 'hX_hf2lPpUU1',
  'url': require('../img/cats-2.jpg'),
  'description': '',
}, {
  'id': 'w1JE5duY62M1',
  'url': require('../img/cats-3.jpg'),
  'description': '',
}, {
  'id': '3tYZjGSBwbk1',
  'url': require('../img/cats-4.jpg'),
  'description': '',
}, {
  'id': 'NoXUQ54pDac1',
  'url': require('../img/cats-5.jpg'),
  'description': '',
}, {
  'id': 'OZhYgZh0bAg1',
  'url': require('../img/cats-6.jpg'),
  'description': '',
}];

const cars = [{
  'id': 'YdAqiUkUoWA',
  'url': require('../img/cars-1.jpg'),
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': require('../img/cars-2.jpg'),
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': require('../img/cars-3.jpg'),
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': require('../img/cars-4.jpg'),
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': require('../img/cars-5.jpg'),
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': require('../img/cars-6.jpg'),
  'description': '',
}, {
  'id': 'YdAqiUkUoWA1',
  'url': require('../img/cars-1.jpg'),
  'description': '',
}, {
  'id': 'hX_hf2lPpUU1',
  'url': require('../img/cars-2.jpg'),
  'description': '',
}, {
  'id': 'w1JE5duY62M1',
  'url': require('../img/cars-3.jpg'),
  'description': '',
}, {
  'id': '3tYZjGSBwbk1',
  'url': require('../img/cars-4.jpg'),
  'description': '',
}, {
  'id': 'NoXUQ54pDac1',
  'url': require('../img/cars-5.jpg'),
  'description': '',
}, {
  'id': 'OZhYgZh0bAg1',
  'url': require('../img/cars-6.jpg'),
  'description': '',
}];

const flowers = [{
  'id': 'YdAqiUkUoWA',
  'url': require('../img/flowers-1.jpg'),
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': require('../img/flowers-2.jpg'),
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': require('../img/flowers-3.jpg'),
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': require('../img/flowers-4.jpg'),
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': require('../img/flowers-5.jpg'),
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': require('../img/flowers-6.jpg'),
  'description': '',
}, {
  'id': 'YdAqiUkUoWA1',
  'url': require('../img/flowers-1.jpg'),
  'description': '',
}, {
  'id': 'hX_hf2lPpUU1',
  'url': require('../img/flowers-2.jpg'),
  'description': '',
}, {
  'id': 'w1JE5duY62M1',
  'url': require('../img/flowers-3.jpg'),
  'description': '',
}, {
  'id': '3tYZjGSBwbk1',
  'url': require('../img/flowers-4.jpg'),
  'description': '',
}, {
  'id': 'NoXUQ54pDac1',
  'url': require('../img/flowers-5.jpg'),
  'description': '',
}, {
  'id': 'OZhYgZh0bAg1',
  'url': require('../img/flowers-6.jpg'),
  'description': '',
}];

const results = [
  { name: 'Аня', stepsCount: 16 },
  { name: 'Вася', stepsCount: 12 },
  { name: 'Петя', stepsCount: 19 }
];


const Images = {
  cars,
  cats,
  flowers
};

const getImages = (type) => {
  return RANDOMIZED ? [...Images[type].sort(() => 0.5 - Math.random())] : [...Images[type]];
}

export {Images, results, getImages};