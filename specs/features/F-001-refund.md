---
schema: mergegate/feature@1
id: F-001
title: 환불 정책
status: active
owners: [kev]
code_refs:
  - path: src/refund.ts
    symbols: [REFUND_WINDOW_DAYS, RefundStatus, canRefund]
assertions:
  - id: A-F001-001
    claim: "환불 가능 기간은 구매 후 7일"
    type: const.equals
    source: src/refund.ts#REFUND_WINDOW_DAYS
    expect: 7
  - id: A-F001-002
    claim: "환불 상태는 요청·승인·지급·거절 네 가지"
    type: enum.members
    source: src/refund.ts#RefundStatus
    expect: { mode: exact, members: [requested, approved, paid, rejected] }
  - id: A-F001-003
    claim: "환불 가능 여부 판단 함수가 있다"
    type: symbol.exists
    source: src/refund.ts#canRefund
    expect: true
---
# 환불 정책

구매 후 7일 이내에만 환불할 수 있다. 환불 요청은 요청 → 승인 → 지급 순으로 진행되며, 거절될 수 있다.
