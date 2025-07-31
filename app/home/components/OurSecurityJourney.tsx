"use client";
import * as React from "react";

// StepConnector Component
export function StepConnector() {
    return (
        <img
            src="/stepConnector.svg"
            alt=""
            className="h-[13px] w-[50px]"
        />
    );
}

// SecurityStep Component
interface SecurityStepProps {
    number: string;
    title: string;
    description: string[];
    numberColor: string;
    textColor?: string;
}

export function SecurityStep({
    number,
    title,
    description,
    numberColor,
    textColor = "text-white"
}: SecurityStepProps) {
    const getStepWidth = () => {
        switch (number) {
            case "1":
                return "w-[139px]";
            case "2":
                return "w-[184px]";
            case "3":
                return "w-[196px]";
            case "4":
                return "w-[180px]";
            case "5":
                return "w-[180px]";
            default:
                return "w-[180px]";
        }
    };

    const getStepHeight = () => {
        return number === "1" ? "h-[300px]" : "h-[226px]";
    };

    return (
        <div className={`relative ${getStepHeight()} ${getStepWidth()} max-md:h-[180px] max-md:w-[140px] max-sm:h-[140px] max-sm:w-[100px]`}>
            <div className={`absolute top-0 left-0 right-0 flex items-center justify-center shrink-0 font-black ${numberColor} ${getStepHeight()} ${getStepWidth()} text-[300px] z-[1] max-md:h-[180px] max-md:text-[200px] max-md:w-[140px] max-sm:text-9xl max-sm:h-[140px] max-sm:w-[100px]`}>
                {number}
            </div>

            <div className={`flex absolute flex-col gap-2.5 items-center justify-center h-full w-full z-[2]`}>
                <div className="flex justify-center items-center">
                    <h3 className={`text-xl font-bold leading-8 text-center ${textColor} max-sm:text-base max-sm:leading-6`}>
                        {title}
                    </h3>
                </div>

                <div className="flex flex-col items-center w-full">
                    {description.map((line, index) => (
                        <p
                            key={index}
                            className={`text-xs leading-5 text-center ${textColor} max-sm:text-xs max-sm:leading-4 ${index === 0 ? "w-24" : "w-full"
                                }`}
                        >
                            {line}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Main SecurityJourney Component
const steps = [
    {
        number: "1",
        title: "Integrate",
        description: ["Connect to your", "current tools"],
        numberColor: "text-gray-900/60",
    },
    {
        number: "2",
        title: "Integrate",
        description: ["Connect to your", "current tools"],
        numberColor: "text-gray-900/60",
    },
    {
        number: "3",
        title: "Optimise",
        description: ["Fine-tune to your", "goals"],
        numberColor: "text-gray-900/60",
    },
    {
        number: "4",
        title: "Scale",
        description: ["Support, refine, and", "grow over time"],
        numberColor: "text-gray-900/60",
    },
    {
        number: "5",
        title: "Scale",
        description: ["Support, refine, and", "grow over time"],
        numberColor: "text-gray-900/60",
        textColor: "text-neutral-100",
    },
];

export function OurSecurityJourney() {
    return (
        <section className="w-full bg-[#132146] min-h-[558px]">
            {/* Our Security Journey Header Container */}
            <div className="flex justify-center items-center px-36 pt-9 pb-12 w-full">
                <div className="relative w-full max-w-[1140px]">
                    <header className="flex justify-center items-center w-full">
                        <h1 className="font-medium text-[64px] text-white text-center">
                            Our{" "}
                            <span className="font-bold text-[64px] text-orange-500">
                                Security Journey
                            </span>
                        </h1>
                    </header>

                    <div className="flex justify-center items-center mt-8 w-full">
                        <div className="flex flex-col items-center justify-center w-[450px] max-md:w-[350px] max-sm:w-full max-sm:max-w-[300px]">
                            <p className="mb-0.5 w-full text-base leading-6 text-center text-stone-300 max-md:w-[350px] max-sm:w-full max-sm:max-w-[300px]">
                                Getting started is simpler than you think.
                            </p>
                            <p className="w-full text-base leading-6 text-center text-stone-300 max-md:w-[350px] max-sm:w-full max-sm:max-w-[300px]">
                                Here's how we help businesses bring AI into their operations:
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Steps Container */}
            <div className="flex items-center justify-end w-full">
                <div className="relative w-full max-w-[1250px]">
                    <div className="flex items-center justify-end w-full">
                        <div className="relative w-full">
                            <div className="absolute top-1/2 left-0 right-0 h-[130px] bg-[#253b78] -translate-y-1/2 z-[1]"></div>
                            <div className="flex gap-3 items-center justify-end w-auto max-md:flex-wrap max-md:gap-2 max-md:justify-center max-sm:flex-col max-sm:gap-5 z-[2] relative">
                                {steps.map((step, index) => (
                                    <React.Fragment key={step.number}>
                                        <SecurityStep
                                            number={step.number}
                                            title={step.title}
                                            description={step.description}
                                            numberColor={step.numberColor}
                                            textColor={step.textColor}
                                        />
                                        {index < steps.length - 1 && <StepConnector />}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurSecurityJourney;
