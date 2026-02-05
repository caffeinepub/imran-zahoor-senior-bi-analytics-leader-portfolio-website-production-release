import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Code, Database, BarChart3, Cpu, GitBranch } from 'lucide-react';

export default function CertificationsPage() {
  const certifications = [
    {
      title: 'Microsoft Certified: Fabric Analytics Engineer Associate',
      issuer: 'Microsoft',
      icon: Award,
      color: 'text-chart-1',
    },
    {
      title: 'Microsoft Certified: Power BI Data Analyst',
      issuer: 'Microsoft',
      icon: BarChart3,
      color: 'text-chart-2',
    },
    {
      title: 'Microsoft Certified: Technology Specialist - CRM Application',
      issuer: 'Microsoft',
      icon: Award,
      color: 'text-chart-3',
    },
    {
      title: 'Microsoft Certified: Technology Specialist - CRM Deployment 2013',
      issuer: 'Microsoft',
      icon: Award,
      color: 'text-chart-4',
    },
    {
      title: 'Business Analytics Certification',
      issuer: 'Professional Training',
      description: 'Excel, SQL, Tableau',
      icon: Database,
      color: 'text-chart-5',
    },
    {
      title: 'PIAIC AI Certification',
      issuer: 'Presidential Initiative for AI & Computing',
      icon: Cpu,
      color: 'text-primary',
    },
  ];

  const technicalStack = [
    {
      category: 'BI & Analytics',
      icon: BarChart3,
      technologies: ['Power BI', 'DAX', 'Microsoft Fabric', 'Tableau'],
    },
    {
      category: 'Data & Databases',
      icon: Database,
      technologies: ['SQL Server', 'ETL Pipelines', 'Data Warehousing', 'SSIS', 'SSRS'],
    },
    {
      category: 'Productivity & Automation',
      icon: Code,
      technologies: ['Excel 365', 'Power Automate', 'VBA', 'Power Query'],
    },
    {
      category: 'Enterprise Systems',
      icon: Cpu,
      technologies: ['Dynamics CRM', 'ServiceNow', 'Azure', 'SharePoint'],
    },
    {
      category: 'Development',
      icon: GitBranch,
      technologies: ['Python', 'Git', 'SQL', 'JavaScript'],
    },
  ];

  return (
    <div className="w-full">
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Certifications & Technical Stack</h1>
            <p className="text-xl text-muted-foreground">
              Professional certifications and comprehensive technical expertise
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Professional Certifications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div
                          className={`h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0`}
                        >
                          <cert.icon className={`h-6 w-6 ${cert.color}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-base leading-tight">{cert.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      {cert.description && (
                        <p className="text-xs text-muted-foreground mt-2">{cert.description}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technical Stack */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Technical Stack</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {technicalStack.map((stack, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <stack.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{stack.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {stack.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Skills Summary */}
            <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">Core Competencies</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold text-primary mb-2">20+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-2">6</p>
                    <p className="text-sm text-muted-foreground">Microsoft Certifications</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-2">25+</p>
                    <p className="text-sm text-muted-foreground">Technologies Mastered</p>
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
