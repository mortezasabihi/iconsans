import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        outDir: "dist",
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, "./src/index.ts"),
            name: '@iconsans/vue',
            fileName: '[name]',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                preserveModules: true,
                preserveModulesRoot: 'src',
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
    plugins: [
        vue({
            isProduction: true,
        }),
        dts({
            insertTypesEntry: true
        }),
    ],
});
