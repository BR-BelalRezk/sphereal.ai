import Button from "../ui/Button";
import { CTAOrbits } from "../ui/Orbits";
import { CTAPlanets } from "../ui/Planets";
import Section from "../ui/Section";
import SpherealUnderlineWord from "../ui/SpherealUnderlineWord";

export default function CTA() {
  return (
    <Section className=" relative isolate" borderTop>
      <div className=" absolute -z-10 inset-0 [mask-image:radial-gradient(circle_farthest-side,black,transparent)] bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)]" />
      <CTAOrbits />
      <CTAPlanets />
      <div className="relative -30">
        <h2 className="text-gray-200 lg:text-5xl max-w-3xl mx-auto font-semibold text-3xl md:text-4xl text-center leading-tight">
          Join the AI Revolution with <SpherealUnderlineWord />
        </h2>
        <p className="text-center text-xl mt-8 text-gray-100 max-w-2xl mx-auto">
          Experience the transformation power of AI with Sphereal. Boost your
          productivity and streamline your workflow with our innovative AI chat
          platform
        </p>
        <div className="flex justify-center mt-10">
          <Button variant="secondary" name="Get started" />
        </div>
      </div>
    </Section>
  );
}
