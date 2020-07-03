import { BaseModel } from './BaseModel';

export class SeriesModel extends BaseModel
{
    characterCredits: string[];
    countOfEpisodes: string;

    firstEpisode: string;

    lastEpisode: string;
    locationCredits: string[];

    publisher: string;

    startYear: string;

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
        super.LoadData(jsonSrc);

        this.characterCredits = jsonSrc['character_credits'];
        this.countOfEpisodes = jsonSrc['count_of_episodes'];

        this.firstEpisode = jsonSrc['first_episode'];

        this.lastEpisode = jsonSrc['last_episode'];
        this.locationCredits = jsonSrc['location_credits'];

        this.publisher = jsonSrc['publisher'];

        this.startYear = jsonSrc['start_year'];
    }
}
