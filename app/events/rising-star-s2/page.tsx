import { TrophyIcon, UserGroupIcon, PhotoIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import Card from '../../components/ui/Card';
import Image from 'next/image';

const eventDetails = {
  title: "Sikkim Rising Star Season 2",
  date: "July - Nov 2019",
  venue: "Manan Kendra, Gangtok",
  description: `In our second season, Dynamic Flickers Dance Studio from Ranipool, Sikkim, took home the top
prize. This talented dance group showcased their impressive moves and energetic
performances, winning over the hearts of our audience.`,
  statistics: [
    { label: "Participants", value: "500+" },
    { label: "Live Audience", value: "3000+" },
    { label: "Online Views", value: "75K+" },
    { label: "Total Prize Pool", value: "₹1.5 Lakhs" }
  ],
  winners: [
    {
      position: "Winner",
      name: "Dynamic Flicker",
      category: "Dancing",
      prize: "₹80,000",
      image: "/images/s2/w1.png"
    },
    {
      position: "1st Runner Up",
      name: "Ugen Bhutia",
      category: "Singing",
      prize: "₹40,000",
      image: "/images/s2/w2.png"
    },
    {
      position: "2nd Runner Up",
      name: "Rohit Rai",
      category: "Dancing",
      prize: "₹20,000",
      image: "/images/s2/w3.png"
    }
  ],
  highlights: [
    "First-ever live streaming of the competition",
    "International jury panel",
    "District-level auditions",
    "Collaboration with national media"
  ],
  gallery: [
    { url: "/images/s2/1.jpg" },
    { url: "/images/s2/2.jpg" },
    { url: "/images/s2/3.jpg" },
    { url: "/images/s2/4.jpg" },
    { url: "/images/s2/5.jpg" },
    { url: "/images/s2/6.jpg" },
    { url: "/images/s2/7.jpg" },
    { url: "/images/s2/8.jpg" },
    { url: "/images/s2/9.jpg" },
    { url: "/images/s2/10.jpg" }
  ],
  mediaHighlights: [
    {
      title: "Dynamic Flickers wins Sikkim Rising Star ",
      source: "Sikkim Chronicle",
      date: "November 24, 2019",
      link: "https://www.facebook.com/share/p/12Cg8zdYe2Z/"
    },
    {
      title: "Sikkim Rising Star Season 2 is coming to Gangtok",
      source: "Sikkim Chronicle",
      date: "September 10, 2019",
      link: "https://www.facebook.com/share/p/1BomPHwv6t/"
    },
    {
      title: "Dynamic Flickers wins Sikkim Rising Star 2",
      source: "Sikkim Chronicle",
      date: "November 25, 2019",
      link: "https://www.facebook.com/share/v/14rEBeXKaM/"
    },
    {
      title: "Dynamic Flickers wins Sikkim Rising Star 2",
      source: "OMG Zindagi",
      date: "November 25, 2019",
      link: "https://www.facebook.com/share/p/1KJKsaaQun/"
    }
  ]
};

export default function RisingStar2022() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative w-full h-[70vh] mb-16">
          <Image
            src="/images/s/2.jpg"
            alt="Rising Star Season 2"
            className="object-cover"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-white mb-4 font-display tracking-tight">{eventDetails.title}</h1>
                <div className="flex items-center gap-4 text-gray-300">
                  <span>{eventDetails.date}</span>
                  <span>•</span>
                  <span>{eventDetails.venue}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {/* Overview */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
              <span>Event Overview</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500/50" />
            </h2>

            <Card className="p-8">
              <p className="text-gray-300 leading-relaxed mb-8">{eventDetails.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {eventDetails.statistics.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Winners */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
              <span>Winners</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500/50" />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eventDetails.winners.map((winner) => (
                <Card key={winner.name} className="p-6 group">
                  <div className="flex items-start justify-between mb-6">
                    <TrophyIcon className="w-8 h-8 text-amber-400" />
                    <span className="gradient-text font-display font-bold">{winner.position}</span>
                  </div>

                  <div className="mb-6 flex justify-center">
                    <Image
                      src={winner.image}
                      alt={winner.name}
                      width={96}
                      height={96}
                      className="rounded-full border-2 border-amber-500/20 object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-amber-400 transition-colors text-center">
                    {winner.name}
                  </h3>
                  <div className="text-amber-400 text-sm font-medium mb-2 text-center">{winner.category}</div>
                  <div className="text-lg font-bold gradient-text mb-3 text-center">{winner.prize}</div>
                </Card>
              ))}
            </div>
          </section>

          {/* Event Highlights */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
              <span>Event Highlights</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500/50" />
            </h2>

            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {eventDetails.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Photo Gallery */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
              <span>Photo Gallery</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500/50" />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventDetails.gallery.map((photo) => (
                <Card key={photo.url} className="overflow-hidden group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photo.url}
                      alt="Event photo"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Media Coverage */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
              <span>Media Coverage</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500/50" />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventDetails.mediaHighlights.map((media) => (
                <Card key={media.title} className="p-6">
                  <div className="flex items-start gap-4">
                    <NewspaperIcon className="w-8 h-8 text-amber-400 shrink-0" />
                    <div>
                      <a 
                        href={media.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-white mb-2 hover:text-amber-400 transition-colors"
                      >
                        {media.title}
                      </a>
                      <div className="text-sm text-gray-300">
                        {media.source} • {media.date}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}