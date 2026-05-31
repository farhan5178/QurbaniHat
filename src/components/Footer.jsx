'use client'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">About Qurbanihat</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Qurbanihat is a modern livestock marketplace designed to help you explore and book the perfect animals for Qurbani. We bring verified sellers and buyers together on a single platform.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: support@qurbanihat.com</li>
              <li>Phone: +880 1630270009    </li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Social Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-700 hover:text-success text-sm">
                Facebook
              </Link>
              <Link href="#" className="text-gray-700 hover:text-success text-sm">
                Twitter
              </Link>
              <Link href="#" className="text-gray-700 hover:text-success text-sm">
                Instagram
              </Link>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Qurbanihat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
