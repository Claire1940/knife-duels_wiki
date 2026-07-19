import Link from 'next/link'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.knife-duels.wiki'
  const path = '/about'

  return {
    title: 'About Knife Duels Wiki - Your Ultimate Roblox Knife PvP Resource',
    description: 'Learn about Knife Duels Wiki, a community-driven resource hub providing codes, knife skin showcases, weapon stats, duel strategies, and mode guides for the Roblox knife combat game Knife Duels.',
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: locale === 'en' ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`,
      siteName: 'Knife Duels Wiki',
      title: 'About Knife Duels Wiki',
      description: 'Learn about our mission to provide the best Knife Duels game resources and guides.',
      images: [
        {
          url: `${siteUrl}/images/hero.webp`,
          width: 1920,
          height: 1080,
          alt: 'Knife Duels Wiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Knife Duels Wiki',
      description: 'Learn about our mission to provide the best Knife Duels game resources.',
      images: [`${siteUrl}/images/hero.webp`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Knife Duels Wiki
          </h1>
          <p className="text-slate-300 text-lg mb-2">
            Your community-driven resource center for Knife Duels
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Welcome to Knife Duels Wiki</h2>
            <p>
              Knife Duels Wiki is an <strong>unofficial, fan-made resource website</strong> dedicated to helping players
              master the Roblox game &quot;Knife Duels&quot;. We are a community-driven platform that provides comprehensive codes,
              knife skin showcases, weapon tier lists, mode rules, and strategic insights to enhance your dueling experience.
            </p>
            <p>
              Whether you&apos;re a new player just learning to throw your first blade or a seasoned veteran aiming to top the
              leaderboards across 1v1, Free For All, and Team Duels, Knife Duels Wiki is here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Our Mission</h2>
            <p>
              Our mission is simple: <strong>to empower Knife Duels players with accurate, up-to-date information
              and powerful tools</strong> that help them win more duels. We strive to:
            </p>
            <ul>
              <li><strong>Provide reliable information:</strong> Keep our content updated with the latest codes, new knife skins, and weekly balance updates</li>
              <li><strong>Build useful tools:</strong> Develop skin galleries, weapon tier lists, and strategy guides that help players make informed loadout decisions</li>
              <li><strong>Foster community:</strong> Create a welcoming space where players can learn, share duel tactics, and grow together</li>
              <li><strong>Stay accessible:</strong> Keep all resources free and easy to use for players of all skill levels</li>
            </ul>

            <h2>Our Vision</h2>
            <p>
              We envision Knife Duels Wiki as the <strong>go-to destination</strong> for every Knife Duels player seeking
              to sharpen their skills. We want to be the resource that players trust and rely on, whether they need active
              codes, want to compare rare knife skins, or are looking for advanced PvP tactics.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature Card 1 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🎁</div>
              <h3 className="text-xl font-semibold text-white mb-2">Active Codes</h3>
              <p className="text-slate-300">
                A frequently updated list of working redeem codes for free knife skins, coins, and rewards.
                Never miss a free drop again!
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🗡️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Knife Skin Showcase</h3>
              <p className="text-slate-300">
                Detailed galleries and rarity guides for every knife skin in the game.
                Build your collection and show off your style.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">⚔️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Weapon Stats & Tier Lists</h3>
              <p className="text-slate-300">
                Complete stats breakdowns and tier rankings for every weapon.
                Know which blade gives you the edge in any duel.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🎮</div>
              <h3 className="text-xl font-semibold text-white mb-2">Mode Guides</h3>
              <p className="text-slate-300">
                Rules, objectives, and tactics for 1v1 Duels, Free For All, and Team Duels.
                Master every game mode the arena has to offer.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🏆</div>
              <h3 className="text-xl font-semibold text-white mb-2">Duel Strategies</h3>
              <p className="text-slate-300">
                Movement techniques, throwing tips, and mind-game tactics to outplay your opponents.
                Climb the ranks with proven strategies.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-2">Multilingual Support</h3>
              <p className="text-slate-300">
                Content available in multiple languages including English, Spanish, Portuguese,
                and German to serve players worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Community-Driven</h2>
            <p>
              Knife Duels Wiki is built <strong>by the community, for the community</strong>. We welcome contributions,
              feedback, and suggestions from players of all skill levels. Our content is constantly evolving based on:
            </p>
            <ul>
              <li><strong>Player feedback:</strong> Your suggestions help us improve and expand our resources</li>
              <li><strong>Community discoveries:</strong> New strategies, hidden mechanics, and pro tips shared by players</li>
              <li><strong>Game updates:</strong> We monitor weekly updates and adjust our content accordingly</li>
              <li><strong>Meta shifts:</strong> We track PvP trends and update guides based on real player experiences</li>
            </ul>
            <p>
              <strong>Want to contribute?</strong> Whether you&apos;ve found a new code, discovered a powerful combo,
              or have suggestions for new guides, we&apos;d love to hear from you! Reach out through our contact channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>About the Team</h2>
            <p>
              Knife Duels Wiki is maintained by a dedicated team of passionate gamers and developers who love
              Knife Duels as much as you do. We&apos;re players first, constantly testing strategies, grinding skins,
              and staying updated with the latest weekly drops.
            </p>
            <p>
              Our team combines expertise in:
            </p>
            <ul>
              <li><strong>Game analysis:</strong> Deep understanding of Knife Duels mechanics, hitboxes, and movement</li>
              <li><strong>Web development:</strong> Building fast, user-friendly tools and interfaces</li>
              <li><strong>Content creation:</strong> Writing clear, helpful guides and tutorials</li>
              <li><strong>Community management:</strong> Listening to player feedback and fostering a positive environment</li>
            </ul>
            <p className="text-slate-400 italic text-sm">
              Project Codename: &quot;Bladekeeper&quot; – Sharpening every duelist&apos;s edge.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Important Disclaimer</h2>
            <p className="text-yellow-400/90">
              <strong>Knife Duels Wiki is an unofficial fan-made website.</strong> We are NOT affiliated with,
              endorsed by, or associated with Roblox Corporation or the developers of Knife Duels.
            </p>
            <p>
              All game content, trademarks, characters, and assets are the property of their respective owners.
              We use game-related content under fair use principles for informational and educational purposes only.
            </p>
            <p>
              Knife Duels Wiki is a non-profit, community resource created by fans, for fans.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Get in Touch</h2>
            <p>
              We&apos;d love to hear from you! Whether you have questions, suggestions, found a bug, or just want to say hi:
            </p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>
                <a href="mailto:contact@knife-duels.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  contact@knife-duels.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Bug Reports</h3>
                <a href="mailto:support@knife-duels.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  support@knife-duels.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Content Submissions</h3>
                <a href="mailto:contribute@knife-duels.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  contribute@knife-duels.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Partnerships</h3>
                <a href="mailto:partnerships@knife-duels.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  partnerships@knife-duels.wiki
                </a>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              <strong>Response Time:</strong> We aim to respond to all inquiries within 2-3 business days.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-red-900/30 to-orange-900/30 border-y border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Stay updated with the latest codes, knife skins, and Knife Duels strategies.
            Bookmark this site and check back regularly for new content!
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[hsl(var(--nav-theme-light))] text-white font-semibold hover:opacity-90 transition"
          >
            Explore Resources
          </Link>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href="/" className="text-[hsl(var(--nav-theme-light))] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
