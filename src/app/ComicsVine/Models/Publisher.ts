import { BaseModel } from './BaseModel';

export class PublisherModel extends BaseModel
{
    characters: string[];

    locationAddress: string;
    locationCity: string;
    locationState;

    storyArcs: string[];

    teams: string[];

    volumes: string[];

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

            this.characters = jsonSrc['characters'];

            this.locationAddress = jsonSrc['location_address'];
            this.locationCity = jsonSrc['location_city'];
            this.locationState = jsonSrc['location_state'];

            this.storyArcs = jsonSrc['story_arcs'];

            this.teams = jsonSrc['teams'];

            this.volumes = jsonSrc['volumes'];
        }
        catch { }
    }
}
