import { LinkedinLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="footer-content">
        <span className="footer-text">© 2026 ARTHUR JACOMEL. TODOS OS DIREITOS RESERVADOS.</span>
        
        <div className="footer-social">
          <a href="https://linkedin.com/in/arthur-jacomel" target="_blank" rel="noreferrer" title="LinkedIn">
            <LinkedinLogo size={30} />
          </a>
          <a href="https://instagram.com/arthur.jkf" target="_blank" rel="noreferrer" title="Instagram">
            <InstagramLogo size={30} />
          </a>
          <a href="https://wa.me/41999114699" target="_blank" rel="noreferrer" title="WhatsApp">
            <WhatsappLogo size={30} />
          </a>
        </div>
      </div>
    </footer>
  )
}