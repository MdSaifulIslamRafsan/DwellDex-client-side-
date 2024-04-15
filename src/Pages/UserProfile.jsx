import { useContext } from "react";
import { AuthContext } from "./../Provider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      {/*Main Col*/}
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This is some information about the user.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user?.displayName || 'No'}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.email || 'No'}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.phoneNumber || 'No'}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/*Img Col*/}
      <div className="w-full lg:w-2/5">
        {/* Big profile image for side bar (desktop) */}
        <img
          src={user?.photoURL || "https://i.ibb.co/XZcYs4j/user.png"}
          className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        />
        {/* Image from: http://unsplash.com/photos/MP0IUfwrn0A */}
      </div>
      {/* Pin to top right corner */}
      <div className="absolute top-0 right-0 h-12 w-18 p-4">
        <button className="js-change-theme focus:outline-none">🌙</button>
      </div>
    </div>
  );
};

export default UserProfile;
