import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the Tiqni website and services.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="19 June 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the Tiqni website and any services
        we provide. By using our website or engaging our services, you agree to these Terms.
      </p>

      <h2>1. Services</h2>
      <p>
        Tiqni provides software development and technology consulting services. The specific scope,
        deliverables, timeline, and fees for any engagement are defined in a separate written
        agreement or proposal.
      </p>

      <h2>2. Proposals and estimates</h2>
      <p>
        Estimates are based on the information available at the time and may change if scope or
        requirements change. No work begins until scope and terms are agreed in writing.
      </p>

      <h2>3. Fees and payment</h2>
      <ul>
        <li>Fees are set out in the applicable proposal or agreement.</li>
        <li>Invoices are payable within the period stated on the invoice.</li>
        <li>Late payments may incur interest or pause active work.</li>
      </ul>

      <h2>4. Intellectual property</h2>
      <p>
        Upon full payment, ownership of custom deliverables transfers to the client, except for
        third-party components and Tiqni&apos;s pre-existing tools, libraries, and know-how, which
        remain ours and are licensed to you as needed to use the deliverables.
      </p>

      <h2>5. Client responsibilities</h2>
      <p>
        You agree to provide timely access, information, feedback, and approvals reasonably required
        for us to perform the services.
      </p>

      <h2>6. Confidentiality</h2>
      <p>
        Each party agrees to keep the other&apos;s confidential information private and to use it only
        for the purpose of the engagement.
      </p>

      <h2>7. Warranties and disclaimers</h2>
      <p>
        We perform our services with reasonable skill and care. Except as expressly stated, the
        website and services are provided &quot;as is&quot; without warranties of any kind to the extent
        permitted by law.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Tiqni is not liable for indirect, incidental, or
        consequential damages. Our total liability for any engagement is limited to the fees paid
        for that engagement.
      </p>

      <h2>9. Termination</h2>
      <p>
        Either party may terminate an engagement as set out in the applicable agreement. You remain
        responsible for fees for work performed up to termination.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These Terms are governed by the laws of Australia, and the courts of Australia have
        non-exclusive jurisdiction over any disputes. (Adjust to your jurisdiction.)
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
        <a className="text-brand-600 underline" href="mailto:hello@tiqni.com">hello@tiqni.com</a>.
      </p>
    </LegalLayout>
  );
}
