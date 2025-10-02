import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Building2, Coffee } from "lucide-react"
import Image from "next/image"

export function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              매입 가능 상품권 품목
            </h2>
            <p className="text-lg text-muted-foreground">문화 상품권 / 백화점 상품권 / 외식 & 기프티콘</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* 문화 상품권 */}
            <Card className="flex flex-col">
              <CardHeader>
                <div className="relative aspect-video w-full mb-4 overflow-hidden rounded-lg">
                  <Image src="/korean-culture-gift-cards-collection-cultureland-g.jpg" alt="문화 상품권" fill className="object-cover" />
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">문화 상품권</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-card-foreground mb-6">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>컬쳐랜드 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>원스토어 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>원스토어 컬쳐랜드 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>도서 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>북앤라이프 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>틴캐시</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>구글 기프트 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>구글 기프트 교환권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>넥슨캐시</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>넥슨 현대카드 포인트</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary font-semibold">•</span>
                    <span className="font-semibold">이외 상품권 별도 문의!</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-3">
                  <Button className="w-full" asChild>
                    <a href="https://www.brtk777.com/" target="_blank" rel="noopener noreferrer">
                      상담하러가기
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="https://www.jjtk1123.com/general-1-1" target="_blank" rel="noopener noreferrer">
                      매입 시세 보러가기
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 백화점 상품권 */}
            <Card className="flex flex-col">
              <CardHeader>
                <div className="relative aspect-video w-full mb-4 overflow-hidden rounded-lg">
                  <Image src="/korean-department-store-gift-cards-shinsegae-lotte.jpg" alt="백화점 상품권" fill className="object-cover" />
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">백화점 상품권</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-card-foreground mb-6">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>신세계 백화점 온라인 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>신세계 백화점 지류 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>이마트 상품권 온라인 교환권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>이마트 상품권 지류 교환권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>롯데 모바일 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>롯데 지류 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>금강제화 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>농협 하나로 마트 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>갤러리아 모바일 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>현대 백화점 모바일 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary font-semibold">•</span>
                    <span className="font-semibold">이외 상품권 별도 문의!</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-3">
                  <Button className="w-full" asChild>
                    <a href="https://www.brtk777.com/" target="_blank" rel="noopener noreferrer">
                      상담하러가기
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="https://www.jjtk1123.com/general-1-1" target="_blank" rel="noopener noreferrer">
                      매입 시세 보러가기
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 외식 & 기프티콘 */}
            <Card className="flex flex-col md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="relative aspect-video w-full mb-4 overflow-hidden rounded-lg">
                  <Image src="/korean-food-and-cafe-gift-cards-starbucks-delivery.jpg" alt="외식 & 기프티콘" fill className="object-cover" />
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">외식 & 기프티콘</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-card-foreground mb-6">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>스타벅스 금액권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>스타벅스 기프티콘</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>배달의민족 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>올리브영 상품권</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary font-semibold">•</span>
                    <span className="font-semibold">각종 모든 종류 기프티콘!</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-3">
                  <Button className="w-full" asChild>
                    <a href="https://www.brtk777.com/" target="_blank" rel="noopener noreferrer">
                      상담하러가기
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="https://www.jjtk1123.com/general-1-1" target="_blank" rel="noopener noreferrer">
                      매입 시세 보러가기
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
