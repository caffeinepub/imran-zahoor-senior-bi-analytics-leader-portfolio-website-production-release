import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, TrendingUp, Target, Zap, BarChart3, Users, CheckCircle2 } from 'lucide-react';

export default function ImpactPage() {
  const impactSections = [
    {
      icon: Target,
      title: 'Enterprise BI Architecture & Governance',
      description: [
        'Designed scalable semantic layers and data models serving 200+ users across multiple business units',
        'Established KPI governance frameworks ensuring consistency and trust in enterprise metrics',
        'Implemented data quality monitoring and validation processes for mission-critical reporting',
      ],
      impact: [
        '40% reduction in report duplication',
        '20+ KPIs standardized',
        '95%+ data accuracy',
      ],
    },
    {
      icon: BarChart3,
      title: 'Executive & Operational Dashboards',
      description: [
        'Delivered executive dashboard suites (PMO, Resource Utilization, Opportunity Pipeline, Project Status)',
        'Built real-time operational dashboards enabling data-driven decision-making at all levels',
        'Created self-service analytics platforms empowering business users with trusted insights',
      ],
      impact: [
        'Stakeholders supported across 4 global regions',
        '40% reduction in IT dependency',
        '35% reduction in ad-hoc reporting',
      ],
    },
    {
      icon: Zap,
      title: 'Performance Optimization & Scalability',
      description: [
        'Optimized DAX queries and data models achieving significant performance improvements',
        'Tuned semantic layers and refresh schedules for enterprise-scale analytics workloads',
        'Implemented best practices for Power BI and Microsoft Fabric deployments',
      ],
      impact: [
        '30% performance improvement',
        '18% annual cost reduction',
        'Scalable architecture supporting growing data volumes',
      ],
    },
    {
      icon: CheckCircle2,
      title: 'KPI Frameworks & Business Visibility',
      description: [
        'Standardized KPIs across business units ensuring alignment with strategic objectives',
        'Translated complex business requirements into measurable analytics solutions',
        'Built executive reporting foundations that leaders trust for critical decisions',
      ],
      impact: [
        '20+ KPIs standardized',
        '95%+ data accuracy',
        'Trusted metrics across all organizational levels',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Automation & Operational Efficiency',
      description: [
        'Automated 50+ manual reporting processes reducing operational overhead',
        'Built ETL pipelines and data integration workflows for seamless data flow',
        'Implemented Power Automate solutions for report distribution and notifications',
      ],
      impact: [
        '50+ automated reporting pipelines',
        '40% reduction in manual reporting effort',
        '15+ hours/month saved per business unit',
      ],
    },
    {
      icon: Users,
      title: 'Analytics Enablement & Adoption',
      description: [
        'Trained business users on self-service analytics and best practices',
        'Mentored analytics teams on advanced DAX, data modeling, and governance',
        'Established centers of excellence for BI and analytics capabilities',
      ],
      impact: [
        '40% reduction in IT dependency',
        'Increased user adoption and self-sufficiency',
        'Sustainable analytics culture across the organization',
      ],
    },
  ];

  const organizationalBenefits = [
    {
      title: 'Faster Decisions',
      description: 'Real-time insights and automated reporting enable rapid, data-driven decision-making',
    },
    {
      title: 'Trusted Metrics',
      description: 'Standardized KPIs and governed data ensure confidence in analytics across all levels',
    },
    {
      title: 'Scalable Analytics',
      description: 'Enterprise-grade architecture that grows with your business needs and data volumes',
    },
    {
      title: 'Reduced Reporting Overhead',
      description: 'Automation and self-service capabilities free up resources for strategic initiatives',
    },
  ];

  return (
    <div className="w-full">
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Executive Impact Summary</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Delivering enterprise BI and analytics solutions that transform fragmented reporting into trusted, 
              governed platforms. Proven track record of building scalable architectures, standardizing KPIs, 
              and enabling executive-level insights that drive strategic outcomes.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8 mb-16">
            {impactSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-4">{section.title}</CardTitle>
                        <ul className="space-y-2 text-muted-foreground">
                          {section.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Impact</h4>
                      <div className="flex flex-wrap gap-2">
                        {section.impact.map((metric, i) => (
                          <Badge key={i} variant="secondary" className="text-sm px-3 py-1">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-card/50 border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-center">What This Means for Your Organization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {organizationalBenefits.map((benefit, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-semibold text-lg flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground pl-7">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <a
                href="https://calendar.app.google/fGD66tDixGBgL5oK7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book a Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
