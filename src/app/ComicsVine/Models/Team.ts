import { BaseModel } from './BaseModel';

export class TeamModel extends BaseModel
{
    characterEnemies: string[];
    characterFriends: string[];
    characters: string[];
    countOfIssueAppearences: string;
    countOfTeamMembers: string;

    disbandedInIssue: string[];

    firstAppearedInIssue: string;

    issueCredits: string[];
    issuesDisbandedIn: string[];

    movies: string[];

    publisher: string;

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
        super.LoadData(jsonSrc);

        this.characterEnemies = jsonSrc['character_enemies'];
        this.characterFriends = jsonSrc['character_friends'];
        this.characters = jsonSrc['characters'];
        this.countOfIssueAppearences = jsonSrc['count_of_issue_appearances'];
        this.countOfTeamMembers = jsonSrc['count_of_team_members'];

        this.disbandedInIssue = jsonSrc['disbanded_in_issues'];

        this.firstAppearedInIssue = jsonSrc['first_appeared_in_issue'];

        this.issueCredits = jsonSrc['issue_credits'];
        this.issuesDisbandedIn = jsonSrc['issues_disbanded_in'];

        this.movies = jsonSrc['movies'];

        this.publisher = jsonSrc['publisher'];

        this.storyArcCredits = jsonSrc['story_arc_credits'];

        this.volumeCredits = jsonSrc['volume_credits'];
    }

}
