// js 기능, 화폐 설정 방법
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default currencyFormatter;
