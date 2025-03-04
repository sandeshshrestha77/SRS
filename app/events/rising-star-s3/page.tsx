import { TrophyIcon, UserGroupIcon, PhotoIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import Card from '../../components/ui/Card';
import Image from 'next/image';

const eventDetails = {
  title: "Sikkim Rising Star Season 3",
  date: "March - June 2021",
  venue: "Manan Kendra, Gangtok",
  description: `Our third season saw Dream Band from Gangtok, Sikkim, emerge as the winner. This talented
singing band delivered outstanding performances, showcasing their musical prowess and
charisma on stage.`,
  statistics: [
    { label: "Participants", value: "1000+" },
    { label: "Live Audience", value: "5000+" },
    { label: "TV Viewers", value: "100K+" },
    { label: "Total Prize Pool", value: "₹2 Lakhs" }
  ],
  winners: [
    {
      position: "Winner",
      name: "The Dream band",
      category: "Singing",
      prize: "₹1,00,000",
      image: "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?auto=format&fit=crop&q=80&w=256&h=256"
    },
    {
      position: "1st Runner Up",
      name: "Sidhant Lama",
      category: "Mimicry",
      prize: "₹50,000",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=256&h=256"
    },
    {
      position: "2nd Runner Up",
      name: "Avinash Khati",
      category: "Singing",
      prize: "₹30,000",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=256&h=256"
    }
  ],
  highlights: [
    "Grand finale with celebrity performances",
    "Live television broadcast across Sikkim",
    "International guest judges",
    "Professional mentorship program"
  ],
  gallery: [
    {
      url: "/images/s3/1.jpg",
  
    },
    {
      url: "/images/s3/2.jpg",
    },
    {
      url: "/images/s3/3.jpg",
    },
    {
      url: "/images/s3/4.jpg",
    },
    {
      url: "/images/s3/5.jpg",
    },
    {
      url: "/images/s3/6.jpg",
    },
    {
      url: "/images/s3/7.jpg",
    },
    {
      url: "/images/s3/8.jpg",
    },
    {
      url: "/images/s3/9.jpg",
    },
    {
      url: "/images/s3/10.jpg",
    },
    {
      url: "/images/s3/11.jpg",
    },
    {
      url: "/images/s3/12.jpg",
    },
    {
      url: "/images/s3/13.jpg",
    },
    {
      url: "/images/s3/14.jpg",
    },
    {
      url: "/images/s3/15.jpg",
    },
    {
      url: "/images/s3/16.jpg",
    },
    {
      url: "/images/s3/17.jpg",
    },
    {
      url: "/images/s3/18.jpg",
    },
    {
      url: "/images/s3/19.jpg",
    },
    {
      url: "/images/s3/20.jpg",
    }
  ],
  mediaHighlights: [
    {
      title: "Record-Breaking Participation",
      source: "Sikkim Express",
      date: "June 20, 2023",
      link: "https://example.com/sikkim-express-2023" // Replace with actual URL
    },
    {
      title: "Rising Star Finale Creates History",
      source: "NOW News",
      date: "June 16, 2023",
      link: "https://example.com/now-news-2023" // Replace with actual URL
    }
  ]
};

export default function RisingStar2023() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative w-full h-[70vh] mb-16">
          <Image
            src="/images/s/3.jpg"
            alt="Rising Star S3"
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
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      alt={''}
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