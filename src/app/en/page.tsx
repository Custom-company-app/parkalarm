import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import {getContent} from "@/lib/i18n";

export const metadata = {
    title: "ParkAlarm – Smart parking alerts"
};

export default async function HomeEn() {
    const t = await getContent("en");
    return (
        <>
            <Header t={t}/>
            <main id="main" className="min-h-screen">
                <Hero t={t}/>
                <HowItWorks t={t}/>
                <Features t={t}/>
                <Benefits t={t}/>
                <SocialProof t={t}/>
                <FAQ t={t}/>

                <SignupForm t={t}/>

            </main>
            <Footer t={t}/>
            <CookieBanner/>
        </>
    );
}