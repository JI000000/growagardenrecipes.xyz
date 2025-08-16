'use client';

interface RecipeShareButtonsProps {
  title: string;
  description: string;
  className?: string;
  colorScheme?: 'red' | 'rose' | 'cyan' | 'purple' | 'blue' | 'green';
}

export default function RecipeShareButtons({
  title,
  description,
  className = '',
  colorScheme = 'blue',
}: RecipeShareButtonsProps) {
  // 根据colorScheme确定颜色
  const colors = {
    red: {
      primaryBtn: 'bg-red-600 hover:bg-red-700',
      twitterBtn: 'bg-sky-500 hover:bg-sky-600',
      facebookBtn: 'bg-blue-700 hover:bg-blue-800',
      copyBtn: 'bg-slate-600 hover:bg-slate-700',
    },
    rose: {
      primaryBtn: 'bg-rose-600 hover:bg-rose-700',
      twitterBtn: 'bg-sky-500 hover:bg-sky-600',
      facebookBtn: 'bg-blue-700 hover:bg-blue-800',
      copyBtn: 'bg-slate-600 hover:bg-slate-700',
    },
    cyan: {
      primaryBtn: 'bg-cyan-600 hover:bg-cyan-700',
      twitterBtn: 'bg-sky-500 hover:bg-sky-600',
      facebookBtn: 'bg-blue-700 hover:bg-blue-800',
      copyBtn: 'bg-slate-600 hover:bg-slate-700',
    },
    purple: {
      primaryBtn: 'bg-purple-600 hover:bg-purple-700',
      twitterBtn: 'bg-sky-500 hover:bg-sky-600',
      facebookBtn: 'bg-blue-700 hover:bg-blue-800',
      copyBtn: 'bg-slate-600 hover:bg-slate-700',
    },
    blue: {
      primaryBtn: 'bg-blue-600 hover:bg-blue-700',
      twitterBtn: 'bg-sky-500 hover:bg-sky-600',
      facebookBtn: 'bg-blue-700 hover:bg-blue-800',
      copyBtn: 'bg-slate-600 hover:bg-slate-700',
    },
    green: {
      primaryBtn: 'bg-green-600 hover:bg-green-700',
      twitterBtn: 'bg-sky-500 hover:bg-sky-600',
      facebookBtn: 'bg-blue-700 hover:bg-blue-800',
      copyBtn: 'bg-slate-600 hover:bg-slate-700',
    },
  };

  const selectedColors = colors[colorScheme];

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const shareData = {
      title,
      text: description,
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
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(description)}&url=${encodeURIComponent(url)}`
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
    <div className={`flex gap-2 ${className}`}>
      <button
        onClick={() => handleShare('native')}
        className={`flex items-center px-3 py-2 ${selectedColors.primaryBtn} rounded-lg transition-colors text-white`}
        title="Share"
      >
        <svg
          className="w-4 h-4 mr-1"
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
        <span className="text-white text-xs font-medium">Share</span>
      </button>
      <button
        onClick={() => handleShare('twitter')}
        className={`flex items-center px-3 py-2 ${selectedColors.twitterBtn} rounded-lg transition-colors text-white`}
        title="Share on Twitter"
      >
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
        <span className="text-white text-xs font-medium">X</span>
      </button>
      <button
        onClick={() => handleShare('facebook')}
        className={`flex items-center px-3 py-2 ${selectedColors.facebookBtn} rounded-lg transition-colors text-white`}
        title="Share on Facebook"
      >
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        <span className="text-white text-xs font-medium">FB</span>
      </button>
      <button
        onClick={() => handleShare('copy')}
        className={`flex items-center px-3 py-2 ${selectedColors.copyBtn} rounded-lg transition-colors text-white`}
        title="Copy Link"
      >
        <svg
          className="w-4 h-4 mr-1"
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
        <span className="text-white text-xs font-medium">Copy</span>
      </button>
    </div>
  );
}
