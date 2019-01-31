import { Plugins } from '@capacitor/core';
import { IAddPlugin } from './definitions';

const { AddPlugin } = Plugins;

export class Add implements IAddPlugin {
    add(options: { a: number; b: number; }): Promise<{ value: number; ver: string; }> {
        return AddPlugin.add(options);
    }
}