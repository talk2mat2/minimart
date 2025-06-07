import { ProductData } from '../interface/IProducts';
import phone from '../assets/16.png';
import air from '../assets/air.png';
import pixel from '../assets/pixel.png';
import pods from '../assets/pods.png';

export const data: ProductData = {
  products: [
    {
      id: '1',
      name: 'Apple iPhone 16',
      type: '128GB|Teal',
      price: 700.0,
      image: phone,
      description: [
        'This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.',
        'There will be no visible cosmetic imperfections when held at an arm’s length. There will be no visible cosmetic imperfections when held at an arm’s length.',
      ],
    },
    {
      id: '2',
      name: 'M4 Macbook Air 13',
      type: '256GB|Sky blue',
      price: 1000.0,
      image: air,
      description: [
        'This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.',
        'There will be no visible cosmetic imperfections when held at an arm’s length. There will be no visible cosmetic imperfections when held at an arm’s length.',
      ],
    },
    {
      id: '3',
      name: 'Google Pixel 9A',
      type: '128GB|Iris',
      price: 499.0,
      image: pixel,
      description: [
        'This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.',

      ],
    },
    {
      id: '4',
      name: 'Apple Airpods 4',
      type: 'Active Noise Cancellation',
      price: 129.0,
      image: pods,
      description: [
        'This pre-owned product is not Apple certified, but has been professionally inspected, ',
        'There will be no visible cosmetic imperfections when held at an arm’s length. ',
      ],
    },
    {
      id: '5',
      name: 'Apple Airpods 4',
      type: 'Active Noise Cancellation',
      price: 129.0,
      image: pods,
      description: [
        'This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.',
        'There will be no visible cosmetic imperfections when held at an arm’s length. ',
      ],
    },
  ],
};
