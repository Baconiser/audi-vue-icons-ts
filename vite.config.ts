import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import path from "path";

// https://vitejs.dev/config/
// @ts-ignore
export default ({ mode }) => {
    // @ts-ignore
    return defineConfig({
        resolve: {
            alias: {
                "@": "/src"
            },
        },
        plugins: [createVuePlugin()],
        build: {
            lib: {
                entry: path.resolve(__dirname, './index.d.ts'),
                name: '"audi-vue-icons-ts',
                fileName: (format) => `audi-vue-icons-ts.${ format }.js`
            }, rollupOptions: {
                // make sure to externalize deps that shouldn't be bundled
                // into your library
                external: ['vue'],
                output: {
                    // Provide global variables to use in the UMD build
                    // for externalized deps
                    globals: {
                        vue: 'Vue'
                    }
                }
            }
        }

    });
};
