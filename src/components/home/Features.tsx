import { features, featuresLogos } from "@/constants";
import Button from "../ui/Button";
import Orbit from "../ui/Orbit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import LogoImage from "../ui/LogoImage";
import FeatureLogo from "../ui/FeatureLogo";
import Section from "../ui/Section";

export default function Features() {
  return (
    <Section id="features" className="md:px-20 lg:px-40" borderTop>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl md:text-4xl lg:5xl font-semibold text-gray-200 leading-tight">
            Your AI-powered collaboration companion
          </h2>
          <ul className="mt-12 flex flex-col gap-8">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-5">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="size-6 text-violet-400"
                />
                <span className="text-xl font-medium text-gray-100">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <Button className="mt-16 text-gray-100" name="Try it now" />
        </div>
        <div className="flex justify-center">
          <div className="size-[270px] md:size-[450px] relative flex flex-shrink-0">
            <div className=" absolute inset-0">
              <Orbit className="size-full" />
            </div>
            <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Orbit className="size-[180px] md:size-[300px]" />
            </div>
            <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <LogoImage className="size-24" />
            </div>
            {featuresLogos.map((item) => (
              <FeatureLogo
                key={item.alt}
                src={item.src}
                alt={item.alt}
                rotate={item.rotate}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
