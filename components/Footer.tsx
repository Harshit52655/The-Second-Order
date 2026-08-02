import { Linkedin, Mail } from "lucide-react";
import { LINKEDIN_URL, CONTACT_EMAIL } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="section-padding py-10 border-t border-border">
      <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="font-display text-text-secondary text-sm">
          The Second Order
        </span>

        <div className="flex items-center gap-6">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-secondary hover:text-accent transition-colors duration-200"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label="Email"
            className="text-text-secondary hover:text-accent transition-colors duration-200"
          >
            <Mail size={18} />
          </a>
        </div>

        <span className="text-xs text-text-secondary">
          © {new Date().getFullYear()} Harshit Agarwal. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
