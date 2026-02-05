import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, Lightbulb, Wrench, CheckCircle2 } from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Enterprise Semantic Layer Implementation',
      category: 'Data Modeling',
      image: '/assets/generated/powerbi-semantic-model.dim_800x500.jpg',
      context:
        'A mid-sized enterprise with 200+ Power BI users was struggling with duplicate data models, inconsistent metrics, and slow report performance across departments.',
      challenge:
        'Each department maintained separate data models with different calculations for the same KPIs, leading to conflicting reports and loss of trust in analytics.',
      approach: [
        'Conducted comprehensive audit of existing reports and data models',
        'Designed centralized semantic layer with reusable calculations',
        'Implemented star schema with optimized relationships',
        'Created standardized DAX measures library',
        'Established governance process for model changes',
      ],
      tools: ['Power BI', 'DAX', 'SQL Server', 'Azure', 'Git'],
      outcomes: [
        'Single source of truth for all enterprise metrics',
        '65% reduction in report development time',
        '70% improvement in dashboard load times',
        'Eliminated metric discrepancies across departments',
        'Reduced maintenance overhead by 50%',
      ],
    },
    {
      title: 'Executive Dashboard Suite for PMO',
      category: 'Executive Reporting',
      image: '/assets/generated/executive-dashboard.dim_1000x600.jpg',
      context:
        'Executive leadership lacked real-time visibility into project portfolio performance, resource utilization, and opportunity pipeline across the organization.',
      challenge:
        'Manual weekly reporting took 2 days to compile, data was outdated by the time it reached executives, and there was no drill-down capability for investigation.',
      approach: [
        'Collaborated with stakeholders to define critical KPIs',
        'Designed executive dashboard suite (PMO, Resources, Pipeline)',
        'Implemented automated data refresh from multiple sources',
        'Created drill-through capabilities for detailed analysis',
        'Optimized for mobile viewing for on-the-go access',
      ],
      tools: ['Power BI', 'DAX', 'Power Automate', 'Dynamics CRM', 'ServiceNow'],
      outcomes: [
        'Real-time visibility into portfolio health',
        'Eliminated 2-day manual reporting process',
        '90% executive adoption within first month',
        'Faster identification of at-risk projects',
        'Data-driven resource allocation decisions',
      ],
    },
    {
      title: 'KPI Standardization & Governance Framework',
      category: 'BI Governance',
      image: '/assets/generated/consultation-meeting.dim_800x500.jpg',
      context:
        'A growing organization with 4 business units had inconsistent KPI definitions, leading to conflicting reports and misaligned strategic decisions.',
      challenge:
        'Different departments calculated the same metrics differently, causing confusion in leadership meetings and undermining trust in analytics.',
      approach: [
        'Facilitated cross-functional workshops to align on KPI definitions',
        'Created enterprise data dictionary with standardized metrics',
        'Established BI governance committee and change process',
        'Implemented centralized KPI library in semantic layer',
        'Developed training program for business users',
      ],
      tools: ['Power BI', 'Excel', 'SharePoint', 'Power Automate'],
      outcomes: [
        'Unified KPI definitions across all business units',
        '100% alignment on critical business metrics',
        'Improved trust in analytics and reporting',
        'Reduced time spent reconciling conflicting reports',
        'Established sustainable governance framework',
      ],
    },
    {
      title: 'DAX Performance Optimization',
      category: 'Performance Tuning',
      image: '/assets/generated/bi-dashboard-hero.dim_1200x600.jpg',
      context:
        'Critical executive dashboards were taking 30-45 seconds to load, causing user frustration and low adoption rates.',
      challenge:
        'Complex DAX calculations, inefficient data model design, and lack of optimization best practices were causing severe performance issues.',
      approach: [
        'Analyzed DAX queries using Performance Analyzer',
        'Identified and refactored inefficient measures',
        'Optimized data model relationships and cardinality',
        'Implemented aggregation tables for large datasets',
        'Applied best practices for calculated columns vs measures',
      ],
      tools: ['Power BI', 'DAX Studio', 'Performance Analyzer', 'SQL Server'],
      outcomes: [
        '80% reduction in dashboard load times (5-8 seconds)',
        'Improved user satisfaction scores from 3.2 to 4.7/5',
        '40% increase in daily active users',
        'Reduced server resource consumption',
        'Established performance monitoring process',
      ],
    },
    {
      title: 'Reporting Automation & ETL Pipeline',
      category: 'Automation',
      image: '/assets/generated/data-network-bg.dim_1920x1080.jpg',
      context:
        'Finance team spent 15+ hours weekly manually extracting data from multiple systems and compiling reports in Excel.',
      challenge:
        'Manual processes were error-prone, time-consuming, and prevented the team from focusing on analysis and strategic work.',
      approach: [
        'Designed automated ETL pipeline to consolidate data sources',
        'Built Power BI reports replacing manual Excel workbooks',
        'Implemented scheduled refresh and email distribution',
        'Created data quality checks and alerting',
        'Trained users on self-service capabilities',
      ],
      tools: ['Power BI', 'SQL', 'Power Automate', 'Azure Data Factory', 'Excel'],
      outcomes: [
        'Eliminated 15 hours of manual work per week',
        'Reduced reporting errors by 95%',
        'Reports available by 8 AM daily vs. end of day',
        'Finance team refocused on strategic analysis',
        'Improved data accuracy and consistency',
      ],
    },
  ];

  return (
    <div className="w-full">
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Case Studies</h1>
            <p className="text-base md:text-xl text-muted-foreground">
              Real-world examples of enterprise BI transformations and measurable outcomes
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative h-48 md:h-auto min-h-[200px]">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="text-xs md:text-sm">{study.category}</Badge>
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <CardHeader className="p-4 md:p-6">
                      <CardTitle className="text-lg md:text-2xl">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6 pt-0">
                      <Tabs defaultValue="context" className="w-full">
                        <TabsList className="grid w-full grid-cols-4 h-auto">
                          <TabsTrigger value="context" className="text-xs md:text-sm px-2 py-2">
                            Context
                          </TabsTrigger>
                          <TabsTrigger value="approach" className="text-xs md:text-sm px-2 py-2">
                            Approach
                          </TabsTrigger>
                          <TabsTrigger value="tools" className="text-xs md:text-sm px-2 py-2">
                            Tools
                          </TabsTrigger>
                          <TabsTrigger value="outcomes" className="text-xs md:text-sm px-2 py-2">
                            Outcomes
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="context" className="space-y-4 mt-4">
                          <div className="flex items-start gap-3">
                            <Target className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold mb-2 text-sm md:text-base">Context</h4>
                              <p className="text-xs md:text-sm text-muted-foreground">{study.context}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Lightbulb className="h-4 w-4 md:h-5 md:w-5 text-destructive mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold mb-2 text-sm md:text-base">Challenge</h4>
                              <p className="text-xs md:text-sm text-muted-foreground">{study.challenge}</p>
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="approach" className="mt-4">
                          <div className="flex items-start gap-3">
                            <Wrench className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold mb-3 text-sm md:text-base">Approach</h4>
                              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                                {study.approach.map((item, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="tools" className="mt-4">
                          <div>
                            <h4 className="font-semibold mb-3 text-sm md:text-base">Tools & Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {study.tools.map((tool) => (
                                <Badge key={tool} variant="outline" className="text-xs">
                                  {tool}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="outcomes" className="mt-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-chart-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold mb-3 text-sm md:text-base">Outcomes</h4>
                              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                                {study.outcomes.map((outcome, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="mr-2 text-chart-2">✓</span>
                                    <span>{outcome}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
