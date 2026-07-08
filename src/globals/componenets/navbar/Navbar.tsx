import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <header
          id="page-header"
          className="relative flex flex-none items-center py-8"
        >
          {/* Main Header Content */}
          <div className="container mx-auto flex flex-col gap-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-0 lg:px-8 xl:max-w-7xl">
            <div>
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-lg font-bold text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="lucide lucide-bolt inline-block size-6 text-blue-600 transition group-hover:scale-110 dark:text-blue-400"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <circle cx={12} cy={12} r={4} />
                </svg>
                <span>Flow</span>
              </a>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
              <Link
                to="/login"
                className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
              >
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
              >
                <span>Register</span>
              </Link>
              <Link
                to="#"
                className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
              >
                <span>LogOut</span>
              </Link>
            </nav>
          </div>
          {/* END Main Header Content */}
    </header>
    </>
  )
}

export default Navbar