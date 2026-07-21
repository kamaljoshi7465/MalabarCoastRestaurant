import { VALUES, VALUES_SECTION } from "../../../data/about/ourValue/values.data";

const OurValues = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-gold-50 px-4 py-16 md:px-8 lg:px-16 lg:py-24">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
            {VALUES_SECTION.title}
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {VALUES_SECTION.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <div
              key={value.id}
              className="rounded-xl bg-white p-6 text-center shadow-md"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-gold-500">
                {value.icon}
              </div>

              <h3 className="mb-3 font-serif text-xl font-bold text-gray-900">
                {value.title}
              </h3>

              <p className="text-sm text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;