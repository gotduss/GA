## Product Search

You're building an online store! The store sells a variety of business and casual clothes, such as pants, skirts, shirts and jackets.

All the product information is below in a JavaScript array that you can use in your code.

### Part 1 - list the products

Create two components `ProductList` and `Product`.

The `Product` component should show all the details about a single product,
formatted nicely with headings and displaying the price in dollars.

The `ProductList` component should use the `Product` component to list all of the available products.

### Part 2 - Filter by category

Create 4 buttons or links at the top of the `ProductList` component:

 - `Shirts`
 - `Pants and skirts`
 - `Jackets`
 - `All products`

Use those three buttons and some React state to filter the list of products to only show the products in that category. 

The `All products` button should remove the filter and show all products again.
This should also be the starting-state of the `ProductList` component.

### Extensions

Text search
 - Add a text box in the `ProductList` component to act as a search box
 - When searching, show only the products that include the search text in the name or description.

Sort by price
 - Add an option to sort the products by price, both lowest-to-highest and highest-to-lowest.

 ```const products = [
  {
    name: "Leather Jacket",
    category: "jackets",
    description: "Whether it's to protect from wind or just to look super cool, this leather jacket has you covered.",
    price: 400,
  },
  {
    name: "Wool cardigan",
    category: "jackets",
    description: "Beautifully warm and soft, this cardigan will make you feel cosy on a cold day.",
    price: 80,
  },
  {
    name: "Striped business shirt",
    category: "shirts",
    description: "No ironing necessary to look professional every day with this striped shirt.",
    price: 50,
  },
  {
    name: "Short-sleeved polo shirt",
    category: "shirts",
    description: "The best shirt you can get for that business-casual look.",
    price: 30,
  },
  {
    name: "Plain business shirt",
    category: "shirts",
    description: "No ironing necessary to look professional every day with this plain business shirt.",
    price: 50,
  },
  {
    name: "Suit Jacket",
    category: "jackets",
    description: "Wear it with jeans or suit pants, it works with both!",
    price: 120,
  },
  {
    name: "Suit Trousers",
    category: "pants",
    description: "Get 5 of these and you've got pants for every day of the week.",
    price: 100,
  },
  {
    name: "Denim Jeans",
    category: "pants",
    description: "A timeless classic, these denim jeans will never go out of style.",
    price: 80,
  },
  {
    name: "Pencil Skirt",
    category: "skirts",
    description: "A classy work-ready skirt that will make you feel like a million bucks.",
    price: 100,
  },
  {
    name: "Cotton flowy skirt",
    category: "skirts",
    description: "For those warm summer days when you just need to feel the breeze on your legs.",
    price: 45,
  },
]```