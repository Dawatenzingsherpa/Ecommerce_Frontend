import { ChangeEvent, useEffect, useState } from "react";
import { useAppSelector } from "../../store/hook";
import { fetchCartItems, resetCart } from "../../store/CartSlice";
import { useAppDispatch } from "../../store/hook";
import { Status } from "../../store/authSlice";
import Footer from "../../globals/componenets/footer/Footer";
import Navbar from "../../globals/componenets/navbar/Navbar";
import {
  CreateOrderData,
  PaymentMethod,
} from "../../globals/componenets/types/checkoutTypes";
import { ItemDetail } from "../../globals/componenets/types/checkoutTypes";
import { createOrder } from "../../store/checkoutSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { items } = useAppSelector((state) => state.cart);
  const { khaltiUrl, status } = useAppSelector((state) => state.orders);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.Cod,
  );
  const [data, setData] = useState<CreateOrderData>({
    phoneNumber: "",
    shippingAddress: "",
    totalAmount: 0,
    paymentDetails: {
      paymentMethod: PaymentMethod.Cod,
    },
    items: [],
  });
  const subTotal = items.reduce(
    (total, item) =>
      (item?.Product?.productPrice ?? 0) * item?.quantity + total,
    0,
  );

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);
  useEffect(() => {
    if (status === Status.SUCCESS) {
      dispatch(resetCart());
      alert("Order Placed Successfully");
      navigate("/");
    }
  }, [status]);

  const handlePaymentMethod = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value as PaymentMethod);
    setData({
      ...data,
      paymentDetails: {
        paymentMethod: e.target.value as PaymentMethod,
      },
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const itemDetails: ItemDetail[] = items.map((item) => {
      return {
        productId: item?.Product.id,
        quantity: item?.quantity,
      };
    });

    const orderData: CreateOrderData = {
      ...data,
      items: itemDetails,
      totalAmount: subTotal + 150,
    };

    await dispatch(createOrder(orderData));

    if (khaltiUrl) {
      window.location.href = khaltiUrl;
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* LEFT */}
            <div className="space-y-8">
              {/* Order Summary */}
              <div>
                <h2 className="text-3xl font-bold">Order Summary</h2>
                <p className="mt-1 text-gray-500">
                  Check your items and select a suitable payment method.
                </p>
                {items.length > 0 &&
                  items.map((item) => (
                    <div
                      key={item?.Product.id}
                      className="mt-6 rounded-xl border bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-center gap-5">
                        <img
                          src={item?.Product?.imageUrl}
                          alt=""
                          className="h-28 w-28 rounded-lg object-cover"
                        />

                        <div className="flex-1">
                          <h3 className="text-xl font-semibold">
                            {item?.Product?.productName}
                          </h3>

                          <p className="text-gray-500">
                            Qty : {item?.quantity}
                          </p>

                          <p className="mt-2 text-2xl font-bold">
                            {item?.Product?.productPrice ?? 0 * item?.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Payment Method */}

              <div>
                <h2 className="mb-5 text-2xl font-bold">Payment Method</h2>

                <div className="space-y-4">
                  <label className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-5 hover:border-black">
                    <div>
                      <p className="font-semibold">Cash On Delivery</p>
                      <p className="text-sm text-gray-500">
                        Pay after delivery
                      </p>
                    </div>

                    <input
                      type="radio"
                      name="payment"
                      value={PaymentMethod.Cod}
                      onChange={handlePaymentMethod}
                      defaultChecked
                      className="h-5 w-5"
                    />
                  </label>

                  <label className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-5 hover:border-purple-600">
                    <div>
                      <p className="font-semibold">Khalti Payment</p>
                      <p className="text-sm text-gray-500">
                        Pay securely online
                      </p>
                    </div>

                    <input
                      type="radio"
                      name="payment"
                      value={PaymentMethod.Khalti}
                      onChange={handlePaymentMethod}
                      className="h-5 w-5"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div>
              <div className="rounded-xl border bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-bold">Payment Details</h2>

                <p className="mt-1 text-gray-500">
                  Complete your order by filling in your information.
                </p>

                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="mb-2 block font-medium">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      placeholder="98XXXXXXXX"
                      name="phoneNumber"
                      onChange={handleChange}
                      className="w-full rounded-lg border px-4 py-3 focus:border-black focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-medium">
                      Shipping Address
                    </label>

                    <input
                      name="shippingAddress"
                      onChange={handleChange}
                      placeholder="Street Address"
                      className="w-full rounded-lg border px-4 py-3 focus:border-black focus:outline-none"
                    />
                  </div>

                  <hr />

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">Rs. {subTotal}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">Rs. 150</span>
                    </div>

                    <div className="border-t pt-4 flex justify-between text-2xl font-bold">
                      <span>Total</span>
                      <span>Rs. {subTotal + 150}</span>
                    </div>
                  </div>

                  {paymentMethod === PaymentMethod.Khalti ? (
                    <button
                      className="w-full rounded-lg bg-purple-700 py-4 text-lg font-semibold text-white transition hover:bg-purple-800"
                      type="submit"
                    >
                      Pay With Khalti
                    </button>
                  ) : (
                    <button
                      className="mt-6 w-full rounded-lg bg-black py-4 text-lg font-semibold text-white transition hover:bg-gray-800"
                      type="submit"
                    >
                      Place Order
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
