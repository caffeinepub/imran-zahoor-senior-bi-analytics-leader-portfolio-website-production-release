/**
 * Generate WhatsApp deep link with phone number and prefilled message
 */
export function getWhatsAppLink(): string {
  const phoneNumber = '+923315166680';
  const message = "Hi Imran, I'd like to discuss analytics or BI consulting.";
  
  // Remove + and spaces from phone number for WhatsApp API
  const cleanPhone = phoneNumber.replace(/[+\s]/g, '');
  
  // URL encode the message
  const encodedMessage = encodeURIComponent(message);
  
  // Use wa.me for universal compatibility (works on both mobile and desktop)
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}
