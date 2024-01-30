import { Injectable } from '@angular/core';
import { DateTime} from "luxon";

@Injectable({
  providedIn: 'root'
})
export class DateHandlingService {
  public static to_ddMMyyyy(date : string, format? : string) : string {
    return DateTime.fromISO(date).toFormat(format ?? 'dd/MM/yyyy');
  }
  public static new() : string {
    return DateTime.now().toFormat("dd/MM/yyyy");
  }
}
