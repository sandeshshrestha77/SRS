import Section from '../ui/Section';
import Card from '../ui/Card';
import { StarIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <Section title="About the Competition" className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 backdrop-blur-md group">
          <div className="mb-6">
            <div className="text-4xl group-hover:scale-110 transition-transform">✨</div>
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-4">Our Legacy</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Sikkim Rising Star is the premier talent hunt competition in Sikkim, established in 2018. Our mission is to discover and nurture exceptional talents across various performing arts disciplines.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Over the years, we have launched numerous successful careers and provided a platform for artists to showcase their abilities to a wider audience.
          </p>
        </Card>
        
        <Card className="p-8 backdrop-blur-md group">
          <div className="mb-6">
            <div className="text-4xl group-hover:scale-110 transition-transform">🌟</div>
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-4">Our Impact</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Over 1000+ participants since inception</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Talent Platform - A stage for aspiring artists</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Empowering Artists – Helping talents grow</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Opportunities – Cash prizes, media exposure, and career boosts</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Community Engagement – Connecting artists, sponsors, and audiences</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Continuous Growth – Expanding reach every season</span>
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}