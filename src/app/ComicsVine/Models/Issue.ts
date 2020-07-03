import { BaseModel } from './BaseModel';

export class IssueModel extends BaseModel
{
    characterCredits: string[];
    charactersDiedIn: string[];
    conceptCredits: string[];
    coverDate: Date;

    disbandedTeams: string[];

    firstAppearenceCharacters: string[];
    firstAppearenceConcepts: string[];
    firstAppearenceLocations: string[];
    firstAppearenceObjects: string[];
    firstAppearenceStoryArcs: string[];
    firstAppearenceTeams: string[];

    hasStaffReview: boolean;

    issueNumber: string;
    issuesDiedIn: string[];

    locationsCredits: string[];

    objectCredits: string[];

    personCredits: string[];

    storyArcCredits: string[];
    storeDate: Date;

    teamCredits: string[];
    teamsDisbandedIn: string[];

    volume: string;

  
    issueCredits: string[];
    
    constructor(jsonSrc: Object)
    {
        super();

        if(jsonSrc)
        {
            this.LoadData(jsonSrc);
        }
    }

    LoadData(jsonSrc: Object): void
    {
        try
        {
            super.LoadData(jsonSrc);

            this.characterCredits = jsonSrc['character_credits'];
            this.charactersDiedIn = jsonSrc['characters_died_in'];
            this.conceptCredits = jsonSrc['concept_credits'];
            this.coverDate = jsonSrc['cover_date'];

            this.disbandedTeams = jsonSrc['disbanded_teams'];

            this.firstAppearenceCharacters = jsonSrc['first_appearance_characters'];
            this.firstAppearenceConcepts = jsonSrc['first_appearance_concepts'];
            this.firstAppearenceLocations = jsonSrc['first_appearance_locations'];
            this.firstAppearenceObjects = jsonSrc['first_appearance_objects'];
            this.firstAppearenceStoryArcs = jsonSrc['first_appearance_storyarcs'];
            this.firstAppearenceTeams = jsonSrc['first_appearance_teams'];

            this.hasStaffReview = jsonSrc['has_staff_review'];
            
            this.issueNumber = jsonSrc['issue_number'];

            this.locationsCredits = jsonSrc['location_credits'];
            
            this.objectCredits = jsonSrc['object_credits'];

            this.personCredits = jsonSrc['person_credits'];

            this.storyArcCredits = jsonSrc['story_arc_credits'];
            this.storeDate = jsonSrc['store_date'];

            this.teamCredits = jsonSrc['team_credits'];
            this.teamsDisbandedIn = jsonSrc['teams_disbanded'];

            this.volume = jsonSrc['volume'];
        }
        catch { }
    }
}
