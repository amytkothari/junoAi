import Waitlist from "@/components/waitlist";
import { Star, MessageCircle, Users } from "lucide-react";

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
              <div data-aos="fade-up" data-aos-delay={400}>
                <Waitlist />
              </div>
            </div>
          </div>

          {/* Waitlist Perks */}
          <div className="relative mx-auto max-w-5xl" data-aos="fade-up" data-aos-delay={600}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Early Access */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-950 p-px before:pointer-events-none before:absolute before:-left-20 before:-top-20 before:z-10 before:h-40 before:w-40 before:rounded-full before:bg-indigo-500/80 before:opacity-20 before:blur-3xl">
                <div className="relative z-20 overflow-hidden rounded-[inherit] bg-gray-950 p-6 min-h-56 flex flex-col justify-center after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  <div className="relative z-30 flex flex-col items-center text-center h-full">
                    <Star className="mb-3 h-6 w-6 text-indigo-500" />
                    <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">Early Access</h3>
                    <p className="text-sm text-indigo-200/65">Be among the first 500 people to experience Juno with exclusive founding member benefits.</p>
                  </div>
                </div>
              </div>

              {/* Juno's Corner */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-950 p-px before:pointer-events-none before:absolute before:-left-20 before:-top-20 before:z-10 before:h-40 before:w-40 before:rounded-full before:bg-indigo-500/80 before:opacity-20 before:blur-3xl">
                <div className="relative z-20 overflow-hidden rounded-[inherit] bg-gray-950 p-6 min-h-56 flex flex-col justify-center after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  <div className="relative z-30 flex flex-col items-center text-center h-full">
                    <MessageCircle className="mb-3 h-6 w-6 text-indigo-500" />
                    <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">Juno's Corner</h3>
                    <p className="text-sm text-indigo-200/65">Access our exclusive AI companion that feels just like talking to a friend, anytime you need support.</p>
                  </div>
                </div>
              </div>

              {/* Community Access */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-950 p-px before:pointer-events-none before:absolute before:-left-20 before:-top-20 before:z-10 before:h-40 before:w-40 before:rounded-full before:bg-indigo-500/80 before:opacity-20 before:blur-3xl">
                <div className="relative z-20 overflow-hidden rounded-[inherit] bg-gray-950 p-6 min-h-56 flex flex-col justify-center after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  <div className="relative z-30 flex flex-col items-center text-center h-full">
                    <Users className="mb-3 h-6 w-6 text-indigo-500" />
                    <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">Priority Support</h3>
                    <p className="text-sm text-indigo-200/65">Join our private community, influence the roadmap, and get free wellness guides.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
