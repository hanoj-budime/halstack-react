import Figure from "@/common/Figure";
import HeadingLink from "@/common/HeadingLink";
import {
  DxcList,
  DxcStack,
  DxcText,
  DxcTable,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import radioGroupStacking from "./images/radio_group_stacking.png";
import DocFooter from "@/common/DocFooter";

const RadioGroupUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcList>
          <DxcText>
            Labelling should be concise and clearly differentiated with respect
            to other options.
          </DxcText>
          <DxcText>
            One option of the radio group can be pre-selected. Try to select the
            safest or convenient option.
          </DxcText>
          <DxcText>Single radio buttons should not be used.</DxcText>
          <DxcText>
            If the question that the user needs to responde is as easier as
            yes/no, it is recommended to use a checkbox instead of radio group.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Stacking</HeadingLink>
        <Figure caption="Radio button stacking options">
          <Image src={radioGroupStacking} alt="Radio button stacking options" />
        </Figure>
        <DxcTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vertical</td>
              <td>
                Short lists of radio buttons should be stacked vertically below
                a descriptive label to better associate the group. Options that
                are listed vertically are easier to read
              </td>
            </tr>
            <tr>
              <td>Horizontal</td>
              <td>
                Multiple radio buttons may be displayed horizontally across the
                page while keeping them aligned within their respective columns.
                Here, it is needed to have in consideration that the linear
                radio buttons represent some challenge, because it&#39;s
                difficult to scan and localize
              </td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcText as="p">
          *In any case, in the specification it is specified the ideal distance
          between component with label in the same horizontal edge to avoid the
          problem of pairing and scannability.
        </DxcText>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/radio-group/usage/RadioGroupUsagePage.tsx" />
    </DxcStack>
  );
};

export default RadioGroupUsagePage;
