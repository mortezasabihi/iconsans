import path from "path";
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        outDir: "dist",
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, "./index.ts"),
            name: '@iconsans/react',
            fileName: '[name]',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ["react"],
            output: {
                preserveModules: true,
                globals: {
                    react: "react",
                },
            },
        },
    },
    plugins: [
        react(),
        dts({
            insertTypesEntry: true
        }),
    ],
});
