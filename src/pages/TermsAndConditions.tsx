import { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to MechKeyMart! These terms and conditions outline the rules and
        regulations for the use of MechKeyMart's Website, located at
        www.mechkeymart.com.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing this website, you agree to be bound by these website Terms
        and Conditions and agree that you are responsible for compliance with
        any applicable local laws. If you do not agree with any of these terms,
        you are prohibited from using or accessing this site.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Intellectual Property</h2>
      <p className="mb-4">
        The website and its content, features, and functionality are owned by
        MechKeyMart and are protected by copyright, trademark, and other laws.
        You may not copy, reproduce, distribute, or create derivative works from
        any content on the site without our express written permission.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
      <p className="mb-4">
        Users must use the website for lawful purposes and in accordance with
        these Terms and Conditions. You agree not to engage in any activity that
        disrupts or interferes with the functioning of the website or the
        servers and networks connected to it.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Accounts</h2>
      <p className="mb-4">
        To access certain features of the site, you may be required to create an
        account. You are responsible for maintaining the confidentiality of your
        account credentials and for all activities that occur under your
        account. You agree to notify us immediately of any unauthorized use of
        your account.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Purchase Terms</h2>
      <p className="mb-4">
        All purchases made through the website are subject to our Sales Terms.
        By placing an order, you agree to pay the specified price and any
        applicable taxes and shipping fees. We reserve the right to refuse or
        cancel any orders at our discretion.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
      <p className="mb-4">
        To the fullest extent permitted by law, MechKeyMart shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages arising from or related to your use of the website or any
        services provided. Our total liability for any claim related to the use
        of the website shall not exceed the amount paid by you, if any, for
        accessing the website.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms and Conditions from time to time. Any changes
        will be posted on this page, and it is your responsibility to review
        these terms periodically. Your continued use of the website after any
        changes constitutes acceptance of those changes.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
      <p className="mb-4">
        These Terms and Conditions shall be governed by and construed in
        accordance with the laws of the jurisdiction in which MechKeyMart
        operates, without regard to its conflict of law principles.
      </p>

      <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms and Conditions, please
        contact us at:
      </p>
      <address className="mb-4">
        <p>Email: support@mechkeymart.com</p>
        <p>Address: 1234 Keyboard Lane, Typetown, TK 56789</p>
      </address>
    </div>
  );
};

export default TermsAndConditions;
