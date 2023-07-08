import React from 'react'
import Header from './Header'
import Card from './Card'

const content = [{
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/06/UIUX_GD.jpg",
    title:"Graphic Designer vs. UI/UX Designer: Key Differences You Should Know",
    description:"It has always been confusing for people to understand the key differences between Graphic designers"
},{
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/06/ai-vs-machine-learning.jpeg",
    title:"Machine Learning Vs Deep Learning: A Layman's Guide to AI in Easy Words",
    description:"In the domain of artificial intelligence (AI), the terms “machine learning” and “deep learning” are" 
},{
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/06/what-is-production-management.jpg",
    title:"What is Production Management | The Ultimate Guide",
    description:"In today's constantly evolving business landscape, production managers are essential to the success of any organization." 
}]

export default function Career() {
  return (
    <section>
    <Header />
    <div className="container">
        <div className="container-fluid">
        <div className="row">
            {
                content.map((d,i) => (
                <Card key={`Product-card-${i}`} data={d} />
                ))}
        </div>
    </div>
        </div>
    </section>
  )
}
