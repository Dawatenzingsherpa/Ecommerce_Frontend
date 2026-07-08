import Card from "../../globals/componenets/card/Card"
import Navbar from "../../globals/componenets/navbar/Navbar"

const Home = () => {
  return (
    <>
    
      {/* Hero Section: Centered with Simple Header */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
        {/* Main Header */}
        <Navbar/>
        {/* END Main Header */}

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="text-center">
            <div className="mb-5 font-['Caveat'] text-3xl text-blue-600 dark:text-blue-400">
              Create your own website in minutes.
            </div>
            <h1 className="mb-4 text-4xl font-black lg:text-5xl dark:text-white">
              Next generation website builder
            </h1>
            <p className="mx-auto max-w-2xl text-lg/relaxed font-medium text-gray-700 lg:text-xl/relaxed dark:text-gray-300">
              Super fast and easy to use software to power your next idea or
              build your client’s web projects. Get it today and profit.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 pb-28">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-700 bg-blue-700 px-5 py-3.5 leading-6 font-semibold text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-3 focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
            >
              <svg
                className="hi-mini hi-arrow-down-tray inline-block size-5 opacity-75"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
              </svg>
              <span>Download for free</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3.5 leading-6 font-semibold text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-xs focus:ring-3 focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
            >
              <span>Learn more</span>
            </a>
          </div>
          <div className="relative mx-auto max-w-4xl">
            <div className="bg-tranparent absolute top-0 left-0 -mt-16 -ml-20 size-40 rounded-full border border-gray-500/10 lg:size-64 dark:border-white/5" />
            <div className="bg-tranparent absolute top-0 left-0 -mt-20 -ml-14 size-40 rounded-full border border-gray-500/20 lg:size-64 dark:border-white/15" />
            <div className="bg-tranparent absolute right-0 bottom-0 -mr-20 -mb-16 size-40 rounded-full border border-gray-500/10 lg:size-64 dark:border-white/5" />
            <div className="bg-tranparent absolute right-0 bottom-0 -mr-14 -mb-20 size-40 rounded-full border border-gray-500/20 lg:size-64 dark:border-white/15" />
            <div className="absolute inset-0 -m-3 rounded-3xl border border-gray-200 bg-gray-200/20 shadow-lg shadow-gray-200/50 backdrop-blur-xs dark:border-white/10 dark:bg-white/5 dark:shadow-black/10" />
            <img
              src="https://cdn.tailkit.com/media/placeholders/photo-SYTO3xs06fU-1440x960.jpg"
              className="relative mx-auto aspect-4/3 w-full rounded-2xl object-cover shadow-sm shadow-gray-300/50 dark:shadow-gray-700/50"
              alt="Hero Image"
            />
          </div>
        </div>
        {/* END Hero Content */}
      </div>
      {/* END Hero Section: Centered with Simple Header */}
      <h1>Top Product</h1>
      <div className="flex gap-4">
        <Card/>
      <Card/>
      <Card/>
      </div>
      

   
    </>
    
  )
}

export default Home