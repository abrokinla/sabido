import { Facebook, Linkedin, MessageCircle, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
            <Facebook size={28} />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin size={28} />
          </Link>
          <Link href="#" aria-label="WhatsApp" className="hover:text-primary transition-colors">
            <MessageCircle size={28} />
          </Link>
           <Link href="mailto:info@sabido.africa" aria-label="Email" className="hover:text-primary transition-colors">
            <Mail size={28} />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Sabido Africa. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Empowering African youth through upskilling and employment access.
        </p>
      </div>
    </footer>
  );
}
