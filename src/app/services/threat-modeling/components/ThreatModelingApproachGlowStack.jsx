/**
 * Shared backdrop for ProactiveThreatIdentification + WhyThreatModelingMatters.
 * Orange: upper-right quadrant (between top-right and center-right).
 * Blue: lower-left quadrant (between bottom-left and center-left).
 * Dual layers per color: wide soft halo + tighter bright core.
 */
const baseBlob = {
    position: "absolute",
    borderRadius: "50%",
    pointerEvents: "none",
};

export function ThreatModelingApproachGlowStack({ children }) {
    return (
        <div className="relative isolate min-w-0 overflow-x-clip bg-black">
            <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
                {/* Blue — wide halo, bottom / center-left */}
                <div
                    style={{
                        ...baseBlob,
                        bottom: "6%",
                        left: "-14%",
                        width: "min(110vw, 720px)",
                        height: "min(130vh, 980px)",
                        background: "rgba(0, 95, 255, 0.78)",
                        filter: "blur(420px)",
                        transform: "translate(-6%, 8%)",
                    }}
                />
                <div
                    style={{
                        ...baseBlob,
                        bottom: "14%",
                        left: "-4%",
                        width: "min(72vw, 480px)",
                        height: "min(85vh, 640px)",
                        background: "rgba(140, 200, 255, 0.62)",
                        filter: "blur(240px)",
                        transform: "translate(-2%, 4%)",
                    }}
                />

                {/* Orange — wide halo, top / center-right */}
                <div
                    style={{
                        ...baseBlob,
                        top: "10%",
                        right: "-18%",
                        left: "auto",
                        width: "min(115vw, 900px)",
                        height: "min(125vh, 1080px)",
                        background: "rgba(255, 115, 0, 0.82)",
                        filter: "blur(380px)",
                        transform: "translate(12%, -6%) rotate(-16.77deg)",
                    }}
                />
                <div
                    style={{
                        ...baseBlob,
                        top: "16%",
                        right: "-6%",
                        left: "auto",
                        width: "min(70vw, 520px)",
                        height: "min(78vh, 700px)",
                        background: "rgba(255, 200, 130, 0.68)",
                        filter: "blur(200px)",
                        transform: "translate(4%, -2%) rotate(-16.77deg)",
                    }}
                />
            </div>
            <div className="relative z-10">{children}</div>
        </div>
    );
}
