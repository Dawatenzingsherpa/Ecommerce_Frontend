
const Categoris = () => {

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
  return (
    <>
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
    </>
  )
}

export default Categoris