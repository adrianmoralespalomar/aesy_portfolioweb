export class SNS {
    public SNSId: number;
    public Name: string;
    public SrcIcon: string;
    public ClassName: string;
    public AltImg: string;
    public Url:string;
    public AsButton:boolean;
    constructor(_SNSId: number=0,_Name: string="",_SrcIcon: string="",_ClassName: string="",_AltImg: string="",_Url : string="",_AsButton:boolean=false){
        this.SNSId=_SNSId;
        this.Name=_Name;
        this.SrcIcon=_SrcIcon;
        this.ClassName=_ClassName;
        this.AltImg=_AltImg;
        this.Url=_Url;
        this.AsButton=_AsButton;
    }
}
