import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Gamepad2, Gift } from "lucide-react"
import { getLinkUrl, getLinkLabel } from "@/lib/links"

export function ContentFeeSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-center">
            컨텐츠 이용료란?
          </h2>

          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-card-foreground">
                <p>
                  <strong className="text-primary">구글 컨텐츠 이용료</strong>는 휴대폰 결제와는 별도의 한도로, 구글 앱
                  혹은 앱스토어에서 구글 컨텐츠(게임 아이템, 아프리카 별풍선, 상품권 구매)에 사용 가능한 한도입니다.
                </p>
                <p>
                  대표적으로 구글 기프트카드와 같은 계열이 있으며, 리니지와 같은 게임에서 대중적으로 많이 사용되고
                  있습니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Content Fee Types */}
          <div className="grid gap-6 sm:grid-cols-3 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Smartphone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">구글 기프트카드</h3>
                <p className="text-sm text-muted-foreground">앱스토어 컨텐츠 구매</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Gamepad2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">게임 아이템</h3>
                <p className="text-sm text-muted-foreground">리니지 등 게임 결제</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Gift className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">별풍선 구매</h3>
                <p className="text-sm text-muted-foreground">아프리카TV 후원</p>
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
