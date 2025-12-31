import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coins, TrendingUp, Shield, Zap } from "lucide-react"
import { getLinkUrl, getLinkLabel } from "@/lib/links"

export function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-center">
          상품권 매입이란?
          </h2>

          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-card-foreground">
                <p>
                  <strong className="text-primary">상품권 매입이란?</strong>
                </p>
                <p>
                  각종 쇼핑몰에서 휴대폰 결제 혹은 신용카드 결제 혜택, 할인 행사기간에 맞춰 저렴하게 상품권을 구매한
                  이후 시세 차익으로 이익을 챙기는 것을 일컫는 단어입니다.
                </p>
                <p>
                  대표적으로는 구글상품권, 컬쳐랜드 상품권, 도서상품권, 북앤라이프 상품권, 모바일 쿠폰, 스타벅스 상품권,
                  신세계 상품권, 롯데 상품권과 같은 판매율이 빠른 상품으로 이용되고 있습니다.
                </p>
                <p>
                  그 중에서도 <strong className="text-primary">롯데 모바일 상품권</strong>은 판매 과정이 수월하고 가장
                  높은 시세율을 자랑합니다.
                </p>
                <p>
                  예외적으로 카카오톡 선물하기에서 구매 가능한 E쿠폰, 배달의민족 상품권, 기프티콘과 같은 상품권도
                  접근성이 높아 많이 이용됩니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Benefits Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">빠른 처리</h3>
                <p className="mt-2 text-sm text-muted-foreground">5분 내 매입</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">최고 시세</h3>
                <p className="mt-2 text-sm text-muted-foreground">업계 최고 환율</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">안전 거래</h3>
                <p className="mt-2 text-sm text-muted-foreground">100% 안전 보장</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">다양한 상품권</h3>
                <p className="mt-2 text-sm text-muted-foreground">모든 종류 매입</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-base px-8" asChild>
              <a href={getLinkUrl("CONSULTATION")} target="_blank" rel="noopener noreferrer">
                {getLinkLabel("CONSULTATION")}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
              <a href={getLinkUrl("PRICE_CHECK")} target="_blank" rel="noopener noreferrer">
                {getLinkLabel("PRICE_CHECK")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
