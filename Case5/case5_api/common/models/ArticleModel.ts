var os = require('os');
export class Article{

    public Name     : String 
    public Author   : String 
    public PostTime : String 
    public Sections : {Content:String,ComponentType:Number}[] 

    constructor(Name : String, Author : String, PostTime : String, Sections : {Content:String,ComponentType:Number}[])
    {
        this.Name     =  Name 
        this.Author   =  Author 
        this.PostTime =  PostTime 
        this.Sections =  Sections 
    }

    public toString() : string{
        var stringedObject = ""
        stringedObject += 'name: ' + this.Name + os.EOL
        stringedObject += 'author: ' + this.Author + os.EOL
        stringedObject += 'postTime: ' + this.PostTime + os.EOL
        stringedObject += 'sections: '+ os.EOL
        for (let index in this.Sections){
            stringedObject += '     section => type: ' + this.Sections[index].ComponentType + " / content: " + this.Sections[index].Content + os.EOL
        }
        return stringedObject
    }
}