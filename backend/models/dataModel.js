
const db=require('../Config/database')


class Blog{
 async getBlogData(){
    const res= await db.execute('SELECT * FROM blogs').then((data)=>{
         return data [0]
    }).catch((er)=>{
      throw new Error(er.message)
    })
    return res
 }
}
module.exports=Blog