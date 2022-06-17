import React from "react";
import {
  DxcSidenav,
  DxcLink,
  DxcFooter,
  HalstackProvider,
} from "@dxc-technology/halstack-react";
import Link from "next/link";
import { BrowserRouter, Link as RouterLink } from "react-router-dom";

const colors = {
  sidenav: {
    baseColor: "#FABADA",
  },
};

const SidenavLink = React.forwardRef(
  ({ href, children, newWindow = false, selected = false, icon }, ref) => {
    return (
      <Link href={href} passHref>
        <DxcSidenav.Link
          newWindow={newWindow}
          selected={selected}
          icon={icon}
          ref={ref}
        >
          {children}
        </DxcSidenav.Link>
      </Link>
    );
  }
);

function App() {
  return (
    <div>
      <div className="test-case" id="sidenav-menu">
        <h4>Compound components Sidenav</h4>
        <BrowserRouter>
          <DxcSidenav>
            <DxcSidenav.Title
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="73"
                  height="40"
                  viewBox="0 0 73 40"
                >
                  <title>DXC Logo</title>
                  <g id="g10" transform="translate(0)">
                    <g id="g12">
                      <path
                        id="path14"
                        d="M91.613-28.177v2.514H90.231V-28.15l-2.415-3.82h1.616l1.5,2.532,1.526-2.532h1.571ZM83.9-25.555A3.15,3.15,0,0,1,80.6-28.8v-.018a3.231,3.231,0,0,1,3.294-3.262,3.442,3.442,0,0,1,2.469.865l-.87,1.054a2.311,2.311,0,0,0-1.643-.64,1.891,1.891,0,0,0-1.8,1.964v.018a1.886,1.886,0,0,0,1.9,2,2.2,2.2,0,0,0,1.3-.378v-.9H83.858v-1.2h2.729v2.738A4.071,4.071,0,0,1,83.9-25.555Zm-6.416-3.261a1.913,1.913,0,0,0-1.9-1.982A1.883,1.883,0,0,0,73.7-28.835v.018a1.913,1.913,0,0,0,1.9,1.982A1.883,1.883,0,0,0,77.486-28.8Zm-1.9,3.261a3.225,3.225,0,0,1-3.33-3.243v-.018A3.255,3.255,0,0,1,75.6-32.078a3.225,3.225,0,0,1,3.331,3.243v.018A3.255,3.255,0,0,1,75.583-25.555Zm-9.173-.108V-31.97h1.382v5.045h3.133v1.261Zm-3.433-3.153a1.913,1.913,0,0,0-1.9-1.982,1.883,1.883,0,0,0-1.886,1.964v.018a1.913,1.913,0,0,0,1.9,1.982A1.883,1.883,0,0,0,62.978-28.8Zm-1.9,3.261a3.225,3.225,0,0,1-3.33-3.243v-.018a3.255,3.255,0,0,1,3.348-3.262,3.225,3.225,0,0,1,3.331,3.243v.018A3.255,3.255,0,0,1,61.075-25.555Zm-6.508-.108-3.043-4.009v4.009H50.159V-31.97h1.275l2.944,3.883V-31.97h1.364v6.306Zm-8.246,0v-2.531h-2.55v2.531H42.389V-31.97h1.382v2.5h2.55v-2.5H47.7v6.306Zm-8.432.108A3.178,3.178,0,0,1,34.666-28.8v-.018a3.2,3.2,0,0,1,3.276-3.262,3.237,3.237,0,0,1,2.478.973l-.88,1.018a2.315,2.315,0,0,0-1.606-.712,1.866,1.866,0,0,0-1.822,1.964v.018a1.87,1.87,0,0,0,1.822,1.982,2.265,2.265,0,0,0,1.651-.739l.88.891A3.206,3.206,0,0,1,37.889-25.555Zm-9.805-.108V-31.97h4.739v1.235H29.458v1.279h2.962v1.234H29.458V-26.9h3.411v1.234ZM24.322-30.69v5.027H22.939V-30.69H21.028v-1.28h5.206v1.28H24.322"
                        transform="translate(-21.028 65.555)"
                        fill="#100f0d"
                      ></path>
                      <path
                        id="path16"
                        d="M75.836-76.712a8.975,8.975,0,0,1,2.246-3.9,8.393,8.393,0,0,1,6.058-2.457h9.824v-5.67H84.139a14.611,14.611,0,0,0-10.232,4.221,14.509,14.509,0,0,0-3.076,4.536,11.913,11.913,0,0,0-.973,3.271Zm0,4.325a8.978,8.978,0,0,0,2.246,3.9,8.394,8.394,0,0,0,6.058,2.457h9.824v5.67H84.139A14.611,14.611,0,0,1,73.907-64.58a14.506,14.506,0,0,1-3.076-4.536,11.91,11.91,0,0,1-.973-3.271ZM57.522-69.832l-7.5,9.473H42.581L53.818-74.55,42.581-88.739H50.02l7.5,9.472,7.5-9.472h7.439L61.225-74.55l11.237,14.19H65.023Zm-12.336-6.88a11.935,11.935,0,0,0-.973-3.271,14.515,14.515,0,0,0-3.076-4.536A14.612,14.612,0,0,0,30.9-88.739H21.081v5.67H30.9a8.394,8.394,0,0,1,6.058,2.457,8.978,8.978,0,0,1,2.246,3.9Zm0,4.325a11.932,11.932,0,0,1-.973,3.271,14.511,14.511,0,0,1-3.076,4.536A14.611,14.611,0,0,1,30.9-60.359H21.081v-5.67H30.9a8.4,8.4,0,0,0,6.058-2.457,8.981,8.981,0,0,0,2.246-3.9h5.978"
                        transform="translate(-21.049 88.739)"
                        fill="#100f0d"
                      ></path>
                    </g>
                  </g>
                </svg>
              }
            >
              CULO CULO
            </DxcSidenav.Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              ullamcorper consectetur mollis. Suspendisse vitae lacinia libero.
              Donec ullamcorper mauris vitae enim porta, maximus sagittis lectus
              porttitor. Cras sodales justo augue, tempor venenatis justo
              aliquam non. Cras commodo augue eget quam auctor vestibulum.
              Suspendisse et ipsum sem. Mauris mollis dolor et nunc pharetra
              mollis. Quisque faucibus molestie ultricies. Sed nec suscipit
              ipsum. Sed ac leo ac metus congue suscipit. Suspendisse vehicula
              molestie eleifend. Nam hendrerit libero nec nisl sodales, et
              placerat lorem vehicula.
            </p>
            <DxcSidenav.Link href="http://localhost:3000/sidenav">
              SOLO CULO
            </DxcSidenav.Link>
            <DxcSidenav.Section>
              <DxcSidenav.Group title="Culo II" collapsable={true}>
                <SidenavLink
                  selected
                  href="/#/sidenav"
                  newWindow
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
                        fill="#323232"
                      />
                      <path
                        d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
                        fill="#323232"
                      />
                      <path
                        d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
                        fill="#323232"
                      />
                      <path
                        d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
                        fill="#323232"
                      />
                      <path
                        d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z"
                        fill="#323232"
                      />
                    </svg>
                  }
                >
                  TEST
                </SidenavLink>
                <RouterLink
                  href="/"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
                        fill="#323232"
                      />
                      <path
                        d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
                        fill="#323232"
                      />
                      <path
                        d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
                        fill="#323232"
                      />
                      <path
                        d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
                        fill="#323232"
                      />
                      <path
                        d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z"
                        fill="#323232"
                      />
                    </svg>
                  }
                  component={DxcSidenav.Link}
                  newWindow
                >
                  TEST II
                </RouterLink>
              </DxcSidenav.Group>
              <DxcSidenav.Group
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
                      fill="#323232"
                    />
                    <path
                      d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
                      fill="#323232"
                    />
                    <path
                      d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
                      fill="#323232"
                    />
                    <path
                      d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
                      fill="#323232"
                    />
                    <path
                      d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z"
                      fill="#323232"
                    />
                  </svg>
                }
                title="Culo II"
                collapsable={true}
              >
                <DxcSidenav.Link href="http://localhost:3000/sidenav">
                  CULO III
                </DxcSidenav.Link>
              </DxcSidenav.Group>
            </DxcSidenav.Section>

            <DxcSidenav.Section>
              <DxcSidenav.Group title="Culo II" collapsable={true}>
                <DxcSidenav.Link href="http://localhost:3000/sidenav">
                  {" "}
                  Culo III{" "}
                </DxcSidenav.Link>
                <DxcSidenav.Link href="http://localhost:3000/sidenav">
                  {" "}
                  Culo III{" "}
                </DxcSidenav.Link>
              </DxcSidenav.Group>
              <DxcSidenav.Group title="Culo II" collapsable={true}>
                <DxcSidenav.Link href="http://localhost:3000/sidenav">
                  {" "}
                  Culo III{" "}
                </DxcSidenav.Link>
                <DxcSidenav.Link href="http://localhost:3000/sidenav">
                  {" "}
                  Culo III{" "}
                </DxcSidenav.Link>
              </DxcSidenav.Group>
            </DxcSidenav.Section>

            <DxcSidenav.Section>
              <DxcSidenav.Group title="Culo II" collapsable={true}>
                <DxcSidenav.Link href="http://localhost:3000/sidenav">
                  {" "}
                  Culo III{" "}
                </DxcSidenav.Link>
                <DxcSidenav.Link href="http://localhost:3000/sidenav">
                  {" "}
                  Culo III{" "}
                </DxcSidenav.Link>
                <DxcSidenav.Link href="http://localhost:3000/sidenav">
                  {" "}
                  Culo III{" "}
                </DxcSidenav.Link>
              </DxcSidenav.Group>
              <DxcSidenav.Group title="Culo II" collapsable={true}>
                <DxcSidenav.Link href="http://localhost:3000/sidenav">
                  {" "}
                  Culo III{" "}
                </DxcSidenav.Link>
                <DxcSidenav.Link href="http://localhost:3000/sidenav">
                  {" "}
                  Culo III{" "}
                </DxcSidenav.Link>
                <DxcSidenav.Link href="http://localhost:3000/sidenav">
                  {" "}
                  Culo III{" "}
                </DxcSidenav.Link>
              </DxcSidenav.Group>
            </DxcSidenav.Section>
          </DxcSidenav>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
