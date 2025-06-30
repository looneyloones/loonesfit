const IntroSection = ({handleApplyNow}) => {
    return (
        <div className="text-center max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          You’re one step closer to getting in shape…
        </h1>
        <p className="text-xl">
          Unlock Your Full Potential with Renowned Elite Fitness Master Daniël’s Total Transformation Program.
        </p>
        <div className="aspect-video w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-800">
          <iframe
            className="w-full h-full"
            src=""
            title="Intro Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-lg">
          Time to work toward your ultimate physique—and the respect that comes with it?
        </p>
        <button
          onClick={handleApplyNow}
          className="bg-gradient-to-r from-white to-gray-300 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          APPLY NOW
        </button>
      </div>
    )
}

export default IntroSection 