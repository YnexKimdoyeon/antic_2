import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import { getLinkUrl, getLinkLabel } from "@/lib/links"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <TrendingUp className="h-4 w-4" />
                <span>신뢰할 수 있는 상품권 매입 서비스</span>
              </div>

              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                상품권 매입
              </h1>

              <p className="mb-10 text-pretty text-lg text-muted-foreground sm:text-xl leading-relaxed">
                구글 기프트카드 · 컬쳐랜드 · 도서상품권 <br />스타벅스 · 백화점 상품권까지!
                <br />
                빠르고 안전한 매입 서비스
              </p>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-start justify-center">
                <Button size="lg" className="text-base sm:text-lg px-8 py-6" asChild>
                  <a href={getLinkUrl("CONSULTATION")} target="_blank" rel="noopener noreferrer">
                    {getLinkLabel("CONSULTATION")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-base sm:text-lg px-8 py-6 bg-transparent" asChild>
                  <a href={getLinkUrl("PRICE_CHECK")} target="_blank" rel="noopener noreferrer">
                    {getLinkLabel("PRICE_CHECK")}
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                    <Image src="/korean-cultureland-gift-card-voucher.jpg" alt="컬쳐랜드 상품권" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                    <Image src="/starbucks-korea-gift-card.jpg" alt="스타벅스 상품권" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                    <Image src="/google-play-gift-card-korea.jpg" alt="구글 기프트카드" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                    <Image src="/korean-department-store-gift-voucher.jpg" alt="백화점 상품권" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-accent" />
        </div>
      </div>
    </section>
  )
}
