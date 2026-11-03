---
schema: mergegate/feature@1
id: F-001
title: Refund
status: active
code_refs:
  - path: src/refund.ts
    symbols: [REFUND_WINDOW_DAYS]
assertions:
  - id: A-F001-001
    claim: "Refunds are allowed for 7 days"
    type: const.equals
    source: src/refund.ts#REFUND_WINDOW_DAYS
    expect: 7
---
# Refund
