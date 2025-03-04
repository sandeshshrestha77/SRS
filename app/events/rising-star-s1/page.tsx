import { TrophyIcon, UserGroupIcon, PhotoIcon } from '@heroicons/react/24/outline';
import Card from '../../components/ui/Card';
import Image from 'next/image';

const eventDetails = {
  title: "Sikkim Rising Star season 1",
  date: "Aug - Sep 2018",
  venue: "Manan Kendra, Gangtok",
description:
  "Our inaugural season crowned Ocean Rai from Singtam, Sikkim, as the winner. Ocean, a " +
  "talented solo singer from a singing background, impressed our judges and audience with his " +
  "soulful voice.",
  statistics: [
    { label: "Participants", value: "250+" },
    { label: "Live Audience", value: "500+" },
    { label: "Online Views", value: "75K+" },
    { label: "Total Prize Pool", value: "₹10 Thousand" }
  ],
  winners: [
    {
      position: "Winner",
      name: "Ocean Rai",
      category: "Singing",
      prize: "₹10,000",
      image: "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?auto=format&fit=crop&q=80&w=256&h=256"
    },
    {
      position: "1st Runner Up",
      name: "Rojan Limbu",
      category: "Dance",
      prize: "₹5,000",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=256&h=256"
    },
    {
      position: "2nd Runner Up",
      name: "Laxmi Siwakoti",
      category: "Singing",
      prize: "₹2,500",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=256&h=256"
    }
  ],
  highlights: [
    "First-ever live streaming of the competition",
    "International jury panel",
    "District-level auditions",
    "Collaboration with national media"
  ],
  gallery: [
    { url: "/public/images/s1/1.jpg" },
    { url: "/images/s1/2.jpg" },
    { url: "/images/s1/3.jpg" },
    { url: "/images/s1/4.jpg" },
    { url: "/images/s1/5.jpg" },
    { url: "/images/s1/6.jpg" },
    { url: "/images/s1/7.jpg" },
    { url: "/images/s1/8.jpg" }
  ]
};

export default function RisingStar2021() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative w-full h-[70vh] mb-16">
          <Image
            src="/images/s/1.jpg"
            alt="Rising Star 2021"
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
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500" />
            </h2>

            <Card className="p-8">
              <p className="text-gray-300 leading-relaxed mb-8">{eventDetails.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {eventDetails.statistics.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-amber-500 mb-2">{stat.value}</div>
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
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500" />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eventDetails.winners.map((winner) => (
                <Card key={winner.name} className="p-6 group">
                  <div className="flex items-start justify-between mb-6">
                    <TrophyIcon className="w-8 h-8 text-amber-400" />
                    <span className="text-amber-500 font-display font-bold">{winner.position}</span>
                  </div>

                  <div className="mb-6 flex justify-center">
                    <Image
                      src={winner.image}
                      alt={winner.name}
                      className="w-24 h-24 rounded-full border-2 border-amber-500 object-cover"
                      width={96}
                      height={96}
                    />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-amber-400 transition-colors text-center">
                    {winner.name}
                  </h3>
                  <div className="text-amber-400 text-sm font-medium mb-2 text-center">{winner.category}</div>
                  <div className="text-lg font-bold text-amber-500 mb-3 text-center">{winner.prize}</div>
                </Card>
              ))}
            </div>
          </section>
          {/* Event Highlights */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
              <span>Event Highlights</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500" />
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
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500" />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventDetails.gallery.map((photo) => (
                <Card key={photo.url} className="overflow-hidden group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photo.url}
                      alt="Event photo"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
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