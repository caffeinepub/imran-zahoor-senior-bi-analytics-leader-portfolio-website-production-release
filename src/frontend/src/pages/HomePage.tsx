import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2, Database, BarChart3, Shield, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getWhatsAppLink } from '@/lib/whatsapp';

const taglines = [
  'Enterprise BI that leaders trust.',
  'Semantic models, KPI governance, and Power BI dashboards at enterprise scale.',
  'Turn fragmented reporting into a governed analytics platform.',
  'From dashboards to governance — BI that scales with your business.',
  'Transform your analytics into a trusted enterprise ecosystem.',
  'Design BI architecture leaders rely on.',
];

export default function HomePage() {
  const navigate = useNavigate();
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    {
      icon: Database,
      title: 'Semantic Layer Architecture',
      description: 'Power BI / Fabric',
    },
    {
      icon: Shield,
      title: 'KPI Standardization & BI Governance',
      description: 'Enterprise-wide consistency',
    },
    {
      icon: BarChart3,
      title: 'Executive Dashboards',
      description: 'PMO, Resource Utilization, Pipeline',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'DAX + model tuning',
    },
  ];

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/assets/generated/bi-dashboard-hero.dim_1200x600.jpg)' }}
        />
        <div className="container relative py-16 md:py-24 lg:py-32 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-opacity duration-500">
                {taglines[currentTaglineIndex]}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                End-to-end BI design, semantic layers, KPI frameworks, executive dashboards, and
                performance tuning for enterprise-scale analytics platforms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="text-base h-12 md:h-14"
              >
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate({ to: '/case-studies' })}
                className="text-base h-12 md:h-14"
              >
                View Case Studies
              </Button>
            </div>

            {/* Credibility Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 pt-8">
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="p-3 md:p-4 text-center">
                  <p className="text-xl md:text-2xl font-bold text-primary">20+</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Years BI & Analytics</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="p-3 md:p-4 text-center">
                  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Microsoft Certified: Fabric Analytics Engineer</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="p-3 md:p-4 text-center">
                  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Microsoft Certified: Power BI Data Analyst</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="p-3 md:p-4 text-center">
                  <p className="text-xl md:text-2xl font-bold text-primary">4</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Global Regions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Core Expertise</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering enterprise-grade analytics solutions that drive business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 md:p-6 space-y-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-sm md:text-base">{highlight.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-8">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
            <CardContent className="p-8 md:p-12 text-center space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Ready to Transform Your Analytics?</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how enterprise BI governance and semantic modeling can elevate your
                organization's decision-making capabilities.
              </p>
              <Button size="lg" onClick={handleWhatsAppClick} className="h-12 md:h-14">
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
