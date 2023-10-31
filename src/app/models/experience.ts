import { Technology } from "./technology";

export class Experience {
    public ExperienceId: number;
    public Job: string;
    public Description: string;
    public Company: string;
    public Date: string;
    public Technologies: Technology[];
    public Color: string;
    constructor(_ExperienceId: number,_Job: string,_Description: string,_Company: string,_Date: string,_Technologies: Technology[],_Color: string){
        this.ExperienceId=_ExperienceId;
        this.Job=_Job;
        this.Description=_Description;
        this.Company=_Company;
        this.Date=_Date;
        this.Technologies=_Technologies;
        this.Color=_Color;
    }
}
