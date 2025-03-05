import {
  ArrowRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="mb-24 relative bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center"
      style={{ backgroundImage: "url('/images/s/4.jpg')" }}
    >
      {/* Pseudo-element for darkening the background image */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="card p-12 relative text-center w-full z-10">
        {/* Content */}
        <div className="relative">
          <div className="flex justify-center mb-6">
            <SparklesIcon className="w-12 h-12 text-amber-400 animate-pulse" />
          </div>

          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Your Journey to Stardom Begins Here
          </h2>

          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join Sikkim Rising Star 2024 and showcase your talent to thousands.
            Early registrations get exclusive mentorship opportunities!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/register"
              className="button text-lg px-8 py-4 group hover:scale-105 hover:shadow-purple-500/25 bg-white/10 backdrop-blur-md text-white"
            >
              Register Now
              <ArrowRightIcon className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}