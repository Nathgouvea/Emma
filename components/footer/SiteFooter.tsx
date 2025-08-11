export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Emma. All rights reserved.
          </p>
          <nav aria-label="Footer" className="text-sm">
            <ul className="flex items-center gap-4">
              <li>
                <a
                  href="#privacy"
                  className="text-neutral-600 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2 rounded"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-neutral-600 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2 rounded"
                >
                  Terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
