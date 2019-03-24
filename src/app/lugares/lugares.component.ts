import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html'
})
export class LugaresComponent {
    title = 'PlatziSquare';

    lat:number = -0.1786298;
    lng:number = -78.5413412;
    lugares = null;
constructor(private lugaresService: LugaresService){
    lugaresService.getLugares().valueChanges()
        .subscribe((lugares)=>{
            this.lugares = lugares;
        });
        
}
}
