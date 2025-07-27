import { styled } from "styled-components";

import { getNormalizedBoxStyledProps } from "./utils";

const Box = styled.div`
  display: ${({ $block, $inline }) => {
    if ($block) {
      return "block;";
    } else if ($inline) {
      return "inline-flex;";
    }

    return "flex;";
  }};
  ${(props) => getNormalizedBoxStyledProps(props)};
`;

export default Box;
