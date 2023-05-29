import React, {useState} from 'react'
import './Blog.css'
import CardRight, {CardLeft} from './Card'
import Gallery from './Gallery'

export default function Blog() {
    return (
        <div className='Blog'>
            <div className='heading overlay'>
                <h1>Blog Page</h1>
            </div>
            <div className='recent'>
                <h1 className='recentHeading'>Racing Event Name</h1>
                <h2>16 July 2023</h2>
                <div className='recentCards'>
                    <div className='card'>
                        <img src='./racing2.jpg' alt='raing image' />
                        <h2>19 February 2023</h2>
                        <p>Work started for this event</p>
                    </div>
                    <div className='card'>
                        <img src='./racing2.jpg' alt='raing image' />
                        <h2>19 February 2023</h2>
                        <p>Work started for this event</p>
                    </div>
                    <div className='card'>
                        <img src='./racing2.jpg' alt='raing image' />
                        <h2>19 February 2023</h2>
                        <p>Work started for this event</p>
                    </div>
                </div>
                <div className='mustRead'>
                    <h1 className='mustReadHeading'>Must Read</h1>
                   <CardLeft
                   details = "Formula SAE challenges students to conceive, design, fabricate, and compete with small formula-style racing cars. Teams spend 8-12 months designing, building, and preparing their vehicles for a competition. These cars are judged in a series of static and dynamic events, including technical inspection, cost, presentation, engineering design, solo performance trials and high performance endurance."
                   />
                   <CardRight
                   details = "fsae, svnit won its first trophy here and at this time. Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin 'dolorem ipsum' roughly translated as 'pain itself. Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin 'dolorem ipsum' roughly translated as 'pain itself.'"
                   />
                   <CardLeft
                   details = "Formula SAE challenges students to conceive, design, fabricate, and compete with small formula-style racing cars. Teams spend 8-12 months designing, building, and preparing their vehicles for a competition. These cars are judged in a series of static and dynamic events, including technical inspection, cost, presentation, engineering design, solo performance trials and high performance endurance."
                   />
                   <CardRight
                   details = "fsae, svnit won its first trophy here and at this time. Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin 'dolorem ipsum' roughly translated as 'pain itself. Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin 'dolorem ipsum' roughly translated as 'pain itself.'"
                   />
                </div>

                <div className='Gallary'>
                    <Gallery/>
                </div>
            </div>
            
        </div>
    )
}
