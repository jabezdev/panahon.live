function App() {
  return (
    <main className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.22),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(30,64,175,0.16),transparent_36%)]" />

      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-8 sm:pt-12 lg:px-8">
        <header className="mb-14 flex items-center justify-between rounded-full border border-sky-300/20 bg-slate-900/60 px-5 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-sky-400/15 text-sm font-semibold text-sky-300">
              P
            </div>
            <span className="text-sm font-semibold tracking-wide text-slate-200">
              panahon.live
            </span>
          </div>
          <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            Prototype Landing Page
          </span>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              Hyperlocal Weather Intelligence
            </p>
            <h1 className="text-balance text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              One region. Hundreds of sensors. Better weather decisions.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              Panahon.live enables low-cost automatic weather stations to be
              deployed across many communities for dense, real-time weather
              coverage. Instead of relying on a single station for a large area,
              we capture local variability where it matters.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pilot"
                className="rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Request a pilot deployment
              </a>
              <a
                href="#how"
                className="rounded-xl border border-slate-500/50 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-300/70 hover:bg-slate-800"
              >
                Explore system design
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-sky-200/20 bg-slate-900/60 p-6 shadow-2xl shadow-sky-900/20 backdrop-blur">
            <p className="text-sm font-medium text-slate-300">Live network snapshot</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">Stations online</p>
                <p className="mt-2 text-2xl font-bold text-sky-300">128</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">Coverage areas</p>
                <p className="mt-2 text-2xl font-bold text-cyan-300">34</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">Avg update</p>
                <p className="mt-2 text-2xl font-bold text-emerald-300">30s</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">Sensor uptime</p>
                <p className="mt-2 text-2xl font-bold text-indigo-300">99.2%</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="how" className="relative border-y border-slate-800/80 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Built for scalable, low-cost deployment
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: 'Distributed station model',
                description:
                  'Deploy many affordable stations across municipalities and barangays to represent true microclimates.',
              },
              {
                title: 'Edge-friendly telemetry',
                description:
                  'Efficient data packets and intermittent-sync support reduce data costs while preserving critical weather updates.',
              },
              {
                title: 'Actionable local insights',
                description:
                  'Transform rainfall, temperature, humidity, and wind readings into alerts for agriculture, LGUs, and disaster teams.',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-semibold text-sky-300">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pilot" className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-sky-200/20 bg-linear-to-br from-sky-400/20 via-slate-900 to-indigo-500/20 p-8 shadow-xl shadow-sky-900/20 sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Help shape the first deployments of panahon.live
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            We are collaborating with local partners to validate a dense,
            community-scale weather network. Join the pilot if you are from an
            LGU, a school, a farm cooperative, or a climate-tech organization.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-slate-500/50 bg-slate-900/60 px-4 py-2 text-slate-200">
              Affordable hardware
            </span>
            <span className="rounded-full border border-slate-500/50 bg-slate-900/60 px-4 py-2 text-slate-200">
              Rapid installation
            </span>
            <span className="rounded-full border border-slate-500/50 bg-slate-900/60 px-4 py-2 text-slate-200">
              Real-time dashboard
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
