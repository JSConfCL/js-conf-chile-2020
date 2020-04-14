import React from "react";
import style from "./style.module.scss";

function SubscribeForm() {
  return (
    <div className={style.subscribeForm}>
      <p>
        Entérate de todas nuestras novedades y avances!
        <small>(Descuida, detestamos el spam tanto como tú)</small>
      </p>
      <form className={style.input}>
        <input
          type="text"
          placeholder="Email"
          name="email-input"
          input-mode="email"
          id="email"
        />
        <button type="submit" aria-label="suscribe">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SubscribeForm;
