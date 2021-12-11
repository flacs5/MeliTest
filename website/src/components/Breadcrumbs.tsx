import React from "react";

interface Props {
  categories: string[];
}

const Breadcrumbs: React.FC<Props> = ({ categories }) => {
  return (
    <div
      className="breadcrumbs"
      style={{ padding: "16px 0", fontSize: 14, color: "#999999" }}
    >
      {categories.map((x, i) => {
        const isLast = i >= categories.length - 1;
        let name = (
          <span className={`px-2 ${isLast ? "fw-bold" : ""}`}>{x}</span>
        );
        if (i > 0)
          name = (
            <>
              {" > "}
              {name}
            </>
          );
        return name;
      })}
    </div>
  );
};

export default Breadcrumbs;
