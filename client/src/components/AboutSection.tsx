export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">
            About Me
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="italic text-gray-600">
              I help transform ambiguous problems into clear, data-driven solutions
              by asking the right questions before building any model or writing any
              code.
            </p>

            <p>
              Through a strong academic foundation in Artificial Intelligence,
              hands-on training with the Digital Egypt Pioneers Initiative (DEPI),
              and rigorous problem-solving experience from ICPC university training,
              I approach data challenges with structure, logic, and purpose.
            </p>

            <p>
              By deeply understanding the problem, defining the correct assumptions,
              and translating unclear requirements into precise analytical questions,
              I deliver well-organized, efficient data analyses and machine learning
              solutions that solve the core problem not just its symptoms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
