import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const switchTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>checkedBaseColor</td>
        <td>
          <SampleComponent color="#6F2C91"></SampleComponent>
        </td>
        <td>
          Applies to checkedTrackBackgroundColor and
          disabledCheckedTrackBackgroundColor.
        </td>
      </tr>
    </DxcTable>
  );
};

export default switchTokensTable;
