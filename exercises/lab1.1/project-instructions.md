## Fancy Flowers

You've been hired to make the online store for Fancy Flowers - a new up-and-coming boutique florist!

They only have three products at the moment, and your colleague has already prepared some JSX for you to use in your `App` component.

### Step 1

Create a new React app and start it running:

```sh
$ yarn create react-app fancy-florist
$ cd fancy-florist
$ yarn start
```

Open up the code and replace the JSX in the `App` componenent with this:

```js
<div>
  <h1>Fancy Florist</h1>
  <ProductPrice
    name="Congratulations Bouquet"
    description="The perfect bouquet for a celebration such as a birthday or graduation."
    price={70} />
  <ProductPrice
    name="Apology Bouquet"
    description="You need something extra when you know you messed up."
    price={150} />
  <ProductPrice
    name="Wedding Bouquet"
    description="Beautiful collection of flowers to turn heads on your special day!"
    price={200} />
</div>
```

### Step 2

Create the `ProductPrice` component in a separate file `ProductPrice.js` and import it in `App.js` so that you can use it.

For each product, the site should include:
- The name and description
- The price as a clear dollar value e.g. `$70.00`
- A button that says "Buy now!"

### Optional Extensions

1. Add styling! Add a `ProductPrice.css` file and import it. Make each product a separate box by adding a border and make the "Buy now!" button stand out.
2. Add images for each product - passing in the image URL as a separate prop.
3. Include a prop to indicate if the item is on sale: `sale={true}` or `sale={false}` and use it to add a red "on sale!" label to some products and not others.