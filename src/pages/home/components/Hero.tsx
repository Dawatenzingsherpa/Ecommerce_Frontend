
const Hero = () => {
  return (
    <>
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
    </>
  )
}

export default Hero