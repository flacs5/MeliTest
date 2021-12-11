import React, { useContext } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import SpinnerArea from "../../components/SpinnerArea";
import { numberWithDots } from "../../shared/misc/utils";
import Context from "./data_provider/itemContext";

const Item: React.FC = () => {
  const { data, loading } = useContext(Context);

  console.log(data);

  const getPrice = (price: number) => {
    return `$ ${numberWithDots(price)}`;
  };

  return (
    <SpinnerArea loading={loading}>
      {data && (
        <div className="container">
          <Breadcrumbs categories={data.item.categories} />
          <div className="card mb-4">
            <div className="card-body item-content" style={{ padding: 32 }}>
              <div className="row">
                <div className="col-md-8">
                  <div className="d-flex flex-column">
                    <img
                      style={{
                        width: "100%",
                        maxWidth: 680,
                        alignSelf: "center",
                      }}
                      src={data.item.picture}
                      alt={data.item.title}
                    />
                    <div style={{ padding: "32px 0" }}>
                      <span style={{ fontSize: 28 }}>
                        Descripción del producto
                      </span>
                    </div>
                    <p
                      style={{
                        color: "#999999",
                        fontSize: 16,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {data.item.description}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex flex-column" style={{ padding: 32 }}>
                    <span
                      className="condition"
                      style={{
                        fontSize: 14,
                        marginBottom: 16,
                        color: "#999999",
                      }}
                    >
                      {data.item.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                      {data.item.sold_quantity} vendidos
                    </span>
                    <span
                      className="title"
                      style={{ fontSize: 24, marginBottom: 32 }}
                    >
                      {data.item.title}
                    </span>
                    <div className="d-flex flex-row align-items-start">
                      <span
                        className="price"
                        style={{
                          fontSize: 46,
                          marginBottom: 32,
                          lineHeight: "46px",
                        }}
                      >
                        {getPrice(data.item.price.amount)}
                      </span>
                      <span className="decimals">
                        {data.item.price.decimals.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <button className="btn btn-primary" onClick={() => {}}>
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </SpinnerArea>
  );
};

export default Item;
