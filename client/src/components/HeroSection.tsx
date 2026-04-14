import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  const heroUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663363714188/c3ePDXg76ZCD8dvQW7cGJv/hero-background-Bv4do74D9ZgR9XqsVJrDJ7.webp";
  const profileImageUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663363714188/c3ePDXg76ZCD8dvQW7cGJv/Screenshot_٢٠٢٥-٠٩-٢٠-١٥-٣٨-٢٨-٢٩_e4424258c8b8649f6e67d283a50a2cbc_ab831343.jpg";

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
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-6xl mx-auto">
          {/* Profile Image - Left Side */}
          <div className="flex-shrink-0 w-48 h-64 md:w-56 md:h-72">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                src={profileImageUrl}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl border-4 border-primary/20" />
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              I help transform ambiguous problems into clear, data-driven solutions
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-8 italic font-light leading-relaxed">
              By asking the right questions before building any model or writing any code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-blue-800 text-white px-8 py-3 text-base rounded-lg transition-all duration-300 hover:shadow-lg"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 text-base rounded-lg transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get in Touch
              </Button>
            </div>

            <div className="flex justify-start gap-4">
              <a
                href="https://github.com/mohamed8i69"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-riyad28/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:mohamedabdo2271@example.com"
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
