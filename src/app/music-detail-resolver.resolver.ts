import {ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {Music} from "../model/Music";
import {APIService} from "./service/api.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MusicDetailResolverResolver implements Resolve<Music> {

  constructor(private readonly api: APIService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Music> {
    const employeId: string | null = route.paramMap.get('id');
    if(employeId != null){
      return this.api.findById(employeId);
    }
    else
      return new Observable<Music>();
  }
}
