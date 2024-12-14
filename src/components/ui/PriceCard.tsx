import { pricing } from "@/constants";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function PriceCard({
  item,
}: {
  item: (typeof pricing)[number];
}) {
  return (
    <li
      className={twMerge(
        "border border-[var(--color-border)] block rounded-3xl px-6 py-12 max-w-sm mx-auto flex-1",
        item.title === "Basic" && "lg:py-12 lg:my-6",
        item.title === "Premium" && "lg:py-18 lg:my-0",
        item.title === "Enterprise" && "lg:py-12 lg:my-6"
      )}
    >
      <h3
        className={twMerge(
          "font-semibold text-4xl",
          item.color === "violet" && "text-violet-400",
          item.color === "amber" && "text-amber-400",
          item.color === "teal" && "text-teal-400"
        )}
      >
        {item.title}
      </h3>
      <p className="mt-4 text-gray-400">{item.description}</p>
      <div className="mt-8">
        {typeof item.price === "number" && (
          <span className="text-2xl font-semibold text-gray-200 align-top">
            $
          </span>
        )}
        <span className="text-7xl font-semibold text-gray-200">
          {item.price ? item.price : <>&nbsp;</>}
        </span>
      </div>
      <Button
        className="text-gray-100 mt-8 block w-full"
        name={item.buttonText}
        variant={item.buttonVariant}
      />
      <ul className="flex flex-col gap-4 mt-8">
        {item.features.map((feature) => (
          <li
            key={feature}
            className="border-t border-[var(--color-border)] pt-4 flex gap-4"
          >
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="size-6 text-violet-400 flex-shrink-0"
            />
            <span className="font-medium text-gray-100">{feature}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}
