import path from "path";
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
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
            name: '@iconsans/react',
            fileName: '[name]',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ["react"],
            output: {
                preserveModules: true,
                preserveModulesRoot: 'src',
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
