import Hero from "@/app/components/Hero/Hero";
import PartnersPage from "@/app/components/Partners/Partners";
import Commissions from "@/app/components/Commissions/Commissions";
import Brand from "@/app/components/Brand/Brand";
import FAQ from "@/app/components/FAQ/FAQ";
import Connect from "@/app/components/Connect/Connect";


export default function HomePage() {

  return (
    <div className="relative z-10">
        <Hero/>
        <PartnersPage/>
        <Commissions/>
        <Brand/>
        <FAQ/>
        <Connect/>
    </div>
  );
}