import React from 'react'
import Header from './Header'
import Card from './Card'

const content2 = [{
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/05/Beginner-mistakes-in-data-science-career.webp",
    title:"8 Mistakes To Avoid When You Begin a Data Science Career",
    description:"With leading modern-day companies relying on Data Science professionals to make more informed decisions and bring in better solutions," 
},{
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/04/image-5.png",
    title:"Data Science vs. Machine Learning: What every elite coder needs to know",
    description:"As the world becomes increasingly data-driven, the demand for professionals who can analyze and interpret data has skyrocketed."
},{
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/01/maang-unit-14-1-1024x266-1.png",
    title:"How much does an Entry-level Data Scientist make at MAANG Company? (Formerly 'FAANG')",
    description:"Data Science is a booming field and it's obviously relevant to check out and compare how much you can actually"
}]

export default function DataSci() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="container-fluid">
        <div className="row">
            {
                content2.map((d,i) => (
                <Card key={`Product-card-${i}`} data={d} />
                ))}
        </div>
    </div>
        </div>
    </div>
  )
}
