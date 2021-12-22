
//روش کانستراکتور
function Specifications(className,classUnite,classcapacity){
this.className=className
this.classUnite=classUnite
this.classcapacity=classcapacity
this.getfullcourse=function(){
    console.log(`{className:${this.className},classunite:${this.classUnite}classcapacity:${this.classcapacity}}`)

}
}
const soft=new Specifications("softEngineering",3,50)
soft.book="data"//اضافه کردن
soft.getfullcourse()//بخش الف
console.log(JSON.stringify(soft))//بخش ب
const network=new Specifications("network",3,30)
network.project=true
network.getfullcourse()
console.log(JSON.stringify(network))














// class softEngineering{
// constructor(CourseName,classUnite,classCapacity,book){
//     this.CourseName=CourseName,
//     this.classUnite=classUnite,
//     this.classCapacity=classCapacity,
//     this.book=book

// }
// soft(){
//      const s= `{className:${this.CourseName},classunite:${this.classUnite}classcapacity:${this.classCapacity}}`
// return s
// }

// }

// class network extends softEngineering{
//     constructor(CourseName,classUnite,classCapacity,project){
        // if(project=="")
        // {
        //     console.log("false")
        // }
        // else{
        //     console.log("true")
        // }

// super(CourseName,classUnite,classCapacity)
// this.project=project
// }
// net(){
//     return `{className:${this.CourseName},classunite:${this.classUnite}classcapacity:${this.classCapacity}project:${this.project}}`
// }
// soft(){
//     super.soft()
//    this.book="jiji"
// }
// }

// const software=new softEngineering('softEngineering',3,4,"thisbook")
// console.log(software.soft())
// const Network=new network('softEngineering',3,4,'true')
// console.log(Network.net())



