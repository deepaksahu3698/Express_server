const express=require("express")
const app=express()
let book=[{
    "id": "1159142",
    "title": "Agile Web Development with Rails",
    "author": "Sam Ruby, Dave Thomas, David Heinemeier Hansson"
    
    
  },
  {
    "id": "2375753",
    "title": "Flask Web Development",
    "author": "Miguel Grinberg",
    
  },
  {
    "id": "592321",
    "title": "Agile web development with rails: a Pragmatic guide",
    "author": "Dave Thomas, David Heinemeier Hansson, Leon Breedt, Mike Clark, Thomas Fuchs, Andrea Schwarz",
    
  },
  {
    "id": "643503",
    "title": "CakePHP Application Development: Step-by-step introduction to rapid web development using the open-source MVC CakePHP framework",
    "author": "Ahsanul Bari, Anupom Syam",
   
  },]

app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/books",(req,res)=>{
    res.send(book)
})

app.listen(3000)
