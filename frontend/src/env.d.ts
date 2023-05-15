/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_GATEWAY_URL: string
  readonly VITE_APP_CDN_IMAGE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
