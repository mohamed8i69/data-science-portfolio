import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  const heroUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663363714188/c3ePDXg76ZCD8dvQW7cGJv/hero-background-Bv4do74D9ZgR9XqsVJrDJ7.webp";
  const profileImageUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663363714188/c3ePDXg76ZCD8dvQW7cGJv/Screenshot_e4424258c8b8649f6e67d283a50a2cbc_a0108d8f.jpg";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                src={profileImageUrl}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl border-4 border-primary/20" />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left order-1 md:order-2">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Data Science Portfolio
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
              Transforming data into actionable insights through machine learning
              and advanced analytics
            </p>

            <p className="text-lg text-gray-500 mb-12">
              Specialized in predictive modeling, NLP, time series forecasting,
              and data visualization. Passionate about solving real-world problems
              with data-driven solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-blue-800 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg rounded-lg transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get in Touch
              </Button>
            </div>

            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
