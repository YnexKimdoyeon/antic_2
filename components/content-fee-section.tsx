import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RefreshCw, TrendingUp, ShoppingCart, ArrowRight } from "lucide-react"
import { links } from "@/lib/links"

export function ContentFeeSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-center">
            상품권 서비스 안내
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {/* 자동매입 카드 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 relative w-full h-40 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-500/10 via-primary/5 to-background">
                  <div className="absolute -left-6 top-4 h-16 w-16 rounded-2xl border border-emerald-400/40 bg-background/80 shadow-md flex items-center justify-center">
                    <RefreshCw className="h-7 w-7 text-emerald-500" />
                  </div>
                  <div className="absolute right-4 bottom-3 flex gap-2 items-center text-xs text-emerald-600/80 font-medium">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>실시간 자동 처리</span>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <div className="flex gap-2 mb-2">
                      <span className="h-7 w-10 rounded-md bg-emerald-500/80" />
                      <span className="h-7 w-10 rounded-md bg-emerald-400/60" />
                      <span className="h-7 w-10 rounded-md bg-emerald-300/50" />
                    </div>
                    <div className="h-1 w-20 rounded-full bg-emerald-300/50" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  자동매입
                </h3>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full text-base group/btn bg-background border-2"
                  asChild
                >
                  <a href={links.autoBuy} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    상품권 자동매입 하러가기
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* 단가 확인 카드 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 relative w-full h-40 rounded-xl overflow-hidden bg-gradient-to-br from-sky-500/10 via-primary/5 to-background">
                  <div className="absolute inset-4 rounded-lg border border-sky-400/40 bg-background/80 backdrop-blur-sm px-4 py-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span>기프트카드</span>
                      <span className="flex items-center gap-1 text-sky-600">
                        <TrendingUp className="h-3 w-3" />
                        시세 그래프
                      </span>
                    </div>
                    <div className="flex items-end gap-1 h-16">
                      <div className="w-3 flex-1 rounded-t-md bg-sky-300/70 h-6" />
                      <div className="w-3 flex-1 rounded-t-md bg-sky-400/80 h-10" />
                      <div className="w-3 flex-1 rounded-t-md bg-sky-500/90 h-14" />
                      <div className="w-3 flex-1 rounded-t-md bg-sky-400/80 h-9" />
                      <div className="w-3 flex-1 rounded-t-md bg-sky-300/70 h-5" />
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 h-8 rounded-full bg-sky-500/10 px-3 flex items-center text-[11px] font-medium text-sky-700">
                    여러 상품권 단가 한눈에
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  단가 확인
                </h3>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full text-base group/btn border-2" 
                  asChild
                >
                  <a href={links.priceCheck} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    상품권 단가 보러가기
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* 구매 카드 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 relative w-full h-40 rounded-xl overflow-hidden bg-gradient-to-br from-amber-500/10 via-primary/5 to-background">
                  <div className="absolute inset-4 flex items-center gap-3">
                    <div className="flex-1 rounded-xl bg-background/90 shadow-md px-3 py-2 flex flex-col gap-2">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>상품권 선택</span>
                        <span className="h-2 w-2 rounded-full bg-amber-400" />
                      </div>
                      <div className="h-2 w-full rounded-full bg-amber-200/80" />
                      <div className="h-2 w-3/4 rounded-full bg-amber-300/80" />
                    </div>
                    <div className="h-14 w-14 rounded-full bg-amber-500/90 text-background flex items-center justify-center shadow-lg">
                      <ShoppingCart className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-4 right-4 flex justify-between text-[11px] text-amber-800/80 font-medium">
                    <span>온라인 발송</span>
                    <span>즉시 이용 가능</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  구매하기
                </h3>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full text-base group/btn border-2" 
                  asChild
                >
                  <a href={links.purchase} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    상품권 구매하러가기
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
