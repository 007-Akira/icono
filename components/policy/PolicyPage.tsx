import { business } from "@/data/business";
import type { PolicyPageData } from "@/data/policies";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

function Contents({ sections }: { sections: PolicyPageData["sections"] }) {
  return (
    <nav aria-label="On this page">
      <p className="eyebrow text-olive">Contents</p>
      <ol className="mt-5 space-y-3 text-sm leading-6">
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="text-olive transition-colors hover:text-smoke">
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// All legal and support pages share this structure. Their editable copy is kept
// in data/policies.ts so layout changes do not need to be repeated per route.
export function PolicyPage({ policy }: { policy: PolicyPageData }) {
  return (
    <>
      <header className="border-b border-olive/20 bg-bone/30 pb-16 pt-36 sm:pb-20 sm:pt-44">
        <div className="page-shell">
          <p className="eyebrow text-olive">Information &amp; Policies</p>
          <h1 className="display mt-5 max-w-5xl text-5xl leading-none sm:text-7xl">
            {policy.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-olive">{policy.description}</p>
          <p className="eyebrow mt-9 border-l border-olive/40 pl-4 text-olive">{policy.status}</p>
        </div>
      </header>
      <div className="page-shell py-16 md:py-24">
        <details className="mb-14 border-y border-olive/25 py-5 lg:hidden">
          <summary className="eyebrow cursor-pointer text-olive">On this page</summary>
          <div className="pt-5">
            <Contents sections={policy.sections} />
          </div>
        </details>
        <div className="grid gap-16 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <Contents sections={policy.sections} />
            </div>
          </aside>
          <article className="max-w-4xl lg:col-span-8 lg:col-start-5">
            {policy.sections.map((section, index) => (
              <section
                id={section.id}
                key={section.id}
                className={`${index ? "mt-14 border-t border-olive/20 pt-14" : ""} scroll-mt-32`}
              >
                <p className="eyebrow text-olive">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="display mt-3 text-3xl sm:text-4xl">{section.title}</h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-olive sm:text-[1.0625rem]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="list-disc space-y-2 pl-6">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.notice ? (
                    <div className="border-l-2 border-olive/50 bg-bone/30 px-5 py-4 text-sm leading-6">
                      <span className="eyebrow mb-2 block">Review note</span>
                      {section.notice}
                    </div>
                  ) : null}
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
      <section className="border-y border-olive/20 bg-bone/35 py-16">
        <div className="page-shell grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-olive">Questions or corrections</p>
            <h2 className="display mt-4 text-4xl">Speak with Icono</h2>
            <p className="mt-4 max-w-xl leading-7 text-olive">
              For questions about this page or information that needs correction, contact the Icono
              team directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <a
              href={`mailto:${business.email}`}
              className="eyebrow inline-flex min-h-12 items-center border border-smoke px-5 py-3"
            >
              Email Icono
            </a>
            <a
              href={createGeneralWhatsAppUrl(
                business.whatsapp,
                `Hello Icono, I have a question about your ${policy.title}.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="eyebrow inline-flex min-h-12 items-center bg-smoke px-5 py-3 text-floral"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
