
export const formatValue = (value) =>
  Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    // maximumSignificantDigits: 3,
    notation: "standard",
  }).format(value);

export const getInitials = (name) => {
  const initials = name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
  return initials;
};