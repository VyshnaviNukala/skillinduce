import { ProjectOverview } from '../components/projects/ProjectOverview';
import { PartnershipShowcase } from '../components/projects/PartnershipShowcase';

export default function Projects() {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Projects</h1>
          <p className="mt-4 text-xl text-gray-600">
            Delivering innovative solutions through collaboration and expertise
          </p>
        </div>
      </div>
      <ProjectOverview />
      <PartnershipShowcase />
    </div>
  );
}