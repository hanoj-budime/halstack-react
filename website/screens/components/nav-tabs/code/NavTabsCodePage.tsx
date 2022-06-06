import { DxcText, DxcStack, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basic from "./examples/basic";
import routerLink from "./examples/routerLink";
import routerLinkV6 from "./examples/routerLinkV6";
import nextLink from "./examples/nextLink";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>iconPosition: 'top' | 'left'</td>
          <td>
            <Code>'top'</Code>
          </td>
          <td>Whether the icon should appear above or to the left of the label.</td>
        </tr>
        <tr>
          <td>tabIndex: number</td>
          <td>
            <Code>0</Code>
          </td>
          <td>Value of the tabindex for each tab.</td>
        </tr>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: (
          <>
            <Example example={basic} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Router navigation",
        content: (
          <>
            <DxcText as="p">
              There are many React based routers, unfortunately all with different APIs.
            </DxcText>
            <DxcText as="p">
              So we decided to make our link component just an styled HTML anchor element which
              allows it to be used in any React based router. For each API is different so here are
              some examples for{" "}
              <DxcLink href="https://reactrouter.com/docs/en/v6/hooks/use-href" newWindow>
                React Router
              </DxcLink>{" "}
              and{" "}
              <DxcLink
                href="https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-functional-component"
                newWindow
              >
                NextJS Link
              </DxcLink>
              .
            </DxcText>
          </>
        ),
        subSections: [
          {
            title: "React router",
            content: (
              <>
                <DxcText as="p">
                  This is an example of{" "}
                  <DxcLink href="https://v5.reactrouter.com/web/api/Route/component" newWindow>
                    React Router
                  </DxcLink>{" "}
                  using the prop <Code>component</Code>. Note that this Prop is not available in v6.
                </DxcText>
                <Example example={routerLink} defaultIsVisible />
              </>
            ),
          },
          {
            title: "React router v6",
            content: (
              <>
                <DxcText as="p">
                  In{" "}
                  <DxcLink
                    href="https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md#remove-link-component-prop"
                    newWindow
                  >
                    React Router v6
                  </DxcLink>{" "}
                  the prop <Code>component</Code> is no longer available so it is necessary to use
                  hooks provided by{" "}
                  <DxcLink href="https://reactrouter.com/docs/en/v6/hooks/use-href" newWindow>
                    React Router v6
                  </DxcLink>
                  .
                </DxcText>
                <Example example={routerLinkV6} defaultIsVisible />
              </>
            ),
          },
          {
            title: "NextJS Link",
            content: (
              <>
                <DxcText as="p">
                  This is an example of{" "}
                  <DxcLink
                    href="https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-functional-component"
                    newWindow
                  >
                    NextJS
                  </DxcLink>{" "}
                  .
                </DxcText>
                <Example example={nextLink} defaultIsVisible />
              </>
            ),
          },
        ],
      },
    ],
  },
];

const ButtonCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/nav-tabs/code/NavTabsCodePage.tsx" />
    </DxcStack>
  );
};

export default ButtonCodePage;
