import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 语言资源
const resources = {
	en: {
		translation: {
			welcome: "Welcome",
			description: "This is an example of internationalization.",
		},
	},
	zh: {
		translation: {
			welcome: "欢迎",
			description: "这是一个国际化示例。",
		},
	},
};

i18n
	.use(initReactI18next) // 绑定 react-i18next
	.init({
		resources,
		lng: "zh", // 默认语言
		fallbackLng: "en", // 语言不可用时回退语言
		interpolation: {
			escapeValue: false, // react 已经安全处理
		},
	});

export default i18n;
