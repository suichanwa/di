import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    powerOn() {
        console.log('Powering on...');
    }
    powerOff() {
        console.log('Powering off...');
    }

    supplyPower(watts: number) {
        console.log(`Supplying ${watts} watts of power...`);
    }
}
