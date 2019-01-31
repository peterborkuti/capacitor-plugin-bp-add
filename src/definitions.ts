declare global {
  interface PluginRegistry {
    Add?: AddPlugin;
  }
}

export interface AddPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
