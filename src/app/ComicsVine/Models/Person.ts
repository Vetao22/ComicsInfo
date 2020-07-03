import { BaseModel } from './BaseModel';

export class PersonModel extends BaseModel
{
    birth: string

    countOfIssueAppearences: string;
    country: string;
    createdCharacters: string[];

    death: Date;

    email: string;

    gender: string;

    hometown: string;

    issueCredits: string[];

    storyArcCredits: string[];

    volumeCredits: string[];

    website: string;

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

            this.birth = jsonSrc['birth'];

            this.countOfIssueAppearences = jsonSrc['count_of_issue_appearances'];
            this.country = jsonSrc['country'];
            this.createdCharacters = jsonSrc['created_characters'];

            this.death = jsonSrc['death'];

            this.email = jsonSrc['email'];

            this.gender = jsonSrc['gender'];

            this.hometown = jsonSrc['hometown'];

            this.issueCredits = jsonSrc['issue_credits'];

            this.storyArcCredits = jsonSrc['story_arc_credits'];

            this.volumeCredits = jsonSrc['volume_credits'];

            this.website = jsonSrc['website'];
        }
        catch { }
    }
}
