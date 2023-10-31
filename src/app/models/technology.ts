export class Technology {
    public TechnologyId: number;
    public Name: string;
    public Src: string;
    constructor(_TechnologyId: number,_Name: string,_Src: string){
        this.TechnologyId=_TechnologyId;
        this.Name=_Name;
        this.Src=_Src;
    }
}
