import { BaseModel } from './BaseModel';

export class ConceptModel extends BaseModel {
    
    countOfIssuesAppearences: number;

    firstAppearedInIssue: string[];

    issueCredits: string[];
    
    movies: string[];

    startYear: string;

    volumeCredits: string[];

    constructor(jsonSrc: Object)
    {
        super();

        console.log(jsonSrc);

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

            this.countOfIssuesAppearences = jsonSrc['count_of_issue_appearances'];        

            this.firstAppearedInIssue = jsonSrc['first_appeared_in_issue'];        

            this.issueCredits = jsonSrc['issue_credits'];    

            this.movies = jsonSrc['movies'];

            this.startYear = jsonSrc['start_year']

            this.volumeCredits = jsonSrc['volume_credits'];     
        }
        catch {}   
    }
}
