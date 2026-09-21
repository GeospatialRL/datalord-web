import Link from "next/link";
import Hero from "./components/Hero";
import { services, stats, whyPoints, projects, aboutInfo } from "../data/content";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-360 px-6 sm:px-12 lg:px-15.75">
          <p className="text-sm font-semibold tracking-wide text-[#F43838]">
            WHAT DO WE DO
          </p>
          <h2 className="mt-3 text-4xl font-bold text-[#0A0A0A] sm:text-[42px]">
            Services
          </h2>
          <p className="mt-4 max-w-180 text-lg leading-relaxed text-gray-500">
            From ideation and prototyping to digital transformation and
            enterprise management, we provide end-to-end IT solutions tailored
            to your business needs.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3">
            {services.map((service, i) => (
              <Link
                key={service.number}
                href={service.href}
                className={`group border-gray-200 px-0 py-8 md:px-10 md:py-10 ${
                  i !== services.length - 1 ? "border-b" : ""
                } ${i >= 3 ? "md:border-b-0" : "md:border-b"} ${
                  i % 3 !== 2 ? "md:border-r" : ""
                } ${i === 0 || i === 1 ? "md:pt-0" : ""} ${
                  i % 3 === 0 ? "md:pl-0" : ""
                }`}
              >
                <span className="text-sm font-bold text-[#F43838]">
                  {service.number}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-[#0A0A0A] group-hover:text-[#F43838]">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Datalord */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="mx-auto max-w-360 px-6 sm:px-12 lg:px-15.75">
          <p className="text-sm font-semibold tracking-wide text-[#F43838]">
            WHY DATALORD
          </p>
          <h2 className="mt-3 text-4xl font-bold text-[#0A0A0A] sm:text-[42px]">
            Built on expertise. Driven by results.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="grid grid-cols-2">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`border-gray-200 px-6 py-8 first:pl-0 ${
                    i % 2 === 0 ? "border-r" : ""
                  } ${i < 2 ? "border-b" : ""}`}
                >
                  <p className="text-[28px] font-semibold text-[#F43838] sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-3  font-medium text-[#0A0A0A]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {whyPoints.map((point) => (
                <div
                  key={point.title}
                  className="border-l-2 border-[#F43838] pl-6"
                >
                  <h3 className="font-semibold text-[#0A0A0A]">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-gray-500">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-360 px-6 sm:px-12 lg:px-15.75">
          <p className="text-sm font-semibold tracking-wide text-[#F43838]">
            PROOF OF WORK
          </p>
          <h2 className="mt-3 text-4xl font-bold text-[#0A0A0A] sm:text-[42px]">
            Featured projects
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-[20px] border border-gray-400/30 bg-white p-8"
              >
                <span className="inline-block rounded-full bg-[#F43838]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#F43838]">
                  {project.category}
                </span>
                <h3 className="mt-6 text-2xl font-bold text-[#0A0A0A]">
                  {project.title}
                </h3>
                <p className="mt-4 leading-relaxed text-gray-500">
                  {project.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F1F1F1] px-4 py-2 text-sm text-[#0A0A0A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="mx-auto max-w-360 px-6 sm:px-12 lg:px-15.75">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#F43838]">
                ABOUT US
              </p>
              <h2 className="mt-3 text-4xl font-bold text-[#0A0A0A] sm:text-[42px]">
                Lagos-Based. Globally Capable.
              </h2>
              <p className="mt-6 max-w-162.5 leading-relaxed text-gray-500">
                DataLord Technologies Ltd is a leading software development and
                IT services company in Lagos, Nigeria — dedicated to enhancing
                business productivity across every sector we touch. Backed by
                a highly skilled team of certified developers and IT
                professionals, we collaborate closely with clients to design
                and implement solutions that align with their specific
                requirements. Our philosophy is simple: exceed expectations,
                deliver quality, and provide the best value for money.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex h-11 items-center rounded-lg bg-[#F43838] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#dc2626]"
              >
                Learn More
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {aboutInfo.map((info) => (
                <div
                  key={info.label}
                  className="rounded-lg bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-semibold tracking-wide text-[#F43838]">
                    {info.label}
                  </p>
                  <div className="mt-2 space-y-1 text-gray-500">
                    {info.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#744F4F] bg-[url('/images/cta-team.jpg')] bg-cover bg-center py-24">
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative mx-auto max-w-360 px-6 text-center sm:px-12 lg:px-15.75">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Planning a new project?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Let&apos;s explore how our software solutions can support you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-15 items-center gap-2 rounded-lg bg-[#F43838] px-8 text-base font-semibold text-white transition-colors hover:bg-[#dc2626]"
          >
            Request a Quoute
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
