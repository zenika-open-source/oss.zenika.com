export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center pt-16 overflow-hidden">
      <video
        src="/videos/zenikanard-oss.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-titledegrade-1 to-titledegrade-2 bg-clip-text text-transparent">
            Open source the world
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto">
          Zenika's DNA is based on open source philosophy.
        </p>

        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto">
          Driven by this passion, we contribute to projects and share more and
          more with communities.
        </p>
      </div>
    </section>
  );
}
