import { WebPlugin } from '@capacitor/core';
import { AddPlugin } from './definitions';

export class AddWeb extends WebPlugin implements AddPlugin {
  constructor() {
    super({
      name: 'Add',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const Add = new AddWeb();

export { Add };
