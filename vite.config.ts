import hotReloadExtension from "hot-reload-extension-vite";
import vue from "@vitejs/plugin-vue";

export default {
	plugins: [
		vue(),
		hotReloadExtension({
			log: true,
			backgroundPath: "src/main.ts", // relative path to background script file
		}),
	],
};
