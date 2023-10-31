import { Technology } from "./technology";

export class Project {
    public ProjectId: number;
    public Name: string;
    public Description: string;
    public Technologies: Technology[];
    public SrcImage:string;
    public UrlSource:string;
    constructor(_ProjectId: number,_Name: string,_Description: string,_Technologies: Technology[],_SrcImage: string,_UrlSource:string){
        this.ProjectId=_ProjectId;
        this.Name=_Name;
        this.Description=_Description;
        this.Technologies=_Technologies;
        this.SrcImage=_SrcImage;
        this.UrlSource=_UrlSource;
    }
}