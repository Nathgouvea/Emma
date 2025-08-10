export default function TermsPage() {
  return (
    <main className="pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-dancing-script text-dark mb-6">Terms of Service</h1>
      <p className="text-dark/70 mb-4">
        By accessing this website, you agree to use the content for personal and
        non-commercial purposes. All content is provided "as is" without warranties.
      </p>
      <h2 className="text-2xl font-semibold text-dark mt-8 mb-3">Intellectual Property</h2>
      <p className="text-dark/70 mb-4">
        All trademarks, logos, and content are the property of their respective owners.
        Do not reproduce or redistribute without permission.
      </p>
      <h2 className="text-2xl font-semibold text-dark mt-8 mb-3">Contact</h2>
      <p className="text-dark/70">
        Questions about these terms? Contact
        <a className="text-coral-pink ml-1" href="mailto:hello@emma.com">hello@emma.com</a>.
      </p>
    </main>
  );
}