import React from 'react'
import "../styles/people.css"
import Navbar from '../components/Navbar'
const People = () => {
    let nums = [1,2,3,4,5]
    return (
        <>
        <Navbar />
        <div className='peopleCont'>
            <h1>People</h1>
            <div className="container">
                <div>
                    <h2>Co-ordinators</h2>
                    <div className="circleCont">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>

                <div className="personCont">
                    <h2>Executives</h2>
                    {
                        nums.map((item,index)=>{
                        return(
                            <div>
                            <ul>
                                <li>Name of the person</li>
                                <li>Name of the person</li>
                            </ul>
                        </div>
                        )
                        })
                    }
                </div>
            </div>
            <h1 className='contact'>Contact</h1>

        </div>
        </>
    )
}

export default People
