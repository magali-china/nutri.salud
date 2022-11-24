const ItemListContainer = ({greeting}) => {

    return(
        <>
        <h1>{greeting}</h1>
        <br/>
        <div className="card text-white bg-dark mb-3" style={{maxWidth: '20rem'}}>
            <div className="card-header">Producto</div>
             <div className="card-body">
                <h4 className="card-title">Frutos Secos</h4>
                <p className="card-text">Las frutas secas se destacan por sus beneficios para el corazón y sus propiedades antioxidantes. Reducen los niveles de colesterol malo (LDL) y aumenta el bueno (HDL). Aportan proteínas, vitaminas B y E y minerales como hierro, calcio, magnesio, potasio y fósforo. Se recomienda consumirlos con moderación por su elevado aporte calórico.</p>
            </div>
        </div>
        </>
      
    );
  }
  
  export default ItemListContainer;