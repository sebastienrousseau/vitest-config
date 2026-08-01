export interface VitestUserConfig {
  test?: Record<string, unknown>;
}

declare const config: VitestUserConfig;
export default config;
