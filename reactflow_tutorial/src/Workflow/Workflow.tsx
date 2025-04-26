import ReactFlow, { Node } from "reactflow";
import "reactflow/dist/style.css";
import { Box } from "@chakra-ui/react";

// build nodes:
const nodes: Node[] = [
  {
    id: "1",
    data: {},
    position: { x: 0, y: 0 },
  },
];

export const Workflow = () => {
  return (
    <Box height={"500px"} width="500px" border="1px solid black">
      <ReactFlow nodes={nodes} />
    </Box>
  );
};
