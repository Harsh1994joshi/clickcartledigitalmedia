import React from 'react';

const items = [
  'SEO Domination', 'Brand Identity', 'Social Media Growth', 'Performance Ads',
  'AI Automation', 'Video Production', 'Website Development', 'Influencer Marketing',
  'Content Creation', 'Email Campaigns', 'Google Ads', 'Meta Ads',
];

export default function MarqueeSection() {
  return (
    <section className="py-10 overflow-hidden border-t border-b border-white/5 bg-deep-black">
      <div className="marquee-container">
        <div className="marquee-track">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-4 mx-6">
              <span className="font-display font-600 text-lg text-white/20 whitespace-nowrap hover:text-white/60 transition-colors cursor-default">
                {item}
              </span>
              <span className="text-purple-500/40 text-lg">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
