import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At MechKeyMart, we are committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, disclose, and safeguard
        your information when you visit our website. Please read this Privacy
        Policy carefully.
      </p>
      <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
      <p className="mb-4">
        We may collect information about you in a variety of ways. The
        information we may collect on the Site includes:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Personal Data</li>
        <li>Derivative Data</li>
        <li>Financial Data</li>
        <li>Social Media Data</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Use of Your Information</h2>
      <p className="mb-4">
        Having accurate information about you permits us to provide you with a
        smooth, efficient, and customized experience. Specifically, we may use
        information collected about you via the Site to:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Assist law enforcement and respond to subpoenas.</li>
        <li>
          Compile anonymous statistical data and analysis for use internally or
          with a third party.
        </li>
        <li>Create and manage your account.</li>
        <li>
          Deliver targeted advertising, coupons, newsletters, and other
          information regarding promotions and the Site to you.
        </li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">
        Disclosure of Your Information
      </h2>
      <p className="mb-4">
        We may share information we have collected about you in certain
        situations. Your information may be disclosed as follows:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>By Law or to Protect Rights</li>
        <li>Business Transfers</li>
        <li>Third-Party Service Providers</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">
        Security of Your Information
      </h2>
      <p className="mb-4">
        We use administrative, technical, and physical security measures to help
        protect your personal information. While we have taken reasonable steps
        to secure the personal information you provide to us, please be aware
        that despite our efforts, no security measures are perfect or
        impenetrable.
      </p>
      <h2 className="text-xl font-semibold mb-2">Policy for Children</h2>
      <p className="mb-4">
        We do not knowingly solicit information from or market to children under
        the age of 13. If we learn that we have collected personal information
        from a child under age 13 without verification of parental consent, we
        will delete that information as quickly as possible.
      </p>
      <h2 className="text-xl font-semibold mb-2">
        Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time in order to reflect,
        for example, changes to our practices or for other operational, legal,
        or regulatory reasons.
      </p>
      <p className="mb-4">
        You are encouraged to review this Privacy Policy periodically to stay
        informed of updates. Your continued use of the Site after the posting of
        any changes to this Privacy Policy will constitute your acceptance of
        such changes.
      </p>
      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have questions or comments about this Privacy Policy, please
        contact us at:
      </p>
      <address className="mb-4">
        <p>Email: support@mechkeymart.com</p>
        <p>Address: 1234 Keyboard Lane, Typetown, TK 56789</p>
      </address>
    </div>
  );
};

export default PrivacyPolicy;
