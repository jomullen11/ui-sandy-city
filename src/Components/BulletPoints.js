import React, { useState} from 'react'
import { API_URL } from '../Nav/config'

const BulletPoints = (props) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const isAdmin = props.isAdmin
    const bulletPointRead = props.bulletPointRead

    return(
        <>
                    <li> <a href={'#' + bulletPointRead.sectionId}>{bulletPointRead.sectionHeader}</a></li>
                    {bulletPointRead.sectionId}

        </>
    )
}

export default BulletPoints