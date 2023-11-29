export function Home() {
  return (
    <>
      <h1 className="mt-4">Welcome to the Sample Online Shop!</h1>
      <div className="media my-5 d-flex align-items-center justify-content-center">
        <img
          className="img-fluid"
          src="/illustrations/undraw_shopping_app_flsj.svg"
          alt="shopping app drawing"
          style={{ maxWidth: "60%" }}
        />
      </div>
      <h5 className="mt-4">
        Explore the different items of our online boutique in the{" "}
        <span>
          <a href="/store">Store</a>
        </span>{" "}
        section!
      </h5>
    </>
  );
}
