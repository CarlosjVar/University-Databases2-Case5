import * as mongoose from 'mongoose';
const { Schema } = mongoose;
const Articles = mongoose.model('Article',new Schema({
    Name:String,
    Author:String,
    PostTime:String,
    Titles:[{Title:String,Position:Number}],
    Subtitles:[{Subtitle:String,Position:Number}],
    Texts:[{Text:String,Position:Number}],
    Media:[{url:String,Position:Number}],
    Hashtags:[String]
}))

export default Articles