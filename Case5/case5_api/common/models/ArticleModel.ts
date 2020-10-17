export class Article{

    public Name     : String;
    public Author   : String;
    public PostTime : String;
    public Sections : {Content:String,ComponentType:Number}[];
    public Hashtags : String[];

    constructor(Name : String, Author : String, PostTime : String, Sections :{Content:String,ComponentType:Number} [], Hashtags : [String])
    {
        this.Name     =  Name;
        this.Author   =  Author;
        this.PostTime =  PostTime;
        this.Sections =  Sections;
        this.Hashtags =  Hashtags;
    }
}