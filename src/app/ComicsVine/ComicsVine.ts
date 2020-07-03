import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CharacterModel } from './Models/Character';
import { pipe, concat, from, combineLatest, Observable } from 'rxjs';
import { map, combineAll, retry } from 'rxjs/operators'
import { Injectable, Output } from '@angular/core';
import { Type } from '@angular/compiler';
import { ConceptModel } from './Models/Concept';
import { EpisodeModel } from './Models/Episode';
import { IssueModel } from './Models/Issue';
import { LocationModel } from './Models/Location';
import { BaseModel } from './Models/BaseModel';
import { MovieModel } from './Models/Movie';
import { ObjectModel } from './Models/Object';
import { PersonModel } from './Models/Person';
import { PowerModel } from './Models/Power';
import { PublisherModel } from './Models/Publisher';
import { SeriesModel } from './Models/Series';
import { StoryArcModel } from './Models/StoryArc';
import { TeamModel } from './Models/Team';
import { VolumeModel } from './Models/Volume';
import { async } from 'rxjs/internal/scheduler/async';
import { promise } from 'protractor';


@Injectable({
    providedIn: 'root',
})
export class ComicsVine {
    baseUrl: string;
    apiKey: string;

    itens: BaseModel[];
    lastFilter: string;

    constructor(private http: HttpClient)
    {
        this.baseUrl = "http://comicvine.gamespot.com/api/";
        this.apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

        this.itens = new Array<BaseModel>();
    }

    public GetItens<T extends BaseModel>(typeInput: { new(data): T; }, option?: Object, limit = 5, sortByName = true, filter = "", offset = 0): Observable<Object[]>
    {
        let itemTypePath;

        switch (typeInput.name)
        {
            case "CharacterModel":
                itemTypePath = "characters";
                break;

            case "ConceptModel":
                itemTypePath = "concepts";
                break;

            case "EpisodeModel":
                itemTypePath = "episodes";
                break;

            case "IssueModel":
                itemTypePath = "issues";
                break;

            case "LocationModel":
                itemTypePath = "locations";
                break;

            case "MovieModel":
                itemTypePath = "movies";
                break;

            case "ObjectModel":
                itemTypePath = "objects";
                break;

            case "PersonModel":
                itemTypePath = "people";
                break;

            case "PowerModel":
                itemTypePath = "powers";
                break;

            case "PublisherModel":
                itemTypePath = "publishers";
                break;

            case "SeriesModel":
                itemTypePath = "series_list";
                break;

            case "StoryArcModel":
                itemTypePath = "story_arcs";
                break;

            case "TeamModel":
                itemTypePath = "teams";
                break;

            case "VolumeModel":
                itemTypePath = "volumes";
                break;
        }

        if (filter != this.lastFilter)
        {
            this.itens.length = 0;
        }

        this.lastFilter = filter;

        if (this.itens.length > 0)
        {
            if (!(this.itens[0] instanceof typeInput))
            {
                this.itens.length = 0;
            }
        }

        offset = offset === 0 ? this.itens.length : offset;

        let sort = sortByName ? "name:asc" : "";

        let url = `${this.baseUrl}${itemTypePath}?api_key=${this.apiKey}&format=json&limit=${limit}&offset=${offset}
&sort=${sort}&filter=${filter}`;

        let request = this.GetRequest(url, option);

        request.pipe(retry(500)).subscribe((data) =>
        {
            let itemsSrc = this.LoadItems<T>(typeInput, this.SplitData(data['results']));

            this.itens = this.MergeArrays(this.itens, itemsSrc);
        });

        return request;
    }


    private LoadItems<T>(typeInput: { new(data): T; }, jsonSrcs: Object[])
    {
        let result = new Array<T>();

        for (let x = 0; x < jsonSrcs.length; x++)
        {
            // let jsonDetailed = await this.LoadDetailedItem<T>(typeInput, jsonSrcs[x], jsonDetailed);

            result.push(new typeInput(jsonSrcs[x]));
        }

        return result;
    }

    public LoadDetailedItem<T>(typeInput: { new(data): T; }, src: BaseModel)
    {
        let result, request;

        let apiDetailUrl = src.apiDetailUrl;

        if (apiDetailUrl)
        {
            let url = `${apiDetailUrl}?api_key=${this.apiKey}&format=json`;

            request = this.GetRequest(url, { responseType: 'json' });

            request.pipe(retry(500)).subscribe((data) =>
            {
                result = new typeInput(data['results']);

                const index = this.itens.indexOf(src);

                this.itens[index] = result;
            });
        }

        return request
    }

    private GetRequest(url: string, options: Object): Observable<Object[]>
    {
        let result = this.http.get<Object[]>(url, options);

        return result;
    }

    private SplitData(receivedData: Object): Object[]
    {
        let objects = receivedData as Object[];
        let result = new Array<Object>();

        for (let x = 0; x < objects.length; x++)
        {
            result.push(objects[x]);
        }

        return objects;
    }

    private MergeArrays(arr1: Array<BaseModel>, arr2: Array<BaseModel>): Array<BaseModel>
    {
        let result = new Array<BaseModel>();

        if (arr1.length === 0)
        {
            result = result.concat(arr2);
        }
        else
        {
            result = result.concat(arr1);

            for (let x = 0; x < arr2.length; x++)
            {
                let val2 = arr2[x];
                let contains = false;

                for (let y = 0; y < arr1.length; y++)
                {
                    let val1 = arr1[y];

                    if (val1.id === val2.id)
                    {
                        contains = true;
                        break;
                    }
                }
                if (!contains)
                {
                    result.push(val2);
                }
            }
        }
        //console.log(result);

        return result;
    }

}
