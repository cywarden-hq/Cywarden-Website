import { LegalTocNav } from "@/components/LegalTocNav";

const h1 = "font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl";
const sub = "mt-2 text-sm text-white/60 sm:text-base";

const h2 = "font-heading text-xl font-semibold tracking-tight text-[#3BA3FF] sm:text-2xl scroll-mt-28";
const h3 = "font-heading text-lg font-semibold text-white sm:text-xl";
const p = "mt-3 text-sm leading-relaxed text-white/80 sm:text-base";
const ul = "mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-white/80 sm:text-base";

const legalMail = (
  <a
    href="mailto:legal@cywarden.com"
    className="text-[#3BA3FF] underline decoration-[#3BA3FF]/40 underline-offset-2 hover:text-[#5eb5ff]"
  >
    legal@cywarden.com
  </a>
);

export function TermsOfUse() {
  return (
    <article className="min-w-0">
      <header className="border-b border-white/10 pb-8">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[#3BA3FF]">
          Cywarden, Inc.
        </p>
        <h1 className={h1}>Terms of Use</h1>
        <p className={sub}>February 2026</p>
        <p className="mt-4 inline-block rounded border border-[#3BA3FF]/40 bg-[#3BA3FF]/10 px-3 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-[#3BA3FF]">
          Confidential
        </p>
      </header>

      <LegalTocNav className="border-b border-white/10 py-8" aria-label="Table of contents">
        <h2 className="font-heading text-lg font-semibold text-white">Table of Contents</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-white/85 sm:text-base">
          <li>
            <a href="#acceptance" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Acceptance of Terms
            </a>
          </li>
          <li>
            <a href="#changes" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Changes to Terms
            </a>
          </li>
          <li>
            <a href="#description" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Description of Services
            </a>
          </li>
          <li>
            <a href="#account" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Account Registration and Portal Access
            </a>
          </li>
          <li>
            <a href="#permitted" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Permitted Use
            </a>
          </li>
          <li>
            <a href="#prohibited" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Prohibited Conduct
            </a>
          </li>
          <li>
            <a href="#ip" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Intellectual Property Rights
            </a>
          </li>
          <li>
            <a href="#user-content" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              User Content and Submissions
            </a>
          </li>
          <li>
            <a href="#confidentiality" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Confidentiality
            </a>
          </li>
          <li>
            <a href="#third-party" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Third-Party Links and Content
            </a>
          </li>
          <li>
            <a href="#disclaimers" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Disclaimers and Warranties
            </a>
          </li>
          <li>
            <a href="#liability" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Limitation of Liability
            </a>
          </li>
          <li>
            <a href="#indemnification" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Indemnification
            </a>
          </li>
          <li>
            <a href="#governing-law" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Governing Law and Dispute Resolution
            </a>
          </li>
          <li>
            <a href="#termination" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Termination
            </a>
          </li>
          <li>
            <a href="#export" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Export Controls and Sanctions
            </a>
          </li>
          <li>
            <a href="#severability" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Severability
            </a>
          </li>
          <li>
            <a href="#entire-agreement" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Entire Agreement
            </a>
          </li>
          <li>
            <a href="#waiver" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Waiver
            </a>
          </li>
          <li>
            <a href="#assignment" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Assignment
            </a>
          </li>
          <li>
            <a href="#force-majeure" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Force Majeure
            </a>
          </li>
          <li>
            <a href="#contact" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Contact Information
            </a>
          </li>
        </ol>
      </LegalTocNav>

      <div className="space-y-10 pt-10">
        <section id="acceptance" aria-labelledby="acceptance-heading">
          <h2 id="acceptance-heading" className={h2}>
            1. Acceptance of Terms
          </h2>
          <p className={p}>
            These Terms of Use (&quot;Terms&quot;) govern your access to and use of the Cywarden, Inc. website located at
            cywarden.com (the &quot;Site&quot;) and any services, resources, and content available through the Site. By
            accessing, browsing, or using the Site in any manner, you agree to be bound by these Terms. If you do not
            agree to these Terms, you may not access or use the Site.
          </p>
          <p className={p}>
            You represent and warrant that you are at least 18 years of age and possess the legal authority to enter into
            this agreement. If you are accessing the Site on behalf of an organization or entity, you represent and warrant
            that you have the authority to bind such organization or entity to these Terms.
          </p>
        </section>

        <section id="changes" aria-labelledby="changes-heading">
          <h2 id="changes-heading" className={h2}>
            2. Changes to Terms
          </h2>
          <p className={p}>
            Cywarden reserves the right to modify these Terms at any time without prior notice. Material changes to these
            Terms will be communicated to users via email or prominent notice on the Site. Your continued use of the Site
            after any such modifications constitutes your acceptance of the modified Terms. It is your responsibility to
            review these Terms periodically for updates.
          </p>
        </section>

        <section id="description" aria-labelledby="description-heading">
          <h2 id="description-heading" className={h2}>
            3. Description of Services
          </h2>
          <p className={p}>
            The Site provides information and resources regarding Cywarden&apos;s cybersecurity and cloud security
            services, including threat detection, incident response, cloud security, identity management, penetration
            testing, vulnerability assessments, risk assessments, compliance and governance services, Security Operations
            Center (SOC) and Managed Detection and Response (MDR) services, DevSecOps consulting, AI security solutions,
            merger and acquisition cyber due diligence, and identity security services (including Identity and Access
            Management (IAM), Privileged Access Management (PAM), Cloud Infrastructure Entitlement Management (CIEM), and
            Multi-Factor Authentication (MFA) solutions).
          </p>
          <p className={p}>
            The Site allows you to: (a) access informational content about Cywarden services; (b) request information about
            services through contact forms; (c) download resources, white papers, case studies, and other materials; (d)
            access blogs, insights, and industry news; and (e) inquire about service engagement. The Site is informational
            in nature and does not constitute the delivery of professional services. Any professional services are
            governed by separate service agreements between Cywarden and the client.
          </p>
        </section>

        <section id="account" aria-labelledby="account-heading">
          <h2 id="account-heading" className={h2}>
            4. Account Registration and Portal Access
          </h2>

          <h3 className={`${h3} mt-6`}>4.1 Registration Requirements</h3>
          <p className={p}>
            To access certain gated content or portal features on the Site, you may be required to create an account and
            provide accurate, complete, and current information as requested by the registration form. You agree to
            maintain the accuracy of your account information and notify Cywarden of any changes.
          </p>

          <h3 className={`${h3} mt-4`}>4.2 Account Security</h3>
          <p className={p}>
            You are solely responsible for maintaining the confidentiality of your account credentials, including your
            username, password, and any login codes provided. You agree not to share your account credentials with third
            parties. Cywarden will not be liable for any unauthorized access to your account resulting from your disclosure
            of credentials to others or your failure to maintain adequate security measures.
          </p>

          <h3 className={`${h3} mt-4`}>4.3 Unauthorized Access</h3>
          <p className={p}>
            You must notify Cywarden immediately of any unauthorized access to your account or any suspected breach of
            security. Cywarden is not responsible for any losses or damages arising from unauthorized use of your account
            if you have failed to notify Cywarden promptly.
          </p>

          <h3 className={`${h3} mt-4`}>4.4 Account Suspension and Termination</h3>
          <p className={p}>
            Cywarden reserves the right to suspend or terminate your account at any time with or without cause and with or
            without notice. Upon termination, all information associated with your account, including any downloaded or
            uploaded content, may be deleted and is not recoverable.
          </p>
        </section>

        <section id="permitted" aria-labelledby="permitted-heading">
          <h2 id="permitted-heading" className={h2}>
            5. Permitted Use
          </h2>
          <p className={p}>You may use the Site solely for the following purposes:</p>
          <ul className={ul}>
            <li>To access and review informational content on the Site for personal, non-commercial educational purposes</li>
            <li>To evaluate Cywarden services for potential business engagement within your organization</li>
            <li>
              To download and use resources, tools, and materials for legitimate business purposes within your organization
            </li>
            <li>To contact Cywarden regarding inquiries about services</li>
            <li>To access portal content as explicitly authorized by Cywarden</li>
          </ul>
        </section>

        <section id="prohibited" aria-labelledby="prohibited-heading">
          <h2 id="prohibited-heading" className={h2}>
            6. Prohibited Conduct
          </h2>
          <p className={p}>
            You agree not to engage in any of the following prohibited conduct when accessing or using the Site:
          </p>
          <ul className={ul}>
            <li>
              Attempting to gain unauthorized access to the Site, portal systems, or restricted content through hacking,
              password guessing, or other means
            </li>
            <li>Interfering with or disrupting the normal operation of the Site or its servers</li>
            <li>
              Scraping, data mining, harvesting, or using automated tools to extract or collect data from the Site without
              authorization
            </li>
            <li>Reverse engineering, decompiling, or attempting to derive source code or underlying technology</li>
            <li>Impersonating any person or entity or misrepresenting your affiliation with any organization</li>
            <li>Uploading, posting, or transmitting malware, viruses, or any code of destructive or malicious nature</li>
            <li>Using the Site in violation of applicable laws, regulations, or third-party rights</li>
            <li>
              Using information from the Site for competitive intelligence purposes beyond what is permitted under fair use
              doctrine
            </li>
            <li>Circumventing, disabling, or tampering with access controls, authentication mechanisms, or security features</li>
            <li>Engaging in any form of harassment, abuse, or threatening behavior toward Cywarden staff or other users</li>
          </ul>
        </section>

        <section id="ip" aria-labelledby="ip-heading">
          <h2 id="ip-heading" className={h2}>
            7. Intellectual Property Rights
          </h2>
          <p className={p}>
            All content, materials, text, software, code, design, graphics, images, videos, trademarks, service marks,
            logos, and other intellectual property displayed on the Site (&quot;Content&quot;) are owned by Cywarden, Inc.,
            or licensed to Cywarden by third-party rights holders. All such Content is protected by copyright, trademark,
            and other applicable intellectual property laws.
          </p>
          <p className={p}>
            Cywarden grants you a limited, non-exclusive, non-transferable, and revocable license to access and view the
            Content solely for your personal, non-commercial evaluation of Cywarden services. This license does not permit
            you to modify, reproduce, distribute, transmit, perform, display, or create derivative works from any Content
            without Cywarden&apos;s prior written consent.
          </p>
          <p className={p}>
            All rights to the Content and the Site not expressly granted herein are retained by Cywarden. The Site and its
            Content are not licensed or sold to you; you are granted only a revocable, limited right to access them.
            Third-party materials and partner logos used on the Site are used under license and are the property of their
            respective owners.
          </p>
        </section>

        <section id="user-content" aria-labelledby="user-content-heading">
          <h2 id="user-content-heading" className={h2}>
            8. User Content and Submissions
          </h2>
          <p className={p}>
            If you submit, post, or transmit any content to the Site through contact forms, feedback mechanisms, portal
            uploads, or other user submission features (&quot;User Content&quot;), you hereby grant Cywarden a
            non-exclusive, worldwide, royalty-free, perpetual, and irrevocable license to use, reproduce, modify, adapt, and
            distribute such User Content for any purpose, including internal business purposes, marketing, and service
            improvement.
          </p>
          <p className={p}>
            Cywarden is under no obligation to maintain the confidentiality of unsolicited submissions or to compensate you
            for the use of such submissions. By submitting User Content, you represent and warrant that: (a) you own or
            have obtained all necessary rights to the submission; (b) the submission does not infringe any third-party
            intellectual property rights; and (c) you have the right to grant the license described above.
          </p>
        </section>

        <section id="confidentiality" aria-labelledby="confidentiality-heading">
          <h2 id="confidentiality-heading" className={h2}>
            9. Confidentiality
          </h2>
          <p className={p}>
            Information accessed through the Site, particularly content in gated portal areas or restricted sections, may
            contain confidential or proprietary information. You acknowledge that such information is confidential and
            proprietary to Cywarden or its business partners. You agree not to share, disclose, transmit, or provide such
            confidential information to any third party without Cywarden&apos;s prior written consent.
          </p>
          <p className={p}>
            You agree to use confidential information accessed on the Site solely for the purposes of evaluating Cywarden
            services and conducting legitimate business operations. Use is limited to internal business purposes, accounting,
            license tracking, and internal governance. Any unauthorized disclosure of confidential information may result in
            legal action and liability.
          </p>
        </section>

        <section id="third-party" aria-labelledby="third-party-heading">
          <h2 id="third-party-heading" className={h2}>
            10. Third-Party Links and Content
          </h2>
          <p className={p}>
            The Site may contain links to third-party websites, resources, and content from parties that are not affiliated
            with Cywarden. Cywarden does not control, endorse, or assume responsibility for such third-party content or
            websites. Your use of third-party websites and content is subject to their terms of service and privacy policies.
            Cywarden shall not be liable for any damages, losses, or claims arising from your access to or use of third-party
            content or websites.
          </p>
          <p className={p}>
            Cywarden may display logos, names, and materials from technology partners (including Google Cloud, Microsoft,
            CrowdStrike, AWS, and Palo Alto Networks) under license agreements. Such partner content and logos are used with
            authorization and remain the property of the respective partners.
          </p>
        </section>

        <section id="disclaimers" aria-labelledby="disclaimers-heading">
          <h2 id="disclaimers-heading" className={h2}>
            11. Disclaimers and Warranties
          </h2>

          <h3 className={`${h3} mt-6`}>Disclaimer of warranties</h3>
          <p className={p}>
            The Site and all Content are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranties of any
            kind, either express or implied. Cywarden disclaims all warranties, including but not limited to: (a)
            warranties of merchantability, fitness for a particular purpose, and non-infringement; (b) warranties regarding
            the accuracy, completeness, reliability, or timeliness of any Content; (c) warranties of uninterrupted,
            error-free, or secure operation of the Site; and (d) warranties that any defects will be corrected.
          </p>

          <h3 className={`${h3} mt-6`}>Security disclaimer</h3>
          <p className={p}>
            While Cywarden implements reasonable security measures to protect the Site and information accessed through it,
            no security system is impenetrable. Cywarden does not warrant or guarantee that the Site or information
            transmitted through it is secure, protected from all threats, or free from vulnerabilities. Users access the Site
            at their own risk.
          </p>

          <h3 className={`${h3} mt-6`}>Cybersecurity services disclaimer</h3>
          <p className={p}>
            The Site provides information about cybersecurity services. Cywarden does not guarantee that any cybersecurity
            service or solution will prevent all security threats, breaches, or attacks. The effectiveness of security
            measures depends on numerous factors, including implementation, organizational practices, and the evolving threat
            landscape.
          </p>

          <h3 className={`${h3} mt-6`}>Professional services disclaimer</h3>
          <p className={p}>
            Any professional services provided by Cywarden are governed by separate service agreements. Professional services
            are not provided through the Site and are not subject to these Terms. Professional services are subject to
            their own warranties and limitations as set forth in the applicable service agreement.
          </p>
        </section>

        <section id="liability" aria-labelledby="liability-heading">
          <h2 id="liability-heading" className={h2}>
            12. Limitation of Liability
          </h2>
          <p className={p}>
            To the fullest extent permitted by applicable law, in no event shall Cywarden be liable for any indirect,
            incidental, special, consequential, punitive, or exemplary damages, including but not limited to damages for
            lost profits, loss of data, loss of business opportunity, or business interruption, even if Cywarden has been
            advised of the possibility of such damages.
          </p>
          <p className={p}>
            <strong className="text-white/90">Limitation on total liability:</strong> Your exclusive remedy for any claim
            related to the Site or these Terms shall be limited to the greater of: (a) one hundred dollars ($100 USD); or
            (b) the total amount paid by you to Cywarden in the twelve (12) months preceding the claim. This limitation
            applies to all claims arising from your use of or inability to use the Site, regardless of the legal theory
            (contract, tort, strict liability, or otherwise) upon which the claim is based.
          </p>
          <p className={p}>
            Some jurisdictions do not permit the limitation or exclusion of liability for certain damages. In such
            jurisdictions, the above limitations may not apply, and liability may be limited to the maximum extent permitted
            by law.
          </p>
        </section>

        <section id="indemnification" aria-labelledby="indemnification-heading">
          <h2 id="indemnification-heading" className={h2}>
            13. Indemnification
          </h2>
          <p className={p}>
            You agree to defend, indemnify, and hold harmless Cywarden, its officers, directors, employees, and agents from
            and against any and all claims, demands, damages, losses, liabilities, and expenses (including reasonable
            attorneys&apos; fees) arising out of or relating to: (a) your use of or access to the Site; (b) your violation of
            these Terms; (c) your violation of any applicable law, regulation, or third-party right; or (d) any User Content
            you submit to the Site. Cywarden reserves the right to assume the defense of any such claim with counsel of its
            choosing.
          </p>
        </section>

        <section id="governing-law" aria-labelledby="governing-law-heading">
          <h2 id="governing-law-heading" className={h2}>
            14. Governing Law and Dispute Resolution
          </h2>

          <h3 className={`${h3} mt-6`}>14.1 Governing Law</h3>
          <p className={p}>
            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United
            States, without regard to its conflicts of law principles. The application of the United Nations Convention on
            Contracts for the International Sale of Goods is expressly excluded.
          </p>

          <h3 className={`${h3} mt-6`}>14.2 Jurisdiction and Venue</h3>
          <p className={p}>
            <strong className="text-white/90">For users located in the United States:</strong> You agree that the state
            and federal courts located in Delaware shall have exclusive jurisdiction over any disputes arising from these
            Terms. You consent to the personal jurisdiction and venue of such courts and waive any objection to venue or
            claim of inconvenient forum.
          </p>
          <p className={p}>
            <strong className="text-white/90">For users located outside the United States:</strong> Cywarden recognizes that
            certain jurisdictions require local dispute resolution. Accordingly:
          </p>
          <ul className={ul}>
            <li>
              <strong className="text-white/90">UAE Users:</strong> The Dubai International Financial Centre (DIFC) Courts
              shall have jurisdiction over disputes.
            </li>
            <li>
              <strong className="text-white/90">Australia Users:</strong> The Federal Court of Australia shall have
              jurisdiction.
            </li>
            <li>
              <strong className="text-white/90">India Users:</strong> Courts located in Mumbai shall have jurisdiction.
            </li>
            <li>
              <strong className="text-white/90">Canada Users:</strong> Courts located in Ontario shall have jurisdiction.
            </li>
          </ul>

          <h3 className={`${h3} mt-6`}>14.3 Mandatory Arbitration</h3>
          <p className={p}>
            For disputes arising from your use of the Site, users located in the United States agree to submit disputes to
            binding arbitration administered by JAMS (Judicial Arbitration and Mediation Services), except for small claims.
            The arbitration shall be conducted in accordance with JAMS Comprehensive Arbitration Rules &amp; Procedures.
            Either party may seek injunctive relief in court to prevent infringement of intellectual property rights or to
            enforce confidentiality obligations.
          </p>

          <h3 className={`${h3} mt-6`}>14.4 Class Action Waiver</h3>
          <p className={p}>
            To the extent permitted by law, you agree that you will not pursue claims against Cywarden on a class action,
            class representative, or collective basis. You agree to bring claims only in your individual capacity and not on
            behalf of any other person or entity. Where permitted by applicable law, any arbitration will be conducted on an
            individual basis only, not as a class action, collective action, or representative action.
          </p>

          <h3 className={`${h3} mt-6`}>14.5 Small Claims Exception</h3>
          <p className={p}>
            Notwithstanding the above, you may pursue disputes in small claims court if your claim meets the jurisdictional
            requirements for such court and does not involve multiple claimants or seek class relief.
          </p>
        </section>

        <section id="termination" aria-labelledby="termination-heading">
          <h2 id="termination-heading" className={h2}>
            15. Termination
          </h2>
          <p className={p}>
            Cywarden may terminate your access to and use of the Site at any time without cause and without prior notice or
            liability. You may terminate your account and cease using the Site at any time by ceasing all access and use of
            the Site.
          </p>
          <p className={p}>
            Upon termination, whether initiated by Cywarden or you, all information associated with your account and any
            User Content provided by you may be deleted and is not recoverable. You are responsible for backing up any
            information you wish to retain.
          </p>
          <p className={p}>
            The following provisions shall survive termination: Intellectual Property Rights, User Content and Submissions,
            Confidentiality, Disclaimers and Warranties, Limitation of Liability, Indemnification, Governing Law and Dispute
            Resolution, and any other provisions that by their nature are intended to survive.
          </p>
        </section>

        <section id="export" aria-labelledby="export-heading">
          <h2 id="export-heading" className={h2}>
            16. Export Controls and Sanctions
          </h2>
          <p className={p}>
            The Site and its Content are subject to U.S. export control laws and regulations, including the Export
            Administration Regulations (EAR) and the International Traffic in Arms Regulations (ITAR). You agree to comply
            with all applicable export control laws and regulations, including those of the United States, and not to
            export or re-export any material from the Site or information regarding Cywarden services to any country in
            violation of such laws.
          </p>
          <p className={p}>
            You further agree to comply with the Office of Foreign Assets Control (OFAC) sanctions requirements and certify
            that you are not located in, and do not have a business affiliation with any entity located in, any country
            subject to U.S. economic embargo or sanctions. You represent that you are not on any U.S. government list of
            prohibited parties, including the Specially Designated Nationals (SDN) list, the Denied Parties List (DPL), or the
            Entity List.
          </p>
        </section>

        <section id="severability" aria-labelledby="severability-heading">
          <h2 id="severability-heading" className={h2}>
            17. Severability
          </h2>
          <p className={p}>
            If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent
            jurisdiction, such provision shall be severed, and the remaining provisions shall continue in full force and
            effect to the maximum extent permitted by law. The severed provision shall be modified to the minimum extent
            necessary to make it enforceable while preserving the original intent of the parties.
          </p>
        </section>

        <section id="entire-agreement" aria-labelledby="entire-agreement-heading">
          <h2 id="entire-agreement-heading" className={h2}>
            18. Entire Agreement
          </h2>
          <p className={p}>
            These Terms of Use, together with Cywarden&apos;s Privacy Policy and Cookie Policy, constitute the complete and
            exclusive agreement between you and Cywarden regarding your use of the Site. These Terms supersede all prior
            agreements, understandings, and negotiations regarding the subject matter, whether written or oral. If you have
            entered into a separate service agreement with Cywarden for professional services, such service agreement shall
            govern those services and shall be in addition to these Terms.
          </p>
        </section>

        <section id="waiver" aria-labelledby="waiver-heading">
          <h2 id="waiver-heading" className={h2}>
            19. Waiver
          </h2>
          <p className={p}>
            Cywarden&apos;s failure to enforce any provision of these Terms shall not constitute a waiver of that provision
            or any other provision. Any waiver of a provision of these Terms must be in writing and signed by an authorized
            representative of Cywarden to be effective.
          </p>
        </section>

        <section id="assignment" aria-labelledby="assignment-heading">
          <h2 id="assignment-heading" className={h2}>
            20. Assignment
          </h2>
          <p className={p}>
            Cywarden may assign or transfer these Terms and its rights and obligations hereunder to any third party,
            including any successor or affiliate, without restriction and without prior notice to you. You may not assign or
            transfer these Terms or your rights hereunder to any third party without Cywarden&apos;s prior written consent.
            Any attempted assignment in violation of this provision shall be void.
          </p>
        </section>

        <section id="force-majeure" aria-labelledby="force-majeure-heading">
          <h2 id="force-majeure-heading" className={h2}>
            21. Force Majeure
          </h2>
          <p className={p}>
            Cywarden shall not be liable for any failure or delay in performing its obligations hereunder if such failure or
            delay results from events or circumstances beyond its reasonable control, including but not limited to acts of
            God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods,
            accidents, epidemics, pandemics, strikes, labor disputes, or Internet disruptions. Cywarden shall make reasonable
            efforts to notify you of any such event and shall resume performance as soon as reasonably practicable.
          </p>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className={h2}>
            22. Contact Information
          </h2>
          <p className={p}>
            If you have questions, concerns, or requests regarding these Terms of Use, please contact Cywarden at:
          </p>
          <p className={`${p} mt-4`}>
            <strong className="text-white/90">Cywarden, Inc.</strong>
            <br />
            San Francisco, California, United States
            <br />
            Email: {legalMail}
            <br />
            Website:{" "}
            <a
              href="https://www.cywarden.com"
              className="text-[#3BA3FF] underline decoration-[#3BA3FF]/40 underline-offset-2 hover:text-[#5eb5ff]"
            >
              www.cywarden.com
            </a>
          </p>
          <p className={p}>
            <strong className="text-white/90">Effective Date:</strong> February 2026
            <br />
            <strong className="text-white/90">Last Updated:</strong> February 26, 2026
          </p>
        </section>
      </div>
    </article>
  );
}
