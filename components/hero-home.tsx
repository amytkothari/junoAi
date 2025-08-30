import Waitlist from "@/components/waitlist";
import { Star, MessageCircle, Users } from "lucide-react";
import Spotlight from "@/components/spotlight";
import ModalVideo from "./modal-video";
import VideoThumb from '../public/images/thumbnail.png';

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              A Journal that feels like a Friend
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
               Juno is a journaling app powered by a highly compassionate AI that listens, reflects, and helps you build a healthier relationship with your mind.

              </p>
              <div data-aos="fade-up" className="py-10" data-aos-delay={400}>
                <Waitlist />
              </div>
              
              <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos/juno.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
            </div>
          </div>
        
          {/* Waitlist Perks */}
          <div className="relative mx-auto max-w-5xl" data-aos="fade-up" data-aos-delay={600}>
            <Spotlight className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Early Access */}
              <div className="group/card relative overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                <div className="relative z-20 overflow-hidden rounded-[inherit] bg-gray-950 px-6 py-6 min-h-40 flex flex-col justify-center after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/.15),theme(colors.indigo.500/.4))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <div className="relative z-30 flex flex-col items-center text-center h-full">
                    <Star className="mb-3 h-6 w-6 text-indigo-500" />
                    <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">Early Access</h3>
                    <p className="text-sm text-indigo-200/65">Be among the first 500 people to experience Juno with exclusive founding member benefits.</p>
                  </div>
                </div>
              </div>

              {/* Juno's Corner */}
              <div className="group/card relative overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                <div className="relative z-20 overflow-hidden rounded-[inherit] bg-gray-950 px-6 py-6 min-h-40 flex flex-col justify-center after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/.15),theme(colors.indigo.500/.4))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <div className="relative z-30 flex flex-col items-center text-center h-full">
                    <MessageCircle className="mb-3 h-6 w-6 text-indigo-500" />
                    <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">Juno's Corner</h3>
                    <p className="text-sm text-indigo-200/65">Access our exclusive AI companion that feels just like talking to a friend, anytime you need support.</p>
                  </div>
                </div>
              </div>

              {/* Priority Support */}
              <div className="group/card relative overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                <div className="relative z-20 overflow-hidden rounded-[inherit] bg-gray-950 px-6 py-6 min-h-40 flex flex-col justify-center after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/.15),theme(colors.indigo.500/.4))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <div className="relative z-30 flex flex-col items-center text-center h-full">
                    <Users className="mb-3 h-6 w-6 text-indigo-500" />
                    <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">Priority Support</h3>
                    <p className="text-sm text-indigo-200/65">Join our private community, influence the product roadmap, and receive exclusive wellness guides and resources.</p>
                  </div>
                </div>
              </div>

            </Spotlight>
          </div>
        </div>
      </div>
    </section>
  );
}
