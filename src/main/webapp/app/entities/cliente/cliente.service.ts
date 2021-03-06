import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { Cliente } from './cliente.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class ClienteService {

    private resourceUrl = SERVER_API_URL + 'api/clientes';

    constructor(private http: Http) { }

    create(cliente: Cliente): Observable<Cliente> {
        const copy = this.convert(cliente);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(cliente: Cliente): Observable<Cliente> {
        const copy = this.convert(cliente);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<Cliente> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    getClienteAnonimo(): Observable<Cliente> {
        return this.http.get(`${this.resourceUrl}/-1`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to Cliente.
     */
    private convertItemFromServer(json: any): Cliente {
        const entity: Cliente = Object.assign(new Cliente(), json);
        return entity;
    }

    /**
     * Convert a Cliente to a JSON which can be sent to the server.
     */
    private convert(cliente: Cliente): Cliente {
        const copy: Cliente = Object.assign({}, cliente);
        return copy;
    }
}
