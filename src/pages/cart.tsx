import { UpdatedProducts as Products } from "../data/products";
import "./cart.css";

export default function Cart() {
  const bestProducts = Products.filter(
    (e: any) => e.sales > 1500 && e.rate > 3
  );
  const first4Products = bestProducts.slice(0, 4);

  return (
    <div className="cart">
      <div className="container">
        <div className="table w-full">
          <table className="w-full">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
            {first4Products.map((product: any) => (
              <tr className="text-center" key={product.id}>
                <td className="">
                  <img className="w-20" src={product.image} />
                </td>
                <td className="">{product.price}</td>
                <td className="custom-number">
                  <input
                    className="custom-input w-10 border text-center"
                    value={1}
                    type="number"
                  />
                  <div className="arrow-up"></div>
                  <div className="arrow-down"></div>
                </td>
                <td className="">{product.price}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
