/* Imports */
import ProductPrice from "../ProductPrice/ProductPrice";
import "./App.css";

/* App Component */
const App = () => {
  return (
    <>
      <h1>Fancy Florist</h1>
      <div className="product-list">
        <ProductPrice img="congrats-bouquet.jpg" sale={true} name="Congratulations Bouquet" description="The perfect bouquet for a celebration such as a birthday or graduation." price={70} />
        <ProductPrice img="apology-bouquet.jpg" sale={false} name="Apology Bouquet" description="You need something extra when you know you messed up." price={150} />
        <ProductPrice img="wedding-bouquet.jpg" sale={false} name="Wedding Bouquet" description="Beautiful collection of flowers to turn heads on your special day!" price={200} />
      </div>
    </>
  )
}

export default App;
