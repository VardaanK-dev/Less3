// app/page.tsx
export default function Home() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/40">
        <h1 className="text-5xl font-bold mb-4">Welcome to Less³</h1>
        <p className="text-lg max-w-xl">
          Explore our journey, meet the members, and check out our creations.  
          Use the tabs at the top to navigate through our site!
        </p>
      </div>
    </section>
  );
}
