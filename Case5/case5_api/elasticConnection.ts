import {Constants} from './common'
var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {
    host: Constants.ELASTIC_HOST
});
export default client;