import React from "react";
import { NodeProps, Handle, Position } from "reactflow";
import { Box, Text } from "@chakra-ui/react";
import CustomHandle from "./CustomHandle";

export default function PaymentInit({
  data: { amount },
}: NodeProps<{ amount: number }>) {
  return (
    <Box bg="white" border="1px solid #aa1fff">
      <Box bg="#410566" p={1}>
        <Text fontSize="small" color="white">
          Payment Initialized
        </Text>
      </Box>
      <Box p={2}>
        <Text fontSize="2x1" color="blue.600">
          ${amount}
        </Text>
      </Box>
      <CustomHandle type="source" position={Position.Right} />
    </Box>
  );
}
