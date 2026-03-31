export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Logo + About */}
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-display font-bold tracking-tighter text-slate-900 flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center shadow-md shadow-primary-500/20">
                <span className="text-white text-lg font-bold">A</span>
              </div>
              Adliner
            </a>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              A premium digital agency dedicated to scaling ambitious brands through design, technology, and performance marketing.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">

              {/* Twitter */}
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary-600 hover:border-primary-200 transition-all shadow-sm"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ashutosh-sharma-557a701a5?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary-600 hover:border-primary-200 transition-all shadow-sm"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>

              {/* Instagram */}
              <a
               href="https://www.instagram.com/adlinerdigitalservices?igsh=MXJpamF4eGxtcWs2bA=="
               target="_blank"
               rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary-600 hover:border-primary-200 transition-all shadow-sm"
              >
               <span className="sr-only">Instagram</span>
               < svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5A4.25 4.25 0 0116.25 20.5h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm4.25 3a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 1.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zm5.25-.75a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" clipRule="evenodd" />
               </svg>
              </a>

            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-primary-600 text-sm">Social Media Marketing</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary-600 text-sm">Performance Ads</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary-600 text-sm">Website Development</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary-600 text-sm">SEO Optimization</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary-600 text-sm">Branding & Design</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-slate-600 hover:text-primary-600 text-sm">About Us</a></li>
              <li><a href="#portfolio" className="text-slate-600 hover:text-primary-600 text-sm">Case Studies</a></li>
              <li><a href="#process" className="text-slate-600 hover:text-primary-600 text-sm">Our Process</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary-600 text-sm">Careers</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-primary-600 text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Newsletter</h4>
            <p className="text-slate-600 text-sm mb-4">
              Subscribe to get the latest digital marketing insights.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm w-full"
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            ©️ {new Date().getFullYear()} Adliner Digital Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
