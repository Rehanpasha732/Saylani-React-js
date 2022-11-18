import React from 'react'

function Practice() {
    const obj = { name: "Hello World Object" }
    const data = ['We', ' are ', 'United'] //Show these in seperate tags
    const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }] //Show these in seperate tags
    const complex = [
        {
            company: 'XYZ',
            jobs: ['Javascript', 'React']
        },
        {
            company: 'ABC',
            jobs:
                ['AngularJs', 'Ionic']
        }]
    return (
        <>
            <h1>Q1) Render these into component:</h1>
            <div className="render">
                <h1>Name:{obj.name}</h1>

                <h1>{data[0]}</h1>
                <h2>{data[1]}</h2>
                <h3>{data[2]}</h3>



                {
                    list.map((v, i) => {
                        return (
                            <h1>{v.name}</h1>
                        )

                    })
                }
                {
                    complex.map((v, i) => {
                        return (
                            <>
                                <h1>company name:{v.company}</h1>
                                <h1>JObs:{v.jobs}</h1>
                            </>
                        )
                    })
                }
            </div>

           

        </>
    )
}

export default Practice

