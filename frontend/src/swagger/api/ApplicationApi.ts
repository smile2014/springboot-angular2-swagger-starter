/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class ApplicationApi {
    protected basePath = 'https://localhost/';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * add
     * 
     * @param arg1 arg1
     * @param arg2 arg2
     */
    public addUsingGET (arg1: number, arg2: number, extraHttpRequestParams?: any ) : Observable<models.Response> {
        const path = this.basePath + '/rest/add';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'arg1' is not null or undefined
        if (arg1 === null || arg1 === undefined) {
            throw new Error('Required parameter arg1 was null or undefined when calling addUsingGET.');
        }
        // verify required parameter 'arg2' is not null or undefined
        if (arg2 === null || arg2 === undefined) {
            throw new Error('Required parameter arg2 was null or undefined when calling addUsingGET.');
        }
        if (arg1 !== undefined) {
            queryParameters.set('arg1', String(arg1));
        }

        if (arg2 !== undefined) {
            queryParameters.set('arg2', String(arg2));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

}