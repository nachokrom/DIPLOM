/// <reference types="vite/client" />

// shims-vue.d.ts или другой .d.ts файл в вашем проекте
declare module "*.png" {
    const value: string;
    export = value;
}

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
  