import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Database, BarChart3, Target, Zap } from 'lucide-react';
import WhatsAppCTAButton from '@/components/WhatsAppCTAButton';

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: 'BI Strategy & Analytics Governance',
      problems: [
        'Fragmented reporting across departments',
        'Inconsistent KPIs and metrics',
        'Low user adoption of analytics tools',
        'Lack of data governance framework',
      ],
      deliverables: [
        'Enterprise BI roadmap and governance framework',
        'KPI standardization and data dictionary',
        'User adoption and training strategy',
        'Data quality and security policies',
      ],
      outcomes: [
        'Unified analytics vision across organization',
        'Improved data trust and decision confidence',
        'Reduced redundancy and maintenance costs',
      ],
    },
    {
      icon: Database,
      title: 'Semantic Layer & Enterprise Data Modeling',
      problems: [
        'Duplicate data models across reports',
        'Complex DAX calculations repeated everywhere',
        'Slow report performance',
        'Difficulty maintaining consistency',
      ],
      deliverables: [
        'Centralized semantic layer architecture',
        'Reusable data models and calculations',
        'Optimized star schema design',
        'Documentation and best practices',
      ],
      outcomes: [
        'Single source of truth for analytics',
        '50-70% reduction in development time',
        'Consistent metrics across all reports',
      ],
    },
    {
      icon: BarChart3,
      title: 'Power BI & Microsoft Fabric Analytics Solutions',
      problems: [
        'Legacy reporting systems',
        'Manual data extraction and reporting',
        'Limited self-service capabilities',
        'Disconnected data sources',
      ],
      deliverables: [
        'End-to-end Power BI implementation',
        'Microsoft Fabric integration',
        'Automated data pipelines',
        'Interactive dashboards and reports',
      ],
      outcomes: [
        'Real-time insights for decision makers',
        'Automated reporting workflows',
        'Empowered business users',
      ],
    },
    {
      icon: Target,
      title: 'KPI Frameworks & Executive Dashboards',
      problems: [
        'Executives lack visibility into key metrics',
        'Inconsistent performance tracking',
        'Time-consuming manual reporting',
        'Misaligned departmental goals',
      ],
      deliverables: [
        'Executive dashboard suite (PMO, Resource, Pipeline)',
        'Standardized KPI framework',
        'Drill-down and filtering capabilities',
        'Mobile-optimized views',
      ],
      outcomes: [
        'Leadership has real-time performance visibility',
        'Aligned organizational metrics',
        'Data-driven strategic decisions',
      ],
    },
    {
      icon: Zap,
      title: 'Reporting Automation & Performance Optimization',
      problems: [
        'Slow-loading reports and dashboards',
        'Manual data refresh processes',
        'Complex DAX causing performance issues',
        'User complaints about system speed',
      ],
      deliverables: [
        'DAX optimization and query tuning',
        'Automated refresh schedules',
        'Performance monitoring framework',
        'Best practice implementation',
      ],
      outcomes: [
        '60-80% improvement in report load times',
        'Automated daily/weekly reporting',
        'Enhanced user experience and satisfaction',
      ],
    },
  ];

  return (
    <div className="w-full">
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Services</h1>
            <p className="text-base md:text-xl text-muted-foreground">
              Enterprise-grade BI and analytics solutions tailored to your organization's needs
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg md:text-2xl mb-2">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 p-4 md:p-6 pt-0">
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-[#22D3EE] text-sm md:text-base">Problems Solved</h3>
                      <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                        {service.problems.map((problem, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-primary text-sm md:text-base">Deliverables</h3>
                      <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                        {service.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-chart-2 text-sm md:text-base">Outcomes</h3>
                      <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                        {service.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12 md:mt-16 text-center">
            <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
              <CardContent className="p-6 md:p-8 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold">Ready to Get Started?</h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Let's discuss how these services can transform your analytics capabilities
                </p>
                <WhatsAppCTAButton className="h-12 md:h-14" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
