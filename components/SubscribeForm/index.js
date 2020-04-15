import React from "react";
import style from "./style.module.scss";

export function SubscribeForm() {
  const onFormClick = React.useCallback((e) => {
    e.preventDefault();
  }, []);
  return (
    <div className={style.subscribeForm}>
      <p>
        Entérate de las novedades y avances!
        <small>(Descuida, detestamos el spam tanto como tú)</small>
      </p>
      <form className={style.input} onClick={onFormClick}>
        <input
          type="email"
          placeholder="Email"
          name="email-input"
          input-mode="email"
          id="email"
        />
        <button type="submit" aria-label="suscribe">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            xmlSpace="preserve"
          >
            <g id="mail_1_">
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0,4.01v11.91l6.27-6.27L0,4.01z M18.91,2.98H1.09L10,10.97L18.91,2.98z
            M13.73,9.64L20,15.92V4.01L13.73,9.64z M10.5,12.54L10.5,12.54c-0.13,0.12-0.31,0.19-0.5,0.19s-0.37-0.07-0.5-0.19l0,0
           l-2.11-1.89l-6.33,6.33h17.88l-6.33-6.33L10.5,12.54z"
                />
              </g>
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
}
