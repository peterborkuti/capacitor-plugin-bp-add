declare global {
  interface PluginRegistry {
    Add?: AddPlugin;
  }
}

export interface AddPlugin {
  add(options: { a: number, b: number }): Promise<{value: number}>;
}
