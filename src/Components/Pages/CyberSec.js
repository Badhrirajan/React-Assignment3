import React from 'react'
import Header from './Header'
import Card from './Card'

const content3 = [{
    image:"./Images/cs-1.webp",
    title:"Top 10 Ethical Hacking Books for Beginner to Advanced",
    description:"Before jumping into the list of the top 10 ethical hacking books, let's speak a bit about cybersecurity. I'm sure you already know"
},{
    image:"./Images/cs-2.jpg",
    title:"Top 7 Cyber Security Attacks in Real Life",
    description:"Cyber security attacks are the type of actions that are designed to destroy, steal, modify, or disable information through unauthorized"
},{
    image:"./Images/cs-3.png",
    title:"How Is Cyber Security Important To Our Lives?",
    description:"Cybersecurity is an exact solution that is sought either by a billionaire with a massive business or an innovator with a small"
}]

export default function CyberSec() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="container-fluid">
        <div className="row">
            {
                content3.map((d,i) => (
                <Card key={`Product-card-${i}`} data={d} />
                ))}
        </div>
    </div>
        </div>    
    </div>
  )
}
