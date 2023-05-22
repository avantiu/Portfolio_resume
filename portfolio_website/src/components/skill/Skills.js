import React from 'react'
import Title from '../Title'
import ProgressBar from 'react-animated-progress-bar';
import './Skills.css'
import { useContext } from 'react'
import { sender } from '../../Store'

const Skills = () => {

    let {mode, setMode} = useContext(sender)

    let data = [
        {
            id: 1,
            name: "HTML",
            per:85
        },
        {
            id: 2,
            name: "CSS",
            per:70
        },
        {
            id: 3,
            name: "Bootstrap",
            per:72
        },
        {
            id: 4,
            name: "Javascript",
            per:60
        },
        {
            id: 5,
            name: "React",
            per:65
        },
        {
            id: 6,
            name: "Wordpress",
            per:68
        }
    ]

    return (
        <>
            <div className={`container-fluid bg-${mode?"black":"white"}`} id='Skills'>
                <Title title="Skills" describe="The skills I have" />
                <div className="row">
                    {
                        data.map((e) => {
                            return (
                                <div className="col-md-4 mt-3 col-sm-6 justify-content-center" key={e.id}>
                                    <h5 className='text-center text-warning py-4'>{e.name}</h5>
                                    <ProgressBar width="230" trackWidth="13" percentage={e.per} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Skills