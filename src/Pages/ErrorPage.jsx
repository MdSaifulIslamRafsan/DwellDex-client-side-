import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();

  return (
    <section className="flex items-center h-screen p-16 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl ">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, This Page Was {error.statusText || error.message}
          </p>
          <p className="mt-4 mb-8 ">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to={'/'}
            rel="noopener noreferrer"
            className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;