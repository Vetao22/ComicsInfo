import { BaseModel } from './BaseModel';

export class EpisodeModel extends BaseModel
{
    airDate: Date;
    
    characterCredits: string[];
    charactersDiedIn: string[];
    concepCredits: string[];

    episodeNumber: string;

    firstAppearenceCharacters: string[];
    firstAppearenceConcepts: string[];
    firstAppearenceLocations: string[];
    firstAppearenceObjects: string[];
    firstAppearenceStoryArcs: string[];
    firstAppearenceTeams: string[];

    hasStaffReview: boolean;

    locationCredits: string[];

    objectCredits: string[];

    personCredits: string[];

    storyArcCredits: string[];
    series: string;

    teamCredits: string[];
    
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

            this.airDate = jsonSrc['air_date'];

            this.characterCredits = jsonSrc['character_credits'];
            this.charactersDiedIn = jsonSrc['characters_died_in'];
            this.concepCredits = jsonSrc['concept_credits'];

            this.episodeNumber = jsonSrc['episode_number'];

            this.hasStaffReview = jsonSrc['has_staff_review'];

            this.locationCredits = jsonSrc['location_credits'];

            this.firstAppearenceCharacters = jsonSrc['first_appearance_characters'];
            this.firstAppearenceConcepts = jsonSrc['first_appearance_concepts'];
            this.firstAppearenceLocations = jsonSrc['first_appearance_locations'];
            this.firstAppearenceObjects = jsonSrc['first_appearance_objects'];
            this.firstAppearenceStoryArcs = jsonSrc['first_appearance_storyarcs'];
            this.firstAppearenceTeams = jsonSrc['first_appearance_teams'];

            this.objectCredits = jsonSrc['object_credits'];

            this.personCredits = jsonSrc['person_credits'];

            this.series = jsonSrc['series'];
            this.storyArcCredits = jsonSrc['story_arc_credits'];

            this.teamCredits = jsonSrc['team_credits'];    
        }
        catch { }
    }
}
