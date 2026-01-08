/**
 * 사이트에서 사용되는 외부 링크들을 중앙 관리하는 설정 파일
 */

// 기존 링크 구성 (기존 컴포넌트들이 사용 중일 수 있어 유지)
export const LINKS = {
  CONSULTATION: {
    url: "https://www.untactsave.com/",
    label: "상담하러가기",
    description: "상품권 상담 페이지"
  },

  PRICE_CHECK: {
    url: "https://www.jjtk1123.com/general-1-1",
    label: "시세 확인하기",
    label2: "매입 시세 보러가기",
    description: "상품권 매입 시세 관련 페이지"
  }
} as const;

// 새 섹션에서 사용할 예시 링크 모음
export const links = {
  autoBuy: "https://example.com/auto-buy",
  priceCheck: "https://example.com/price-check",
  purchase: "https://example.com/purchase",
} as const;

// 링크 타입 정의
export type LinkKey = keyof typeof LINKS;
export type LinkConfig = typeof LINKS[LinkKey];

// 링크 속성들을 쉽게 가져올 수 있는 헬퍼 함수들
export const getLinkUrl = (key: LinkKey): string => {
  return LINKS[key].url;
};

export const getLinkLabel = (key: LinkKey, variant?: string): string => {
  const link = LINKS[key];
  if (variant === "price" && "label2" in link) {
    return link.label2;
  }
  return link.label;
};

export const getLinkDescription = (key: LinkKey): string => {
  return LINKS[key].description;
};
