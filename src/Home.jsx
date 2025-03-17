
import React from "react";

const hamletImg = new URL("./assets/hamlet.jpg", import.meta.url).href;
const earnestImg = new URL("./assets/earnest.jpg", import.meta.url).href;
const streetcarImg = new URL("./assets/streetcar.jpg", import.meta.url).href;

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-100 flex-grow">
      {/* Hero Banner */}
      <div className="py-16 w-full flex items-center justify-center">
        <h1 className="text-gray-900 text-4xl font-bold text-center px-4 max-w-4xl">
          Welcome to GCT – Experience Live Theatre! – Book Your Tickets Now!
        </h1>
      </div>

      {/* Featured Plays */}
      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Upcoming Plays</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Play 1 - Hamlet */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <div
              className="h-48 bg-gray-700 relative"
              style={{
                backgroundImage: `url(${hamletImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-bold">Hamlet</h3>
                <p>March 15 - March 25</p>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p>By William Shakespeare</p>
              <p>Directed by Sarah Johnson</p>
              <p className="my-2">
                A tragedy about the Prince of Denmark seeking revenge for his father's murder.
              </p>
              <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full">
                Book Now
              </button>
            </div>
          </div>

          {/* Play 2 - The Importance of Being Earnest */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <div
              className="h-48 bg-gray-700 relative"
              style={{
                backgroundImage: `url(${earnestImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-bold">The Importance of Being Earnest</h3>
                <p>April 5 - April 20</p>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p>By Oscar Wilde</p>
              <p>Directed by Michael Roberts</p>
              <p className="my-2">
                A comedy about mistaken identities and social obligations in Victorian England.
              </p>
              <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full">
                Book Now
              </button>
            </div>
          </div>

          {/* Play 3 - A Streetcar Named Desire */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <div
              className="h-48 bg-gray-700 relative"
              style={{
                backgroundImage: `url(${streetcarImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-bold">A Streetcar Named Desire</h3>
                <p>May 10 - May 25</p>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p>By Tennessee Williams</p>
              <p>Directed by Elizabeth Chen</p>
              <p className="my-2">
                A drama depicting the decline of a southern belle after moving in with her sister.
              </p>
              <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Temporary image tags to verify paths */}

    
    </div>
  );
};

export default Home;