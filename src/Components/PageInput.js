import React, { useState, useEffect } from 'react'
import { useInput } from './hooks-input'
import { API_URL } from '../Nav/config'

const PageInput = (props) => {
    const { value:sectionHeader, bind:bindSectionHeaderInput, reset:resetSectionHeaderInput } = useInput('');
    const {value:sectionBody, bind:bindSectionBodyInput, reset:resetSectionBodyInput} = useInput('')
    let [sectionId, setSectionId] = useState('')
    const isAdmin = props.isAdmin

    // Removes the spaces from sectionHeader and sets the href link in BulletPoints
    const createSectionId = () => {
        setSectionId(sectionHeader.replace(/\s+/g, ''))
    }

    // Work on increasin id on submit
    const handleSubmit = async (event) => {
        event.preventDefault()
        await createSectionId()
        const sectionState = {sectionHeader, sectionBody, sectionId}
        await fetch(`${API_URL}/sections`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(sectionState)
        }).then(() => alert('success'))
        .catch(err=>console.log(err))
        resetSectionHeaderInput()
        resetSectionBodyInput()
    }

    useEffect(() => {
        createSectionId()
    })

    const inputComponent = () => {

        return(
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="sectionName">Section Header</label>
                    <input type='text' className="form-control" id="section-Header-input" placeholder="Insert Section Title" {...bindSectionHeaderInput} aria-describedby="sectionHeaderDesc" required/>
                    <small id="sectionHeaderDesc" className="form-text text-muted">Please insert the title for this section, this will also create a bullet point at the top of the page</small>
                </div>
                <div className="form-group">
                    <label htmlFor="sectionBodyArea">Section Body</label>
                    <textarea type="text" id="sectionBodyArea" value={sectionBody} className="form-control" placeholder="Insert Section Text" {...bindSectionBodyInput} aria-describedby='sectionTextDesc' required></textarea>
                    <small id='sectionTextDesc' className="form-text text-muted">Please insert the text for this section</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }

    return(
        <>
        {
            isAdmin ?

            inputComponent()

            :

            null
        }
        </>
    )

}


export default PageInput