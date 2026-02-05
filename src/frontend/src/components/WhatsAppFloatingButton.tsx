import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function WhatsAppFloatingButton() {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 md:h-16 md:w-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
    </Button>
  );
}
