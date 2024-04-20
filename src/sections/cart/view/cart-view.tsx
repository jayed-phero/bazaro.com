import PageHeader from "@/components/common/page-header";
import Link from "next/link";
import CartRow from "../cart-row-view";

const CartedProductView = () => {
  const breadcrumbItems = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Cart", url: "/cart" },
  ];

  return (
    <div className="bg-gray-100">
      <PageHeader pageName="Your Cart" breadcrumbItems={breadcrumbItems} />
      <div className="max-w-7xl mx-auto px-5 xl:px-0 pb-16 min-h-screen">
        <hr className="border-slate-200  my-5 xl:my-12" />

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[60%] xl:w-[55%]">
            {[1, 2, 3].map((item, index) => (
              <CartRow key={index} />
            ))}
          </div>
          <div className="border-t lg:border-t-0 lg:border-l border-slate-200  my-10 lg:my-0 lg:mx-10 xl:mx-16 2xl:mx-20 flex-shrink-0"></div>

          {/* summary */}
          <div className="flex-1 px-5 py-5 rounded-xl sticky top-28 bg-white">
            <div className="">
              <h3 className="text-lg font-semibold">Order Summary</h3>
              <div className="mt-7 text-sm text-slate-500  divide-y divide-slate-200/70 ">
                <div className="flex justify-between pb-4">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900 ">$500</span>
                </div>
                <div className="flex justify-between py-4">
                  <span>Shipping estimate</span>
                  <span className="font-semibold text-slate-900 ">$50</span>
                </div>
                <div className="flex justify-between py-4">
                  <span>Tax estimate</span>
                  <span className="font-semibold text-slate-900 ">$20</span>
                </div>
                <div className="flex justify-between font-semibold text-slate-900  text-base pt-4">
                  <span>Order total</span>
                  <span>$570</span>
                </div>
              </div>
              <Link
                href="/"
                className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 text-white disabled:bg-opacity-90 bg-blue-gray-700  hover:bg-blue-gray-800 shadow-xl mt-8 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Checkout
              </Link>
              <div className="mt-5 text-sm text-slate-500  flex items-center justify-center">
                <p className="block relative pl-5">
                  <svg
                    className="w-4 h-4 absolute -left-1 top-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 8V13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M11.9945 16H12.0035"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  Learn more{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="##"
                    className="text-slate-900  underline font-medium"
                  >
                    Taxes
                  </a>{" "}
                  and{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="##"
                    className="text-slate-900  underline font-medium"
                  >
                    Shipping
                  </a>{" "}
                  information
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartedProductView;