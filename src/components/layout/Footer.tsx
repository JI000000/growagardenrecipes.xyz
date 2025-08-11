'use client';

import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    quickLinks: [
      { name: 'All Recipes', href: '/recipes' },
      { name: 'Quick Search', href: '/recipes#search' },
      { name: 'Cooking Events', href: '/cooking-events' },
      { name: 'Game Codes', href: '/codes' },
    ],
    gameResources: [
      { name: 'Game Codes', href: '/codes' },
      { name: 'Game Wiki', href: '/wiki' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Cooking Tips', href: '/recipes#tips' },
    ],
    categories: [
      { name: 'Desserts', href: '/categories/desserts' },
      { name: 'Main Dishes', href: '/categories/main-dishes' },
      { name: 'Snacks', href: '/categories/snacks' },
      { name: 'Special Recipes', href: '/categories/special' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Disclaimer', href: '/disclaimer' },
      { name: 'Contact Us', href: '/contact' },
    ],
  };

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = 'Grow a Garden Recipes - Complete Cooking Guide';
    const text = 'Master every recipe in Roblox Grow a Garden!';

    const shareData = {
      title,
      text,
      url,
    };

    switch (platform) {
      case 'native':
        if (navigator.share) {
          try {
            await navigator.share(shareData);
          } catch (err) {
            console.log('Share cancelled');
          }
        } else {
          // Fallback to copying URL
          await navigator.clipboard.writeText(url);
          alert('Link copied to clipboard!');
        }
        break;
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        );
        break;
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        );
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
                          <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-2xl">🍳</span>
                </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Grow a Garden Recipes
                </h3>
                <p className="text-sm text-blue-200">Complete Cooking Guide</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Master every recipe in Roblox Grow a Garden! Complete cooking
              guide with ingredients, cooking times, and step-by-step
              instructions for all recipes.
            </p>

            {/* Share Section */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm">
                Share This Page
              </h4>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleShare('native')}
                  className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  title="Share"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors"
                  title="Share on Twitter"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
                  title="Share on Facebook"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="p-2 bg-slate-600 hover:bg-slate-700 rounded-lg transition-colors"
                  title="Copy Link"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-b border-slate-600 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Game Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-b border-slate-600 pb-2">
              Game Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.gameResources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recipe Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-b border-slate-600 pb-2">
              Recipe Categories
            </h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-orange-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-b border-slate-600 pb-2">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm text-center md:text-left">
            <p>© 2025 Grow a Garden Recipes. All rights reserved.</p>
            <p className="mt-1">
              Complete cooking recipe database for Roblox Grow a Garden game.
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/sitemap.xml"
              className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/robots.txt"
              className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
            >
              Robots.txt
            </Link>
            <Link
              href="/rss.xml"
              className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
            >
              RSS Feed
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
