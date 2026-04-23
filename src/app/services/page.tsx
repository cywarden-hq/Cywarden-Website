import { permanentRedirect } from "next/navigation";

/** No dedicated `/services` hub — send visitors to the primary service page. */
export default function ServicesIndexPage() {
    permanentRedirect("/services/cloud-security");
}
