import React from "react";
import style from "./style.module.scss";

export function Spinner() {
  return (
    <div className={style["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
