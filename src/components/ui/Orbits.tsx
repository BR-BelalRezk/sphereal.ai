import Orbit from "./Orbit";

export function HeroOrbits() {
  return (
    <div className=" absolute inset-0 -z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Orbit className="size-[350px]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Orbit className="size-[600px] border-dashed" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Orbit className="size-[850px]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Orbit className="size-[1100px] border-dashed" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Orbit className="size-[1350px]" />
      </div>
    </div>
  );
}

export function CTAOrbits() {
  return (
    <div className=" absolute inset-0">
      <Orbit className="size-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Orbit className="size-[350px] border-dashed absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Orbit className="size-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Orbit className="size-[650px] border-dashed absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Orbit className="size-[800px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}
