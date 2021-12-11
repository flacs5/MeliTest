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
            <div className="card-body item-content">
              <div className="row">
                <div className="col-md-8">
                  <div className="item-section-desc">
                    <img
                      className="item-section-desc__img"
                      src={data.item.picture}
                      alt={data.item.title}
                    />
                    <div className="item-section-desc__title">
                      <span>Descripción del producto</span>
                    </div>
                    <p className="item-section-desc__desc">
                      {data.item.description}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="item-section-title">
                    <span className="item-section-title__condition">
                      {data.item.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                      {data.item.sold_quantity} vendidos
                    </span>
                    <span className="item-section-title__title">
                      {data.item.title}
                    </span>
                    <div className="item-section-title__price">
                      <span className="price">
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
