const sql=require('mysql2')

const db=sql.createPool({
    host:'localhost',
    user:'root',
    database:'fullstackBlogs',
    port:3306,
    dateStrings:true
})

module.exports=db.promise()