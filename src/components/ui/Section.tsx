import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

type Props = {
  borderTop?: boolean;
  children: React.ReactNode;
  className?: string;
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
};
export default function Section({
  borderTop,
  children,
  className,
  id,
  sectionRef,
}: Props) {
  return (
    <section id={id} ref={sectionRef}>
      <div className="container">
        <div
          className={twMerge(
            "border-x border-[var(--color-border)] relative",
            borderTop && "border-t"
          )}
        >
          {borderTop && (
            <>
              <div className=" absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="size-4 text-gray-200"
                />
              </div>
              <div className=" absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="size-4 text-gray-200"
                />
              </div>
            </>
          )}
          <div
            className={twMerge(
              "container py-24 md:py-36 lg:py-48 overflow-hidden",
              className
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
