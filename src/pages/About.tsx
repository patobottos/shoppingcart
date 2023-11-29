export function About() {
  return (
    <>
      <div className="media my-5 d-flex align-items-center justify-content-center">
        <img
          className="img-fluid"
          src="/illustrations/undraw_shopping_bags.svg"
          alt="shopping app drawing"
          style={{ maxWidth: "40%" }}
        />
      </div>
      <h4
        className="mt-4"
        style={{ letterSpacing: "0.5px", lineHeight: "2rem" }}
      >
        <span style={{ fontWeight: "bold" }}>Sample Online Store </span>is a
        project inspired by{" "}
        <a
          href="https://courses.webdevsimplified.com/"
          target="_blank"
          rel="noreferrer"
        >
          Kyle Cook's work
        </a>
        , which is accessible through his{" "}
        <a
          href="https://github.com/WebDevSimplified/react-ts-shopping-cart"
          target="_blank"
          rel="noreferrer"
        >
          GitHub repository
        </a>
        . For detailed information, please refer to this{" "}
        <a
          href="https://www.youtube.com/watch?v=lATafp15HWA"
          target="_blank"
          rel="noreferrer"
        >
          link
        </a>
        .
      </h4>
    </>
  );
}
