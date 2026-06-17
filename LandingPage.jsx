import { useNavigate } from "react-router-dom";
import { ArrowRight, Briefcase, Brain, GraduationCap } from "lucide-react";
import AuroraBackground from "../components/AuroraBackground";
import ParticleNetwork from "../components/ParticleNetwork";

export default function LandingPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Briefcase,
      title: "Career Guidance",
      description: "Get AI-powered recommendations tailored to your goals.",
    },
    {
      icon: Brain,
      title: "Skill Gap Analysis",
      description: "Discover which skills you need to reach your dream role.",
    },
    {
      icon: GraduationCap,
      title: "Learning Roadmaps",
      description: "Receive personalized learning plans and certifications.",
    },
  ];

  return (
    <div className=" relative min-h-screen bg-slate-950 text-white">
      <AuroraBackground />
      <ParticleNetwork />
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              Career<span className="text-indigo-400">AI</span>
            </h1>

            <div className="flex gap-4">
              <button
                className="text-slate-300 hover:text-white cursor-pointer"
                onClick={(e) => {
                  navigate("/login");
                }}
              >
                Login
              </button>

              <button
                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg cursor-pointer"
                onClick={(e) => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-indigo-500/10 text-indigo-300 px-4 py-2 text-sm border border-indigo-500/20">
              AI Powered Career Coaching
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
              Discover Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Career Potential
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
              Get personalized career advice, skill recommendations, learning
              roadmaps, and interview guidance powered by AI.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => navigate("/chat")}
                className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                Start Free
                <ArrowRight size={18} />
              </button>

              <button className="border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl">
                Learn More
              </button>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              No signup required • Limited Free AI career questions
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="
                  bg-slate-900
                  border border-slate-800
                  rounded-2xl
                  p-6
                  hover:border-indigo-500/50
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                    <Icon className="text-indigo-400" />
                  </div>

                  <h3 className="mt-4 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-slate-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
