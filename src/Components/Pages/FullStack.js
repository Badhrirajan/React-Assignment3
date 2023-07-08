import React from 'react'
import Header from './Header'
import Card from './Card'

const content1 = [{
    image:"./Images/fs-1.jpg",
    title:"Top 10 Front-End Developer Skills You Should Know",
    description:"Websites nowadays are eye-catchy, and also responsive at the same time. Ever wondered who's the reason behind such creative websites?" 
},{
    image:"./Images/fs-2.jpg",
    title:"Top 7 Back-End Developer Skills You Should Know",
    description:"We all rely on the internet for everything. Open google and ask your doubt, and you'll get a solution in seconds." 
},{
    image:"./Images/fs-3.jpg",
    title:"10 Best Skills for Web Development",
    description:"Web Development is a great, high-paying, and in-demand skill every individual must have. The world is moving towards the profession" 
}]

export default function FullStack() {
  return (<section>
    <Header />
    <div className="container">
        <div className="container-fluid">
        <div className="row">
            {
                content1.map((d,i) => (
                <Card key={`Product-card-${i}`} data={d} />
                ))}
        </div>
    </div>
        </div>
        </section>
  )
}
