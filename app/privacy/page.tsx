import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Tiqni collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="19 June 2026">
      <p>
        Tiqni (&quot;Tiqni&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to
        protecting your personal information. This policy explains what we collect, how we use it,
        and the choices you have.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li><strong>Information you provide:</strong> name, email, phone, company, and message content when you contact us or request a consultation.</li>
        <li><strong>Usage data:</strong> anonymized analytics such as pages visited, browser type, and device, collected to improve our website.</li>
        <li><strong>Cookies:</strong> small files used to operate the site and understand usage. You can disable cookies in your browser.</li>
      </ul>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To respond to enquiries and provide consultations.</li>
        <li>To deliver and improve our services.</li>
        <li>To send relevant updates where you have consented.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>3. Legal basis</h2>
      <p>
        We process personal information on the basis of your consent, the performance of a contract,
        and our legitimate interests in operating and improving our business.
      </p>

      <h2>4. Sharing your information</h2>
      <p>
        We do not sell your personal information. We may share it with trusted service providers
        (e.g. hosting, email, analytics) who process it on our behalf under confidentiality
        obligations, or where required by law.
      </p>

      <h2>5. Data security</h2>
      <p>
        We use reasonable technical and organizational measures to protect your information. No
        method of transmission or storage is completely secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>6. Data retention</h2>
      <p>
        We keep personal information only as long as necessary for the purposes described here or as
        required by law, then delete or anonymize it.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Depending on your location, you may have the right to access, correct, delete, or restrict
        the use of your personal information, and to withdraw consent. Contact us to exercise these
        rights.
      </p>

      <h2>8. International transfers</h2>
      <p>
        Your information may be processed in countries other than your own. Where it is, we take
        steps to ensure appropriate safeguards are in place.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &quot;last updated&quot; date above reflects the
        latest version.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about this policy or your data? Email us at{" "}
        <a className="text-brand-600 underline" href="mailto:hello@tiqni.com">hello@tiqni.com</a>.
      </p>
    </LegalLayout>
  );
}
