export default function EVPakistanBlogLandingPage() {
  const categories = [
    {
      title: "Global EV News",
      blogs: [
        {
          title: "How China is Dominating the Global EV Market",
          desc: "Explore how Chinese EV manufacturers are reshaping electric vehicle production and exports worldwide.",
        },
        {
          title: "Tesla, BYD & The Future of EV Competition",
          desc: "A look into how global EV brands are competing through pricing, technology, and battery innovation.",
        },
        {
          title: "Europe’s Push Toward Fully Electric Mobility",
          desc: "Understand Europe’s aggressive EV transition plans, charging expansion, and sustainability targets.",
        },
        {
          title: "The Rise of Affordable Electric Cars Worldwide",
          desc: "Why budget-friendly EVs are becoming the next major shift in the global automotive industry.",
        },
      ],
    },
    {
      title: "EV News Pakistan",
      blogs: [
        {
          title: "Electric Cars in Pakistan: What’s Changing in 2026",
          desc: "Explore the latest EV policies, charging infrastructure, and electric vehicle adoption trends across Pakistan.",
        },
        {
          title: "Government EV Incentives Explained",
          desc: "A breakdown of tax benefits, import duties, and incentives for electric vehicle buyers in Pakistan.",
        },
        {
          title: "Top Pakistani Cities Adopting EV Infrastructure",
          desc: "Discover how Lahore, Islamabad, and Karachi are developing electric vehicle charging ecosystems.",
        },
        {
          title: "Why Pakistan’s EV Industry is Growing Fast",
          desc: "Learn about local demand, rising fuel prices, and the factors accelerating EV adoption in Pakistan.",
        },
      ],
    },
    {
      title: "EV Reviews & Comparisons",
      blogs: [
        {
          title: "Best Electric Bikes in Pakistan",
          desc: "Compare affordable EV bikes, battery range, charging time, and long-term maintenance costs.",
        },
        {
          title: "Electric Cars vs Petrol Cars",
          desc: "Learn how EVs compare to traditional fuel vehicles in terms of cost, efficiency, and sustainability.",
        },
        {
          title: "Top Budget Electric Cars for Pakistani Buyers",
          desc: "Explore affordable EV car options suitable for urban commuting and long-term savings.",
        },
        {
          title: "Hybrid vs Fully Electric Vehicles",
          desc: "Understand the differences between hybrid and fully electric cars before buying your next vehicle.",
        },
      ],
    },
    {
      title: "Charging & Technology",
      blogs: [
        {
          title: "How EV Charging Stations Work",
          desc: "Understand home charging, fast charging, and the future of Pakistan’s EV infrastructure.",
        },
        {
          title: "Battery Technology & EV Range",
          desc: "Discover how modern EV batteries improve performance, driving range, and charging speed.",
        },
        {
          title: "Fast Charging vs Normal Charging",
          desc: "Learn the differences between charging methods, battery impact, and charging costs.",
        },
        {
          title: "The Future of EV Battery Innovation",
          desc: "Solid-state batteries, lithium advancements, and how EV technology is evolving globally.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>

        <header className="relative z-20 border-b border-green-100 bg-white/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-green-700 tracking-tight">
              EV Pakistan Blog
            </h2>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
            <a href="#blogs" className="hover:text-green-700 transition-all duration-300">
              EV News
            </a>
            <a href="#blogs" className="hover:text-green-700 transition-all duration-300">
              EV Reviews
            </a>
            <a href="#blogs" className="hover:text-green-700 transition-all duration-300">
              Charging
            </a>
            <a href="#blogs" className="hover:text-green-700 transition-all duration-300">
              Technology
            </a>
            <a href="#blogs" className="hover:text-green-700 transition-all duration-300">
              Global EV News
            </a>
          </nav>
        </div>
      </header>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Electric Vehicle News, Reviews & EV Industry Updates in Pakistan
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
              Stay updated with the latest electric vehicle trends in Pakistan including EV cars, electric bikes, charging infrastructure, battery technology, and government EV policies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#blogs"
                className="px-7 py-4 rounded-2xl bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-semibold shadow-lg shadow-green-200"
              >
                Read Our Latest Blogs
              </a>

              <a
                href="#categories"
                className="px-7 py-4 rounded-2xl border border-gray-300 hover:border-green-500 hover:text-green-700 transition-all duration-300 font-semibold bg-white"
              >
                Explore Categories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Electric Cars",
            "Electric Bikes",
            "Charging Stations",
            "EV Technology",
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-green-100 hover:border-green-400 transition-all duration-300 rounded-2xl p-5 text-center shadow-sm hover:shadow-lg"
            >
              <h3 className="font-semibold text-gray-800">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Sections */}
      <section id="blogs" className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {categories.map((category, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {category.title}
                </h2>
                <div className="mt-2 h-1 w-20 rounded-full bg-green-500"></div>
              </div>

              <button className="text-green-700 font-semibold hover:text-green-900 transition-all duration-300">
                View All
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {category.blogs.map((blog, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-56 bg-gradient-to-br from-green-400 to-emerald-600 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]"></div>

                    <div className="absolute bottom-5 left-5 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium border border-white/20">
                      EV Pakistan
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-all duration-300 leading-snug">
                      {blog.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {blog.desc}
                    </p>

                    <button className="mt-6 inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-3 transition-all duration-300">
                      Read Blog
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Footer */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-green-600 to-emerald-700 rounded-[2rem] p-10 lg:p-16 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-bold leading-tight">
            Discover the Future of Electric Vehicles in Pakistan
          </h2>

          <p className="mt-5 text-lg text-green-50 max-w-2xl mx-auto leading-relaxed">
            Read expert insights, EV industry news, electric car reviews, and sustainable transport trends shaping Pakistan.
          </p>

          <button className="mt-8 px-8 py-4 bg-white text-green-700 rounded-2xl font-bold hover:bg-green-50 transition-all duration-300 shadow-lg">
            Explore Latest Articles
          </button>
        </div>
      </section>
    </div>
  );
}
