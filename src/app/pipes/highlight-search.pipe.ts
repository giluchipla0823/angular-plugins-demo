import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'highlightSearch'
})
export class HighlightSearchPipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(value: any, args: any): any {
    console.log('args', args);

    if (!args) {
      return value;
    }
    // Match in a case insensitive maneer
    const re = new RegExp(args, 'gi');
    const match = value.match(re);

    // If there's no match, just return the original value.
    if (!match) {
      return value;
    }

    const replacedValue = value.replace(re, '<strong>' + match[0] + '</strong>')
    return this.sanitizer.bypassSecurityTrustHtml(replacedValue);
  }

}
