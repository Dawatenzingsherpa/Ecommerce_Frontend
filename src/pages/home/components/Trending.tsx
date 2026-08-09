import { Link } from "react-router-dom";
import Card from "../../../globals/componenets/card/Card";
import { Product } from "../../../globals/componenets/types/productTypes";
interface TrendingProps {
  product: Product[];
}
const Trending: React.FC<TrendingProps> = ({ product }) => {
  return (
    <>
      {/* Trending Products */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Trending Products</h2>
          <Link to={"/products"}>
            <button className="font-semibold text-indigo-600">
              View All →
            </button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {product.length > 0 &&
            product.slice(0, 4).map((pd) => <Card key={pd.id} data={pd} />)}
        </div>
      </section>
    </>
  );
};

export default Trending;
