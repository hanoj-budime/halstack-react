import React, { useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces, responsiveSizes } from "../common/variables";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import { dxcLogo, dxcSmallLogo } from "./Icons";
import FooterPropsType from "./types";
import DxcFlex from "../flex/Flex";

const DxcFooter = ({
  socialLinks,
  bottomLinks,
  copyright,
  children,
  margin,
  tabIndex = 0,
  mode = "default",
}: FooterPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const translatedLabels = useTranslatedLabels();

  const footerLogo = useMemo(
    () =>
      !colorsTheme.footer.logo ? (
        mode !== "reduced" ? (
          dxcLogo
        ) : (
          dxcSmallLogo
        )
      ) : typeof colorsTheme.footer.logo === "string" ? (
        <LogoImg alt={translatedLabels.formFields.logoAlternativeText} src={colorsTheme.footer.logo} />
      ) : (
        colorsTheme.footer.logo
      ),
    [colorsTheme]
  );

  return (
    <ThemeProvider theme={colorsTheme.footer}>
      <FooterContainer margin={margin} mode={mode}>
        <DxcFlex justifyContent="space-between" alignItems="center" wrap="wrap" gap="1.5rem">
          <LogoContainer mode={mode}>{footerLogo}</LogoContainer>
          {mode !== "reduced" && (
            <DxcFlex>
              {socialLinks?.map((link, index) => (
                <SocialAnchor
                  href={link.href}
                  tabIndex={tabIndex}
                  title={link.title}
                  aria-label={link.title}
                  key={`social${index}${link.href}`}
                  index={index}
                >
                  <SocialIconContainer>
                    {typeof link.logo === "string" ? <img src={link.logo} alt="Link" /> : link.logo}
                  </SocialIconContainer>
                </SocialAnchor>
              ))}
            </DxcFlex>
          )}
        </DxcFlex>
        {children && <ChildComponents mode={mode}>{children}</ChildComponents>}
        {mode !== "reduced" && (
          <BottomContainer>
            <BottomLinks>
              {bottomLinks?.map((link, index) => (
                <span key={`bottom${index}${link.text}`}>
                  <BottomLink href={link.href} tabIndex={tabIndex}>
                    {link.text}
                  </BottomLink>
                </span>
              ))}
            </BottomLinks>
            <Copyright>{copyright || translatedLabels.footer.copyrightText(new Date().getFullYear())}</Copyright>
          </BottomContainer>
        )}
      </FooterContainer>
    </ThemeProvider>
  );
};

const FooterContainer = styled.footer<{ margin: FooterPropsType["margin"]; mode?: "default" | "reduced" }>`
  background-color: ${(props) => props.theme.backgroundColor};
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => (props?.mode !== "reduced" ? "column" : "row")};
  justify-content: space-between;
  margin-top: ${(props) => (props.margin ? spaces[props.margin] : "0px")};
  min-height: ${(props) => (props?.mode !== "reduced" ? props.theme.height : props.theme.reducedHeight)};
  width: 100%;
  gap: ${(props) => (props?.mode !== "reduced" ? "0px" : "32px")};
  @media (min-width: ${responsiveSizes.small}rem) {
    padding: ${(props) => (props?.mode !== "reduced" ? "24px 32px 24px 32px" : "12px 32px 12px 32px")};
  }
  @media (max-width: ${responsiveSizes.small}rem) {
    padding: 20px;
    flex-direction: column;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (min-width: ${responsiveSizes.small}rem) {
    flex-direction: row;
  }
  @media (max-width: ${responsiveSizes.small}rem) {
    flex-direction: column;
    align-items: center;
  }

  border-top: ${(props) =>
    `${props.theme.bottomLinksDividerThickness} ${props.theme.bottomLinksDividerStyle} ${props.theme.bottomLinksDividerColor}`};
  margin-top: 16px;
`;

const ChildComponents = styled.div<{ mode: "default" | "reduced" }>`
  min-height: 16px;
  overflow: hidden;
  font-family: ${(props) => props.theme.childrenFontFamily};
  font-size: ${(props) => props.theme.childrenFontSize};
  font-style: ${(props) => props.theme.childrenFontStyle};
  font-weight: ${(props) => props.theme.childrenFontWeight};
  color: ${(props) => props.theme.childrenFontColor};
  ${(props) =>
    props.mode === "reduced" &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 16px;
  `}
`;

const Copyright = styled.div`
  padding-top: ${(props) => props.theme.bottomLinksDividerSpacing};
  font-family: ${(props) => props.theme.copyrightFontFamily};
  font-size: ${(props) => props.theme.copyrightFontSize};
  font-style: ${(props) => props.theme.copyrightFontStyle};
  font-weight: ${(props) => props.theme.copyrightFontWeight};
  color: ${(props) => props.theme.copyrightFontColor};

  @media (min-width: ${responsiveSizes.small}rem) {
    max-width: 40%;
    text-align: right;
  }

  @media (max-width: ${responsiveSizes.small}rem) {
    max-width: 100%;
    width: 100%;
    text-align: left;
  }
`;

const LogoContainer = styled.span<{ mode?: "default" | "reduced" }>`
  max-height: ${(props) => (props?.mode !== "reduced" ? props.theme.logoHeight : props.theme.reducedLogoHeight)};
  width: ${(props) => props.theme.logoWidth};
`;

const LogoImg = styled.img<{ mode?: "default" | "reduced" }>`
  max-height: ${(props) => (props?.mode !== "reduced" ? props.theme.logoHeight : props.theme.reducedLogoHeight)};
  width: ${(props) => props.theme.logoWidth};
`;

const SocialAnchor = styled.a<{ index: number }>`
  display: inline-flex;
  margin-left: ${(props) => (props.index === 0 ? "0px" : props.theme.socialLinksGutter)};
  border-radius: 4px;

  &:focus {
    outline: 2px solid #0095ff;
    outline-offset: 2px;
  }
`;

const SocialIconContainer = styled.div`
  display: flex;
  align-items: center;
  height: ${(props) => props.theme.socialLinksSize};
  width: ${(props) => props.theme.socialLinksSize};
  color: ${(props) => props.theme.socialLinksColor};
  overflow: hidden;

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const BottomLinks = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-self: center;
  padding-top: ${(props) => props.theme.bottomLinksDividerSpacing};
  color: #fff;

  @media (min-width: ${responsiveSizes.small}rem) {
    max-width: 60%;
  }
  @media (max-width: ${responsiveSizes.small}rem) {
    max-width: 100%;
    width: 100%;
  }

  & > span:not(:first-child):before {
    content: "·";
    padding: 0 0.5rem;
  }
`;

const BottomLink = styled.a`
  text-decoration: ${(props) => props.theme.bottomLinksTextDecoration};
  color: ${(props) => props.theme.bottomLinksFontColor};
  font-family: ${(props) => props.theme.bottomLinksFontFamily};
  font-size: ${(props) => props.theme.bottomLinksFontSize};
  font-style: ${(props) => props.theme.bottomLinksFontStyle};
  font-weight: ${(props) => props.theme.bottomLinksFontWeight};
  border-radius: 2px;

  &:focus {
    outline: 2px solid #0095ff;
  }
`;

export default DxcFooter;
