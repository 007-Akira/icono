export function ServiceIntro({ children }: { children: React.ReactNode }) {
  return (
    <section className="page-shell pb-20 md:pb-28">
      <p className="display mx-auto max-w-4xl text-center text-2xl leading-relaxed text-olive md:text-3xl">
        {children}
      </p>
    </section>
  );
}
