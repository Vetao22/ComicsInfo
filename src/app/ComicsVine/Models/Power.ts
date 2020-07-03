import { BaseModel } from './BaseModel';

export class PowerModel extends BaseModel
{
    characters: string[];

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

            this.characters = jsonSrc['characters'];
        }
        catch { }
    }
}
