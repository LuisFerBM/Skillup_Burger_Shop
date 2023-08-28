import React from "react";
const OrderDetails = () => {
    return (
        <section className="orderDetails">
            <main>
                <h1>Información del pedido</h1>
                <div>
                    <h1>Envío</h1>
                    <p>
                        <b>Dirección</b>
                        {"Gran Vía 123"}
                    </p>
                </div>
                <div>
                    <h1>Contacto</h1>
                    <p>
                        <b>Nombre</b>
                        {"Pedro"}
                    </p>
                    <p>
                        <b>Teléfono</b>
                        {+3467890123}
                    </p>
                </div>
                <div>
                    <h1>Estado</h1>
                    <p>
                        <b>Estado del pedido</b>
                        {"En curso"}
                    </p>
                    <p>
                        <b>Fecha del pedido</b>
                        {"23-06-2023"}
                    </p>
                    <p>
                        <b>Fecha de entrega</b>
                        {"23-06-2023"}
                    </p>
                </div>
                <div>
                    <h1>Pago</h1>
                    <p>
                        <b>Método de pago</b>
                        {"Pago contra entrega"}
                    </p>
                    <p>
                        <b>Referencia de pago</b>#{"RP00012345"}
                    </p>
                    <p>
                        <b>Fecha de pago</b>
                        {"23-06-2023"}
                    </p>
                </div>
                <div>
                    <h1>Total</h1>
                    <p>
                        <b>Subtotal</b>€ {13, 90}
                    </p>
                    <p>
                        <b>Costos de envío</b>€ {2, 30}
                    </p>
                    <p>
                        <b>IVA</b>€ {2, 92}
                    </p>
                    <p>
                        <b>Importe total</b>€ {2, 92 + 2, 30 + 13, 90}
                    </p>
                </div>
                <article>
                    <h1>Artículos</h1>
                    <div>
                        <h4>Hamburguesa con queso</h4>
                        <div>
                            <span>{1}</span> x € <span>{3, 30}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Hamburguesa vegetariana con queso</h4>
                        <div>
                            <span>{1}</span> x € <span>{4, 50}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Hamburguesa con queso y patatas fritas</h4>
                        <div>
                            <span>{1}</span> x € <span>{6, 10}</span>
                        </div>
                    </div>
                    <div>
                        <h4
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            Subtotal
                        </h4>
                        <div
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            € {13, 90}
                        </div>
                    </div>
                </article>
            </main>
        </section>
    );
};
export default OrderDetails;
