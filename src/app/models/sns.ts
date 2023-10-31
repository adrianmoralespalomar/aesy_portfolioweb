export class SNS {
    public SNSId: number;
    public Name: string;
    public SrcIcon: string;
    public ClassName: string;
    public AltImg: string;
    public Url:string;
    constructor(_SNSId: number,_Name: string,_SrcIcon: string,_ClassName: string,_AltImg: string,_Url : string=""){
        this.SNSId=_SNSId;
        this.Name=_Name;
        this.SrcIcon=_SrcIcon;
        this.ClassName=_ClassName;
        this.AltImg=_AltImg;
        this.Url=_Url;
    }
}
