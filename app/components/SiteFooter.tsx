"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { trackEvent } from "./trackEvent";
import {
  StyledFooter,
  StyledFooterContent,
  StyledFooterLinks,
  StyledFooterLink,
  StyledFooterCopyright,
} from "./styled/PageStyles";

export const GITHUB = "https://github.com/splinter7";
export const LINKEDIN = "https://linkedin.com/in/stewart-small-a45a91b0";
export const EMAIL = "mailto:stewart.a.small@gmail.com";

export default function SiteFooter() {
  return (
    <StyledFooter>
      <StyledFooterContent>
        <StyledFooterCopyright>
          © {new Date().getFullYear()} Stewart Small
        </StyledFooterCopyright>
        <StyledFooterLinks>
          <StyledFooterLink
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            {...trackEvent("contact", { channel: "github", location: "footer" })}
          >
            <FaGithub size={18} aria-hidden />
          </StyledFooterLink>
          <StyledFooterLink
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            {...trackEvent("contact", { channel: "linkedin", location: "footer" })}
          >
            <FaLinkedin size={18} aria-hidden />
          </StyledFooterLink>
          <StyledFooterLink
            href={EMAIL}
            aria-label="Email Stewart Small"
            {...trackEvent("contact", { channel: "email", location: "footer" })}
          >
            <FaEnvelope size={18} aria-hidden />
          </StyledFooterLink>
        </StyledFooterLinks>
      </StyledFooterContent>
    </StyledFooter>
  );
}
