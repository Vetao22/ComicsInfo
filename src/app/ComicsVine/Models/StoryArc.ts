import { BaseModel } from './BaseModel';

export class StoryArcModel extends BaseModel
{
    countOfIssueAppearences: string[];

    firstAppearedInIssue: string;

    issues: string[];

    movies: string[];

    publisher: string;

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

        this.countOfIssueAppearences = jsonSrc['count_of_issue_appearances'];

        this.firstAppearedInIssue = jsonSrc['first_appeared_in_issue'];

        this.issues = jsonSrc['issues'];

        this.movies = jsonSrc['movies'];

        this.publisher = jsonSrc['publisher'];
    }

}
