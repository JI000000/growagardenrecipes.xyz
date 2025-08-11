import { allRecipes } from '@/data/recipes';
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://growagardenrecipes.xyz';
  const currentDate = new Date().toISOString();

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Grow a Garden Recipes</title>
    <link>${baseUrl}</link>
    <description>Complete cooking guide for Roblox Grow a Garden game</description>
    <language>en</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    
    <item>
      <title>All Recipes</title>
      <link>${baseUrl}/recipes</link>
      <description>Complete collection of all cooking recipes in Grow a Garden</description>
      <pubDate>${currentDate}</pubDate>
    </item>
    
    <item>
      <title>Game Codes</title>
      <link>${baseUrl}/codes</link>
      <description>Latest working codes for free rewards in Grow a Garden</description>
      <pubDate>${currentDate}</pubDate>
    </item>
    
    <item>
      <title>Cooking Events</title>
      <link>${baseUrl}/cooking-events</link>
      <description>Current and upcoming cooking events in Grow a Garden</description>
      <pubDate>${currentDate}</pubDate>
    </item>
    
    ${allRecipes
      .map(
        (recipe) => `
    <item>
      <title>${recipe.name} Recipe</title>
      <link>${baseUrl}/recipes/${recipe.slug}</link>
      <description>How to make ${recipe.name} in Grow a Garden - ${recipe.description}</description>
      <pubDate>${currentDate}</pubDate>
    </item>
    `
      )
      .join('')}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
