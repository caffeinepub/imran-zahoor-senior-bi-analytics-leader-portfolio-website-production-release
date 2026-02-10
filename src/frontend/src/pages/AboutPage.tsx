import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Award, TrendingUp } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function AboutPage() {
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
                    src="/assets/Portfolio Profile-cropped - Chatgpt - modified.png"
                    alt="Imran Zahoor - Professional Headshot"
                    className="rounded-full w-full max-w-[280px] aspect-square object-cover shadow-xl ring-4 ring-primary/10"
                  />
                  <div className="mt-3 space-y-1.5 text-center w-full">
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
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-5 w-5 md:h-6 md:w-6 mr-2 text-primary" />
                    <h2 className="text-xl md:text-2xl font-bold">Professional Overview</h2>
                  </div>
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

            {/* Selected Impact Snapshot */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold">Selected Impact Snapshot</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-2">Situation</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Leadership teams were relying on fragmented dashboards, inconsistent KPIs, and manually compiled reports—slowing decision-making and reducing trust in analytics.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-2">What I Delivered</h3>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground list-disc list-inside">
                    <li>Designed governed semantic models and standardized KPI frameworks</li>
                    <li>Built executive and operational dashboards aligned to decision needs</li>
                    <li>Automated recurring reporting and optimized performance at the model level</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-2">Measurable Impact</h3>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground list-disc list-inside">
                    <li>40% reduction in report duplication</li>
                    <li>40–50% reduction in manual reporting effort</li>
                    <li>30% improvement in dashboard performance</li>
                    <li>95%+ data accuracy across enterprise reporting</li>
                    <li>Reporting cycles reduced from days to minutes</li>
                  </ul>
                </div>

                <p className="text-sm md:text-base text-muted-foreground italic">
                  This snapshot represents the typical approach and outcomes of my BI and analytics engagements.
                </p>
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

            {/* Certifications */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-5 w-5 md:h-6 md:w-6 mr-2 text-primary" />
                  <h2 className="text-xl md:text-2xl font-bold">Certifications</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                    <p className="text-sm md:text-base text-muted-foreground">
                      Microsoft Certified: Fabric Analytics Engineer Associate
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Award className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                    <p className="text-sm md:text-base text-muted-foreground">
                      Microsoft Certified: Power BI Data Analyst
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Award className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                    <p className="text-sm md:text-base text-muted-foreground">
                      Business Analytics Certification (Professional Training using Excel, SQL, Tableau)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
