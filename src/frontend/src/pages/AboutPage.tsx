import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Award, Target } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function AboutPage() {
  const knownFor = [
    'Translating business strategy into scalable analytics architectures',
    'Reducing report duplication, improving adoption, standardizing KPIs',
    'Building high-trust executive reporting foundations',
  ];

  return (
    <div className="w-full">
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            {/* Profile Image and Title */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="md:col-span-1">
                <div className="flex flex-col items-center">
                  <img
                    src="/assets/Imran Zahoor.png"
                    alt="Imran Zahoor - Professional Headshot"
                    className="rounded-full w-full max-w-[280px] aspect-square object-cover shadow-xl ring-4 ring-primary/10"
                  />
                  <div className="mt-6 space-y-3 text-center w-full">
                    <h1 className="text-2xl md:text-3xl font-bold">
                      Senior Business Intelligence and Analytics Leader
                    </h1>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      Islamabad, Pakistan
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                {/* Hero Introduction Text - Exactly as provided */}
                <div className="space-y-4 text-base md:text-lg">
                  <p className="font-semibold text-foreground">
                    I design analytics systems that executives trust.
                  </p>
                  <p className="text-muted-foreground">
                    I design governed Power BI semantic layers, KPI frameworks, and executive analytics that scale across regions and restore trust in metrics.
                  </p>
                  <p className="text-muted-foreground">
                    If you need analytics that reduce noise, improve adoption, and actually drive outcomes, let's talk.
                  </p>
                  <p>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      → Chat with me on WhatsApp
                    </a>
                  </p>
                </div>

                {/* Professional Overview */}
                <div className="pt-4">
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Professional Overview</h2>
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground">
                    <p>
                      With over 20 years of experience in Business Intelligence and Analytics, I specialize
                      in transforming fragmented reporting systems into governed, enterprise-scale analytics
                      platforms that leaders trust.
                    </p>
                    <p>
                      My expertise spans the complete BI lifecycle—from semantic layer architecture and KPI
                      standardization to executive dashboard design and performance optimization. I've
                      delivered enterprise solutions across 4 global regions, helping organizations reduce
                      report duplication, improve adoption, and build high-trust reporting foundations.
                    </p>
                    <p>
                      I bring deep technical proficiency in Power BI, Microsoft Fabric, DAX, and SQL,
                      combined with strategic leadership in BI governance and analytics transformation. My
                      approach focuses on translating business strategy into scalable analytics
                      architectures that drive measurable outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-5 w-5 md:h-6 md:w-6 mr-2 text-primary" />
                  <h2 className="text-xl md:text-2xl font-bold">Education</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">MBA in Information Technology</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Virtual University</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">BS in Computer Science</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Bahria University</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What I'm Known For */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-5 w-5 md:h-6 md:w-6 mr-2 text-primary" />
                  <h2 className="text-xl md:text-2xl font-bold">What I'm Known For</h2>
                </div>
                <div className="space-y-3">
                  {knownFor.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Award className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                      <p className="text-sm md:text-base text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Overview */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Core Competencies</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Power BI',
                    'Microsoft Fabric',
                    'DAX',
                    'SQL',
                    'Semantic Modeling',
                    'KPI Governance',
                    'Executive Dashboards',
                    'ETL Pipelines',
                    'Data Warehousing',
                    'Performance Tuning',
                    'BI Strategy',
                    'Analytics Leadership',
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs md:text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
