/**
 * 사이트에서 사용되는 모든 외부 링크들을 중앙 관리하는 설정 파일
 */

export const LINKS = {
  // 상담 관련 링크
  CONSULTATION: {
    url: "https://www.brtk777.com/",
    label: "상담하러가기",
    description: "상품권 현금화 상담 페이지"
  },
  
  // 시세 확인 관련 링크
  PRICE_CHECK: {
    url: "https://www.jjtk1123.com/general-1-1",
    label: "시세 확인하기",
    label2: "매입 시세 보러가기", // 다른 버전의 라벨
    description: "상품권 매입 시세 확인 페이지"
  }
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
