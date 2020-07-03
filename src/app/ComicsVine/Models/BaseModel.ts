import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseModel
{
    aliases: string[];
    apiDetailUrl: string;

    dateAdded: number;
    dateLastUpdated: Date;
    deck: string;
    description: string;

    id: string;

    name: string;

    siteDetailUrl: string;

    //Images
    iconUrl: string;
    smallImgUrl: string;
    mediumImgUrl: string;
    originalImgUrl: string;
    screenLargeUrl: string;
    screenImgUrl: string;
    superImgUrl: string;
    thumbImgUrl: string;
    tinyImgUrl: string;

    protected LoadData(jsonSrc: Object): void
    {
        try
        {
            this.aliases = jsonSrc['aliases'];
            this.apiDetailUrl = jsonSrc['api_detail_url'];

            this.dateAdded = jsonSrc['date_added'];
            this.dateLastUpdated = jsonSrc['date_last_updated'];
            this.deck = jsonSrc['deck'];
            this.description = jsonSrc['description'];

            this.id = jsonSrc['id'];

            this.name = jsonSrc['name'];

            this.siteDetailUrl = jsonSrc['site_detail_url'];

            //Images
            this.iconUrl = jsonSrc['image']['icon_url'];
            this.smallImgUrl = jsonSrc['image']['small_url'];
            this.mediumImgUrl = jsonSrc['image']['medium_url'];
            this.screenLargeUrl = jsonSrc['image']['screen_large_url'];
            this.screenImgUrl = jsonSrc['image']['screen_url']
            this.originalImgUrl = jsonSrc['image']['original_url'];
            this.superImgUrl = jsonSrc['image']['super_url'];
            this.thumbImgUrl = jsonSrc['image']['thumb_url'];
            this.tinyImgUrl = jsonSrc['image']['tiny_url'];
        }
        catch
        {

        }
    }
}
