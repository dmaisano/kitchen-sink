import React from "react";
import Button from "./button";

interface FeaturesProps {
  checkoutRef: React.RefObject<HTMLDivElement>;
  loading: boolean;
  // eslint-disable-next-line no-unused-vars
  handleCheckout: (_: string) => Promise<void>;
}

const Features: React.FC<FeaturesProps> = ({
  checkoutRef,
  loading,
  handleCheckout,
}) => {
  return (
    <section
      id="features"
      className="relative flex min-h-full flex-col justify-start px-12 py-8 md:items-center md:justify-center md:p-0"
      style={{
        background: `linear-gradient(to top, #3a426d, #1b1f3b)`,
      }}
    >
      <h2 className="relative text-center text-3xl font-semibold text-white md:mb-8 md:py-8 md:text-4xl">
        Premium Features
      </h2>

      <div
        id="features-grid"
        className="block text-white md:mb-8 md:grid md:grid-cols-2 md:gap-16 md:px-8"
      >
        <div
          id="feature-item"
          className="mx-auto mb-8 flex flex-col items-center"
        >
          <svg
            className="mb-2"
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
          >
            <g fill="none">
              <path
                fill="#FFF"
                d="M72.58 62.903V20.565a6.056 6.056 0 00-6.048-6.049H52.016C52.016 6.511 45.505 0 37.5 0c-8.005 0-14.516 6.511-14.516 14.516H8.468a6.056 6.056 0 00-6.049 6.049v42.338H0v6.049A6.056 6.056 0 006.048 75h62.904A6.056 6.056 0 0075 68.952v-6.049h-2.42zM52.017 16.935h14.516c2 0 3.63 1.629 3.63 3.63v42.338h-2.42V21.774a2.422 2.422 0 00-2.42-2.42H52.017v-2.419zM25.403 31.452V14.516c0-6.67 5.427-12.097 12.097-12.097s12.097 5.427 12.097 12.097v7.258h-2.42v-7.258c0-5.336-4.341-9.677-9.677-9.677-5.336 0-9.677 4.341-9.677 9.677v14.516h2.419v-7.258h14.516v2.42h7.258v-2.42h13.307v41.13H9.677v-41.13h13.307v9.678h2.42zm4.839-16.936A7.265 7.265 0 0137.5 7.258a7.265 7.265 0 017.258 7.258H30.242zm14.516 2.42v2.419H30.242v-2.42h14.516zM29.032 65.322h16.936v1.21c0 .666-.544 1.209-1.21 1.209H30.242c-.666 0-1.21-.543-1.21-1.21v-1.21zM4.84 20.565a3.634 3.634 0 013.629-3.63h14.516v2.42H9.677a2.422 2.422 0 00-2.419 2.42v41.128h-2.42V20.565zm67.74 48.387c0 2-1.629 3.629-3.63 3.629H6.049c-2 0-3.629-1.629-3.629-3.63v-3.628h24.194v1.21c0 2 1.628 3.628 3.629 3.628h14.516c2 0 3.63-1.628 3.63-3.629v-1.21H72.58v3.63z"
              />
              <path
                fill="#724CF9"
                d="M37.935 60.83l-.573-.31A31.075 31.075 0 0121 33.127V32.12L37.935 23l16.936 9.119v1.007a31.076 31.076 0 01-16.362 27.395l-.574.309z"
              />
              <path
                fill="#FFF"
                d="M28.23 42.25a.8.8 0 01-.23-.525.8.8 0 01.23-.525l1.078-1.05c.307-.3.769-.3 1.077 0l.077.075 4.23 4.425a.38.38 0 00.539 0l10.307-10.425h.077c.308-.3.77-.3 1.077 0l1.077 1.05c.308.3.308.75 0 1.05l-12.307 12.45a.707.707 0 01-.539.225.707.707 0 01-.538-.225l-6-6.3-.154-.225z"
              />
            </g>
          </svg>
          <h4 className="pb-4 pt-2 text-xl font-semibold">
            Paywall Management
          </h4>
          <p>
            Lorem ipsum dolor sit amet, augue delectus cum ne, mazim numquam
            similique ne nec, eius eruditi
          </p>
        </div>
        <div
          id="feature-item"
          className="mx-auto mb-8 flex flex-col items-center"
        >
          <svg
            className="mb-2"
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="75"
          >
            <g fill="none">
              <path
                fill="#FFF"
                d="M56.33 75h17.556l-1.808-7.258h-2.02l2.41-24.194h-14.72l2.41 24.194h-2.02L56.33 75zm8.778-25.904l-3.118-3.128h6.236l-3.118 3.128zm-4.493-1.086l3.287 3.297v7.967h2.412v-7.967L69.6 48.01l-1.966 19.732h-1.32v-6.048h-2.412v6.048h-1.32L60.615 48.01zm-.594 22.151h10.174l.603 2.42h-11.38l.603-2.42zM33.76 24.194c0 .668-.54 1.21-1.206 1.21a1.208 1.208 0 01-1.206-1.21c0-.668.54-1.21 1.206-1.21.666 0 1.206.542 1.206 1.21zm-12.057 0c0 .668-.54 1.21-1.206 1.21a1.208 1.208 0 01-1.206-1.21c0-.668.54-1.21 1.206-1.21.666 0 1.206.542 1.206 1.21z"
              />
              <path
                fill="#FFF"
                d="M46.786 45.783l-11.82-3.165v-2.12a13.316 13.316 0 004.607-7.938c2.852-.477 5.038-2.953 5.038-5.947v-9.486a14.393 14.393 0 003.49-4.488l.872-1.752h-3.65a4.1 4.1 0 01-3.586-2.117A16.995 16.995 0 0026.88 0a16.89 16.89 0 00-13.193 6.301 9.91 9.91 0 00-5.247 8.786v11.526c0 2.994 2.186 5.47 5.038 5.948a13.317 13.317 0 004.608 7.938v2.12L6.265 45.783C2.577 46.769 0 50.133 0 53.963V75h53.05V53.962c0-3.83-2.576-7.193-6.264-8.18zm-23.345 1.944a3.601 3.601 0 00-.533 1.87c0 .687.202 1.322.533 1.87l-2.944 1.182v-6.104l2.944 1.182zm4.29 1.87a1.21 1.21 0 01-1.206 1.21 1.21 1.21 0 010-2.42 1.21 1.21 0 011.206 1.21zm-1.967 3.544c.245.054.5.085.761.085.262 0 .517-.031.762-.085l3.57 1.43-4.332 14.899-4.33-14.898 3.569-1.43zm6.79-.492l-2.944-1.182a3.598 3.598 0 00.533-1.87c0-.686-.202-1.322-.533-1.87l2.944-1.182v6.104zm7.234-22.63v-6.811c1.4.5 2.412 1.831 2.412 3.406a3.621 3.621 0 01-2.412 3.405zm2.412-8.214a5.96 5.96 0 00-2.412-1.117v-.84a14.107 14.107 0 002.412-1.046v3.003zM15.007 8.341l.238-.12.247-.31A14.495 14.495 0 0126.88 2.42a14.586 14.586 0 0112.75 7.527 6.518 6.518 0 005.26 3.347 11.794 11.794 0 01-9.573 4.852c-1.735 0-3.468-.214-5.15-.636l-1.558-.391a4.225 4.225 0 00-3.892-2.602h-.603v2.42h.603c.997 0 1.808.813 1.808 1.814a1.806 1.806 0 01-1.808 1.815h-.279a11.206 11.206 0 01-7.934-3.298l-.83-.832v-.71h-2.411v4.962a5.975 5.975 0 00-2.412 1.117v-6.717a7.505 7.505 0 014.156-6.746zm-4.156 18.272a3.623 3.623 0 012.412-3.406v6.811a3.62 3.62 0 01-2.412-3.405zm4.823 3.629V19.744c1.584 1.34 3.439 2.326 5.458 2.832a13.6 13.6 0 003.306.408h.279a4.19 4.19 0 002.985-1.24 4.214 4.214 0 001.129-2.076l.751.189a23.6 23.6 0 005.735.708c.697 0 1.385-.051 2.06-.148v9.825c0 6.002-4.869 10.887-10.852 10.887-5.982 0-10.85-4.885-10.85-10.887zm10.851 13.306c2.172 0 4.218-.537 6.029-1.468v1.86l-5.267 2.112a3.597 3.597 0 00-.762-.084c-.26 0-.516.031-.761.084l-5.267-2.113V42.08a13.142 13.142 0 006.028 1.468zM2.411 53.962a6.052 6.052 0 014.476-5.844l11.199-2.995v11.1l1.86-.747 4.972 17.105H12.057V56.855H9.646V72.58H2.41V53.962zM50.64 72.581h-7.235V56.855h-2.411V72.58H28.133l4.972-17.105 1.86.746V45.123l11.199 2.997a6.05 6.05 0 014.476 5.842v18.619z"
              />
              <path
                fill="#FFF"
                d="M26.525 37.5c3.324 0 6.029-2.714 6.029-6.048h-2.411c0 2-1.624 3.629-3.618 3.629a3.628 3.628 0 01-3.617-3.63h-2.411c0 3.335 2.705 6.049 6.028 6.049z"
              />
              <path
                d="M70.085 41.678l-4.977-1.86-4.977 1.86.144-5.527-3.172-4.328 4.998-1.547 3.007-4.606 3.007 4.606 4.998 1.547-3.172 4.328zM20.497 54.435H19.29V43.548l-7.217 2.618 1.189 14.318 4.589 2.003-1.065 4.271 4.916 7.032h4.822zm20.48-8.269l-7.217-2.618v10.887h-1.206L26.525 73.79h4.823l4.916-7.032-1.065-4.271 4.59-2.003z"
                fill="#724CF9"
              />
            </g>
          </svg>
          <h4 className="pb-2 text-xl font-semibold">
            World-Class Awarded Talents
          </h4>
          <p>
            Lorem ipsum dolor sit amet, augue delectus cum ne, mazim numquam
            similique ne nec, eius eruditi
          </p>
        </div>
        <div
          id="feature-item"
          className="mx-auto mb-8 flex flex-col items-center"
        >
          <svg
            className="mb-2"
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="85"
          >
            <g fill="none">
              <path
                fill="#FFF"
                d="M51.84 30.649H37.87v2.786h13.97a4.19 4.19 0 014.19 4.18v5.609c-1.17-.885-2.611-1.43-4.19-1.43H7.142a4.19 4.19 0 01-4.19-4.18 4.19 4.19 0 014.19-4.179h15.365V30.65H7.142c-3.85 0-6.984 3.125-6.984 6.966v40.4c0 3.841 3.133 6.967 6.984 6.967H51.84c3.851 0 6.984-3.125 6.984-6.966V37.615c0-3.841-3.133-6.966-6.984-6.966zm4.19 40.401H39.267c-3.85 0-6.984-3.125-6.984-6.966 0-3.84 3.133-6.965 6.984-6.965H56.03V71.05zm0-16.717H39.267c-5.392 0-9.778 4.375-9.778 9.752 0 5.376 4.386 9.752 9.778 9.752H56.03v4.179a4.19 4.19 0 01-4.19 4.18H7.142a4.19 4.19 0 01-4.19-4.18V43.184a6.96 6.96 0 004.19 1.396h44.697a4.19 4.19 0 014.19 4.18v5.573z"
              />
              <path fill="#FFF" d="M7.142 36.222h44.697v2.786H7.142z" />
              <ellipse
                cx="29.491"
                cy="26.47"
                fill="#724CF9"
                rx="11.174"
                ry="11.145"
              />
              <path
                fill="#FFF"
                d="M30.887 30.649h-2.793c-.77 0-1.397-.626-1.397-1.393h-2.794a4.19 4.19 0 004.19 4.18v1.393h2.794v-1.394a4.19 4.19 0 004.19-4.18 4.19 4.19 0 00-4.19-4.179h-2.793c-.77 0-1.397-.625-1.397-1.393s.627-1.393 1.397-1.393h2.793c.77 0 1.397.626 1.397 1.393h2.794a4.19 4.19 0 00-4.19-4.18v-1.392h-2.794v1.393a4.19 4.19 0 00-4.19 4.18 4.19 4.19 0 004.19 4.18h2.793c.77 0 1.397.625 1.397 1.392 0 .768-.627 1.393-1.397 1.393zm4.191 33.435a4.19 4.19 0 004.19 4.18 4.19 4.19 0 004.19-4.18 4.19 4.19 0 00-4.19-4.18 4.19 4.19 0 00-4.19 4.18zm5.587 0a1.397 1.397 0 01-2.794 0 1.396 1.396 0 012.794 0z"
              />
              <path
                fill="#724CF9"
                d="M28.094 0h2.794v11.145h-2.794zm9.777 4.18h2.794v11.145h-2.794zM18.317 6.966h2.794v8.359h-2.794z"
              />
            </g>
          </svg>
          <h4 className="pb-2 text-xl font-semibold">
            Monetization of Content
          </h4>
          <p>
            Lorem ipsum dolor sit amet, augue delectus cum ne, mazim numquam
            similique ne nec, eius eruditi
          </p>
        </div>
        <div
          id="feature-item"
          className="mx-auto mb-8 flex flex-col items-center"
        >
          <svg
            className="mb-2"
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="85"
          >
            <g fill="none">
              <path
                fill="#FFF"
                d="M51.84 30.649H37.87v2.786h13.97a4.19 4.19 0 014.19 4.18v5.609c-1.17-.885-2.611-1.43-4.19-1.43H7.142a4.19 4.19 0 01-4.19-4.18 4.19 4.19 0 014.19-4.179h15.365V30.65H7.142c-3.85 0-6.984 3.125-6.984 6.966v40.4c0 3.841 3.133 6.967 6.984 6.967H51.84c3.851 0 6.984-3.125 6.984-6.966V37.615c0-3.841-3.133-6.966-6.984-6.966zm4.19 40.401H39.267c-3.85 0-6.984-3.125-6.984-6.966 0-3.84 3.133-6.965 6.984-6.965H56.03V71.05zm0-16.717H39.267c-5.392 0-9.778 4.375-9.778 9.752 0 5.376 4.386 9.752 9.778 9.752H56.03v4.179a4.19 4.19 0 01-4.19 4.18H7.142a4.19 4.19 0 01-4.19-4.18V43.184a6.96 6.96 0 004.19 1.396h44.697a4.19 4.19 0 014.19 4.18v5.573z"
              />
              <path fill="#FFF" d="M7.142 36.222h44.697v2.786H7.142z" />
              <ellipse
                cx="29.491"
                cy="26.47"
                fill="#724CF9"
                rx="11.174"
                ry="11.145"
              />
              <path
                fill="#FFF"
                d="M30.887 30.649h-2.793c-.77 0-1.397-.626-1.397-1.393h-2.794a4.19 4.19 0 004.19 4.18v1.393h2.794v-1.394a4.19 4.19 0 004.19-4.18 4.19 4.19 0 00-4.19-4.179h-2.793c-.77 0-1.397-.625-1.397-1.393s.627-1.393 1.397-1.393h2.793c.77 0 1.397.626 1.397 1.393h2.794a4.19 4.19 0 00-4.19-4.18v-1.392h-2.794v1.393a4.19 4.19 0 00-4.19 4.18 4.19 4.19 0 004.19 4.18h2.793c.77 0 1.397.625 1.397 1.392 0 .768-.627 1.393-1.397 1.393zm4.191 33.435a4.19 4.19 0 004.19 4.18 4.19 4.19 0 004.19-4.18 4.19 4.19 0 00-4.19-4.18 4.19 4.19 0 00-4.19 4.18zm5.587 0a1.397 1.397 0 01-2.794 0 1.396 1.396 0 012.794 0z"
              />
              <path
                fill="#724CF9"
                d="M28.094 0h2.794v11.145h-2.794zm9.777 4.18h2.794v11.145h-2.794zM18.317 6.966h2.794v8.359h-2.794z"
              />
            </g>
          </svg>
          <h4 className="pb-2 text-xl font-semibold">E-Wallet</h4>
          <p>
            Lorem ipsum dolor sit amet, augue delectus cum ne, mazim numquam
            similique ne nec, eius eruditi
          </p>
        </div>
      </div>

      <div ref={checkoutRef} id="payment-options" className="md:mb-8">
        <h2 className="mb-4 text-center text-3xl text-white">
          Select Your Plan
        </h2>
        <div
          id="payment-cards"
          className="md:grid md:grid-flow-row md:grid-cols-[repeat(2,0.5fr)] md:gap-10"
        >
          <div className="card border-[rgba(0, 0, 0, 0.125)] relative mb-6 flex h-full flex-col items-center justify-center rounded-xl border-solid bg-white bg-clip-border md:ml-auto md:w-3/4">
            <div className="card-content mx-auto p-6 text-center lg:p-8">
              <div className="card-title text-5xl font-bold before:align-super before:text-3xl before:text-[#724cf9] before:content-['$'] lg:text-7xl before:lg:text-4xl">
                9.99
              </div>
              <div className="card-subtitle mb-3 text-xl lg:mb-5 lg:text-3xl">
                per month
              </div>
              <p className="card-text mb-6 text-[#6d6f78]">
                Lorem ipsum dolor sit amet, augue delectus cum ne, mazim numquam
                similique ne nec, eius eruditi fierent
              </p>
              <div>
                <Button
                  className="w-full"
                  disabled={loading}
                  onClick={() =>
                    handleCheckout(
                      process.env
                        .NEXT_PUBLIC_STRIPE_CAPSTONE_MONTHLY_SUB_PRICE_ID ?? "",
                    )
                  }
                >
                  Select Plan
                </Button>
              </div>
            </div>
          </div>
          <div className="card border-[rgba(0, 0, 0, 0.125)] relative flex h-full flex-col items-center justify-center rounded-xl border-solid bg-white bg-clip-border md:mr-auto md:w-3/4">
            <div className="card-content mx-auto p-6 text-center lg:p-8">
              <div className="card-title text-5xl font-bold before:align-super before:text-3xl before:text-[#724cf9] before:content-['$'] lg:text-7xl before:lg:text-4xl">
                99.99
              </div>
              <div className="card-subtitle mb-3 text-xl lg:mb-5 lg:text-3xl">
                per year
              </div>
              <p className="card-text mb-6 text-[#6d6f78]">
                Lorem ipsum dolor sit amet, augue delectus cum ne, mazim numquam
                similique ne nec, eius eruditi fierent
              </p>
              <div>
                <Button
                  className="w-full"
                  disabled={loading}
                  onClick={() =>
                    handleCheckout(
                      process.env
                        .NEXT_PUBLIC_STRIPE_CAPSTONE_YEARLY_SUB_PRICE_ID ?? "",
                    )
                  }
                >
                  Select Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
