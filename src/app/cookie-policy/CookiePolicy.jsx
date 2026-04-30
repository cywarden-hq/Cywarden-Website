import { LegalTocNav } from "@/components/LegalTocNav";

const h1 = "font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl";
const sub = "mt-2 text-sm text-white/60 sm:text-base";

const h2 = "font-heading text-xl font-semibold tracking-tight text-[#3BA3FF] sm:text-2xl scroll-mt-28";
const h3 = "font-heading text-lg font-semibold text-white sm:text-xl";
const p = "mt-3 text-sm leading-relaxed text-white/80 sm:text-base";
const ul = "mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-white/80 sm:text-base";

const link =
  "text-[#3BA3FF] underline decoration-[#3BA3FF]/40 underline-offset-2 hover:text-[#5eb5ff] break-words";

const tableWrap = "mt-4 overflow-x-auto rounded-lg border border-white/10";
const th = "border-b border-white/10 bg-white/5 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-white/90 sm:text-sm";
const td = "border-b border-white/10 px-3 py-2.5 align-top text-sm text-white/80";

const privacyMail = (
  <a href="mailto:privacy@cywarden.com" className={link}>
    privacy@cywarden.com
  </a>
);

const securityMail = (
  <a href="mailto:security@cywarden.com" className={link}>
    security@cywarden.com
  </a>
);

