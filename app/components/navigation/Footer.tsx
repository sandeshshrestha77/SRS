import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Register", href: "/register" },
  ],
  
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Competition Rules", href: "#" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/sikkimrisingstar_official_/", ariaLabel: "Visit Instagram" },
  { name: "Facebook", href: "https://www.facebook.com/sikkimrisingstar/", ariaLabel: "Visit Facebook" },
  { name: "YouTube", href: "https://youtube.com/@sikkimrisingstar", ariaLabel: "Visit YouTube" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding and Contact Info */}
          <div className="md:col-span-1">
  <Link href="/" className="flex items-center space-x-2 group">
    <Image
      src="/logo.png" // Adjust this path based on your logo's location in public/
      alt="Sikkim Rising Star Logo"
      width={150}    // Set the desired width
      height={40}    // Set the desired height
      className="group-hover:brightness-125 transition-all duration-300"
    />
  </Link>
  <p className="text-gray-400 text-sm leading-relaxed mb-6">
  Sikkim&apos;s Premier Talent Hunt Competition, discovering extraordinary talents since 2018.
</p>
            <div className="space-y-2">
              <a
                href="sikkimrisingstar@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                aria-label="Email Sikkim Rising Star"
              >
                <EnvelopeIcon className="w-4 h-4" />
                sikkimrisingstar@gmail.com
              </a>
                <a
                href="https://wa.me/919734013211"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Sikkim Rising Star"
                >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"></svg>
                +91 97340 13211
                </a>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(navigation).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {title === "main" ? "Navigation" : title}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section with Social Links */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Sikkim Rising Star. All rights reserved.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  aria-label={social.ariaLabel}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
