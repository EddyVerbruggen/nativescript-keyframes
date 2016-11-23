import {Observable} from 'data/observable';
import {Keyframes} from 'nativescript-keyframes';

export class HelloWorldModel extends Observable {
  public message: string;
  private keyframes: Keyframes;

  constructor() {
    super();

    this.keyframes = new Keyframes();
    this.message = this.keyframes.message;
  }
}