import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { fetchPorducts } from "../../store/productSlice";
import { addToCart } from "../../store/CartSlice";
import Navbar from "../../globals/componenets/navbar/Navbar";
import Footer from "../../globals/componenets/footer/Footer";

const categories = ["All", "Electronics", "Clothes", "Furniture"];

function Products() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    dispatch(fetchPorducts());
  }, []);

  const handleAddtoCart = (id: string) => {
    if (id) dispatch(addToCart(id));
  };
  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.Category.categoryName === selectedCategory;

      const matchesSearch = product.productName
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sort === "low") return a.productPrice - b.productPrice;
      if (sort === "high") return b.productPrice - a.productPrice;

      return 0;
    });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="border-b bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-2 text-sm font-medium text-indigo-600">
                  Our Collection
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Products
                </h1>

                <p className="mt-2 text-gray-500">
                  Discover products you'll love.
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full md:max-w-md">
                <svg
                  className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                  />
                </svg>

                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main */}
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sidebar */}
            <aside className="w-full shrink-0 lg:w-56">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                  Categories
                </h2>

                <div className="mt-4 space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                        selectedCategory === category
                          ? "bg-indigo-50 text-indigo-600"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <span>{category}</span>

                      {selectedCategory === category && (
                        <span className="h-2 w-2 rounded-full bg-indigo-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products */}
            <section className="flex-1">
              {/* Toolbar */}
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-500">
                  Showing{" "}
                  <span className="font-semibold text-gray-900">
                    {filteredProducts.length}
                  </span>{" "}
                  products
                </p>

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                >
                  <option value="default">Sort by: Featured</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      {/* Image */}
                      <div className="relative aspect-square overflow-hidden bg-gray-100">
                        <img
                          src={product.imageUrl}
                          alt={product.productName}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <p className="text-xs font-medium uppercase tracking-wider text-indigo-600">
                          {product.Category.categoryName}
                        </p>

                        <h3 className="mt-2 text-lg font-semibold text-gray-900">
                          {product.productName}
                        </h3>

                        {/* Rating */}
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex text-yellow-400">
                            {"★★★★★".split("").map((star, index) => (
                              <span key={index} className="text-sm">
                                {star}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Price + cart */}
                        <div className="mt-5 flex items-center justify-between">
                          <span className="text-xl font-bold text-gray-900">
                            ${product.productPrice.toFixed(2)}
                          </span>

                          <button
                            className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
                            onClick={() => handleAddtoCart(product?.id)}
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white">
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                      <svg
                        className="h-7 w-7 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                        />
                      </svg>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                      No products found
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Try changing your search or category.
                    </p>
                  </div>
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Products;
