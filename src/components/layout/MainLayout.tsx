
import React from "react";
import { Link } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-study-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl">📚</span>
            <span>o-sshadow Revision</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-study-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-study-200 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500">
          <p>© 2025 Revision. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
