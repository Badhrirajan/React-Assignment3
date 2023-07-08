import React from 'react';
import Header from './Header';
import Card from './Card';

const content = [{
    image:"./Images/1.jpg",
    title:"Graphic Designer vs. UI/UX Designer: Key Differences You Should Know",
    description:"It has always been confusing for people to understand the key differences between Graphic designers"
},{
    image:"./Images/2.jpeg",
    title:"Machine Learning Vs Deep Learning: A Layman's Guide to AI in Easy Words",
    description:"In the domain of artificial intelligence (AI), the terms “machine learning” and “deep learning” are" 
},{
    image:"./Images/3.jpg",
    title:"What is Production Management | The Ultimate Guide",
    description:"In today's constantly evolving business landscape, production managers are essential to the success of any organization." 
},{
    image:"./Images/4.webp",
    title:"Hire Machine Learning Engineers with Ease | A Complete Guide",
    description:"Growing companies in all fields are hiring Machine Learning Engineers to improve customer relationships,"
},{
    image:"./Images/5.webp",
    title:"VMware vs VirtualBox: Picking the Right Hypervisor for Virtualisation.",
    description:"In today's fast-paced world, where technology is evolving at an unprecedented rate, virtualization has emerged as a game-changing"
},{
    image:"./Images/6.jpg",
    title:"Hire Data Scientists with Ease | The Know-it-all Guide",
    description:"Data is the veins and arteries of any business. They hold the superpower to make or break the growth of companies. Many leading firms,"
}]

export default function Home() {
  return (<section>
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
    );
}
