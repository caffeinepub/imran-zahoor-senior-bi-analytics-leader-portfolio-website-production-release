import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';
import { Mail, Download, Loader2, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields are filled
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setHasError(false);

    try {
      // Using FormSubmit.co - a free email forwarding service
      // This works without any backend or API keys
      const response = await fetch('https://formsubmit.co/ajax/zahoor.imran@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `Portfolio Contact: Message from ${name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      // Success
      setIsSubmitted(true);
      setHasError(false);
      toast.success('Thank you, your message has been sent successfully.');
      
      // Clear form
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset success message after 8 seconds
      setTimeout(() => setIsSubmitted(false), 8000);
    } catch (error) {
      console.error('Email sending error:', error);
      setHasError(true);
      toast.error('Sorry, there was an issue sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCVDownload = () => {
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = '/assets/Resume - Imran Zahoor.pdf';
    link.download = 'Resume - Imran Zahoor.pdf';
    link.type = 'application/pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('CV download started');
  };

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full">
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Get in Touch</h1>
            <p className="text-base md:text-xl text-muted-foreground">
              Discuss your BI modernization, KPI governance, or executive reporting needs
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Mail className="h-5 w-5" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                {isSubmitted && (
                  <div className="mb-4 p-3 md:p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-xs md:text-sm font-medium text-green-500">Thank you, your message has been sent successfully.</p>
                      <p className="text-xs text-muted-foreground">
                        I'll get back to you at zahoor.imran@gmail.com soon.
                      </p>
                    </div>
                  </div>
                )}

                {hasError && !isSubmitted && (
                  <div className="mb-4 p-3 md:p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-xs md:text-sm font-medium text-destructive">Sorry, there was an issue sending your message. Please try again.</p>
                      <p className="text-xs text-muted-foreground">
                        If the problem persists, please email me directly at zahoor.imran@gmail.com
                      </p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm md:text-base">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSubmitting}
                      required
                      className="h-10 md:h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm md:text-base">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      required
                      className="h-10 md:h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm md:text-base">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your BI challenges and goals..."
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={isSubmitting}
                      required
                      className="text-sm md:text-base"
                    />
                  </div>

                  <Button type="submit" className="w-full h-11 md:h-12" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Messages will be sent to zahoor.imran@gmail.com
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Additional Options */}
            <div className="space-y-6">
              {/* WhatsApp Chat */}
              <Card>
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-4 md:p-6 pt-0">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Start a direct conversation on WhatsApp to discuss your analytics needs and explore how
                    I can help transform your BI capabilities.
                  </p>
                  
                  <Button
                    className="w-full h-11 md:h-12"
                    size="lg"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Opens WhatsApp chat directly
                  </p>
                </CardContent>
              </Card>

              {/* CV Download */}
              <Card>
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <Download className="h-5 w-5" />
                    Download CV
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-4 md:p-6 pt-0">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Get a comprehensive overview of my experience, certifications, and technical
                    expertise.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full h-11 md:h-12"
                    onClick={handleCVDownload}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download CV (PDF)
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
                <CardContent className="p-4 md:p-6 space-y-3">
                  <h3 className="font-semibold text-sm md:text-base">Imran Zahoor</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Senior Business Intelligence and Analytics Leader
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">Islamabad, Pakistan</p>
                  <div className="pt-4 border-t border-border/40">
                    <p className="text-xs text-muted-foreground">
                      Available for consulting, contract work, and full-time opportunities
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
