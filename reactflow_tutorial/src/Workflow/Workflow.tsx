import ReactFlow, {
  Node,
  Edge,
  Background,
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  EdgeTypes,
  Connection,
} from "reactflow";
import "reactflow/dist/style.css";
import { Box, position } from "@chakra-ui/react";
import { useCallback } from "react";
import PaymentInit from "./PaymentInit";
import PaymentCountry from "./PaymentCountry";
import { initialEdges, initialNodes } from "./Workflow.constants";
import PaymentProvider from "./PaymentProvider";
import PaymentProviderSelect from "./PaymentProviderSelect";
import CustomEdge from "./CustomEdge";

// Build the default nodeTypes
const nodeTypes = {
  paymentInit: PaymentInit,
  paymentCountry: PaymentCountry,
  paymentProvider: PaymentProvider,
  paymentProviderSelect: PaymentProviderSelect,
};

const edgeTypes = {
  customEdge: CustomEdge,
};

export const Workflow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  // Create the initial connector
  const onConnect = useCallback((connection: Connection) => {
    const edge = {
      ...connection,
      animated: true,
      id: `${edges.length} + 1`,
      type: "customEdge",
    };
    setEdges((prevEdges) => addEdge(edge, prevEdges));
  }, []);

  return (
    <Box height={"500px"} width="500px" border="1px solid black">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Controls />
        <Background />
      </ReactFlow>
    </Box>
  );
};
