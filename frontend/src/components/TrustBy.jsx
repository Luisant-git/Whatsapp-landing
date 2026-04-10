import React from "react";

// Put these files in: src/assets/logos/
// (or change the paths to your real files)
import shopify from "../assets/shopify.png";
import slack from "../assets/slack.png";
import zendesk from "../assets/zendesk.png";
import discord from "../assets/discord.png";
import telegram from "../assets/telegram.png";

const LogoImg = ({ src, alt }) => (
    <div className="h-12 flex items-center justify-center">
      <img 
        src={src} 
        alt={alt} 
        className="h-full w-auto object-contain max-w-[128px]" 
        loading="lazy" 
      />
    </div>
  );
export default function TrustedBy() {
  return (
    <section className='bg-white font-["Poppins"]'>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 border-t border-slate-200 py-10 md:flex-row md:items-center md:justify-between">
          {/* Left text */}
          <p className="text-sm font-normal leading-snug text-slate-700">
            <span className="block text-slate-900 font-medium">Trusted by</span>
            <span className="block">10,000+ Businesses Globally:</span>
          </p>

          {/* Right logos */}
         <div className="flex flex-wrap items-center gap-x-14 gap-y-8 md:flex-nowrap">
  <LogoImg src={shopify} alt="Shopify" />
  <LogoImg src={slack} alt="Slack" />
  <LogoImg src={zendesk} alt="Zendesk" />
  <LogoImg src={discord} alt="Discord" />
  <LogoImg src={telegram} alt="Telegram" />
</div>
        </div>
      </div>
    </section>
  );
}