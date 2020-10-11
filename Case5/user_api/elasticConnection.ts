var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {
    host:'host.docker.internal:9200'
});
export default client;