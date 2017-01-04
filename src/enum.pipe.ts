import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sfEnum' })
/**
 * Pipe which transforms an enum definition to an array, e.g.
 * export enum gender {
 *     unknown = <any>"unknown",
 *     male = <any>"male",
 *     female = <any>"female",
 * }
 * 
 * is transformed to
 * ["unknown", "male", "female"]
 * @param {string} value enum definition
 * @returns {string[]} array with enum values as strings
 */
export class EnumPipe implements PipeTransform {
  transform(value: Object, args: string[]): string[] {
    let result = [];
    for (let property in value) {
      if (value.hasOwnProperty(property)) {
        result.push(value[property]);
      }
    }
    //console.log('value', value, 'result', result);
    return result;
  }
}