import { BaseModel } from './BaseModel';

export class VolumeModel extends BaseModel
{
    characterCredits: string[];
    conceptCredits: string[];
    countOfIssues: string;

    firstIssue: string;

    lastIssue: string;
    locationCredits: string[];

    objectCredits: string[];

    personCredits: string[];
    publisher: string;

    startYear: string;

    teamCredits: string[];

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
        this.conceptCredits = jsonSrc['concept_credits'];
        this.countOfIssues = jsonSrc['count_of_issues'];

        this.firstIssue = jsonSrc['first_issue'];

        this.lastIssue = jsonSrc['last_issue'];
        this.locationCredits = jsonSrc['location_credits'];

        this.objectCredits = jsonSrc['object_credits'];

        this.personCredits = jsonSrc['person_credits'];
        this.publisher = jsonSrc['publisher'];

        this.startYear = jsonSrc['start_year'];

        this.teamCredits = jsonSrc['team_credits'];
    }
}
