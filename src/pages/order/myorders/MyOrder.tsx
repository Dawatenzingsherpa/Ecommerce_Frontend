import { useEffect, useState } from "react"
import { Search } from "lucide-react"
import Footer from "../../../globals/componenets/footer/Footer"
import Navbar from "../../../globals/componenets/navbar/Navbar"
import { useAppDispatch, useAppSelector } from "../../../store/hook"
import { cancelOrder, fetchMyOrders, updateOrderStatus } from "../../../store/checkoutSlice"
import { Link } from "react-router-dom"
import { OrderStatus } from "../../../globals/componenets/types/checkoutTypes"
import {socket} from "../../../App"

const MyOrder = () => {
  const dispatch = useAppDispatch()
  const { myOrder } = useAppSelector((state) => state.orders)
  const [searchTerms, setSearchTerms] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState("");

  const [selectedItem, setSelectedItem] = useState<OrderStatus>(OrderStatus.All)
  useEffect(() => {
    dispatch(fetchMyOrders())
  }, [dispatch])

  useEffect(()=>{
    socket.on('statusUpdated',(data:any)=>{
      dispatch(updateOrderStatus(data))
    })
  },[socket])


  const filterMyOrders = myOrder.filter((order) => selectedItem === OrderStatus.All || order.orderStatus === selectedItem).
    filter((order) => order.id?.toLowerCase().includes(searchTerms) || order.Payment.paymentMethod.toLowerCase().includes(searchTerms) || order.totalAmount.toString().includes(searchTerms)).
    filter((order)=>selectedDate==="" ||new Date(order.createdAt as string).toLocaleDateString()===new Date(selectedDate).toLocaleDateString())
  const handleCancelOrder = async (id: string) => {
    if (id) {
      await dispatch(cancelOrder(id))
      await dispatch(fetchMyOrders())
    }
  }
  return (

    <>
      <Navbar />
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <div className="gap-4 sm:flex sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">My orders</h2>

              <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
                <div className="relative w-56">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerms}
                    onChange={(e) => setSearchTerms(e.target.value as string)}
                    className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="order-type" className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white">Select order type</label>
                  <select id="order-type" onChange={(e) => { setSelectedItem(e.target.value as OrderStatus) }} className="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                    <option value={OrderStatus.All}>All orders</option>
                    <option value={OrderStatus.Pending}>Pending</option>
                    <option value={OrderStatus.OntheWay}>On the way</option>
                    <option value={OrderStatus.Preparing}>Preparing</option>
                    <option value={OrderStatus.Cancelled}>Cancelled</option>
                    <option value={OrderStatus.Delivered}>Delivered</option>
                  </select>
                </div>

                <span className="inline-block text-gray-500 dark:text-gray-400"> from </span>

                <div>

                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flow-root sm:mt-8">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {
                  filterMyOrders.length > 0 && filterMyOrders.map((order) =>
                  (
                    <div className="flex flex-wrap items-center gap-y-4 py-6">
                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Order ID:</dt>
                        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                          <Link to={`/myorder/${order?.id}`} className="hover:underline">{order?.id}</Link>
                        </dd>
                      </dl>

                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Date:</dt>
                        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{new Date(order?.createdAt as string).toLocaleDateString()}</dd>
                      </dl>

                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Price:</dt>
                        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">Rs.{order?.totalAmount}</dd>
                      </dl>

                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Status:</dt>
                        <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                          <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                          </svg>
                          {order?.orderStatus}
                        </dd>
                      </dl>

                      <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                        <button type="button" className="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 lg:w-auto" onClick={() => { handleCancelOrder(order?.id as string) }}>Cancel order</button>
                        <Link to={`/myorder/${order?.id}`} className="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto">View details</Link>
                      </div>
                    </div>
                  )
                  )
                }



              </div>
            </div>

            <nav className="mt-6 flex items-center justify-center sm:mt-8" aria-label="Page navigation example">
              <ul className="flex h-8 items-center -space-x-px text-sm">
                <li>
                  <a href="#" className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Previous</span>
                    <svg className="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                  <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                  <a href="#" aria-current="page" className="z-10 flex h-8 items-center justify-center border border-primary-300 bg-primary-50 px-3 leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                  <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                </li>
                <li>
                  <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                </li>
                <li>
                  <a href="#" className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Next</span>
                    <svg className="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default MyOrder