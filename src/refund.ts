// Refund policy constants (MergeGate E2E fixture)
export const REFUND_WINDOW_DAYS = 14;

export type RefundStatus = 'requested' | 'approved' | 'paid' | 'rejected';

export function canRefund(daysSincePurchase: number): boolean {
  return daysSincePurchase <= REFUND_WINDOW_DAYS;
}
