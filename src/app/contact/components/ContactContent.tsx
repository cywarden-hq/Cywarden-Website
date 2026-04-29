"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { useForm, useWatch, type UseFormRegisterReturn } from "react-hook-form";
import { toast } from "react-toastify";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { footerAddresses } from "@/config/footer";

const introCopy =
    "Cywarden delivers agile, cost-effective security solutions designed for a world that never slows down. With our hybrid onsite-offshore model and remote-first approach, we seamlessly scale protection across cloud and enterprise ecosystems.";

const MESSAGE_MAX_CHARS = 500;

const PHONE_PATTERN = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    honeypot?: string;
}

function UnderlineField({
    id,
    label,
    required,
    registration,
    type = "text",
    autoComplete,
    error,
}: {
    id: string;
    label: string;
    required?: boolean;
    registration: UseFormRegisterReturn;
    type?: string;
    autoComplete?: string;
    error?: string;
}) {
    return (
        <div className="flex min-w-0 flex-col gap-1">
            <label htmlFor={id} className="text-medium font-medium text-white">
                {label}
                {required ? (
                    <span className="text-[#F9680E]" aria-hidden>
                        {" "}
                        *
                    </span>
                ) : null}
            </label>
            <input
                id={id}
                type={type}
                autoComplete={autoComplete}
                {...registration}
                className={cn(
                    "w-full border-0 border-b border-white/40 bg-transparent py-2 text-base text-white outline-none transition",
                    "placeholder:text-white/25 focus:border-[#008DFF] focus:ring-0",
                )}
            />
            {error ? <p className="mt-1 text-xs text-red-400">{error}</p> : null}
        </div>
    );
}

