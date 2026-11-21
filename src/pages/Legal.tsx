import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ExternalLink } from '../components/ExternalLink';
import { company } from '../data/company';
import { pages } from '../data/seo';
import { usePageMeta } from '../hooks/usePageMeta';

const PRIVACY_UPDATED = '21 November 2026';
const TERMS_UPDATED = '21 November 2026';
const legalName = 'SoLeaf LLP';
const brandName = 'SoLeaf';

function ContactLine() {
  return company.contact.email ? (
    <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
  ) : (
    <>
      our <ExternalLink href={company.social.linkedin}>LinkedIn company page</ExternalLink>
    </>
  );
}

export function Privacy() {
  usePageMeta(pages.privacy);
  return (
    <>
      <Hero variant="plain" eyebrow="Legal" title="Privacy Policy" lead={`How ${legalName} handles personal data submitted through this website.`} />
      <section className="section section--white" aria-label="Privacy Policy">
        <div className="container legal">
          <p className="legal__updated">Last updated: {PRIVACY_UPDATED}</p>

          <h2>1. Who we are</h2>
          <p>
            This website is operated by {legalName} ("{brandName}", "we", "us"), a limited liability
            partnership registered in {company.country}. This policy covers enquiries and browsing on tyllage.com.
          </p>

          <h2>2. Information we collect</h2>
          <p>
            If you email us or use the enquiry form on our <Link to="/contact">Contact</Link> page, you may provide your name, organisation, organisation type, email address, subject and message.
          </p>
          <ul>
            <li><strong>Email draft.</strong> When the form says "Open email draft", it passes your enquiry to your email app. SoLeaf receives it when you send the email. Your email provider may handle or save the draft.</li>
            <li><strong>Direct submission.</strong> When an enquiry endpoint is configured, the form says “Send enquiry”. Your browser sends the form fields to that service along with your consent, the time you submitted and the page the enquiry came from.</li>
          </ul>
          <p>
            This website does not use advertising or analytics cookies. Our hosting and content delivery providers may
            process standard technical information (such as IP address and browser type) in server logs for security and
            reliability purposes. Web fonts are loaded from Google Fonts, which receives your IP address when fonts are
            requested.
          </p>

          <h2>3. How we use your information</h2>
          <ul>
            <li>To respond to your enquiry and continue the conversation you started.</li>
            <li>To assess potential partnerships or collaborations you have asked about.</li>
            <li>To keep a record of correspondence where reasonably necessary.</li>
          </ul>
          <p>We do not sell personal data, and we do not use enquiry details for unrelated marketing without your consent.</p>

          <h2>4. Disclosure</h2>
          <p>
            Email, hosting and enquiry service providers may process information when delivering those services. We may also disclose information where required by law.
          </p>

          <h2>5. Retention and security</h2>
          <p>
            Enquiry information may be kept in email correspondence or in the systems that handle direct submissions. For questions about how your enquiry is stored, retained or protected, contact us through <ContactLine />.
          </p>

          <h2>6. Third-party websites</h2>
          <p>
            Our website links to external sites, including LinkedIn, Instagram and our project prototype. The optional
            prototype preview on the Projects page loads the prototype site only when you choose to open it. Those sites
            have their own privacy practices, which we do not control.
          </p>

          <h2>7. Your choices</h2>
          <p>
            You may ask to access or correct the personal data we hold about you, or withdraw your consent to its use, by
            contacting us through <ContactLine />.
          </p>

          <h2>8. Changes</h2>
          <p>We may update this policy from time to time. The date at the top shows when it was last revised.</p>
        </div>
      </section>
    </>
  );
}

export function Terms() {
  usePageMeta(pages.terms);
  return (
    <>
      <Hero variant="plain" eyebrow="Legal" title="Terms of Use" lead={`The terms that apply when you use the ${legalName} website.`} />
      <section className="section section--white" aria-label="Terms of Use">
        <div className="container legal">
          <p className="legal__updated">Last updated: {TERMS_UPDATED}</p>

          <h2>1. About these terms</h2>
          <p>
            By using this website, you agree to these terms. The website is operated by {legalName}, registered
            in {company.country}.
          </p>

          <h2>2. Information on this website</h2>
          <p>
            This website provides general information about {legalName}, Evercrop and earlier prototypes. Evercrop is in development and the descriptions of planned capabilities are for information only. We may change, update or remove content at any time.
          </p>

          <h2>3. Intellectual property</h2>
          <p>
            Unless stated otherwise, the content, design, text and graphics on this website belong to {legalName}.
            You may view and share pages for personal or internal business purposes, but may not reproduce them for
            commercial use without our permission.
          </p>

          <h2>4. Acceptable use</h2>
          <p>
            You must not misuse this website, including by attempting to gain unauthorised access, introducing malicious
            code or submitting misleading or unlawful content through our forms.
          </p>

          <h2>5. External links</h2>
          <p>We are not responsible for the content or practices of external websites linked from this site.</p>

          <h2>6. Limitation of liability</h2>
          <p>
            This website is provided on an "as is" basis. To the extent permitted by law, {legalName} is not
            liable for any loss arising from your use of, or reliance on, this website.
          </p>

          <h2>7. Governing law</h2>
          <p>These terms are governed by the laws of Singapore.</p>

          <h2>8. Contact</h2>
          <p>
            Questions about these terms can be sent through <ContactLine />.
          </p>
        </div>
      </section>
    </>
  );
}
