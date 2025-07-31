import React from "react";

// Reusable Partner Logo Component
const PartnerLogo = ({ src, alt }) => (
    <div className="flex items-center justify-center w-48 h-24">
        <img
            className="max-w-full max-h-full object-contain"
            alt={alt}
            src={src}
        />
    </div>
);

const OurPartners = () => {
    const partners = [
        { src: "/partners/image-1.svg", alt: "Check Point Logo" },
        { src: "/partners/image-2.svg", alt: "CyberArk Logo" },
        { src: "/partners/image-3.svg", alt: "Cisco Logo" },
        { src: "/partners/image-4.svg", alt: "Elastic Logo" },
        { src: "/partners/image-5.svg", alt: "AWS Logo" },
        { src: "/partners/image-6.svg", alt: "Palo Alto Networks Logo" },
    ];

    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-8">
                {/* Partners Row */}
                <div className="flex justify-center items-center gap-16">
                    {partners.map((partner, index) => (
                        <PartnerLogo
                            key={index}
                            src={partner.src}
                            alt={partner.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPartners;