import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  links: { github?: string; demo?: string };
}

const projects: Project[] = [
  {
    id: "1",
    title: "Customer Churn Prediction",
    description:
      "Machine learning model to predict customer churn using XGBoost and ensemble methods. Achieved 87.3% accuracy in identifying at-risk customers.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363714188/c3ePDXg76ZCD8dvQW7cGJv/project-1-churn-YtDL6GLVGhCdTF87W58sVG.webp",
    tags: ["Machine Learning", "Python", "XGBoost", "Pandas"],
    metrics: [
      { label: "Accuracy", value: "87.3%" },
      { label: "AUC Score", value: "0.92" },
      { label: "Data Points", value: "50K+" },
    ],
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
  },
  {
    id: "2",
    title: "Social Media Sentiment Analysis",
    description:
      "NLP-based sentiment analysis using BERT and Transformers. Analyzed 50,000+ tweets to identify sentiment trends and key topics.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363714188/c3ePDXg76ZCD8dvQW7cGJv/project-2-sentiment-i8AKrkCfEeQHt8VHzvPUHQ.webp",
    tags: ["NLP", "BERT", "Transformers", "Python"],
    metrics: [
      { label: "Accuracy", value: "91.2%" },
      { label: "Tweets Analyzed", value: "50K+" },
      { label: "Topics Found", value: "5" },
    ],
    links: {
      github: "https://github.com",
    },
  },
  {
    id: "3",
    title: "Air Quality Index Forecasting",
    description:
      "Time series forecasting using LSTM and Prophet models. Predicted AQI for 30 days with RMSE of 8.5.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663363714188/c3ePDXg76ZCD8dvQW7cGJv/project-3-timeseries-8PAtYoJBxeEvRR9bTR3jd6.webp",
    tags: ["Time Series", "LSTM", "Prophet", "Python"],
    metrics: [
      { label: "RMSE", value: "8.5" },
      { label: "MAPE", value: "12.3%" },
      { label: "Forecast Days", value: "30" },
    ],
    links: {
      github: "https://github.com",
    },
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of my recent data science projects showcasing machine
            learning, NLP, and data visualization expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-primary">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
