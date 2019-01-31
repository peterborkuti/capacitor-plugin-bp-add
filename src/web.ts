import { WebPlugin } from '@capacitor/core';
import { IAddPlugin } from './definitions';

class AddPluginWeb extends WebPlugin implements IAddPlugin {
  constructor() {
    super({
      name: 'Add',
      platforms: ['web']
    });
  }

  async add(options: { a: number, b: number }): Promise<{value: number, ver: string}> {
    return {value: options.a + options.b, ver: 'web:0.0.5'};
  }
}

const AddWebPlugin = new AddPluginWeb();

export { AddWebPlugin };
