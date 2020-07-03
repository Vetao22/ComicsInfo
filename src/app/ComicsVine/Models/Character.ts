import { BaseModel } from './BaseModel';

export class CharacterModel extends BaseModel
{

    birth: Date;

    countOfIssuesAppearences: number;
    creators: string[];

    enemies: string[];

    friends: string[];
    firstAppearedInIssue: string[];

    gender: string

    issueCredits: string[]
    issuesDiedIn: string[];

    movies: string[];

    origin: string;

    powers: string[];
    publisher: string;

    realName: string;

    storyArcCredits: string[];

    teamEnemies: string[];
    teamFriends: string[];
    teams: string[];

    volumeCredits: string[];

    constructor(jsonSrc: Object)
    {
        super()

        if(jsonSrc)
        {
            this.LoadData(jsonSrc);
        }
    }

    LoadData(jsonSrc: Object): void
    {
        super.LoadData(jsonSrc);

        try
        {

            this.birth = jsonSrc['birth'];

            this.countOfIssuesAppearences = jsonSrc['count_of_issue_appearances'];
            this.creators = jsonSrc['creators'];

            this.enemies = jsonSrc['team_enemies'];

            this.firstAppearedInIssue = jsonSrc['first_appeared_in_issue'];
            this.friends = jsonSrc['team_friends'];

            this.gender = jsonSrc['gender'];

            this.issueCredits = jsonSrc['issue_credits'];
            this.issuesDiedIn = jsonSrc['issues_died_in'];

            this.movies = jsonSrc['movies'];

            this.origin = jsonSrc['origin'];

            this.powers = jsonSrc['powers'];
            this.publisher = jsonSrc['publisher'];

            this.realName = jsonSrc['real_name'];

            this.storyArcCredits = jsonSrc['story_arc_credits'];

            this.teams = jsonSrc['teams'];
            this.teamEnemies = jsonSrc['team_enemies'];
            this.teamFriends = jsonSrc['team_friends'];

            this.volumeCredits = jsonSrc['volume_credits'];
        }
        catch{}
    }
}
