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
    <main className="min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Upcoming Events Section */}
      <Section title="Upcoming Events" className="pt-24 pb-16">
        <div className="space-y-16">
          {upcomingEvents.map((event) => (
            <Link href={event.link} key={event.year}>
              <Card className="group bg-black border border-amber-500/20 hover:border-amber-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-1/3 h-64 sm:h-auto">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-contain sm:object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex-1 p-6 sm:p-8 space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                        {event.title}
                      </h3>
                      <span className="px-4 py-1.5 bg-amber-500 text-black text-sm sm:text-base font-medium rounded-full animate-pulse">
                        {event.status}
                      </span>
                    </div>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{event.description}</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-300 text-base sm:text-lg">
                        <span className="text-amber-400">📅</span>
                        {event.date}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {event.highlights.map((highlight, index) => (
                          <span key={index} className="px-3 py-1.5 bg-amber-500/10 text-amber-300 text-sm sm:text-base rounded-md">
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
      <Section title="Past Events" className="pb-24">
        <div className="space-y-20">
          {pastEvents.map((event) => (
            <Link href={event.link} key={event.year}>
              <Card className="group bg-black border border-amber-500/20 hover:border-amber-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
                <div className="flex flex-col">
                  <div className="relative w-full h-64">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      sizes="100vw"
                    />
                  </div>
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                        {event.title}
                      </h3>
                      <span className="px-4 py-1.5 bg-gray-500/20 text-gray-300 text-sm sm:text-base font-medium rounded-full">
                        {event.status}
                      </span>
                    </div>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{event.description}</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-300 text-base sm:text-lg">
                        <span className="text-amber-400">📅</span>
                        {event.date}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {event.highlights.map((highlight, index) => (
                          <span key={index} className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm sm:text-base rounded-md">
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