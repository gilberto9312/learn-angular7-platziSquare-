import {Injectable} from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable()
export class LugaresService{

    API_ENDPOINT="https://platzisquere-215116.firebaseio.com"; 
    constructor(private afDB: AngularFireDatabase, private http: HttpClient) {}
    public getLugares(){
        return this.afDB.list('lugares/');
    }
    public buscarLugar(id){
        //return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
    }
    public guardarLugar(lugar){
        
        this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
        //const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        //this.http.post(this.API_ENDPOINT+'/lugares.json',lugar,{headers:headers}).subscribe() ;
        
    }
    public editarLugar(lugar){
        this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    }
    public obtenerGeodata(direccion){
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
    }

    public getLugar(id){
        return this.afDB.object('lugares/'+id);
    }
}