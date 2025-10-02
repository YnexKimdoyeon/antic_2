import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { ContentFeeSection } from "@/components/content-fee-section"
import { ProductsSection } from "@/components/products-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <ContentFeeSection />
      <ProductsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
