"use client";

import {
  ArrowRight,
  Code,
  Smartphone,
  Palette,
  Zap,
  Users,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
  <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm">
  <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
    <h1 className="text-2xl font-extrabold tracking-tight text-gray-800 flex items-center gap-2">
      🚀 Darnoc <span className="text-blue-600">Builder</span>
    </h1>
    <nav className="flex items-center space-x-8">
      {[
        { href: "#features", label: "Features" },
        { href: "#how-it-works", label: "How It Works" },
        { href: "#contact", label: "Contact" }
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="relative text-gray-700 hover:text-blue-600 transition"
        >
          {link.label}
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 hover:w-full"></span>
        </Link>
      ))}
    </nav>
  </div>
</header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center text-center px-6 py-20">
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl">
          Build Stunning, Responsive Emails <br /> in Minutes
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          Stop wrestling with email HTML. Drag, drop, style, and export
          pixel-perfect templates that work everywhere.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Trusted by marketers, designers, and agencies worldwide.
        </p>
        <Link
          href="/email/dashboard"
          className="mt-8 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow transition"
        >
          Launch Builder
          <ArrowRight className="ml-2" />
        </Link>

        {/* Animated Preview */}
        {/* Animated Preview */}
        <motion.div
          className="mt-16 relative rounded-xl overflow-hidden border shadow-lg bg-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Mock editor top bar */}
          <div className="flex items-center gap-2 bg-gray-200 px-4 py-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>

          {/* Live Drag-Drop Mock */}
          <div className="flex gap-4 p-6 bg-gray-50 min-h-[200px] items-start justify-center">
            <motion.div
              className="w-40 h-28 bg-white border rounded-lg shadow flex items-center justify-center cursor-grab"
              drag
              dragConstraints={{ left: -60, right: 60, top: -30, bottom: 30 }}
              whileHover={{ scale: 1.05 }}
              whileDrag={{ scale: 1.1, rotate: 2 }}
            >
              📝 Text Block
            </motion.div>
            <motion.div
              className="w-40 h-28 bg-white border rounded-lg shadow flex items-center justify-center cursor-grab"
              drag
              dragConstraints={{ left: -60, right: 60, top: -30, bottom: 30 }}
              whileHover={{ scale: 1.05 }}
              whileDrag={{ scale: 1.1, rotate: -2 }}
            >
              🖼 Image Block
            </motion.div>
            <motion.div
              className="w-40 h-28 bg-white border rounded-lg shadow flex items-center justify-center cursor-grab"
              drag
              dragConstraints={{ left: -60, right: 60, top: -30, bottom: 30 }}
              whileHover={{ scale: 1.05 }}
              whileDrag={{ scale: 1.1, rotate: 1 }}
            >
              🔘 Button Block
            </motion.div>
          </div>

          {/* Code preview */}
          <div className="bg-gray-900 text-green-400 font-mono text-sm p-4 overflow-x-auto">
            <pre>
              {`<div style="text-align:center;">
  <h1>Welcome to Darnoc Builder</h1>
  <p>Drag. Drop. Done.</p>
</div>`}
            </pre>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Darnoc Builder?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <Code className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Instant HTML Export
              </h4>
              <p className="text-gray-600">
                Generate clean, production-ready HTML that works with Gmail,
                Outlook, and more.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <Smartphone className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Fully Responsive</h4>
              <p className="text-gray-600">
                Templates automatically adapt for desktop, tablet, and mobile.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <Palette className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Custom Design</h4>
              <p className="text-gray-600">
                Match your brand perfectly with intuitive style controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Zap className="w-8 h-8 text-yellow-500 mb-4" />
              <h4 className="font-semibold text-lg mb-2">1. Drag & Drop</h4>
              <p className="text-gray-600">
                Choose blocks from the library and arrange them visually.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Palette className="w-8 h-8 text-blue-500 mb-4" />
              <h4 className="font-semibold text-lg mb-2">
                2. Customize Styles
              </h4>
              <p className="text-gray-600">
                Easily tweak colors, fonts, and layouts without touching code.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h4 className="font-semibold text-lg mb-2">3. Export & Send</h4>
              <p className="text-gray-600">
                Download HTML and use in your favorite email marketing platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Build Your First Email?
        </h3>
        <p className="mb-6 text-blue-100">
          It takes less than 5 minutes to create your first template.
        </p>
        <Link
          href="/email/dashboard"
          className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Start Building
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-gray-600 text-sm">
          <p>
            © {new Date().getFullYear()} Darnoc Builder. All rights reserved.
          </p>
          <p>Crafted with ❤️ using Next.js</p>
        </div>
      </footer>
    </div>
  );
}
