'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    recipes: [
      { name: 'Donut Recipe', href: '/recipes/donut' },
      { name: 'Burger Recipe', href: '/recipes/burger' },
      { name: 'Pizza Recipe', href: '/recipes/pizza' },
      { name: 'Cake Recipe', href: '/recipes/cake' },
      { name: 'Ice Cream Recipe', href: '/recipes/ice-cream' },
      { name: 'Sushi Recipe', href: '/recipes/sushi' },
      { name: 'Hot Dog Recipe', href: '/recipes/hot-dog' },
      { name: 'Waffle Recipe', href: '/recipes/waffle' },
      { name: 'Pie Recipe', href: '/recipes/pie' },
      { name: 'Sandwich Recipe', href: '/recipes/sandwich' },
      { name: 'Salad Recipe', href: '/recipes/salad' },
      { name: 'Soup Recipe', href: '/recipes/soup' },
    ],
    guides: [
      {
        name: 'How to Make Donut',
        href: '/how-to-make-donut-in-grow-a-garden',
      },
      {
        name: 'How to Make Burger',
        href: '/how-to-make-burger-in-grow-a-garden',
      },
      {
        name: 'How to Make Pizza',
        href: '/how-to-make-pizza-in-grow-a-garden',
      },
      { name: 'How to Make Cake', href: '/how-to-make-cake-in-grow-a-garden' },
      {
        name: 'How to Make Ice Cream',
        href: '/how-to-make-ice-cream-in-grow-a-garden',
      },
      {
        name: 'How to Make Sushi',
        href: '/how-to-make-sushi-in-grow-a-garden',
      },
    ],
    resources: [
      { name: 'All Recipes', href: '/recipes' },
      { name: 'Search Recipes', href: '/search' },
      { name: 'Cooking Events', href: '/cooking-events' },
      { name: 'Chris P Kitchen', href: '/chris-p-kitchen' },
      { name: 'Cooking Rewards', href: '/cooking-rewards' },
      { name: 'Cooking Tips', href: '/cooking-tips' },
    ],
    about: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                🍳
              </div>
              <div>
                <h3 className="text-xl font-bold">Grow a Garden Recipes</h3>
                <p className="text-sm text-gray-400">Complete Cooking Guide</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Master every recipe in Roblox Grow a Garden! Complete cooking
              guide with ingredients, cooking times, and step-by-step
              instructions for all recipes.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://discord.gg/growagarden"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Discord"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@growagardenrecipes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/growagardenrecipes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Recipe Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Recipe Guides</h4>
            <ul className="space-y-2">
              {footerLinks.recipes.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Make Guides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">How to Make</h4>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Grow a Garden Recipes. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Complete cooking recipe database for Roblox Grow a Garden game
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/sitemap.xml"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Sitemap
              </Link>
              <Link
                href="/robots.txt"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Robots.txt
              </Link>
              <Link
                href="/rss.xml"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                RSS Feed
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
