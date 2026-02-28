import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

export interface GenericCardBadge {
  icon?: ReactNode;
  label: string;
}

export interface GenericCardMeta {
  dotColor?: string;
  label: string;
}

export interface GenericCardAction {
  ariaLabel?: string;
  href: string;
  icon: ReactNode;
  target?: string;
}

export interface GenericCardProps {
  badge?: GenericCardBadge;
  headerTrailing?: ReactNode;
  title: ReactNode;
  description?: string;
  descriptionLines?: number;
  meta?: GenericCardMeta;
  actions?: GenericCardAction[];
  children?: ReactNode;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}
