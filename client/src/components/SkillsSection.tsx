import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "R", level: 75 },
      { name: "JavaScript/TypeScript", level: 70 },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Supervised Learning", level: 90 },
      { name: "Unsupervised Learning", level: 85 },
      { name: "Deep Learning", level: 80 },
      { name: "NLP", level: 80 },
    ],
  },
  {
    category: "Data & Visualization",
    skills: [
      { name: "Data Analysis", level: 95 },
      { name: "Data Visualization", level: 90 },
      { name: "Statistical Analysis", level: 85 },
      { name: "ETL & Data Wrangling", level: 85 },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Pandas & NumPy", level: 95 },
      { name: "Scikit-learn", level: 90 },
      { name: "TensorFlow/PyTorch", level: 80 },
      { name: "AWS & Cloud", level: 75 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663363714188/c3ePDXg76ZCD8dvQW7cGJv/skills-background-DqdbDwJTY6HcoSDHv7Pf53.webp)",
      }}
    >
      <div className="absolute inset-0 bg-white/85" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels across different domains of data science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card
              key={category.category}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="bg-gradient-to-r from-primary/10 to-orange-50">
                <CardTitle className="text-primary text-xl">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-primary to-blue-600 h-full rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Projects Completed", value: "15+" },
            { label: "Years Experience", value: "5+" },
            { label: "Models Deployed", value: "20+" },
            { label: "Data Points Analyzed", value: "1M+" },
          ].map((stat) => (
            <Card
              key={stat.label}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary/5"
            >
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
