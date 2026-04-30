import { LegalTocNav } from "@/components/LegalTocNav";

const h1 = "font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl";
const sub = "mt-2 text-sm text-white/60 sm:text-base";

const h2 = "font-heading text-xl font-semibold tracking-tight text-[#3BA3FF] sm:text-2xl scroll-mt-28";
const h3 = "font-heading text-lg font-semibold text-white sm:text-xl";
const p = "mt-3 text-sm leading-relaxed text-white/80 sm:text-base";
const ul = "mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-white/80 sm:text-base";

const mail = (
  <a
    href="mailto:privacy@cywarden.com"
    className="text-[#3BA3FF] underline decoration-[#3BA3FF]/40 underline-offset-2 hover:text-[#5eb5ff]"
  >
    privacy@cywarden.com
  </a>
);

export function PrivacyPolicy() {
  return (
    <article className="min-w-0">
      <header className="border-b border-white/10 pb-8">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[#3BA3FF]">
          Cywarden
        </p>
        <h1 className={h1}>Privacy Policy</h1>
        <p className={sub}>Effective Date: February 2026</p>
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
            <a href="#information-we-collect" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Information We Collect
            </a>
          </li>
          <li>
            <a href="#how-we-use" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              How We Use Your Information
            </a>
          </li>
          <li>
            <a href="#legal-bases" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Legal Bases for Processing (GDPR and Similar Regulations)
            </a>
          </li>
          <li>
            <a href="#how-we-share" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              How We Share Your Information
            </a>
          </li>
          <li>
            <a href="#international-transfers" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              International Data Transfers
            </a>
          </li>
          <li>
            <a href="#data-retention" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Data Retention
            </a>
          </li>
          <li>
            <a href="#your-rights" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Your Privacy Rights
            </a>
          </li>
          <li>
            <a href="#jurisdiction" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Jurisdiction-Specific Provisions
            </a>
          </li>
          <li>
            <a href="#security" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Security Measures
            </a>
          </li>
          <li>
            <a href="#children" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Children&apos;s Privacy
            </a>
          </li>
          <li>
            <a href="#third-party" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Third-Party Links and Content
            </a>
          </li>
          <li>
            <a href="#dnt-gpc" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Do Not Track and Global Privacy Control
            </a>
          </li>
          <li>
            <a href="#changes" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Changes to This Privacy Policy
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
          Cywarden, Inc. (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy and ensuring you have a positive experience on our website and when interacting with our services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at cywarden.com and use our services, including but not limited to cloud security consulting, threat detection, incident response, and risk assessments.
        </p>
        <p className={p}>
          Cywarden is a global cloud and artificial intelligence security consulting firm founded in 2022 and headquartered in San Francisco, California, with additional operations in Dubai, Australia, India, and Canada.
        </p>
        <p className={p}>
          <strong className="text-white/90">Effective Date: February 2026</strong>
        </p>
        <p className={p}>
          Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our website or services. Your continued use of our website and services following the posting of revised Privacy Policy means that you accept and agree to the changes.
        </p>
      </section>

      <section id="information-we-collect" aria-labelledby="collect-heading">
        <h2 id="collect-heading" className={h2}>
          2. Information We Collect
        </h2>

        <h3 className={`${h3} mt-6`}>2.1 Information You Provide Directly</h3>
        <p className={p}>We collect information that you voluntarily provide to us, including:</p>
        <ul className={ul}>
          <li>
            <strong className="text-white/90">Contact information:</strong> Name, email address, phone number, physical address, job title, and company name
          </li>
          <li>
            <strong className="text-white/90">Communication content:</strong> Content from contact forms, email inquiries, chat messages, and support requests
          </li>
          <li>
            <strong className="text-white/90">Event registration data:</strong> Information collected when you register for webinars, conferences, or virtual events
          </li>
          <li>
            <strong className="text-white/90">Service inquiry information:</strong> Details about your organization&apos;s security needs and service requirements
          </li>
          <li>
            <strong className="text-white/90">Job application data:</strong> Resume, cover letter, employment history, and qualifications
          </li>
          <li>
            <strong className="text-white/90">Payment information:</strong> Billing address and payment details (processed securely through third-party payment processors)
          </li>
          <li>
            <strong className="text-white/90">Newsletter signups:</strong> Email address and subscription preferences
          </li>
        </ul>

        <h3 className={`${h3} mt-8`}>2.2 Information Collected Automatically</h3>
        <p className={p}>We automatically collect certain information about your interactions with our website and services:</p>
        <ul className={ul}>
          <li>
            <strong className="text-white/90">Technical information:</strong> IP address, browser type, operating system version, device identifiers, and unique device IDs
          </li>
          <li>
            <strong className="text-white/90">Usage data:</strong> Pages visited, time spent on pages, links clicked, features used, and interaction patterns
          </li>
          <li>
            <strong className="text-white/90">Referral information:</strong> Referring URLs and search terms used to find our website
          </li>
          <li>
            <strong className="text-white/90">Cookies and tracking technologies:</strong> Information collected through cookies, web beacons, pixels, and similar technologies. Please see our separate Cookie Policy for detailed information.
          </li>
          <li>
            <strong className="text-white/90">Analytics data:</strong> Website performance, traffic patterns, and user behavior metrics (collected via Google Analytics)
          </li>
        </ul>

        <h3 className={`${h3} mt-8`}>2.3 Information from Third Parties</h3>
        <p className={p}>We may receive information about you from third parties, including:</p>
        <ul className={ul}>
          <li>
            <strong className="text-white/90">Business partners:</strong> Information shared by partners, affiliates, and referral sources
          </li>
          <li>
            <strong className="text-white/90">Marketing platforms:</strong> Data from advertising and marketing platforms for targeting and analytics purposes
          </li>
          <li>
            <strong className="text-white/90">Public databases:</strong> Publicly available information from online directories and business information services
          </li>
          <li>
            <strong className="text-white/90">Social media platforms:</strong> Information shared when you interact with our social media presence
          </li>
        </ul>
      </section>

      <section id="how-we-use" aria-labelledby="use-heading">
        <h2 id="use-heading" className={h2}>
          3. How We Use Your Information
        </h2>
        <p className={p}>We use the information we collect for various business and legitimate purposes:</p>

        <h3 className={`${h3} mt-6`}>3.1 Service Delivery and Management</h3>
        <ul className={ul}>
          <li>Providing, maintaining, and improving our services and website</li>
          <li>Responding to your inquiries, requests, and communications</li>
          <li>Processing service orders and managing client relationships</li>
          <li>Providing customer support and technical assistance</li>
        </ul>

        <h3 className={`${h3} mt-8`}>3.2 Marketing and Communications</h3>
        <ul className={ul}>
          <li>Sending promotional materials, newsletters, and marketing communications (with your consent)</li>
          <li>Notifying you about changes to our services or policies</li>
          <li>Event invitations and webinar registrations</li>
        </ul>

        <h3 className={`${h3} mt-8`}>3.3 Analytics and Optimization</h3>
        <ul className={ul}>
          <li>Analyzing website usage patterns and user behavior</li>
          <li>Improving website performance, functionality, and user experience</li>
          <li>Conducting market research and identifying trends</li>
        </ul>

        <h3 className={`${h3} mt-8`}>3.4 Legal Compliance and Security</h3>
        <ul className={ul}>
          <li>Complying with legal obligations, court orders, and regulatory requirements</li>
          <li>Detecting, preventing, and addressing fraud, abuse, and security incidents</li>
          <li>Protecting the rights, property, and safety of Cywarden, our users, and the public</li>
        </ul>

        <h3 className={`${h3} mt-8`}>3.5 Business Operations</h3>
        <ul className={ul}>
          <li>Accounting, auditing, and administrative purposes</li>
          <li>Financial reporting and tax compliance</li>
          <li>Personnel management and employment matters</li>
        </ul>
      </section>

      <section id="legal-bases" aria-labelledby="legal-bases-heading">
        <h2 id="legal-bases-heading" className={h2}>
          4. Legal Bases for Processing (GDPR and Similar Regulations)
        </h2>
        <p className={p}>
          For individuals in jurisdictions with privacy laws such as GDPR, we process your personal information on the following legal bases:
        </p>

        <h3 className={`${h3} mt-6`}>4.1 Consent</h3>
        <p className={p}>
          We process information based on your explicit consent, such as for marketing communications and non-essential cookies.
        </p>

        <h3 className={`${h3} mt-6`}>4.2 Contractual Necessity</h3>
        <p className={p}>Processing is necessary to enter into, maintain, or fulfill a contract with you.</p>

        <h3 className={`${h3} mt-6`}>4.3 Legitimate Interests</h3>
        <p className={p}>
          We process information to serve our legitimate business interests, including improving our services, marketing, fraud prevention, and data security.
        </p>

        <h3 className={`${h3} mt-6`}>4.4 Legal Obligation</h3>
        <p className={p}>Processing is necessary to comply with applicable laws, regulations, and legal requests.</p>
      </section>

      <section id="how-we-share" aria-labelledby="share-heading">
        <h2 id="share-heading" className={h2}>
          5. How We Share Your Information
        </h2>
        <p className={p}>We may share your information in the following circumstances:</p>

        <h3 className={`${h3} mt-6`}>5.1 Service Providers and Data Processors</h3>
        <p className={p}>
          We share information with third-party service providers, vendors, and contractors who assist us in operating our website, providing services, and conducting business activities. These include cloud hosting providers, analytics services, payment processors, email service providers, and customer relationship management platforms. All service providers are contractually obligated to use your information only as necessary to provide services and to maintain the confidentiality and security of your data.
        </p>

        <h3 className={`${h3} mt-6`}>5.2 Business Partners</h3>
        <p className={p}>
          With your consent, we may share information with business partners, resellers, and affiliates to provide products or services you have requested.
        </p>

        <h3 className={`${h3} mt-6`}>5.3 Legal Requirements and Law Enforcement</h3>
        <p className={p}>
          We may disclose information if required by law, court order, government request, or when we believe in good faith that disclosure is necessary to:
        </p>
        <ul className={ul}>
          <li>Comply with applicable laws, regulations, and legal processes</li>
          <li>Enforce our Terms of Service and other agreements</li>
          <li>Protect the safety and security of individuals and the public</li>
        </ul>

        <h3 className={`${h3} mt-6`}>5.4 Business Transfers</h3>
        <p className={p}>
          If Cywarden is involved in a merger, acquisition, bankruptcy, dissolution, reorganization, or similar transaction or proceeding, your information may be transferred as part of that transaction. We will provide notice before your information becomes subject to a different privacy policy.
        </p>

        <h3 className={`${h3} mt-6`}>5.5 Professional Advisors</h3>
        <p className={p}>
          We may share information with our legal, accounting, and consulting advisors as necessary to provide professional services.
        </p>

        <h3 className={`${h3} mt-6`}>5.6 Non-Sale of Personal Information</h3>
        <p className={p}>
          Cywarden does not sell your personal information to third parties for their independent marketing purposes. We are committed to protecting your privacy and do not engage in the sale of personal data as defined by applicable privacy laws such as CCPA and CPRA.
        </p>
      </section>

      <section id="international-transfers" aria-labelledby="intl-heading">
        <h2 id="intl-heading" className={h2}>
          6. International Data Transfers
        </h2>
        <p className={p}>
          Cywarden operates globally with offices in the United States, UAE, Australia, India, and Canada. Your personal information may be transferred to, stored in, and processed in countries other than your country of residence, which may have data protection laws that differ from those in your home country.
        </p>

        <h3 className={`${h3} mt-6`}>6.1 Standard Contractual Clauses (SCCs)</h3>
        <p className={p}>
          For transfers from the EU/EEA to jurisdictions without adequate privacy protections, we rely on Standard Contractual Clauses (SCCs) approved by the EU Commission as our transfer mechanism.
        </p>

        <h3 className={`${h3} mt-6`}>6.2 Adequacy Decisions</h3>
        <p className={p}>
          Where applicable, we rely on adequacy decisions recognizing that certain jurisdictions provide an adequate level of data protection equivalent to GDPR standards.
        </p>

        <h3 className={`${h3} mt-6`}>6.3 Binding Corporate Rules</h3>
        <p className={p}>
          Where applicable, we may implement Binding Corporate Rules (BCRs) to govern data transfers within the Cywarden group of companies.
        </p>

        <h3 className={`${h3} mt-6`}>6.4 Jurisdiction-Specific Transfer Mechanisms</h3>
        <p className={p}>
          For each jurisdiction in which we operate, we implement appropriate transfer mechanisms compliant with local data protection regulations to ensure your information remains protected.
        </p>
      </section>

      <section id="data-retention" aria-labelledby="retention-heading">
        <h2 id="retention-heading" className={h2}>
          7. Data Retention
        </h2>
        <p className={p}>
          We retain your personal information for as long as necessary to provide our services, fulfill the purposes outlined in this Privacy Policy, and comply with legal obligations.
        </p>

        <h3 className={`${h3} mt-6`}>7.1 Retention Periods by Data Type</h3>
        <div className="mt-4 overflow-x-auto rounded-lg border border-white/15">
          <table className="w-full min-w-[280px] border-collapse text-left text-sm text-white/85">
            <thead>
              <tr className="border-b border-white/15 bg-white/5">
                <th className="px-3 py-2.5 font-heading font-semibold text-white sm:px-4">Data Type</th>
                <th className="px-3 py-2.5 font-heading font-semibold text-white sm:px-4">Retention Period</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="px-3 py-2.5 sm:px-4">Contact Information</td>
                <td className="px-3 py-2.5 sm:px-4">3 years or as long as you are a customer</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-3 py-2.5 sm:px-4">Marketing Communications</td>
                <td className="px-3 py-2.5 sm:px-4">Until you unsubscribe</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-3 py-2.5 sm:px-4">Website Analytics</td>
                <td className="px-3 py-2.5 sm:px-4">13–26 months</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-3 py-2.5 sm:px-4">Cookies and Tracking Data</td>
                <td className="px-3 py-2.5 sm:px-4">As per Cookie Policy</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 sm:px-4">Job Applicants</td>
                <td className="px-3 py-2.5 sm:px-4">1 year after application</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={`${h3} mt-8`}>7.2 Criteria for Determining Retention</h3>
        <p className={p}>Retention periods are determined by:</p>
        <ul className={ul}>
          <li>The duration of our business relationship with you</li>
          <li>Legal and regulatory requirements</li>
          <li>The purpose for which we collected the data</li>
          <li>Our legitimate business interests</li>
        </ul>

        <h3 className={`${h3} mt-6`}>7.3 Deletion Upon Request</h3>
        <p className={p}>
          You may request deletion of your personal information at any time, subject to legal and contractual obligations. We will comply with deletion requests within applicable timeframes unless we are required to retain the data for legal, regulatory, or legitimate business purposes.
        </p>
      </section>

      <section id="your-rights" aria-labelledby="rights-heading">
        <h2 id="rights-heading" className={h2}>
          8. Your Privacy Rights
        </h2>
        <p className={p}>
          Depending on your jurisdiction, you may have certain rights regarding your personal information. We are committed to respecting these rights. To exercise any of the following rights, please contact us at{" "}
          <a href="mailto:privacy@cywarden.com" className="text-[#3BA3FF] underline decoration-[#3BA3FF]/40 underline-offset-2 hover:text-[#5eb5ff]">
            privacy@cywarden.com
          </a>
          .
        </p>

        <h3 className={`${h3} mt-6`}>8.1 Right to Access</h3>
        <p className={p}>You have the right to request access to the personal information we hold about you.</p>

        <h3 className={`${h3} mt-4`}>8.2 Right to Rectification</h3>
        <p className={p}>You have the right to request correction or update of inaccurate or incomplete personal information.</p>

        <h3 className={`${h3} mt-4`}>8.3 Right to Deletion</h3>
        <p className={p}>
          You have the right to request deletion of your personal information (right to be forgotten), subject to legal and contractual obligations that may require us to retain certain data.
        </p>

        <h3 className={`${h3} mt-4`}>8.4 Right to Data Portability</h3>
        <p className={p}>You have the right to request a copy of your personal information in a portable, commonly used, machine-readable format.</p>

        <h3 className={`${h3} mt-4`}>8.5 Right to Restrict Processing</h3>
        <p className={p}>
          You have the right to request restriction of processing of your personal information while we verify a dispute or determine the lawfulness of processing.
        </p>

        <h3 className={`${h3} mt-4`}>8.6 Right to Object</h3>
        <p className={p}>
          You have the right to object to processing of your personal information for marketing purposes or based on legitimate interests.
        </p>

        <h3 className={`${h3} mt-4`}>8.7 Right to Withdraw Consent</h3>
        <p className={p}>If we process your information based on consent, you have the right to withdraw that consent at any time.</p>

        <h3 className={`${h3} mt-4`}>8.8 Right to Lodge Complaints</h3>
        <p className={p}>
          You have the right to lodge a complaint with the data protection authority or supervisory authority in your jurisdiction regarding our processing of your personal information.
        </p>

        <h3 className={`${h3} mt-4`}>8.9 How to Exercise Your Rights</h3>
        <p className={p}>
          To exercise any of these rights, please send a written request to privacy@cywarden.com with details of your request and verification of your identity. We will respond within the timeframe required by applicable law (typically 30–45 days). In some cases, we may require additional information to verify your identity before processing your request.
        </p>
      </section>

      <section id="jurisdiction" aria-labelledby="jurisdiction-heading">
        <h2 id="jurisdiction-heading" className={h2}>
          9. Jurisdiction-Specific Provisions
        </h2>

        <h3 className={`${h3} mt-6`}>9.1 GDPR (European Union, European Economic Area, United Kingdom, and Switzerland)</h3>
        <p className={p}>
          If you are located in the EU, EEA, UK, or Switzerland, you have additional rights under the General Data Protection Regulation (GDPR) and equivalent laws. We process your personal information in compliance with GDPR principles, including lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, integrity, and confidentiality. You have the rights enumerated in Section 8 of this policy, including the right to access, rectify, delete, restrict, portability, and object to processing. For GDPR-related inquiries, you may contact our Data Protection Officer at {mail}. You also have the right to lodge a complaint with your local data protection authority.
        </p>

        <h3 className={`${h3} mt-8`}>9.2 CCPA and CPRA (California)</h3>
        <p className={p}>California residents have specific rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA). These rights include:</p>
        <ul className={ul}>
          <li>
            <strong className="text-white/90">Right to Know:</strong> You have the right to request what personal information we collect, use, share, and sell about you.
          </li>
          <li>
            <strong className="text-white/90">Right to Delete:</strong> You have the right to request deletion of personal information we have collected, subject to certain exceptions.
          </li>
          <li>
            <strong className="text-white/90">Right to Opt-Out:</strong> You have the right to opt out of the sale or sharing of your personal information for targeted advertising.
          </li>
          <li>
            <strong className="text-white/90">Right to Correct:</strong> You have the right to request correction of inaccurate personal information.
          </li>
          <li>
            <strong className="text-white/90">Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA/CPRA rights.
          </li>
          <li>
            <strong className="text-white/90">Authorized Agent:</strong> You may designate an authorized agent to make requests on your behalf.
          </li>
          <li>
            <strong className="text-white/90">No Sale of Personal Information:</strong> Cywarden does not sell personal information to third parties.
          </li>
        </ul>

        <h3 className={`${h3} mt-8`}>9.3 PIPEDA and Quebec Law 25 (Canada)</h3>
        <p className={p}>
          For Canadian residents, we comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) and Quebec&apos;s Law 25 (Bill 64). You have the right to access, correct, and request deletion of your personal information. You also have the right to know what information we collect, how it&apos;s used, and with whom it&apos;s shared. Quebec residents have additional rights under Law 25, including the right to object to processing. For privacy requests, contact {mail}.
        </p>

        <h3 className={`${h3} mt-8`}>9.4 DPDPA 2023 (India)</h3>
        <p className={p}>We comply with India&apos;s Digital Personal Data Protection Act, 2023. Cywarden acts as a Data Fiduciary and is committed to:</p>
        <ul className={ul}>
          <li>Processing personal data only with your consent</li>
          <li>Maintaining data accuracy and integrity</li>
          <li>Providing transparency in data collection and use</li>
          <li>Enabling your rights of access, correction, and erasure</li>
        </ul>
        <p className={p}>
          Our Data Protection Officer in India is responsible for handling grievances and data protection matters. Please send any complaints or inquiries to {mail} with reference to India DPO. Responses will be provided within 30 days.
        </p>

        <h3 className={`${h3} mt-8`}>9.5 UAE PDPL (United Arab Emirates)</h3>
        <p className={p}>
          We comply with the United Arab Emirates Personal Data Protection Law (Federal Decree-Law No. 45 of 2021). We ensure your personal information is processed fairly and transparently, used only for specified purposes, and protected from unauthorized access. You have rights to access, correct, and request deletion of your information. For PDPL-related inquiries in the UAE, contact our Privacy Team at {mail}.
        </p>

        <h3 className={`${h3} mt-8`}>9.6 Australian Privacy Act 1988 and APPs (Australia)</h3>
        <p className={p}>
          We comply with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). You have the right to access your personal information and request corrections. You can lodge a complaint with the Office of the Australian Information Commissioner (OAIC) regarding our handling of your personal data. For Australian residents, contact {mail} for privacy-related inquiries.
        </p>
      </section>

      <section id="security" aria-labelledby="security-heading">
        <h2 id="security-heading" className={h2}>
          10. Security Measures
        </h2>
        <p className={p}>
          Cywarden implements comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, and destruction. Our security practices include:
        </p>

        <h3 className={`${h3} mt-6`}>10.1 Encryption</h3>
        <ul className={ul}>
          <li>AES-256 encryption for data at rest</li>
          <li>TLS 1.2 or higher for data in transit</li>
        </ul>

        <h3 className={`${h3} mt-4`}>10.2 Access Controls</h3>
        <ul className={ul}>
          <li>Role-based access control (RBAC)</li>
          <li>Multi-factor authentication (MFA)</li>
          <li>Regular access reviews and privilege audits</li>
        </ul>

        <h3 className={`${h3} mt-4`}>10.3 Regular Security Assessments</h3>
        <ul className={ul}>
          <li>Annual penetration testing</li>
          <li>Vulnerability assessments and remediation</li>
          <li>Security audits by independent third parties</li>
        </ul>

        <h3 className={`${h3} mt-4`}>10.4 Incident Response</h3>
        <p className={p}>
          We maintain an incident response plan to detect, investigate, and respond to security breaches. In the event of a data breach affecting your personal information, we will notify you and relevant authorities as required by law.
        </p>

        <h3 className={`${h3} mt-4`}>10.5 Compliance Certifications</h3>
        <ul className={ul}>
          <li>SOC 2 Type II Compliance</li>
          <li>ISO 27001 Certification</li>
        </ul>

        <h3 className={`${h3} mt-4`}>10.6 Note on Security</h3>
        <p className={p}>
          While we implement industry-leading security measures, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your information, and you assume responsibility for maintaining the confidentiality of your access credentials.
        </p>
      </section>

      <section id="children" aria-labelledby="children-heading">
        <h2 id="children-heading" className={h2}>
          11. Children&apos;s Privacy
        </h2>
        <p className={p}>
          Cywarden&apos;s website and services are not directed to children under the age of 16, and we do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will promptly delete such information and terminate the child&apos;s account. If you believe we have collected information from a child under 16, please contact us immediately at {mail}.
        </p>
      </section>

      <section id="third-party" aria-labelledby="third-party-heading">
        <h2 id="third-party-heading" className={h2}>
          12. Third-Party Links and Content
        </h2>
        <p className={p}>
          Our website may contain links to third-party websites, applications, and services operated by companies not affiliated with Cywarden. This Privacy Policy applies only to information collected through our website and services. We are not responsible for the privacy practices of third-party websites, and we encourage you to review their privacy policies before providing your information. Your use of third-party websites is subject to their terms and conditions.
        </p>
      </section>

      <section id="dnt-gpc" aria-labelledby="dnt-heading">
        <h2 id="dnt-heading" className={h2}>
          13. Do Not Track and Global Privacy Control
        </h2>

        <h3 className={`${h3} mt-6`}>13.1 Do Not Track (DNT)</h3>
        <p className={p}>
          Some browsers include a &quot;Do Not Track&quot; (DNT) feature. Currently, we do not respond to or honor DNT browser signals as there is no industry-wide standard for recognizing DNT signals. However, you may use other tools to control cookies and tracking, such as browser settings and privacy extensions.
        </p>

        <h3 className={`${h3} mt-6`}>13.2 Global Privacy Control (GPC)</h3>
        <p className={p}>
          We honor Global Privacy Control (GPC) signals where required by applicable law. If you enable GPC in your browser or device, we will treat it as a request to opt out of the sale or sharing of personal information as applicable to your jurisdiction.
        </p>
      </section>

      <section id="changes" aria-labelledby="changes-heading">
        <h2 id="changes-heading" className={h2}>
          14. Changes to This Privacy Policy
        </h2>
        <p className={p}>
          We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, and other factors. When we make material changes, we will notify you by updating the &quot;Effective Date&quot; and, where required by law, we will obtain your consent or provide you with notice through our website or email. Your continued use of our website and services following the posting of revisions constitutes your acceptance of the revised Privacy Policy.
        </p>
      </section>

      <section id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className={h2}>
          15. Contact Us
        </h2>
        <p className={p}>If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:</p>
        <p className={`${p} mt-4 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4`}>
          <strong className="text-white">Cywarden, Inc. — Privacy Team</strong>
          <br />
          Email: {mail}
          <br />
          Headquarters: San Francisco, California
        </p>

        <h3 className={`${h3} mt-8`}>15.1 India — Data Protection Officer and Grievance Officer</h3>
        <p className={p}>
          For data protection inquiries specific to India under DPDPA 2023: Email {mail} (mark as &quot;DPO Request&quot;).
        </p>

        <h3 className={`${h3} mt-6`}>15.2 EU/UK/Switzerland — Representative</h3>
        <p className={p}>
          For data protection inquiries from EU/EEA, UK, and Swiss residents: Email {mail} (mark as &quot;GDPR Request&quot;).
        </p>

        <p className={p}>
          <strong className="text-white/90">California Residents:</strong> You may submit a request under CCPA/CPRA by emailing {mail} or using our online form at cywarden.com/privacy-request.
        </p>

        <p className={p}>
          <strong className="text-white/90">Response Time:</strong> We will respond to all privacy requests within the timeframe required by applicable law, typically 30–45 business days. We may request additional information to verify your identity and process your request.
        </p>

        <p className={`${p} mt-8 text-white/90`}>
          Thank you for trusting Cywarden with your information. We are committed to protecting your privacy and maintaining your trust.
        </p>
      </section>
      </div>

      <p className="mt-12 border-t border-white/10 pt-8 text-sm text-white/55">Last Updated: February 2026</p>
    </article>
  );
}
