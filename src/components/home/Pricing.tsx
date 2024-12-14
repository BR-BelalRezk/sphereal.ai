import { pricing } from "@/constants";
import PriceCard from "../ui/PriceCard";
import Section from "../ui/Section";

export default function Pricing() {
  return (
    <Section id="pricing" borderTop>
      <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-center text-gray-200">
        Flexible plans for every need
      </h2>
      <ul className="mt-12 flex flex-col lg:flex-row lg:items-start gap-8">
        {pricing.map((item) => (
          <PriceCard item={item} key={item.title} />
        ))}
      </ul>
    </Section>
  );
}
