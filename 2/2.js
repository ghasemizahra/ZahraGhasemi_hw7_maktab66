class Media{
    constructor(name,make){
this.name=name
this.make=make
    }
}
class Book extends Media{
    constructor(name,make,writer){
      super(name,make)
      this.writer=writer
    }
    getInfo(){
        console.log(`name:${this.name},make:${this.make},writer:${this.writer}`)
    }
}
class Film extends Media{
    constructor(name,make,writer,Director){
      super(name,make)
      this.writer=writer
      this.Director=Director
    }
    getInfo(){
        console.log(`name:${this.name},make:${this.make},writer:${this.writer},Director:${this.Director}`)
    }
}
const film=new Film('DarCheshmBad',1382,'Masod Jafari','Masod Jafari')
film.getInfo()
const book=new Book('kimiyagar',1375,'Paulo Coelho')
book.getInfo()