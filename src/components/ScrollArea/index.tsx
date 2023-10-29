import * as RadixScrollArea from "@radix-ui/react-scroll-area";

import { StyledScrollArea } from "./ScrollArea.styled";


interface ScrollAreaProps {
  className?: string;
  hasWhiteBackground?: boolean;
  scrollbarOrientation: "both" | "vertical" | "horizontal";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const ScrollArea = ({
  children,
  hasWhiteBackground,
  className,
  scrollbarOrientation,
  style,
}: ScrollAreaProps) => {
  return (
    <StyledScrollArea
      className={`ScrollAreaRoot ${
        hasWhiteBackground ? "white-bg" : ""
      } ${className}`}
      style={style}>
      <RadixScrollArea.Viewport className="ScrollAreaViewport">
        {children}
      </RadixScrollArea.Viewport>
      {scrollbarOrientation === "vertical" ? (
        <RadixScrollArea.Scrollbar
          className="ScrollAreaScrollbar"
          orientation="vertical">
          <RadixScrollArea.Thumb className="ScrollAreaThumb" />
        </RadixScrollArea.Scrollbar>
      ) : scrollbarOrientation === "horizontal" ? (
        <RadixScrollArea.Scrollbar
          className="ScrollAreaScrollbar"
          orientation="horizontal">
          <RadixScrollArea.Thumb className="ScrollAreaThumb" />
        </RadixScrollArea.Scrollbar>
      ) : (
        <>
          <RadixScrollArea.Scrollbar
            className="ScrollAreaScrollbar"
            orientation="vertical">
            <RadixScrollArea.Thumb className="ScrollAreaThumb" />
          </RadixScrollArea.Scrollbar>
          <RadixScrollArea.Scrollbar
            className="ScrollAreaScrollbar"
            orientation="horizontal">
            <RadixScrollArea.Thumb className="ScrollAreaThumb" />
          </RadixScrollArea.Scrollbar>
        </>
      )}
      <RadixScrollArea.Corner className="ScrollAreaCorner" />
    </StyledScrollArea>
  );
};
