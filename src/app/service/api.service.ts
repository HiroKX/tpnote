import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment/env";
import {BehaviorSubject, Observable} from "rxjs";
import {Music} from "../../model/Music";


@Injectable({
  providedIn: 'root'
})
export class APIService {

  private music = new BehaviorSubject<string>('');

  private urlServer:any = {};

  constructor(private readonly http: HttpClient) {

    let baseUrl = `${environment.protocol}://${environment.host}`;
    if (environment.port) {
      baseUrl += `:${environment.port}`;
    }
    // build all backend urls
    Object.keys(environment.endpoints).forEach(
      // @ts-ignore
      k => (this.urlServer[k] = `${baseUrl}${environment.endpoints[k]}`)
    );
  }

  get music$(): Observable<string> {
    return this.music.asObservable();
  }

  updatedMusicList(data: string){
    this.music.next(data);
  }

  fetch(): Observable<Music[]> {
    return this.http.get<Music[]>(this.urlServer.getAll);
  }

  findByTitle(name: string): Observable<Music[]> {
    return this.http.get<Music[]>(this.urlServer.findByTitle.replace(':title', name));
  }

  fetchRandom(): Observable<Music> {
    return this.http.get<Music>(this.urlServer.random);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.urlServer.deleteById.replace(':id', id));
  }

  create(music: Music): Observable<Music> {
    return this.http.post<Music>(this.urlServer.create, music);
  }

  findById(id: string): Observable<Music> {
    return this.http.get<Music>(this.urlServer.findById.replace(':id', id));
  }

  update(music: Music): Observable<Music> {
    return this.http.put<Music>(this.urlServer.update.replace(':id', music.id), music);
  }
}
