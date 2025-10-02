import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* CTA Section */}
        <div className="mb-12 text-center">
          <h3 className="mb-4 text-2xl font-bold text-card-foreground sm:text-3xl">지금 바로 상담 받아보세요</h3>
          <p className="mb-6 text-muted-foreground">빠르고 안전한 상품권 현금화, 최고 시세로 거래하세요</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-base px-8">
              상담하러가기
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
              시세 확인하기
            </Button>
          </div>
        </div>

        {/* Business Info */}
        <div className="border-t border-border pt-8">
          <div className="mx-auto max-w-3xl space-y-2 text-center text-sm text-muted-foreground">
            <p>
              <strong className="text-card-foreground">상호명:</strong> 상품권 성지
            </p>
            <p>
              <strong className="text-card-foreground">대표자:</strong> 김상진
            </p>
            <p>
              <strong className="text-card-foreground">사업자등록번호:</strong> 394-04-03287
            </p>
            <p>
              <strong className="text-card-foreground">주소:</strong> 부산시 북구 백양대로 1015번길34-32
            </p>
            <p>
              <strong className="text-card-foreground">고객센터:</strong> 010-5782-5248
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 ○○○○. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
