import { DxcAccordion, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcAccordion
        label="Uncontrolled"
        assistiveText="Additional information"
        defaultIsExpanded
        padding="medium"
      >
        <DxcInset space="xxxsmall">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </DxcInset>
      </DxcAccordion>
    </DxcInset>
  );
}`;

const scope = {
  DxcAccordion,
  DxcInset,
  useState,
};

export default { code, scope };
