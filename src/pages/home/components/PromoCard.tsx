
const PromoCard = () => {
  return (
    <>
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
    </>
  )
}

export default PromoCard