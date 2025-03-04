import { CheckIcon, StarIcon, UsersIcon, TrophyIcon, SparklesIcon, HeartIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const stats = [
  { label: "Participants", value: "1000+", icon: UsersIcon },
  { label: "Success Stories", value: "30+", icon: StarIcon },
  { label: "Years", value: "5+", icon: TrophyIcon },
  { label: "Annual Viewers", value: "100K+", icon: SparklesIcon }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full blur-3xl -z-10" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-display tracking-tight">
            Sikkim Rising Star
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Since 2018, we have been illuminating the talents of Sikkim and beyond, creating a stage where dreams transform into achievements.
          </p>
        </div>

        {/* Stats Section */}
        <Section className="mb-20" title={''}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={stat.label} 
                  className="p-6 text-center group hover:scale-105 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </Section>

        {/* What We Do Section */}
        <Section title="What We Do" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Talent Hunt Competitions", 
                desc: "We organize annual talent hunt competitions that provide a platform for singers, dancers, musicians, and other performers to showcase their talents.", 
                icon: TrophyIcon 
              },
              { 
                title: "Promote Artistic Expression", 
                desc: "Our events are designed to promote artistic expression, encouraging creativity and innovation among participants.", 
                icon: SparklesIcon 
              },
              { 
                title: "Community Development", 
                desc: "We foster community development and social cohesion by bringing people together through the celebration of talent.", 
                icon: UsersIcon 
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-6 backdrop-blur-md">
                  <Icon className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </Section>

        {/* Mission & Values */}
        <Section title="Our Purpose" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
                <HeartIcon className="w-6 h-6 text-amber-400" /> Mission
              </h3>
              <p className="text-gray-300 mb-5">
                To empower aspiring talents by providing a transformative platform that nurtures creativity and opens doors to success.
              </p>
              <ul className="space-y-4 text-gray-300">
                {[
                  "Uncover hidden potential",
                  "Foster professional growth",
                  "Bridge talent to opportunity",
                  "Celebrate regional diversity"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-amber-400 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-5">Core Values</h3>
              <div className="space-y-5 text-gray-300">
                {[
                  { title: "Passion", desc: "Fueling dreams with dedication" },
                  { title: "Inclusivity", desc: "Embracing all forms of talent" },
                  { title: "Excellence", desc: "Striving for the highest quality" },
                  { title: "Impact", desc: "Creating lasting change" }
                ].map((value) => (
                  <div key={value.title} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">{value.title}</h4>
                      <p>{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        {/* Why Sponsor Us */}
        <Section title="Why Sponsor Us" className="mb-20">
          <Card className="p-8 backdrop-blur-md">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
                <CurrencyDollarIcon className="w-6 h-6 text-amber-400" /> Why Sponsor Sikkim Rising Star?
              </h3>
              <p className="text-gray-300 mb-5">
                Sponsorship goes beyond just advertising—it’s about creating memorable brand experiences. Here’s why partnering with Sikkim Rising Star Season 4 is a strategic and highly rewarding investment:
              </p>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">1. Reach a Massive Audience</h4>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-amber-400 mt-1" /> Over 1,000 contestants are participating from various locations.</li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-amber-400 mt-1" /> 50,000+ attendees are expected at the grand finale.</li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-amber-400 mt-1" /> Live-streamed event with an extended online audience of over 100,000 viewers.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">2. Engage with a Targeted Demographic</h4>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-amber-400 mt-1" /> Reach youth, families, professionals, and influencers from Sikkim, Darjeeling, Siliguri, and Nepal.</li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-amber-400 mt-1" /> Perfect for brands targeting music lovers, entertainment enthusiasts, lifestyle consumers, and students.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">3. Extensive Branding & Exposure</h4>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-amber-400 mt-1" /> Logo Placement: Featured on all event materials (banners, posters, tickets, and promotional merchandise).</li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-amber-400 mt-1" /> Stage Branding: Large LED screen displays, digital banners, and backdrop branding at the grand finale.</li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-amber-400 mt-1" /> Social media presence: sponsored posts, influencer collaborations, and brand shoutouts.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">4. Association with a High-Value Event</h4>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-amber-400 mt-1" /> The presence of Nepathya, a top-tier band, attracts a larger crowd and media attention.</li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-amber-400 mt-1" /> Strengthen your brand’s credibility by aligning with talent development and community engagement.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">5. Measurable ROI & Lead Generation</h4>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-amber-400 mt-1" /> On-site product activations and sampling opportunities.</li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-amber-400 mt-1" /> Exclusive stalls to showcase and sell products and services.</li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-amber-400 mt-1" /> Custom analytics report on audience engagement, footfall, and campaign impact.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </Section>

        {/* Journey Timeline */}
        <Section title="Our Milestone Journey" className="mb-20">
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-amber-500/20" />
            {[
              { year: "2018", title: "Foundation", desc: "Started with 100 local talents" },
              { year: "2019", title: "Digital Leap", desc: "Introduced online auditions" },
              { year: "2021", title: "Breakthrough", desc: "Gained national spotlight" },
              { year: "2025", title: "Global Vision", desc: "Expanding worldwide" }
            ].map((milestone, index) => (
              <Card 
                key={milestone.year} 
                className={`p-6 mb-5 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} backdrop-blur-md`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="text-amber-400 font-bold">{milestone.year}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}