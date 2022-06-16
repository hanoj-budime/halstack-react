import {
  DxcAlert,
  DxcButton,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isVisible, changeIsVisible] = useState(false);
  const handleVisibility = () => {
    changeIsVisible(!isVisible);
  };

  return (
    <DxcInset space="large">
      <DxcButton label="Show information" onClick={handleVisibility} />
      {isVisible && (
        <DxcAlert
          type="info"
          mode="modal"
          onClose={handleVisibility}
          inlineText="Please read the documents carefully before the submission of the data."
        />
      )}
    </DxcInset>
  );
}`;

const scope = {
  DxcAlert,
  DxcButton,
  DxcInset,
  DxcStack,
  useState,
};

export default { code, scope };
