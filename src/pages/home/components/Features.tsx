import React from 'react'

const Features = () => {
  return (
    <>

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
    </>
  )
}

export default Features