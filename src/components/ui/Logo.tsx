export default function Logo() {
  return (
    <div className="hidden lg:flex shrink-0 items-center gap-4 text-white font-semibold text-2xl">
      <img
        className="hidden h-8 w-auto lg:inline"
        src="/icons/logo.svg"
        alt="Three, different orange hue colored vertical lines."
      />
      Kanban
    </div>
  );
}
