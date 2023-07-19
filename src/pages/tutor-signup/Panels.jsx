import { CheckIcon } from "@heroicons/react/24/solid";

export default function Panels({ steps, step }) {
  return (
    <nav aria-label="Progress">
      <ol className="flex overflow-auto">
        {steps.map((item, stepIdx) => (
          <li
            key={item.id}
            className="relative flex flex-1 justify-center xl:justify-start"
          >
            {step === parseInt(item.id) ? (
              <a
                href
                className="flex items-center p-2 xl:px-6 xl:py-4 text-xs font-medium"
                aria-current="step"
              >
                <span className="flex h-6 w-6 xl:h-8 xl:w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary-600">
                  <span className="text-xs xl:text-sm text-primary-600">
                    {item.id}
                  </span>
                </span>
                <span className="ml-4 hidden xl:block text-xs font-medium text-primary-600">
                  {item.name}
                </span>
              </a>
            ) : step > parseInt(item.id) ? (
              <a
                href
                className="group flex w-full items-center justify-center xl:justify-start"
              >
                <span className="flex items-center p-2 xl:px-6 xl:py-4 text-xs font-medium">
                  <span className="flex h-6 w-6 xl:h-8 xl:w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 group-hover:bg-primary-700">
                    <CheckIcon
                      className="h-3 w-3 xl:h-6 xl:w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="ml-4 hidden xl:block text-xs font-medium text-gray-900">
                    {item.name}
                  </span>
                </span>
              </a>
            ) : (
              <a
                href
                className="group flex items-center justify-center xl:justify-start"
              >
                <span className="flex items-center p-2 xl:px-6 xl:py-4 text-xs font-medium">
                  <span className="flex h-6 w-6 xl:h-8 xl:w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                    <span className="text-xs xl:text-sm text-gray-500 group-hover:text-gray-900">
                      {item.id}
                    </span>
                  </span>
                  <span className="ml-4 hidden xl:block text-xs font-medium text-gray-500 group-hover:text-gray-900">
                    {item.name}
                  </span>
                </span>
              </a>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div
                  className="absolute right-0 top-0 h-full w-[1px] xl:w-5"
                  aria-hidden="true"
                >
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
