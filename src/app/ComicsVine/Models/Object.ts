import { BaseModel } from './BaseModel';

export class ObjectModel extends BaseModel
{
    countOfIssueAppearences: string;

    firstAppearedInIssue: string;

    issueCredits: string[];

    movies: string[];

    startYear: string;
    storyArcCredits: string[];

    volumeCredits: string[];

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

            this.countOfIssueAppearences = jsonSrc['count_of_issue_appearances'];

            this.firstAppearedInIssue = jsonSrc['first_appeared_in_issue'];

            this.issueCredits = jsonSrc['issue_credits'];

            this.movies = jsonSrc['movies'];

            this.startYear = jsonSrc['start_year'];
            this.storyArcCredits = jsonSrc['story_arc_credits'];

            this.volumeCredits = jsonSrc['volume_credits'];
        }
        catch { }
    }
}
