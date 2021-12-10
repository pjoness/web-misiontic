import { useState } from "react";
import { Link } from "react-router-dom";

const PagoForm = () => {
  
  return (
         <form className="row g-3 needs-validation" novalidate>

                    <div className="col-12">
                      <label for="yourValueIng" class="form-label">Fecha</label>
                      <input type="text" name="valueIng" class="form-control" id="yourValueIng" value="01-01-2021" readonly/>
                    </div>

                    <div className="col-12">
                      <label for="yourValueEg" class="form-label">Cuota</label>
                      <input type="text" name="valueEg" class="form-control" id="yourValueEg" value="1.200.000" readonly/>
                    </div>

                    <div className="col-12">
                      <label for="yourValueEg" class="form-label">Capital</label>
                      <input type="text" name="valueEg" class="form-control" id="yourValueEg" value="1.000.000" readonly/>
                    </div>

                    <div className="col-12">
                      <label for="yourValueEg" class="form-label">Intereses</label>
                      <input type="text" name="valueEg" class="form-control" id="yourValueEg" value="200.000" readonly/>
                    </div>

                    <div className="col-12">
                      <Link to="/pagos" button className="btn btn-primary w-100" type="submit">Pagar</Link>
                    </div>
                  </form>
  )
}

export default PagoForm;