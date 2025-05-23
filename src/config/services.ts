import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "insight-note",
    name: "Insight Note",
    tagline: "Tactical Expert Response",
    description:
      "A single, focused response to your challenge. Clean, direct, and built for motion. Ideal for fast clarity and next steps without fluff.",
    price: 55,
    features: [
      "Single, focused response",
      "Fast clarity",
      "Actionable next steps",
    ],
  },
  {
    id: "strategic-memo",
    name: "Strategic Memo",
    tagline: "Written Strategic Guidance",
    description:
      "A structured expert recommendation tailored to your issue. Prioritized, objective, and ready to implement.",
    price: 150,
    features: [
      "Structured recommendation",
      "Prioritized advice",
      "Implementation-ready",
    ],
  },
  {
    id: "strategic-briefing",
    name: "Strategic Briefing",
    tagline: "Written + Loom Walkthrough",
    description:
      "Includes your Advisory Memo plus a Loom video breaking down the logic and reasoning behind the strategy. For those who want nuance, depth, and fast execution clarity.",
    price: 250,
    features: [
      "Strategic Memo included",
      "Loom video walkthrough",
      "Nuance and depth",
      "Fast execution clarity",
    ],
  },
  {
    id: "embedded-response",
    name: "Embedded Response",
    tagline: "Written + Loom + Follow-Up",
    description:
      "Includes your Strategic Briefing plus 3 days of private async refinement. Built for high-stakes pivots, evolving priorities, or rapid iteration.",
    price: 525,
    features: [
      "Strategic Briefing included",
      "3 days private async refinement",
      "Ideal for high-stakes pivots",
      "Rapid iteration support",
    ],
  },
  {
    id: "direct-consulting",
    name: "Direct Consulting with Marshall",
    tagline: "1-on-1 Video Call",
    description:
      "Book a 1-on-1 with Marshall. Real-time, unfiltered advisory to close the gap, video conference call for 1 hour.",
    price: 1000,
    features: [
      "1-hour video conference",
      "Real-time advisory",
      "Direct access to Marshall",
      "Unfiltered insights",
    ],
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
