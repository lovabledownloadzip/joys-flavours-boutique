import veganCakeImage from "@/assets/vegan-cake.jpg";
import veganPastriesImage from "@/assets/vegan-pastries.jpg";
import veganCookiesImage from "@/assets/vegan-cookies.jpg";
import veganBreadImage from "@/assets/vegan-bread.jpg";

export const products = [
  {
    id: 1,
    name: "Chocolate Berry Bliss Cake",
    price: 28.99,
    image: veganCakeImage,
    category: "Cakes",
    isVegan: true,
    isNew: true,
    description: "Rich vegan chocolate cake layered with fresh berries and plant-based cream.",
    ingredients: ["Organic flour", "Raw cacao", "Coconut milk", "Fresh berries", "Maple syrup"]
  },
  {
    id: 2,
    name: "Artisanal Croissant Trio",
    price: 12.50,
    image: veganPastriesImage,
    category: "Pastries",
    isVegan: true,
    description: "Three delicate vegan croissants: plain, almond, and chocolate filled.",
    ingredients: ["Organic flour", "Vegan butter", "Almond milk", "Dark chocolate", "Almonds"]
  },
  {
    id: 3,
    name: "Seasonal Cookie Collection",
    price: 15.75,
    image: veganCookiesImage,
    category: "Cookies",
    isVegan: true,
    description: "Assorted vegan cookies featuring seasonal flavors and natural sweeteners.",
    ingredients: ["Oat flour", "Coconut oil", "Agave nectar", "Vanilla extract", "Sea salt"]
  },
  {
    id: 4,
    name: "Rustic Sourdough Loaf",
    price: 8.99,
    image: veganBreadImage,
    category: "Breads",
    isVegan: true,
    description: "Handcrafted sourdough bread made with organic flour and natural fermentation.",
    ingredients: ["Organic bread flour", "Sourdough starter", "Sea salt", "Filtered water"]
  },
  {
    id: 5,
    name: "Lemon Lavender Cupcakes",
    price: 18.99,
    image: veganCakeImage,
    category: "Cakes",
    isVegan: true,
    isNew: true,
    description: "Delicate vegan cupcakes infused with lemon zest and lavender.",
    ingredients: ["Almond flour", "Lemon zest", "Lavender", "Coconut cream", "Agave"]
  },
  {
    id: 6,
    name: "Cinnamon Roll Delights",
    price: 14.25,
    image: veganPastriesImage,
    category: "Pastries",
    isVegan: true,
    description: "Soft, fluffy vegan cinnamon rolls with cashew cream glaze.",
    ingredients: ["Whole wheat flour", "Cinnamon", "Coconut sugar", "Cashew cream", "Yeast"]
  }
];

export const categories = [
  { name: "All", value: "all" },
  { name: "Cakes", value: "Cakes" },
  { name: "Pastries", value: "Pastries" },
  { name: "Cookies", value: "Cookies" },
  { name: "Breads", value: "Breads" },
  { name: "Special Diet", value: "special-diet" }
];