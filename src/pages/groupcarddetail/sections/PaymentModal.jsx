import { CheckIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const PaymentModal = () => {
  return (
    <div>
      <div>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">
            Payment successful
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Focus on your specific goals with our guided courses, including
              academic test prep, business English, conversation practice, and
              more.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <Link
          to="/"
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-primary-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};

export default PaymentModal;
