import { Hero } from "@/components/home/Hero";
import { SignatureServices } from "@/components/home/SignatureServices";
import { FounderSection } from "@/components/home/FounderSection";
import { FeaturedTreatment } from "@/components/home/FeaturedTreatment";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { AppointmentEnquiry } from "@/components/home/AppointmentEnquiry";
import { VisitIcono } from "@/components/home/VisitIcono";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignatureServices />
      <FounderSection />
      <FeaturedTreatment />
      <GalleryPreview />
      <AppointmentEnquiry />
      <VisitIcono />
    </>
  );
}
