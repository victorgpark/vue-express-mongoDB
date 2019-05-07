const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

router.get('/',(req, res)=>{
    res.send('hello')
}) 

// Add Post
// Delete Post
//
async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect
    ('mongodb://abc123:abc123@ds239648.mlab:39648/vue_express',{
        userNewUrlParser:true
    })
}
module.exports = router