import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import postCssPxToRem from "postcss-pxtorem";

export default defineConfig({
	base: "/website/",
	plugins: [react()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
		extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
	},
	css: {
		postcss: {
			plugins: [
				postCssPxToRem({
					rootValue: 192,
					propList: ["*"],
					mediaQuery: false,
					minPixelValue: 1,
					selectorBlackList: [/^html$/, "nopx"],
				}),
			],
		},
	},
});
