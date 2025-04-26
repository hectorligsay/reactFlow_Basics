import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { Box } from "@chakra-ui/react";

export const Workflow = () => {
  return (
    <Box height={"500px"} width="500px" border="1px solid black">
      <ReactFlow />
    </Box>
  );
};
