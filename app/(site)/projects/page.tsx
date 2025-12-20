import { Reveal } from '../../../components/ui/Reveal';
import { getProjects } from '../../../lib/data';
import { ArrowRight } from 'lucide-react';

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <Reveal>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-12">Our Projects</h1>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Reveal
                        key={project.id}
                        delay={index * 100}
                        variant="slide-up"
                    >
                        <div className="group h-full flex flex-col cursor-pointer">
                            <div className="relative overflow-hidden bg-slate-200 aspect-video mb-6 rounded-sm">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                                <span className="absolute top-6 left-6 bg-white px-4 py-1 text-xs font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                                    {project.category}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm line-clamp-3 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-2 text-brand-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    View Case Study <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
