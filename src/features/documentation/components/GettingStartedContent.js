import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Subtitle from '../../../components/Typography/Subtitle'
import { setPageTitle } from '../../common/headerSlice'

function GettingStartedContent(){

    const dispatch = useDispatch()



    return(
        <>
            <article className="prose">
              <h4 className="">Getting Started</h4>
              Gestion de todos los productos, registro, actualización, activacion/descativación, etc.
            </article>
        </>
    )
}

export default GettingStartedContent