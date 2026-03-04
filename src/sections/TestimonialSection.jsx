import { useRef } from "react"
import { testimonials } from "../assets/data"

const TestimonialSection = () => {

    const marqueeRef = useRef(null)
    // Pause Marquee on hover
    const handleMouseEnter = () =>{
        if(marqueeRef.current){
            marqueeRef.current.style.setProperty("--marquee-play-state", "paused")
        }
    }
    // Resume Marquee on Leave
    const handleMouseLeave = () =>{
        if(marqueeRef.current){
            marqueeRef.current.style.setProperty("--marquee-play-state", "running")
        }
    }
    
  return (
    <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
            {/* Title */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-normal mb-4 clash-display">Trusted by Traders</h2>
                <p className="text-zinc-400/90 text-lg">Join thousands of satisfied traders on ForexTrade</p>
            </div>

            {/* Marquee */}
            <div className="relative flex flex-col antialiased">
                {/* Container */}
                <div ref={marqueeRef} className="relative flex overflow-hidden py-4">
                    {/* Moving Part */}
                    <div className="animate-marquee min-w-full flex shrink-0 items-stretch gap-8"
                    style={{animationPlayState: "var(--marquee-play-state)"}}>
                    {
                        testimonials.map((testimonial, index)=>(
                            <div key={`first-${testimonial.name}-${index}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-[400px] cursor-pointer shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8 border-2 rounded-xl">
                                {/* Images & Names */}
                                <div className="centered-row mb-6">
                                    {/* Image */}
                                    <div className="h-12 w-12 overflow-clip rounded-full text-xl center-item text-center bg-pink-500 mr-4">
                                        
                                        {!testimonial.image ? (testimonial.name[0])
                                        : (<img src={testimonial.image} alt="image" />)
                                        }
                                    </div>
                                    {/* Name & Role */}
                                    <div className="">
                                        <h4 className="font-medium text-lg  clash-display text-white/90 ">{testimonial.name}</h4>
                                        <p className="text-sm text-white/60">{testimonial.role}</p>
                                    </div>
                                </div>
                                {/* Content */}
                                <p className="text-white/70 leading-relaxed text-sm">{testimonial.content}</p>
                            </div>
                        ))
                    }
                    </div>
                    {/* Duplicate Moving Part: for Marquee Effect */}
                    <div className="animate-marquee min-w-full flex shrink-0 items-stretch gap-8"
                    style={{ animationPlayState: "var(--marquee-play-state)" }}>
                    {
                        testimonials.map((testimonial, index)=>(
                            <div key={`first-${testimonial.name}-${index}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-[400px] cursor-pointer shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8 border-2 rounded-xl">
                                {/* Images & Names */}
                                <div className="centered-row mb-6">
                                    {/* Image */}
                                    <div className="h-12 w-12 overflow-clip rounded-full text-xl center-item text-center bg-pink-500 mr-4">
                                        
                                        {!testimonial.image ? (testimonial.name[0])
                                        : (<img src={testimonial.image} alt="image" />)
                                        }
                                    </div>
                                    {/* Name & Role */}
                                    <div className="">
                                        <h4 className="font-medium text-lg  clash-display text-white/90 ">{testimonial.name}</h4>
                                        <p className="text-sm text-white/60">{testimonial.role}</p>
                                    </div>
                                </div>
                                {/* Content */}
                                <p className="text-white/70 leading-relaxed text-sm">{testimonial.content}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
                {/* Decor: Smooth Edges */}
                <div className="absolute h-full w-18 md:w-60 bg-linear-to-r from-black to-transparent -left-1">
                </div>
                <div className="absolute h-full w-18 md:w-60 bg-linear-to-l from-black to-transparent -right-1">
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection