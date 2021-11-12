import "./orderby.css"
export const OrderBy = (props) => {
    return (
        <div className = "contenedor-ordenados" >
            <p className= "ordenadosPor"> Ordenados por</p>
            <select className = "selectOrden" onChange={props.handleChange}>
                <option value="elegir"> Elegir </option>
                <option value="precio"> Precio </option>
                <option value="recomendados"> Recomendados </option>
            </select>

        </div>
    )
}