function CookieTable({ rows }) {
  return (
    <div className={tableWrap}>
      <table className="w-full min-w-[36rem] text-left">
        <thead>
          <tr>
            <th className={th}>Cookie Name</th>
            <th className={th}>Provider</th>
            <th className={th}>Purpose</th>
            <th className={th}>Duration</th>
            <th className={th}>Type</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, provider, purpose, duration, type]) => (
            <tr key={name}>
              <td className={`${td} font-mono text-xs text-white/90 sm:text-sm`}>{name}</td>
              <td className={td}>{provider}</td>
              <td className={td}>{purpose}</td>
              <td className={td}>{duration}</td>
              <td className={td}>{type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CookiePolicy() {
  return (
    <article className="min-w-0">
      <header className="border-b border-white/10 pb-8">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[#3BA3FF]">Cywarden</p>
        <h1 className={h1}>Cookie Policy</h1>
        <p className={sub}>cywarden.com</p>
        <p className={`${sub} mt-1`}>Last Updated: February 2026</p>
        <p className="mt-4 inline-block rounded border border-[#3BA3FF]/40 bg-[#3BA3FF]/10 px-3 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-[#3BA3FF]">
          Confidential
        </p>
      </header>

      <LegalTocNav className="border-b border-white/10 py-8" aria-label="Table of contents">
        <h2 className="font-heading text-lg font-semibold text-white">Table of Contents</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-white/85 sm:text-base">
          <li>
            <a href="#introduction" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Introduction
            </a>
          </li>
          <li>
            <a href="#what-are-cookies" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              What Are Cookies and Similar Technologies?
            </a>
          </li>
          <li>
            <a href="#how-we-use" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              How We Use Cookies
            </a>
          </li>
          <li>
            <a href="#types" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Types of Cookies We Use
            </a>
          </li>
          <li>
            <a href="#third-party" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Third-Party Cookies and Services
            </a>
          </li>
          <li>
            <a href="#managing" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Managing Your Cookie Preferences
            </a>
          </li>
          <li>
            <a href="#jurisdiction" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Jurisdiction-Specific Provisions
            </a>
          </li>
          <li>
            <a href="#data-retention" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Data Retention
            </a>
          </li>
          <li>
            <a href="#cookie-security" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Cookie Security
            </a>
          </li>
          <li>
            <a href="#children" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Children&apos;s Privacy
            </a>
          </li>
          <li>
            <a href="#changes" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Changes to This Cookie Policy
            </a>
          </li>
          <li>
            <a href="#contact" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Contact Us
            </a>
          </li>
        </ol>
      </LegalTocNav>

      <div className="space-y-10 pt-10">
        <section id="introduction" aria-labelledby="intro-heading">
          <h2 id="intro-heading" className={h2}>
            1. Introduction
          </h2>
          <p className={p}>
            This Cookie Policy explains how Cywarden, Inc. and its subsidiaries and affiliates (&quot;Cywarden,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) and our service providers deploy cookies and similar
            tracking technologies on our website at cywarden.com (the &quot;Site&quot;), as well as the options you have
            to control them.
          </p>
          <p className={p}>
            Cywarden operates globally with offices in the United States, United Arab Emirates (Dubai), Australia, India,
            and Canada. This policy is designed to comply with applicable data protection and privacy laws across all
            jurisdictions in which we operate, including the General Data Protection Regulation (GDPR), the California
            Consumer Privacy Act (CCPA/CPRA), Canada&apos;s Personal Information Protection and Electronic Documents Act
            (PIPEDA), India&apos;s Digital Personal Data Protection Act 2023 (DPDPA), the UAE&apos;s Personal Data
            Protection Law (PDPL), and the Australian Privacy Act 1988.
          </p>
          <p className={p}>
            By continuing to use our Site, you acknowledge that you have read and understood this Cookie Policy. Where
            required by applicable law, we will obtain your consent before placing non-essential cookies on your device.
          </p>
        </section>

        <section id="what-are-cookies" aria-labelledby="what-heading">
          <h2 id="what-heading" className={h2}>
            2. What Are Cookies and Similar Technologies?
          </h2>

          <h3 className={`${h3} mt-6`}>2.1 Cookies</h3>
          <p className={p}>
            Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a
            website. They are widely used to make websites function efficiently, improve user experience, and provide
            reporting information to website operators.
          </p>
          <p className={p}>
            Cookies set by the website operator (in this case, Cywarden) are called &quot;first-party cookies.&quot;
            Cookies set by parties other than the website operator are called &quot;third-party cookies.&quot; Third-party
            cookies enable features or functionality provided by external services, such as analytics, advertising, and
            social media integration.
          </p>

          <h3 className={`${h3} mt-6`}>2.2 Session vs. Persistent Cookies</h3>
          <p className={p}>
            <strong className="text-white/90">Session Cookies:</strong> Temporary cookies that are erased when you close
            your browser. They help the Site remember your actions during a single browsing session.
          </p>
          <p className={p}>
            <strong className="text-white/90">Persistent Cookies:</strong> Cookies that remain on your device for a set
            period or until you manually delete them. They help the Site recognize you on subsequent visits.
          </p>

          <h3 className={`${h3} mt-6`}>2.3 Other Tracking Technologies</h3>
          <p className={p}>In addition to cookies, we may use similar technologies including:</p>
          <ul className={ul}>
            <li>
              <strong className="text-white/90">Pixels and Web Beacons:</strong> Tiny transparent images embedded in web
              pages or emails that track whether content has been accessed or opened.
            </li>
            <li>
              <strong className="text-white/90">Local Storage:</strong> Browser-based storage that retains data locally on
              your device, similar to cookies but with greater storage capacity.
            </li>
            <li>
              <strong className="text-white/90">Device Identifiers:</strong> Unique identifiers associated with your device
              that may be used to track activity across sessions.
            </li>
          </ul>
          <p className={p}>
            References to &quot;cookies&quot; in this policy include all such similar tracking technologies unless
            otherwise stated.
          </p>
        </section>

        <section id="how-we-use" aria-labelledby="how-heading">
          <h2 id="how-heading" className={h2}>
            3. How We Use Cookies
          </h2>
          <p className={p}>
            When you access or use the Site, Cywarden, its service providers, and authorized partners use cookies and
            similar technologies to:
          </p>
          <ul className={ul}>
            <li>Ensure the Site operates correctly and securely</li>
            <li>Remember your preferences and settings</li>
            <li>Understand how visitors interact with the Site and which pages are most popular</li>
            <li>Measure the effectiveness of our marketing campaigns</li>
            <li>Deliver relevant content and, where applicable, advertisements</li>
            <li>Protect against fraud and unauthorized access</li>
            <li>Improve the overall user experience through personalization</li>
          </ul>
        </section>

        <section id="types" aria-labelledby="types-heading">
          <h2 id="types-heading" className={h2}>
            4. Types of Cookies We Use
          </h2>
          <p className={p}>
            We categorize the cookies used on our Site into four groups. Below is a description of each category along
            with specific cookies deployed.
          </p>

          <h3 className={`${h3} mt-6`}>4.1 Strictly Necessary Cookies</h3>
          <p className={p}>
            These cookies are essential for the Site to function and cannot be switched off in our systems. They are
            usually set in response to actions you take, such as setting your privacy preferences, logging in, or filling in
            forms. Without these cookies, services you have requested cannot be provided.
          </p>
          <CookieTable
            rows={[
              [
                "_csrf_session",
                "Cywarden",
                "Maintains user session state and security tokens across pages",
                "Session",
                "First-party",
              ],
              [
                "_cw_csrf",
                "Cywarden",
                "Prevents cross-site request forgery attacks on form submissions",
                "Session",
                "First-party",
              ],
              [
                "_cw_cookie_consent",
                "Cywarden",
                "Stores your cookie consent preferences so we do not ask repeatedly",
                "12 months",
                "First-party",
              ],
              [
                "__cf_bm",
                "Cloudflare",
                "Bot detection and mitigation to protect the Site from malicious traffic",
                "30 minutes",
                "Third-party",
              ],
              [
                "_cw_secure",
                "Cywarden",
                "Ensures secure HTTPS connections and validates TLS handshakes",
                "Session",
                "First-party",
              ],
            ]}
          />

          <h3 className={`${h3} mt-8`}>4.2 Performance and Analytics Cookies</h3>
          <p className={p}>
            These cookies collect information about how visitors use our Site, such as which pages are visited most often
            and whether users encounter error messages. All information collected by these cookies is aggregated and used
            solely to improve how our Site works. We do not use these cookies to identify individual visitors.
          </p>
          <CookieTable
            rows={[
              [
                "_ga",
                "Google Analytics",
                "Distinguishes unique users by assigning a randomly generated ID to calculate visitor, session, and campaign data",
                "2 years",
                "Third-party",
              ],
              [
                "_ga_*",
                "Google Analytics",
                "Maintains session state across page requests",
                "2 years",
                "Third-party",
              ],
              [
                "_gid",
                "Google Analytics",
                "Stores and updates a unique value for each page visited to analyze site usage",
                "24 hours",
                "Third-party",
              ],
              [
                "_gat_UA-*",
                "Google Analytics",
                "Throttles the request rate to limit data collection on high-traffic sites",
                "1 minute",
                "Third-party",
              ],
              [
                "_hjSessionUser_*",
                "Hotjar",
                "Tracks whether the visitor is a first-time or returning user for analytics insights",
                "1 year",
                "Third-party",
              ],
              [
                "_hjSession_*",
                "Hotjar",
                "Holds session data for the current visit including page views and interactions",
                "30 minutes",
                "Third-party",
              ],
            ]}
          />

          <h3 className={`${h3} mt-8`}>4.3 Functional Cookies</h3>
          <p className={p}>
            Functional cookies enable the Site to provide enhanced functionality and personalization. They may be set by us
            or by third-party providers whose services we have integrated into our pages. If you do not allow these
            cookies, some or all of these features may not function properly.
          </p>
          <CookieTable
            rows={[
              [
                "_cw_lang",
                "Cywarden",
                "Remembers your preferred language setting across visits",
                "12 months",
                "First-party",
              ],
              [
                "_cw_region",
                "Cywarden",
                "Stores your detected or selected geographic region for localized content",
                "12 months",
                "First-party",
              ],
              [
                "_cw_theme",
                "Cywarden",
                "Remembers your display preference (light/dark mode)",
                "12 months",
                "First-party",
              ],
              [
                "li_sugr",
                "LinkedIn",
                "Enables LinkedIn integration features such as sharing and embedded content",
                "3 months",
                "Third-party",
              ],
              [
                "hubspotutk",
                "HubSpot",
                "Tracks visitor identity for CRM integration and personalized content delivery",
                "13 months",
                "Third-party",
              ],
              [
                "__hs_opt_out",
                "HubSpot",
                "Stores your opt-out preference for HubSpot tracking and communications",
                "13 months",
                "Third-party",
              ],
            ]}
          />

          <h3 className={`${h3} mt-8`}>4.4 Targeting and Advertising Cookies</h3>
          <p className={p}>
            These cookies are set by our advertising partners through our Site. They may be used to build a profile of
            your interests and show you relevant advertisements on other websites. They work by uniquely identifying your
            browser and device. If you do not allow these cookies, you will experience less targeted advertising.
          </p>
          <p className={p}>
            Cywarden uses remarketing services from third-party vendors including Google and LinkedIn to display relevant
            advertisements to visitors who have previously visited our Site. These advertisements may appear on third-party
            websites across the internet.
          </p>
          <CookieTable
            rows={[
              [
                "_gcl_au",
                "Google AdSense",
                "Stores conversion data for Google advertising campaigns to measure ad effectiveness",
                "3 months",
                "Third-party",
              ],
              [
                "IDE",
                "Google DoubleClick",
                "Used by DoubleClick to register and report the website user's actions after viewing or clicking ads",
                "13 months",
                "Third-party",
              ],
              [
                "_fbp",
                "Meta (Facebook)",
                "Tracks visits across websites to deliver targeted advertising",
                "3 months",
                "Third-party",
              ],
              [
                "li_fat_id",
                "LinkedIn",
                "Enables LinkedIn ad attribution and conversion tracking for campaign performance",
                "30 days",
                "Third-party",
              ],
              [
                "bcookie",
                "LinkedIn",
                "Browser identifier cookie used by LinkedIn for advertising optimization",
                "1 year",
                "Third-party",
              ],
              [
                "_uetsid",
                "Microsoft Advertising",
                "Tracks visitors across Microsoft Advertising campaigns for attribution and remarketing",
                "1 day",
                "Third-party",
              ],
              [
                "_uetvid",
                "Microsoft Advertising",
                "Persistent identifier for Microsoft Advertising cross-session tracking and reporting",
                "13 months",
                "Third-party",
              ],
            ]}
          />
        </section>

        <section id="third-party" aria-labelledby="third-party-heading">
          <h2 id="third-party-heading" className={h2}>
            5. Third-Party Cookies and Services
          </h2>
          <p className={p}>
            Some cookies on our Site are placed by third-party service providers. These providers have their own privacy
            policies governing the use of cookies and the data they collect. Cywarden does not control these third-party
            cookies. We encourage you to review the privacy policies of these providers:
          </p>
          <ul className={ul}>
            <li>
              Google Analytics and Advertising:{" "}
              <a href="https://policies.google.com/privacy" className={link} target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy
              </a>
            </li>
            <li>
              HubSpot:{" "}
              <a href="https://legal.hubspot.com/privacy-policy" className={link} target="_blank" rel="noopener noreferrer">
                https://legal.hubspot.com/privacy-policy
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/legal/privacy-policy"
                className={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/legal/privacy-policy
              </a>
            </li>
            <li>
              Meta (Facebook):{" "}
              <a href="https://www.facebook.com/privacy/policy/" className={link} target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/privacy/policy/
              </a>
            </li>
            <li>
              Microsoft Advertising:{" "}
              <a
                href="https://privacy.microsoft.com/en-us/privacystatement"
                className={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://privacy.microsoft.com/en-us/privacystatement
              </a>
            </li>
            <li>
              Cloudflare:{" "}
              <a href="https://www.cloudflare.com/privacypolicy/" className={link} target="_blank" rel="noopener noreferrer">
                https://www.cloudflare.com/privacypolicy/
              </a>
            </li>
            <li>
              Hotjar:{" "}
              <a
                href="https://www.hotjar.com/legal/policies/privacy/"
                className={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.hotjar.com/legal/policies/privacy/
              </a>
            </li>
          </ul>
        </section>

        <section id="managing" aria-labelledby="managing-heading">
          <h2 id="managing-heading" className={h2}>
            6. Managing Your Cookie Preferences
          </h2>

          <h3 className={`${h3} mt-6`}>6.1 Cookie Consent Banner</h3>
          <p className={p}>
            When you first visit our Site, you will be presented with a cookie consent banner that allows you to accept
            or reject non-essential cookies. You can change your preferences at any time by clicking the &quot;Cookie
            Settings&quot; link in the footer of any page on our Site.
          </p>

          <h3 className={`${h3} mt-6`}>6.2 Browser Settings</h3>
          <p className={p}>
            Most modern web browsers allow you to control cookies through their settings. You can typically configure your
            browser to:
          </p>
          <ul className={ul}>
            <li>Accept all cookies</li>
            <li>Notify you when a cookie is set</li>
            <li>Block all cookies</li>
            <li>Delete cookies when you close your browser</li>
            <li>Block third-party cookies while allowing first-party cookies</li>
          </ul>
          <p className={p}>Below are links to cookie management instructions for common browsers:</p>
          <ul className={ul}>
            <li>
              Google Chrome:{" "}
              <a href="chrome://settings/cookies" className={link}>
                chrome://settings/cookies
              </a>
            </li>
            <li>
              Mozilla Firefox:{" "}
              <a href="about:preferences#privacy" className={link}>
                about:preferences#privacy
              </a>
            </li>
            <li>Safari: Preferences &gt; Privacy</li>
            <li>
              Microsoft Edge:{" "}
              <a href="edge://settings/content/cookies" className={link}>
                edge://settings/content/cookies
              </a>
            </li>
          </ul>
          <p className={p}>
            Please note that if you choose to block or delete cookies, some features of the Site may not function as
            intended, and your user experience may be degraded.
          </p>

          <h3 className={`${h3} mt-6`}>6.3 Opt-Out of Targeted Advertising</h3>
          <p className={p}>
            You can opt out of targeted advertising from participating companies through the following industry programs:
          </p>
          <ul className={ul}>
            <li>
              Network Advertising Initiative (NAI):{" "}
              <a href="https://optout.networkadvertising.org/" className={link} target="_blank" rel="noopener noreferrer">
                https://optout.networkadvertising.org/
              </a>
            </li>
            <li>
              Digital Advertising Alliance (DAA):{" "}
              <a href="https://optout.aboutads.info/" className={link} target="_blank" rel="noopener noreferrer">
                https://optout.aboutads.info/
              </a>
            </li>
            <li>
              European Interactive Digital Advertising Alliance (EDAA):{" "}
              <a href="https://www.youronlinechoices.eu/" className={link} target="_blank" rel="noopener noreferrer">
                https://www.youronlinechoices.eu/
              </a>
            </li>
            <li>
              Google Ad Settings:{" "}
              <a href="https://adssettings.google.com/" className={link} target="_blank" rel="noopener noreferrer">
                https://adssettings.google.com/
              </a>
            </li>
          </ul>

          <h3 className={`${h3} mt-6`}>6.4 Do Not Track (DNT) Signals</h3>
          <p className={p}>
            At this time, our Site does not respond to Do Not Track (&quot;DNT&quot;) signals sent by web browsers.
            However, you can manage your cookie preferences using the methods described above. We will update this policy
            if we adopt DNT signal recognition in the future.
          </p>

          <h3 className={`${h3} mt-6`}>6.5 Global Privacy Control (GPC)</h3>
          <p className={p}>
            We recognize and honor Global Privacy Control (GPC) signals where required by applicable law, including in
            California under the CCPA/CPRA. When we detect a GPC signal from your browser, we will treat it as a valid
            opt-out of the sale or sharing of your personal information.
          </p>
        </section>

        <section id="jurisdiction" aria-labelledby="jurisdiction-heading">
          <h2 id="jurisdiction-heading" className={h2}>
            7. Jurisdiction-Specific Provisions
          </h2>

          <h3 className={`${h3} mt-6`}>7.1 European Economic Area, United Kingdom, and Switzerland (GDPR)</h3>
          <p className={p}>
            If you are located in the EEA, UK, or Switzerland, we will only place non-essential cookies on your device with
            your prior opt-in consent, in accordance with the ePrivacy Directive and the GDPR. You have the right to
            withdraw your consent at any time via our Cookie Settings panel. Strictly necessary cookies are placed based
            on our legitimate interest in operating a secure and functional website.
          </p>

          <h3 className={`${h3} mt-6`}>7.2 United States — California (CCPA/CPRA)</h3>
          <p className={p}>
            Under the CCPA/CPRA, certain cookies may constitute a &quot;sale&quot; or &quot;sharing&quot; of personal
            information. California residents have the right to opt out of such sale or sharing. You may exercise this
            right via our &quot;Do Not Sell or Share My Personal Information&quot; link on the Site or by submitting a
            request to {privacyMail}. We honor Global Privacy Control signals as a valid opt-out mechanism.
          </p>

          <h3 className={`${h3} mt-6`}>7.3 Canada (PIPEDA / Provincial Laws)</h3>
          <p className={p}>
            In accordance with PIPEDA and applicable provincial privacy legislation (including Quebec&apos;s Law 25), we
            obtain your meaningful consent before placing non-essential cookies. You may withdraw your consent at any time
            through our Cookie Settings, and we will cease placing non-essential cookies on future visits.
          </p>

          <h3 className={`${h3} mt-6`}>7.4 India (DPDPA 2023)</h3>
          <p className={p}>
            Under the Digital Personal Data Protection Act, 2023, we process personal data collected via cookies in
            accordance with the lawful purposes outlined in our Privacy Policy. Where consent is the applicable basis, we
            obtain it through our cookie consent mechanism. You may withdraw consent at any time, though this may affect
            certain features of the Site.
          </p>

          <h3 className={`${h3} mt-6`}>7.5 United Arab Emirates (PDPL)</h3>
          <p className={p}>
            In compliance with the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021), we ensure that
            cookie-based data processing is conducted lawfully and transparently. We obtain consent for non-essential
            cookies and provide clear mechanisms for you to manage your preferences.
          </p>

          <h3 className={`${h3} mt-6`}>7.6 Australia (Privacy Act 1988)</h3>
          <p className={p}>
            In compliance with the Australian Privacy Act 1988 and the Australian Privacy Principles (APPs), we are
            transparent about how cookies collect personal information. We provide you with the ability to opt out of
            non-essential cookies and ensure that any personal information collected is handled in accordance with the
            APPs.
          </p>
        </section>

        <section id="data-retention" aria-labelledby="retention-heading">
          <h2 id="retention-heading" className={h2}>
            8. Data Retention
          </h2>
          <p className={p}>
            Cookie data is retained only for as long as necessary to fulfill the purposes described in this policy.
            Session cookies are deleted when you close your browser. Persistent cookies are retained for the durations
            specified in the cookie tables above, unless you delete them sooner through your browser settings or our Cookie
            Settings panel.
          </p>
          <p className={p}>
            Analytics data derived from cookies is retained in aggregated, anonymized form and is not linked to individual
            users after the cookie expires.
          </p>
        </section>

        <section id="cookie-security" aria-labelledby="security-heading">
          <h2 id="security-heading" className={h2}>
            9. Cookie Security
          </h2>
          <p className={p}>Cywarden implements appropriate technical measures to protect cookie data, including:</p>
          <ul className={ul}>
            <li>Use of the Secure flag on all first-party cookies to ensure transmission only over HTTPS</li>
            <li>Use of the HttpOnly flag on session cookies to prevent client-side script access</li>
            <li>Implementation of SameSite attributes to mitigate cross-site request forgery (CSRF) risks</li>
            <li>Regular review and audit of cookies deployed on the Site</li>
            <li>Encryption of sensitive cookie values where applicable</li>
          </ul>
        </section>

        <section id="children" aria-labelledby="children-heading">
          <h2 id="children-heading" className={h2}>
            10. Children&apos;s Privacy
          </h2>
          <p className={p}>
            Our Site is not directed at children under the age of 16 (or the applicable age of digital consent in your
            jurisdiction). We do not knowingly collect personal information from children through cookies or any other
            means. If we become aware that we have inadvertently collected such information, we will take steps to delete
            it promptly.
          </p>
        </section>

        <section id="changes" aria-labelledby="changes-heading">
          <h2 id="changes-heading" className={h2}>
            11. Changes to This Cookie Policy
          </h2>
          <p className={p}>
            We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal
            requirements, or for other operational reasons. When we make material changes, we will update the &quot;Last
            Updated&quot; date at the top of this page and, where required by law, provide additional notice such as a
            prominent banner on the Site or a notification via email.
          </p>
          <p className={p}>
            We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
          </p>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className={h2}>
            12. Contact Us
          </h2>
          <p className={p}>
            If you have questions, concerns, or requests regarding this Cookie Policy or our use of cookies, please contact
            us:
          </p>
          <p className={`${p} mt-4`}>
            <strong className="text-white/90">Cywarden, Inc.</strong>
            <br />
            Attention: Privacy Team
            <br />
            Email: {privacyMail}
            <br />
            Website:{" "}
            <a href="https://cywarden.com" className={link} target="_blank" rel="noopener noreferrer">
              https://cywarden.com
            </a>
          </p>
          <p className={p}>
            For security-related cookie concerns or to report a potential vulnerability in our cookie implementation:
          </p>
          <p className={p}>
            Email: {securityMail}
          </p>
        </section>
      </div>
    </article>
  );
}
