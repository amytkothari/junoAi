import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-4xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                The Challenge
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              1 in 8 people globally live with a mental disorder, yet most face barriers to getting help.
            </h2>
            <p className="text-lg text-indigo-200/65 mb-6">
              About 970 million people worldwide lived with a mental disorder in 2019, with anxiety and depression being the most common. Traditional therapy often has lengthy wait times (50-150 days in many regions), high costs ($100-$250 per session), and limited accessibility. Many people feel overwhelmed by racing thoughts, unable to process their emotions, or don't know where to start their mental wellness journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-6">
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                <div className="text-2xl font-bold text-indigo-400 mb-1">970M</div>
                <div className="text-sm text-indigo-200/65">People with mental disorders globally (2019)</div>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                <div className="text-2xl font-bold text-indigo-400 mb-1">50-150</div>
                <div className="text-sm text-indigo-200/65">Days average wait time for therapy</div>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                <div className="text-2xl font-bold text-indigo-400 mb-1">$100-250</div>
                <div className="text-sm text-indigo-200/65">Cost per therapy session (US)</div>
              </div>
            </div>
            <p className="text-xs text-indigo-200/45 italic">
              Sources: World Health Organization (2019), NHS IAPT Program, SimplePractice Data (2023-2024)
            </p>
          </div>

          {/* Solution section */}
          <div className="mx-auto max-w-4xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                The Solution
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Research shows 68% of journaling interventions effectively improve mental health outcomes.
            </h2>
            <p className="text-lg text-indigo-200/65 mb-6">
              With Juno, journaling becomes more than writing—it becomes a therapeutic dialogue. Our AI companion understands context and emotions, responds with empathy, and guides you through evidence-based techniques. Studies show journaling reduces anxiety symptoms by 9%, improves working memory, and creates lasting benefits that extend 3-6 months. Write down your thoughts anytime, and experience the healing power of being truly heard.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-6">
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                <div className="text-2xl font-bold text-indigo-400 mb-1">68%</div>
                <div className="text-sm text-indigo-200/65">Effective journaling interventions (20 studies)</div>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                <div className="text-2xl font-bold text-indigo-400 mb-1">9%</div>
                <div className="text-sm text-indigo-200/65">Average anxiety symptom reduction</div>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                <div className="text-2xl font-bold text-indigo-400 mb-1">3-6</div>
                <div className="text-sm text-indigo-200/65">Months of lasting mental health benefits</div>
              </div>
            </div>
            <p className="text-xs text-indigo-200/45 italic">
              Sources: Systematic Meta-Analysis (31 outcomes), Journal of Clinical Psychology, Positive Psychology Research
            </p>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        AI-Powered Prompts
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Juno listens like a friend, asks thoughtful questions, and helps you untangle your thoughts with ease.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 2 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg02}
                  width={350}
                  height={288}
                  alt="Workflow 02"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Private & Secure
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Your thoughts are safe with us. A completely private and secure journaling space just for you.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 3 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  alt="Workflow 03"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Gentle Reminders
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Stay consistent with gentle, encouraging reminders that help you build a healthy journaling habit.
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
