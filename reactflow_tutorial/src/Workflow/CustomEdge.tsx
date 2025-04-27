import { IconButton } from "@chakra-ui/react";
import React from "react";
import { X } from "react-bootstrap-icons";
import {
  BezierEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
} from "reactflow";

export default function CustomEdge(props: EdgeProps) {
  const { sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } =
    props;

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <BezierEdge {...props} />;
      <EdgeLabelRenderer>
        <IconButton
          aria-label="Delete Edge"
          pos="absolute"
          icon={<X />}
          color="red"
          transform={`translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`}
          bg="transparent"
          size="small"
        />
      </EdgeLabelRenderer>
    </>
  );
}
