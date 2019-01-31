import { WebPlugin } from '@capacitor/core';
import { AddPlugin } from './definitions';

export class AddWeb extends WebPlugin implements AddPlugin {
  constructor() {
    super({
      name: 'Add',
      platforms: ['web']
    });
  }

  async add(options: { a: number, b: number }): Promise<{value: number}> {
    return {value: options.a + options.b};
  }
}

const Add = new AddWeb();

export { Add };
