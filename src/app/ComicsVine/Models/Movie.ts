import { BaseModel } from './BaseModel';

export class MovieModel extends BaseModel
{
    boxOfficeRevenue: string;
    budget: string;

    characters: string[];
    concepts: string[];

    distributor: string;

    hasStaffReview: boolean;

    locations: string[];

    producers: string[];

    rating: string;
    releaseDate: Date;
    runtime: string;

    studios: string[];

    teams: string[];
    things: string[];
    totalRevenue: string;

    writers: string[];

    constructor(jsonSrc: Object)
    {
        super();

        if (jsonSrc)
        {
            this.LoadData(jsonSrc);
        }
    }

    LoadData(jsonSrc: Object): void
    {
        try
        {
            super.LoadData(jsonSrc);

            this.boxOfficeRevenue = jsonSrc['box_office_revenue'];
            this.budget = jsonSrc['budget'];

            this.characters = jsonSrc['characters'];
            this.concepts = jsonSrc['concepts'];

            this.distributor = jsonSrc['distributor'];

            this.hasStaffReview = jsonSrc['has_staff_review'];

            this.locations = jsonSrc['locations'];

            this.producers = jsonSrc['producers'];

            this.rating = jsonSrc['rating'];
            this.releaseDate = new Date(jsonSrc['release_date']);
            this.runtime = jsonSrc['runtime'];

            this.studios = jsonSrc['studios'];

            this.teams = jsonSrc['teams'];
            this.things = jsonSrc['things'];
            this.totalRevenue = jsonSrc['total_revenue'];

            this.writers = jsonSrc['writers'];
        }
        catch { }
    }
}
