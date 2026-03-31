export function MapSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Visit Our Office
          </h2>
          <p className="text-slate-600 mt-2">
            We'd love to meet you. Find us here 👇
          </p>
        </div>

        {/* Map */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200">

          <iframe
            src="https://www.google.com/maps?q=MP%20Nagar%20Bhopal&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

          {/* Open in Maps Button */}
          <a
            href="https://maps.app.goo.gl/G9AKiWt2u7QwUmhL7"
            target="_blank"
            className="absolute bottom-4 right-4 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm shadow-lg hover:bg-slate-800 transition"
          >
            Open in Google Maps
          </a>

        </div>

      </div>
    </section>
  );
}