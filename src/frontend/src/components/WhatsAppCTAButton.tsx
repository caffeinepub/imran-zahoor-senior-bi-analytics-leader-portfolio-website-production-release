import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

interface WhatsAppCTAButtonProps {
  className?: string;
}

/**
 * Reusable WhatsApp CTA button component with consistent styling and behavior
 * across all pages (Home, Services, Impact).
 */
export default function WhatsAppCTAButton({ className }: WhatsAppCTAButtonProps) {
  return (
    <Button
      size="lg"
      asChild
      className={className}
    >
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat on WhatsApp
        <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </Button>
  );
}
