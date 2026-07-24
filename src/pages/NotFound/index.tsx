import { useEffect, useState } from "react";
import { ArrowLeft, Home, UtensilsCrossed } from "lucide-react";

const NotFound = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ background: "var(--color-cream)" }}
    >
      {/* Mouse Glow */}
      <div
        className="pointer-events-none absolute h-80 w-80 rounded-full blur-3xl transition-all duration-300"
        style={{
          left: mouse.x - 160,
          top: mouse.y - 160,
          background: "color-mix(in srgb, var(--color-primary-500) 18%, transparent)",
        }}
      />

      {/* Decorative Circles */}
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-primary-500/5 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl" />

      <div className="container-custom relative z-10 py-20 text-center">
        {/* Icon */}
        <div
          className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full shadow-xl animate-bounce"
          style={{
            background: "var(--color-primary-500)",
            color: "var(--color-cream)",
          }}
        >
          <UtensilsCrossed size={46} />
        </div>

        {/* 404 */}
        <h1
          className="font-display text-8xl md:text-9xl"
          style={{ color: "var(--color-primary-500)" }}
        >
          404
        </h1>

        <h2
          className="mt-5 font-display text-3xl md:text-5xl"
          style={{ color: "var(--color-primary-500)" }}
        >
          Oops! This Dish Isn't on the Menu.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-md leading-8 text-gray-700">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back to exploring our delicious menu.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => history.back()}
            className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-primary-500 px-6 py-3 font-semibold text-primary-500 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-500 hover:text-white"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="btn-primary flex cursor-pointer items-center gap-2 px-6 py-3"
          >
            <Home size={18} />
            Back Home
          </button>
        </div>

        {/* Suggestion Card */}
        <div className="mt-16 rounded-3xl border border-primary-100 bg-white/80 p-8 shadow-lg backdrop-blur-md">
          <h3
            className="font-display text-2xl"
            style={{ color: "var(--color-primary-500)" }}
          >
            Continue Your Culinary Journey
          </h3>

          <p className="mt-3 text-gray-600">
            Discover our handcrafted dishes, reserve your table,
            or explore today's chef's special.
          </p>

          <button
            onClick={() => (window.location.href = "/menu")}
            className="btn-primary mt-6 cursor-pointer px-8 py-3"
          >
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;