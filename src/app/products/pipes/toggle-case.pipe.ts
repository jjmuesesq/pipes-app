import { Pipe, PipeTransform } from '@angular/core';

//jhon | toggleCase = 'JHON'
//JHON | toggleCase = 'jhon'
@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
    transform(value: string): string{
        return value.toUpperCase();
    }
}

