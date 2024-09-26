import  curve1  from "@/app/assets/collaboration/curve-1.svg";
import curve2 from '@/app/assets/collaboration/curve-2.svg'

export const RightCurve = () => {
  return (
    <div className="text-white absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none hidden lg:block">
      <img src={curve2.src} width={162} height={76} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="absolute text-white top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none hidden lg:block">
      <img src={curve1.src} width={522} height={182} alt="Curve 1" />
    </div>
  );
};
