declare global {
  interface PluginRegistry {
    AddPlugin?: IAddPlugin;
  }
}

export interface IAddPlugin {
  add(options: { a: number, b: number }): Promise<{value: number, ver: string}>;
}
