
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Events | Sikkim Rising Star',
  description: 'Discover past and upcoming talent hunt competitions in Sikkim',
};

export default function EventsPage() {
  const events = [
    {
      year: "2025",
      title: "Rising Star Season 4",
      status: "Upcoming",
      description: "The biggest talent hunt competition yet, featuring international judges and live streaming.",
      link: "/events/rising-star-s4",
      image: "/images/s/4.jpg",
      date: "June 30, 2025",
      highlights: ["International Judges", "Live Streaming", "₹10L Prize Pool"]
    },
    {
      year: "2021",
      title: "Rising Star Season 3",
      status: "Completed",
description: "Our third season saw Dream Band from Gangtok, Sikkim, emerge as the winner. This talented singing band delivered outstanding performances, showcasing their musical prowess and charisma on stage.",
      link: "/events/rising-star-s3",
      image: "/images/s/3.jpg",
      date: "June 25, 2021",
      highlights: ["500+ Participants", "National Coverage", "Celebrity Performances"]
    },
    {
      year: "2019",
      title: "Rising Star Season 2",
      status: "Completed",
description: "In our second season, Dynamic Flickers Dance Studio from Ranipool, Sikkim, took home the top prize. This talented dance group showcased their impressive moves and energetic performances, winning over the hearts of our audience.",
      link: "/events/rising-star-s2",
      image: "/images/s/2.jpg",
      date: "June 20, 2019",
      highlights: ["300+ Participants", "Regional Finals", "Media Coverage"]
    },
    {
      year: "2018",
      title: "Rising Star Season 1",
      status: "Completed",
description: "Our inaugural season crowned Ocean Rai from Singtam, Sikkim, as the winner. Ocean, a talented solo singer from a singing background, impressed our judges and audience with his soulful voice.",
      link: "/events/rising-star-s1",
      image: "/images/s/1.jpg",
      date: "Sep 2018",
      highlights: ["Digital Format", "200+ Participants", "Online Voting"]
    }
  ];

  const upcomingEvents = events.filter(event => event.status === "Upcoming");
  const pastEvents = events.filter(event => event.status === "Completed");

  return (
    <main className="min-h-screen">
      {/* Upcoming Events Section */}
      <Section title="Upcoming Events" className="pt-32 pb-16">
        <div className="grid grid-cols-1 gap-8">
          {upcomingEvents.map((event) => (
            <Link href={event.link} key={event.year}>
              <Card className="group hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-amber-950/80 via-black to-black border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/20 scale-[1.02]">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-2/5 h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {event.title}
                      </h3>
                      <span className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold animate-pulse">
                        {event.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6">{event.description}</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="text-amber-400">📅</span>
                        {event.date}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {event.highlights.map((highlight, index) => (
                          <span key={index} className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Past Events Section */}
      <Section title="Past Events" className="pb-32">
        <div className="grid grid-cols-1 gap-8">
          {pastEvents.map((event) => (
            <Link href={event.link} key={event.year}>
              <Card className="group hover:border-amber-500/30 transition-colors duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-2/5 h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {event.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-sm bg-gray-500/20 text-gray-300">
                        {event.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6">{event.description}</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="text-amber-400">📅</span>
                        {event.date}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {event.highlights.map((highlight, index) => (
                          <span key={index} className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
