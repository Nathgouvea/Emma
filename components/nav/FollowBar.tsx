export default function FollowBar() {
  return (
    <div className="sticky top-0 z-30 w-full bg-gradient-to-r from-coral/10 via-ocean/10 to-sunrise/10 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 text-sm text-neutral-800">
        <span>Enjoying the vibe?</span>
        <a
          href="https://www.instagram.com/_emma_jo/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-neutral-300 px-3 py-1 font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
        >
          Follow on Instagram
        </a>
      </div>
    </div>
  );
}
