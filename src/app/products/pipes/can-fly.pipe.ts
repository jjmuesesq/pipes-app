import { Pipe, PipeTransform } from '@angular/core';

//true | canFly = 'VUELA'
//false | canFly = 'NO VUELA'
@Pipe({
    name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
    transform(value: boolean ): 'vuela' | 'no vuela' {
        return value? 'vuela': 'no vuela';
    }
}