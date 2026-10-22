import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XR Fusion EDU – Laboratorio Inmersivo" },
      { name: "description", content: "Laboratorio de modelos 3D, RA y RV con mediación pedagógica." },
      { property: "og:title", content: "XR Fusion EDU – Laboratorio Inmersivo" },
      { property: "og:description", content: "Laboratorio de modelos 3D, RA y RV con mediación pedagógica." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/xr.html");
  }, []);
  return <div className="min-h-screen bg-background" />;
}
