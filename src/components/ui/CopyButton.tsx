'use client';

import { useState } from 'react';

interface CopyButtonProps {
  code: string;
  className?: string;
}

export default function CopyButton({ code, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`btn-primary px-6 py-2 rounded-xl text-sm font-medium ${className || ''}`}
    >
      {copied ? 'Copied!' : 'Copy Code'}
    </button>
  );
}
