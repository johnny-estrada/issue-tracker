import { useContext } from "react";
import { OverlayContext } from "../services/providers/OverlayContext";

export const useOverlayContext = () => useContext(OverlayContext);
