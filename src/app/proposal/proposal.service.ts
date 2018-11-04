import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';

import { Proposal } from './proposal';

@Injectable()
export class ProposalService{
 private proposalsUrl='http://localhost:4202/proposals';
 constructor(
   private http: Http
 ) {}

 getProposals(): Observable<Proposal[]>{
   return this.http.get(this.proposalsUrl)
                   .pipe(map((response: Response) =>
                           <Proposal[]>response.json()))
                  .pipe(catchError(this.handleError))
 }

 getProposal(id:number){
   return this.http.get(this.proposalsUrl+'/'+id+'.json')
 }

 private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
