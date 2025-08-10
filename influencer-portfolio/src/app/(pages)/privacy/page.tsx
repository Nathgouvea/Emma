export default function PrivacyPage() {
  return (
    <main className="pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-dancing-script text-dark mb-6">Privacy Policy</h1>
      <p className="text-dark/70 mb-4">
        We respect your privacy. This website does not collect personal data by default.
        If you contact us, we will use your information solely to respond to your inquiry.
      </p>
      <h2 className="text-2xl font-semibold text-dark mt-8 mb-3">Cookies</h2>
      <p className="text-dark/70 mb-4">
        We may use minimal analytics and functional cookies to improve your experience.
        You can control cookies through your browser settings.
      </p>
      <h2 className="text-2xl font-semibold text-dark mt-8 mb-3">Contact</h2>
      <p className="text-dark/70">
        For any privacy-related questions, contact us at
        <a className="text-coral-pink ml-1" href="mailto:hello@emma.com">hello@emma.com</a>.
      </p>
    </main>
  );
}
