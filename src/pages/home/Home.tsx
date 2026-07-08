import Navbar from "../../globals/componenets/navbar/Navbar";
import Card from "../../globals/componenets/card/Card";
import Footer from "../../globals/componenets/footer/Footer";

const categories = [
  { name: "Electronics", icon: "💻", color: "bg-blue-100" },
  { name: "Fashion", icon: "👕", color: "bg-pink-100" },
  { name: "Shoes", icon: "👟", color: "bg-green-100" },
  { name: "Gaming", icon: "🎮", color: "bg-purple-100" },
  { name: "Beauty", icon: "💄", color: "bg-rose-100" },
  { name: "Watches", icon: "⌚", color: "bg-yellow-100" },
  { name: "Home", icon: "🏠", color: "bg-orange-100" },
  { name: "Phones", icon: "📱", color: "bg-cyan-100" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-500 p-8 text-white shadow-xl lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              🔥 Summer Sale
            </span>

            <h1 className="mt-5 text-5xl font-black leading-tight">
              Everything you need,
              <br />
              at amazing prices.
            </h1>

            <p className="mt-5 text-blue-100">
              Discover the latest products with huge discounts, fast shipping,
              and secure checkout.
            </p>

            <button className="mt-8 rounded-xl bg-white px-6 py-3 font-bold text-indigo-600 transition hover:scale-105">
              Shop Now
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900"
              alt="Shopping"
              className="h-[380px] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Browse Categories</h2>

          <button className="font-semibold text-indigo-600">
            See All →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {categories.map((item) => (
            <div
              key={item.name}
              className={`${item.color} cursor-pointer rounded-2xl p-6 text-center transition hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-4 font-semibold">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Trending Products</h2>

          <button className="font-semibold text-indigo-600">
            View All →
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
            {/* Promo Cards */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white">
            <p className="text-sm uppercase tracking-widest">
              New Collection
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Fresh Styles
            </h2>

            <p className="mt-4 text-orange-100">
              Discover our newest arrivals with modern designs.
            </p>

            <button className="mt-6 rounded-xl bg-white px-5 py-3 font-semibold text-orange-600">
              Shop Now
            </button>
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
            <p className="text-sm uppercase tracking-widest">
              Electronics Sale
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Up to 40% OFF
            </h2>

            <p className="mt-4 text-blue-100">
              Grab amazing deals on phones, laptops and accessories.
            </p>

            <button className="mt-6 rounded-xl bg-white px-5 py-3 font-semibold text-indigo-600">
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Popular Products</h2>

          <button className="font-semibold text-indigo-600">
            View All →
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <div className="text-4xl">🚚</div>
            <h3 className="mt-4 font-bold">Free Shipping</h3>
            <p className="mt-2 text-sm text-gray-500">
              Orders above $50
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <div className="text-4xl">🔒</div>
            <h3 className="mt-4 font-bold">Secure Payment</h3>
            <p className="mt-2 text-sm text-gray-500">
              100% Protected
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <div className="text-4xl">⭐</div>
            <h3 className="mt-4 font-bold">Top Quality</h3>
            <p className="mt-2 text-sm text-gray-500">
              Trusted Products
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <div className="text-4xl">💬</div>
            <h3 className="mt-4 font-bold">24/7 Support</h3>
            <p className="mt-2 text-sm text-gray-500">
              We're Here to Help
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl bg-gray-900 px-8 py-12 text-center text-white">
          <h2 className="text-3xl font-bold">
            Subscribe to Our Newsletter
          </h2>

          <p className="mt-3 text-gray-300">
            Get the latest offers and product updates.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl px-5 py-3 text-black outline-none"
            />

            <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;