export const MessageTypes = {
	PLATFORM_ALERT: "ALERT",
	PLATFORM_REDIRECT: "REDIRECT",
	PLATFORM_MODAL: "MODAL"
};

export const RouteNames = {
	ROOT: "/",
	ADD: "/add",
	INFO: "/info",
	PRICING: "/pricing",
	TOS: "/tos"
};

export const ProductFormatsIcons = {
	5: "file-download",
	6: "video",
	7: "music",
	8: "microphone",
	9: "laptop",
	10: "image",
	11: "mobile-android-alt",
	12: "code",
	13: "shopping-cart",
	14: "tag"
};

export const ImageExtensions = [".png", ".jpeg", ".jpg", ".bmp"];

export const Currencies = {
	EURO: "EUR",
	BRAZILIAN_REAL: "BRL",
	ARGENTINE_PESO: "ARS",
	AMERICAN_DOLLAR: "USD",
	MEXICAN_PESO: "MXN",
	PERUVIAN_NUEVO_SOL: "PEN",
	COLOMBIAN_PESO: "COP",
	CHILEAN_PESO: "CLP",
	SWISS_FRANC: "CHF",
	CANADIAN_DOLLAR: "CAD",
	NIGERIAN_NAIRA: "NGN",
	POUND: "GBP",
	JAPANESE_YEN: "JPY"
};

export const CurrencySymbols = {
	EUR: "€",
	BRL: "R$",
	ARS: "ARS$",
	USD: "USD$",
	MXN: "MXN$",
	PEN: "PEN$",
	COP: "COP$",
	CLP: "CLP$",
	CHF: "CHF$",
	CAD: "CAD$",
	NGN: "NGN$",
	GBP: "GBP$",
	JPY: "JPY$"
};

export const Subscription = {
	ID: 2,
	// Provisório
	URL: "https://www.hotmart.com/pt-BR"
};

export const PaymentModes = {
	UNIQUE_PAYMENT: "UNIQUE_PAYMENT",
	PAY_IN_FULL: "PAY_IN_FULL",
	MULTIPLE_PAYMENTS: "MULTIPLE_PAYMENTS",
	SUBSCRIPTION: "SUBSCRIPTION",
	INVOICE: "INVOICE"
};

// eslint-disable-next-line no-unused-vars
export const PaymentModesText = () => ({
	UNIQUE_PAYMENT: "Parcelamento COM tarifas para seu cliente (seu cliente é quem paga as tarifas)",
	PAY_IN_FULL: "Pagamento à vista",
	MULTIPLE_PAYMENTS: "Parcelamento inteligente",
	SUBSCRIPTION: "Assinatura",
	INVOICE: "Invoice"
});

export const TermsOfService = {
	ONE_PERCENT: {
		projectName: "VULCANO",
		typeName: "OnePercent_Terms"
	}
};

export const MAX_PRODUCT_PRICE_ALLOWED = 1000000000;
