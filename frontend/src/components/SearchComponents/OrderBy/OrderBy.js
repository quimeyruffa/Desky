import "./orderby.css"
export const OrderBy = () => {
    return (
        <div className = "contenedor-ordenados" >
            <p className= "ordenadosPor"> Ordenados por</p>
            <select className = "selectOrden">
                <option value="elegir"> Elegir </option>
                <option value="precio"> Precio </option>
                <option value="recomendados"> Recomendados </option>
            </select>

        </div>
    )
}