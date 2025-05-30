import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "insight-note",
    name: "Insight Note",
    tagline: "Tactical Expert Response PDF",
    description:
      "A single, focused response to your challenge, delivered as an expert advisory PDF. Clean, direct, and built for motion.",
    price: 55,
    features: [
      "Expert advisory PDF",
      "Single, focused response",
      "Fast clarity & next steps",
    ],
    stripePaymentLink: "https://buy.stripe.com/6oU28s7BT3mK3ZCg5QeQM0b",
  },
  {
    id: "strategic-memo",
    name: "Strategic Memo",
    tagline: "Detailed Written Expert Advisory",
    description:
      "A structured, expert-written advisory deck with layered insight. Prioritized recommendations, written with surgical clarity.",
    price: 150,
    features: [
      "Detailed advisory deck/PDF",
      "Structured expert recommendations",
      "Prioritized, objective insights",
      "Surgical clarity, implementation-ready",
    ],
    // featureStyle: "premium", // Removed as all non-elite use same check now
    stripePaymentLink: "https://buy.stripe.com/fZu14oaO52iG7bOf1MeQM0c",
  },
  {
    id: "strategic-briefing",
    name: "Strategic Briefing",
    tagline: "Strategic Memo + Loom Walkthrough",
    description:
      "Includes your Strategic Memo plus a Loom video breaking down the logic and reasoning behind the strategy. For those who want nuance, depth, and fast execution clarity.",
    price: 250,
    features: [
      "Everything in Strategic Memo",
      "Custom Loom video walkthrough",
      "Nuance and depth explained",
      "Enhanced execution clarity",
    ],
    // featureStyle: "premium",
    stripePaymentLink: "https://buy.stripe.com/fZufZi8FX1eC53G6vgeQM0d",
  },
  {
    id: "embedded-response",
    name: "Embedded Response",
    tagline: "Strategic Memo + Loom Walkthrough + 3-day Direct Messaging",
    description:
      "Includes your Strategic Briefing plus 3 days of private, direct messaging follow-up. Built for high-stakes pivots, evolving priorities, or rapid iteration.",
    price: 525,
    features: [
      "Everything in Strategic Briefing",
      "3 days private direct messaging",
      "High-stakes decision support",
      "Rapid iteration and feedback",
    ],
    // featureStyle: "premium",
    stripePaymentLink: "https://buy.stripe.com/dRm14obS9cXk2Vy5rceQM0e",
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
    // featureStyle: "premium",
    // stripePaymentLink: removed, Calendly handles payment for this tier
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
