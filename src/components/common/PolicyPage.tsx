interface PolicySection {
  id: string;
  heading: string;
  content?: string;
  items?: string[];
  paragraphAfter?: string;
}

interface Contact {
  label: string;
  email: string;
  phone: string;
}

interface PolicyPageProps {
  header: { title: string; description: string; lastUpdated: string };
  sections: PolicySection[];
  contact: { heading: string; description: string; contacts: Contact[] };
}

const PolicyPage = ({ header, sections, contact }: PolicyPageProps) => (
  <div className="min-h-screen bg-gray-50">
    <section className="bg-gradient-to-r from-primary-600 to-gold-600 text-white pt-32 pb-20">
      <div className="container-custom text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">{header.title}</h1>
        <p className="text-xl max-w-2xl mx-auto">{header.description}</p>
        <p className="text-sm mt-4 opacity-80">Last Updated: {header.lastUpdated}</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
          {sections.map((section) => (
            <div key={section.id}>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">{section.heading}</h2>
              {section.content && <p className="text-gray-600 leading-relaxed mb-2">{section.content}</p>}
              {section.items && (
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {section.paragraphAfter && (
                <p className="text-gray-600 leading-relaxed mt-2">{section.paragraphAfter}</p>
              )}
            </div>
          ))}

          <div className="bg-primary-50 rounded-lg p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">{contact.heading}</h2>
            <p className="text-gray-600 mb-4">{contact.description}</p>
            <div className="space-y-3">
              {contact.contacts.map((c) => (
                <div key={c.label}>
                  <p className="font-semibold text-gray-800">{c.label}</p>
                  <p className="text-gray-600 text-sm">
                    Email:{" "}
                    <a href={`mailto:${c.email}`} className="text-primary-600 hover:underline">{c.email}</a>
                    {" · "}
                    Phone:{" "}
                    <a href={`tel:${c.phone}`} className="text-primary-600 hover:underline">{c.phone}</a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default PolicyPage;
