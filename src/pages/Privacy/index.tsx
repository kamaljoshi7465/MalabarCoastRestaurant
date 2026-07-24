import { PRIVACY_CONTACT_DATA, PRIVACY_HEADER_DATA, PRIVACY_SECTIONS } from "../../data/privacy/privacy.data";

const Privacy = () => (
  <div className="min-h-screen bg-gray-50">
    <section className="bg-gradient-to-r from-primary-600 to-gold-600 text-white pt-32 pb-20">
      <div className="container-custom text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">{PRIVACY_HEADER_DATA.title}</h1>
        <p className="text-xl max-w-2xl mx-auto">{PRIVACY_HEADER_DATA.description}</p>
        <p className="text-sm mt-4 opacity-80">Last Updated: {PRIVACY_HEADER_DATA.lastUpdated}</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">

          {PRIVACY_SECTIONS.map((section) => (
            <div key={section.id}>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">{section.heading}</h2>

              {section.subsections ? (
                <div className="space-y-4">
                  {section.subsections.map((sub) => (
                    <div key={sub.heading}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{sub.heading}</h3>
                      <p className="text-gray-600 leading-relaxed mb-2">{sub.content}</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        {sub.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
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
                    <p className="text-gray-600 leading-relaxed mt-2">
                      {section.id === "your-rights" ? (
                        <>
                          To exercise these rights, please contact us at{" "}
                          <a href={`mailto:${PRIVACY_CONTACT_DATA.email}`} className="text-primary-600 hover:underline">
                            {PRIVACY_CONTACT_DATA.email}
                          </a>
                        </>
                      ) : (
                        section.paragraphAfter
                      )}
                    </p>
                  )}
                </>
              )}
            </div>
          ))}

          <div className="bg-primary-50 rounded-lg p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{PRIVACY_CONTACT_DATA.heading}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{PRIVACY_CONTACT_DATA.description}</p>
            <div className="space-y-2 text-gray-600">
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${PRIVACY_CONTACT_DATA.email}`} className="text-primary-600 hover:underline">
                  {PRIVACY_CONTACT_DATA.email}
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${PRIVACY_CONTACT_DATA.phone}`} className="text-primary-600 hover:underline">
                  {PRIVACY_CONTACT_DATA.phone}
                </a>
              </p>
              <p>
                <strong>Address:</strong><br />
                {PRIVACY_CONTACT_DATA.address.map((line) => (
                  <span key={line}>{line}<br /></span>
                ))}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
);

export default Privacy;
