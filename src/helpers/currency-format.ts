const formatterCache = new Map<string, Intl.NumberFormat>();

export const formatCurrency = (value: number, locale = "pt-BR", currency = "BRL"): string => {
  const cacheKey = `${locale}-${currency}`;

  try {
    let formatter = formatterCache.get(cacheKey);

    if (!formatter) {
      formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      formatterCache.set(cacheKey, formatter);
    }

    return formatter.format(value);
  } catch (error) {
    console.error("Erro ao formatar moeda:", error);

    // Plano B caso a moeda seja inválida
    return value.toLocaleString(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
};
