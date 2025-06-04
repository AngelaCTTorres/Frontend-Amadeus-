import { Link } from "@remix-run/react";
import {
  containerClasses,
  backgroundClasses,
  overlayClasses,
  contentClasses,
  titleClasses,
  subtitleClasses,
  buttonClasses,
} from "~/styles/startStyles";

export default function Start() {

  return (
    <div className={containerClasses}>
      <div
        className={backgroundClasses}
        style={{ backgroundImage: "url('/assets/img/homepage.jpg')" }}
      ></div>
      <div className={overlayClasses}></div>
      <div className={contentClasses}>
        <h1 className={titleClasses}>Comienza un nuevo viaje</h1>
        <p className={subtitleClasses}>
          Conoce destinos y experimenta el viaje de tus sueños.
        </p>

        <Link to="/login" className={buttonClasses}>
          ¡viaja ahora!
        </Link>
      </div>
    </div>
  );
}
