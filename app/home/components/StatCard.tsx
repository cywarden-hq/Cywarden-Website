import * as React from "react";

interface StatCardProps {
  iconSrc: string;
  iconAlt: string;
  number: string;
  title: string;
  subtitle?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  iconSrc,
  iconAlt,
  number,
  title,
  subtitle
}) => {
  return (
    <article className="flex relative flex-col items-center w-[257.6px] max-md:min-w-[250px] max-md:w-[45%] max-sm:w-full max-sm:max-w-[300px]">
      <img
        src={iconSrc}
        alt={iconAlt}
        className="shrink-0 mb-2.5 w-16 h-[54px] max-sm:w-12 max-sm:h-10"
      />
      <div className="flex flex-col gap-1.5 justify-center items-center w-[238px]">
        <div className="flex justify-center items-start">
          <div className="text-3xl font-bold leading-[65px] text-slate-950 max-sm:text-3xl max-sm:leading-[50px]">
            {number}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[238px] max-sm:w-full">
          <p className="text-lg font-bold leading-6 text-center text-slate-950 max-sm:text-base max-sm:leading-6">
            {title}
          </p>
          {subtitle && (
            <p className="text-lg font-bold leading-6 text-center text-slate-950 max-sm:text-base max-sm:leading-6">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};
