const EXPIRING_WINDOW_DAYS = 3;

export function calculateDaysRemaining(expiryDate) {
  if (!expiryDate) return null;
  const today = new Date();
  const todayUtc = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
  const expiryUtc = new Date(`${expiryDate}T00:00:00Z`);
  const diffMs = expiryUtc.getTime() - todayUtc.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

export function resolvePantryStatus(daysRemaining) {
  if (daysRemaining === null) return "Safe";
  if (daysRemaining < 0) return "Expired";
  if (daysRemaining <= EXPIRING_WINDOW_DAYS) return "Expiring Soon";
  return "Safe";
}

export function enrichPantryItem(item) {
  const daysRemaining = calculateDaysRemaining(item.expiry_date);
  const status = resolvePantryStatus(daysRemaining);
  return {
    ...item,
    days_remaining: daysRemaining,
    status,
  };
}
