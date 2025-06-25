// src/data/products.js

import spinach from '../assets/spinach.jpg';
import apple from '../assets/apple.jpg';
import blueberries from '../assets/blueberries.jpg';
import mango from '../assets/mango.jpg';
import oranges from '../assets/oranges.jpg';
import broccoli from '../assets/broccoli.jpg';
import tomatoes from '../assets/tomatoes.jpg';
import carrots from '../assets/carrots.jpg';
import grapes from '../assets/grapes.jpg';
import cherries from '../assets/cherries.jpg';
import watermelon from '../assets/watermelon.jpg';
import strawberry from '../assets/strawberry.jpg';

// Use placeholder or real images for new items
import milk from '../assets/milk.jpg';
import cheese from '../assets/cheese.jpg';
import yogurt from '../assets/yogurt.jpg';
import butter from '../assets/butter.jpg';
import chips from '../assets/chips.jpg';
import biscuits from '../assets/biscuits.jpg';
import noodles from '../assets/noodles.jpg';
import cereal from '../assets/cereal.jpg';
import fish from '../assets/fish.jpg';
import chicken from '../assets/chicken.jpg';
import beef from '../assets/beef.jpg';
import prawns from '../assets/prawns.jpg';
import oil from '../assets/oil.jpg';
import rice from '../assets/rice.jpg';
import salt from '../assets/salt.jpg';
import spices from '../assets/spices.jpg';
import bread from '../assets/bread.jpg';
import eggs from '../assets/eggs.jpg';
import buttertoast from '../assets/buttertoast.jpg';
import pancake from '../assets/pancake.jpg';

const products = [
  // Fruits (4)
  { id: 1, name: "Apples", weight: "1lb", price: 1.6, image: apple, category: "Fruits" },
  { id: 2, name: "Blueberries", weight: "1lb", price: 3.0, image: blueberries, category: "Fruits" },
  { id: 3, name: "Mango", weight: "1kg", price: 2.5, image: mango, category: "Fruits" },
  { id: 4, name: "Oranges", weight: "2lb", price: 1.8, image: oranges, category: "Fruits" },

  // Vegetables (4)
  { id: 5, name: "Baby Spinach", weight: "2lb", price: 0.6, image: spinach, category: "Vegetables" },
  { id: 6, name: "Broccoli", weight: "1lb", price: 1.0, image: broccoli, category: "Vegetables" },
  { id: 7, name: "Tomatoes", weight: "1kg", price: 1.4, image: tomatoes, category: "Vegetables" },
  { id: 8, name: "Carrots", weight: "2lb", price: 1.2, image: carrots, category: "Vegetables" },

  // Dairy (4)
  { id: 9, name: "Milk", weight: "1L", price: 1.5, image: milk, category: "Dairy" },
  { id: 10, name: "Cheese", weight: "500g", price: 3.2, image: cheese, category: "Dairy" },
  { id: 11, name: "Yogurt", weight: "1kg", price: 2.1, image: yogurt, category: "Dairy" },
  { id: 12, name: "Butter", weight: "250g", price: 2.3, image: butter, category: "Dairy" },

  // Snacks (4)
  { id: 13, name: "Chips", weight: "150g", price: 0.99, image: chips, category: "Snacks" },
  { id: 14, name: "Biscuits", weight: "200g", price: 1.5, image: biscuits, category: "Snacks" },
  { id: 15, name: "Noodles", weight: "75g", price: 0.7, image: noodles, category: "Snacks" },
  { id: 16, name: "Cereal", weight: "500g", price: 2.9, image: cereal, category: "Snacks" },

  // Meat & Fish (4)
  { id: 17, name: "Fish", weight: "1kg", price: 5.0, image: fish, category: "Meat & Fish" },
  { id: 18, name: "Chicken", weight: "1.5kg", price: 4.2, image: chicken, category: "Meat & Fish" },
  { id: 19, name: "Beef", weight: "1kg", price: 6.0, image: beef, category: "Meat & Fish" },
  { id: 20, name: "Prawns", weight: "500g", price: 5.5, image: prawns, category: "Meat & Fish" },

  // Cooking (4)
  { id: 21, name: "Oil", weight: "1L", price: 2.5, image: oil, category: "Cooking" },
  { id: 22, name: "Rice", weight: "2kg", price: 3.0, image: rice, category: "Cooking" },
  { id: 23, name: "Salt", weight: "1kg", price: 0.8, image: salt, category: "Cooking" },
  { id: 24, name: "Spices", weight: "250g", price: 2.2, image: spices, category: "Cooking" },

  // Breakfast (4)
  { id: 25, name: "Bread", weight: "400g", price: 1.2, image: bread, category: "Breakfast" },
  { id: 26, name: "Eggs", weight: "12pcs", price: 2.0, image: eggs, category: "Breakfast" },
  { id: 27, name: "Toast & Butter", weight: "150g", price: 1.6, image: buttertoast, category: "Breakfast" },
  { id: 28, name: "Pancakes", weight: "3pcs", price: 2.3, image: pancake, category: "Breakfast" },
];

export default products;
