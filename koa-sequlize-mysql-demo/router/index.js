const student = require('./student')
module.exports = (app) =>{
 app.use(student.routes())
//  app.use(student.allowedMethods());
}