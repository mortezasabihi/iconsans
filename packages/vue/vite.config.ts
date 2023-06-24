import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        outDir: "dist",
        sourcemap: true,
        lib: {
            entry: {
                linear: path.resolve(__dirname, "./src/components/Linear/index.ts"),
                bold: path.resolve(__dirname, "./src/components/Bold/index.ts"),
            },
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
