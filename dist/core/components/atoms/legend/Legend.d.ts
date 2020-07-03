import * as React from 'react';
import { Appearance as LabelAppearance } from '@/components/atoms/text';
export interface LegendProps {
    children: string;
    iconAppearance?: string;
    labelAppearance?: LabelAppearance;
    iconSize?: number;
    labelWeight?: 'strong' | 'medium';
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export declare const Legend: {
    (props: LegendProps): JSX.Element;
    displayName: string;
};
export default Legend;
