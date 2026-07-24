import { TERMS_CONTACT_DATA, TERMS_HEADER_DATA, TERMS_SECTIONS } from "../../data/terms/terms.data";

const Terms = () => (
  <main className="min-h-screen">
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary-600 to-gold-600 text-white pt-32 pb-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">{TERMS_HEADER_DATA.title}</h1>
          <p className="text-xl max-w-2xl mx-auto">{TERMS_HEADER_DATA.description}</p>
          <p className="text-sm mt-4 opacity-80">Last Updated: {TERMS_HEADER_DATA.lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">

            {TERMS_SECTIONS.map((section) => (
              <div key={section.id}>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">{section.heading}</h2>

                {/* Subsections (e.g. Use of Website) */}
                {section.subsections ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{section.subsections[0].heading}</h3>
                      <p className="text-gray-600 leading-relaxed mb-2">{section.subsections[0].content}</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        {section.items?.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                    {section.subsections.slice(1).map((sub) => (
                      <div key={sub.heading}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{sub.heading}</h3>
                        <p className="text-gray-600 leading-relaxed">{sub.content}</p>
                      </div>
                    ))}
                  </div>

                ) : section.paragraphs ? (
                  /* Labeled paragraphs (e.g. Reservations, Payment) */
                  <div className="space-y-4 text-gray-600">
                    {section.paragraphs.map((p) => (
                      <p key={p.label} className="leading-relaxed">
                        <strong>{p.label}:</strong> {p.text}
                      </p>
                    ))}
                  </div>

                ) : (
                  /* Simple content + optional list */
                  <>
                    {section.content && (
                      <p className="text-gray-600 leading-relaxed mb-2">{section.content}</p>
                    )}
                    {section.items && (
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        {section.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                    {section.paragraphAfter && (
                      <p className="text-gray-600 leading-relaxed mt-2">{section.paragraphAfter}</p>
                    )}
                  </>
                )}
              </div>
            ))}

            {/* Contact box */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{TERMS_CONTACT_DATA.heading}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{TERMS_CONTACT_DATA.description}</p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${TERMS_CONTACT_DATA.email}`} className="text-primary-600 hover:underline">
                    {TERMS_CONTACT_DATA.email}
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${TERMS_CONTACT_DATA.phone}`} className="text-primary-600 hover:underline">
                    {TERMS_CONTACT_DATA.phone}
                  </a>
                </p>
                <p>
                  <strong>Address:</strong><br />
                  {TERMS_CONTACT_DATA.address.map((line) => (
                    <span key={line}>{line}<br /></span>
                  ))}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </main>
);

export default Terms;
