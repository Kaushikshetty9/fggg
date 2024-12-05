const EventEmitter=require('events');
class MyEmitter extends EventEmitter{}
const myEmitter=new MyEmitter();
myEmitter.on('userLogin',(username)=>{
    console.log(`User logged in: ${username}`);
});
myEmitter.on('fileUpload',(filename)=>{
    console.log(`File uploaded:${filename}`);
});
function simulateUserActions(){
    const usernames=['Alice','Bob','Charlie'];
    const randomUsername=usernames[Math.floor(Math.random()*usernames.length)];
    myEmitter.emit('userLogin',randomUsername);
    const filenames=['file1.txt','image.png','document.pdf'];
    const randomFile=filenames[Math.floor(Math.random()*filenames.length)];
    myEmitter.emit('fileUpload',randomFile);

}
simulateUserActions();