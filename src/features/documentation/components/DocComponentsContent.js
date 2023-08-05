import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import InputText from '../../../components/Input/InputText'
import Title from '../../../components/Typography/Title'
import Subtitle from '../../../components/Typography/Subtitle'
import ErrorText from '../../../components/Typography/ErrorText'
import HelperText from '../../../components/Typography/HelperText'

import { setPageTitle, showNotification } from '../../common/headerSlice'
import TitleCard from '../../../components/Cards/TitleCard'

function DocComponentsContent(){

    const dispatch = useDispatch()

    const updateFormValue = () => {
        // Dummy function for input text component
    }

    return(
        <>
            <article className="prose">
              <h1 className="" >Reportes e informes</h1>

                Reportes e informes que contemplara el sistema:
                <ul>
                      <li> Inventario de medicamentos que muestra la cantidad actual de cada medicamento en stock.
                       </li>
                      <li>Ventas diarias por productos y categorías.
                      </li>
                      <li>Reporte de ventas por periodo (día, semana, mes). 
                      </li>
                      <li>Control de caducidades, asi evitar pérdidas por medicamentos caducados.</li>
                      <li>Control de caja (ingresos, egresos y formas de pago). </li>
                      <li>Reporte de clientes frecuentes</li>
                      <li>Reporte de proveedore, facilitando el seguimiento.</li>
                      <li>Reporte de movimientos de inventario.</li>
                      
                    </ul>
                {/* Typography*/}
            </article>
        </>
    )
}

export default DocComponentsContent