import{
  LiveReload,
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello world!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Illum temporibus ratione tempore, alias natus, dolorem unde numquam quaerat,
          ut magni vero reprehenderit fugit adipisci cum voluptatum 
          consequatur voluptatem porro possimus.
        </p>
        <div>
          <button>One</button>
          <button>Two</button>
          <button>Three</button>
          <button>Four</button>
        </div>
        <Outlet />
        <scripts /> 
        <LiveReload />
      </body>
    </html>
  );
}