export function ContactContent() {
    /** Set once when the form mounts — server enforces min/max age for anti-bot / replay */
    const [formOpenedAt] = useState(() => Date.now());

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            honeypot: "",
        },
    });

    const messageLength = useWatch({ control, name: "message" })?.length ?? 0;

    const onSubmit = async (data: FormData) => {
        try {
            const name = [data.firstName, data.lastName].filter(Boolean).join(" ").trim();
            if (name.length > 100) {
                toast.error("Name must be 100 characters or less in total.");
                return;
            }
            const submissionData = {
                name,
                email: data.email.trim(),
                phone: data.phone.trim(),
                message: data.message,
                honeypot: data.honeypot ?? "",
                formOpenedAt,
            };

            const response = await fetch("/api/contact/form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "same-origin",
                body: JSON.stringify(submissionData),
            });

            const result = (await response.json()) as { error?: string };

            if (!response.ok) {
                if (response.status === 429) {
                    const retryAfter = response.headers.get("Retry-After");
                    throw new Error(
                        result.error ||
                            `Too many requests. Please try again in ${retryAfter || "a few"} seconds.`,
                    );
                }
                throw new Error(result.error || "Failed to send message");
            }

            toast.success("Thanks for contacting us! We appreciate your message.");

            reset({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
                honeypot: "",
            });
        } catch (error) {
            console.error("Form submission error:", error);
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to send message. Please try again later.",
            );
        }
    };

    const us = footerAddresses[0];
    const india = footerAddresses[1];

    return (
        <Section size="xl" className="relative min-w-0 overflow-x-hidden bg-transparent text-white">
            <Container as="div" className="relative min-w-0 px-4 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-3xl text-center">
                    <h1 className="font-heading text-4xl font-bold tracking-tight text-[#F9680E] sm:text-5xl md:text-[3.25rem]">
                        Contact Us
                    </h1>
                    <p className="mt-3 font-heading text-lg font-medium text-white sm:mt-4 sm:text-xl">
                        Any question or remarks? Just write us a message!
                    </p>
                    <p className="body-lg mx-auto mt-5 max-w-2xl text-pretty text-center text-white/75 sm:mt-6">
                        {introCopy}
                    </p>
                </header>

                <div className="mx-auto mt-12 grid min-w-0 max-w-6xl gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-12 xl:gap-16">
                    <aside
                        className={cn(
                            "relative isolate min-h-0 overflow-hidden rounded-2xl p-8 sm:rounded-3xl sm:p-10",
                            "bg-gradient-to-br from-[#1e6fd9] via-[#1565c0] to-[#0d47a1]",
                        )}
                    >
                        <div
                            className="pointer-events-none absolute -bottom-16 -right-12 h-56 w-56 rounded-full bg-sky-300/25 blur-2xl"
                            aria-hidden
                        />
                        <div
                            className="pointer-events-none absolute bottom-4 right-4 h-40 w-40 rounded-full bg-sky-200/20"
                            aria-hidden
                        />
                        <div
                            className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 rounded-full bg-white/10"
                            aria-hidden
                        />

                        <div className="relative z-10 flex h-full flex-col">
                            <h2 className="font-heading text-2xl font-bold sm:text-3xl">Contact Information</h2>
                            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/90 sm:text-base">
                                Your Vision, Our Mission: Let&apos;s Shape Success Together.
                            </p>

                            <ul className="mt-8 flex flex-col gap-6 sm:mt-10" role="list">
                                <li className="flex gap-3">
                                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-white" strokeWidth={1.75} aria-hidden />
                                    <a
                                        href="mailto:info@cywarden.com"
                                        className="text-sm font-medium text-white underline-offset-2 hover:underline sm:text-base"
                                    >
                                        info@cywarden.com
                                    </a>
                                </li>
                                <li className="flex gap-3">
                                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white" strokeWidth={1.75} aria-hidden />
                                    <div className="text-sm leading-relaxed text-white/95 sm:text-base">
                                        <p className="font-semibold">{us.title}</p>
                                        {us.lines.map((line) => (
                                            <p key={line}>{line}</p>
                                        ))}
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white" strokeWidth={1.75} aria-hidden />
                                    <div className="text-sm leading-relaxed text-white/95 sm:text-base">
                                        <p className="font-semibold">{india.title}</p>
                                        {india.lines.map((line) => (
                                            <p key={line}>{line}</p>
                                        ))}
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/20 pt-8 sm:mt-auto">
                                <div className="flex items-center gap-3">
                                    <Link
                                        href="https://www.linkedin.com/company/cywarden/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 transition hover:bg-white/25"
                                        aria-label="Cywarden on LinkedIn"
                                    >
                                        <Image src="/images/linkedin-logo.svg" alt="Cywarden on LinkedIn" width={24} height={24} />
                                    </Link>
                                </div>
                                <span className="text-sm text-white/85">Follow us on LinkedIn</span>
                            </div>
                        </div>
                    </aside>

                    <form
                        className="relative flex min-w-0 max-w-full flex-col gap-8 lg:min-w-0 lg:pt-2"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                    >
                        <input
                            type="text"
                            {...register("honeypot")}
                            tabIndex={-1}
                            autoComplete="off"
                            className="pointer-events-none absolute left-[-9999px] h-px w-px opacity-0"
                            aria-hidden
                        />

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10">
                            <UnderlineField
                                id="contact-first-name"
                                label="First Name"
                                required
                                autoComplete="given-name"
                                registration={register("firstName", {
                                    required: "First name is required",
                                    maxLength: { value: 80, message: "First name is too long" },
                                    pattern: {
                                        value: /^[a-zA-Z\s'-]+$/,
                                        message: "Invalid characters in first name",
                                    },
                                })}
                                error={errors.firstName?.message}
                            />
                            <UnderlineField
                                id="contact-last-name"
                                label="Last Name"
                                registration={register("lastName", {
                                    maxLength: { value: 80, message: "Last name is too long" },
                                    pattern: {
                                        value: /^[a-zA-Z\s'-]*$/,
                                        message: "Invalid characters in last name",
                                    },
                                })}
                                error={errors.lastName?.message}
                            />
                            <UnderlineField
                                id="contact-email"
                                label="Email"
                                type="email"
                                required
                                autoComplete="email"
                                registration={register("email", {
                                    required: "Email is required",
                                    maxLength: { value: 100, message: "Email must be less than 100 characters" },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                error={errors.email?.message}
                            />
                            <UnderlineField
                                id="contact-phone"
                                label="Phone Number"
                                type="tel"
                                required
                                autoComplete="tel"
                                registration={register("phone", {
                                    required: "Phone is required",
                                    maxLength: { value: 20, message: "Phone must be less than 20 characters" },
                                    pattern: {
                                        value: PHONE_PATTERN,
                                        message: "Invalid phone number",
                                    },
                                })}
                                error={errors.phone?.message}
                            />
                        </div>

                        <div className="flex min-w-0 max-w-full flex-col gap-2">
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <label htmlFor="contact-message" className="text-medium font-medium text-white">
                                    Message
                                </label>
                                <span className="text-xs tabular-nums text-white/50" aria-live="polite">
                                    {messageLength} / {MESSAGE_MAX_CHARS}
                                </span>
                            </div>
                            <textarea
                                id="contact-message"
                                rows={5}
                                maxLength={MESSAGE_MAX_CHARS}
                                autoComplete="off"
                                {...register("message", {
                                    required: "Message is required",
                                    minLength: {
                                        value: 10,
                                        message: "Message must be at least 10 characters",
                                    },
                                    maxLength: {
                                        value: MESSAGE_MAX_CHARS,
                                        message: `Message must be at most ${MESSAGE_MAX_CHARS} characters`,
                                    },
                                })}
                                placeholder="Write your message.."
                                className={cn(
                                    "box-border max-h-[260px] min-h-[120px] w-full max-w-full resize-y rounded-lg border border-white/60 bg-transparent px-3 py-3 text-base text-white outline-none transition",
                                    "placeholder:text-white/60 focus:border-[#008DFF] focus:ring-1 focus:ring-[#008DFF]",
                                )}
                            />
                            {errors.message ? (
                                <p className="text-xs text-red-400">{errors.message.message}</p>
                            ) : null}
                        </div>

                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "inline-flex min-h-12 min-w-[160px] items-center justify-center rounded-lg px-8 font-heading text-base font-semibold text-white transition hover:brightness-110",
                                    "bg-gradient-to-r from-[#E95C01] to-[#863002] shadow-[0_4px_24px_rgba(249,104,14,0.35)]",
                                    "disabled:cursor-not-allowed disabled:opacity-60",
                                )}
                            >
                                {isSubmitting ? "Sending…" : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </Section>
    );
}
