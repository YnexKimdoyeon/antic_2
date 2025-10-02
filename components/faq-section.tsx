import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-center">
            자주 묻는 질문
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg">상품권 현금화는 합법인가요?</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                상품권 현금화 자체는 불법이 아니며, 정상적인 거래를 통해 안전하게 이용 가능합니다.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg">가장 시세가 좋은 상품권은 무엇인가요?</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                대표적으로 롯데 모바일 상품권, 컬쳐랜드 상품권 등이 높은 시세율을 보입니다.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg">현금화까지 소요되는 시간은?</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                보통 빠르면 5분 내외, 상품권 종류에 따라 즉시 현금화 가능합니다.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg">상품권 자동 매입은 불가능 한가요 ?</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                저희 자동매매 사이트에서 문화상품권 1만원 , 문화상품권 5만원 권종 상관없이 자동 교환도 가능 합니다.
                <Button size="lg" className="text-base px-5" asChild>
                  <a href="https://tkoulet.shop/" target="_blank" rel="noopener noreferrer">
                  자동매입하러가기
                  </a>
                </Button>
              </AccordionContent>
             
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
