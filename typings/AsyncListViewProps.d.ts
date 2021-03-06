/**
 * This file was generated from AsyncListView.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue, ListValue, ListWidgetValue } from "mendix";

export interface AsyncListViewContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    data: ListValue;
    useMxListViewStyling: boolean;
    content: ListWidgetValue;
    emptyText: DynamicValue<string>;
    fixedHeight: string;
    refreshBool: EditableValue<boolean>;
    refreshAction?: ActionValue;
    useSpinner: boolean;
    spinnerColor: DynamicValue<string>;
    spinnerSize: DynamicValue<string>;
}

export interface AsyncListViewPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    data: {} | { type: string } | null;
    useMxListViewStyling: boolean;
    content: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    emptyText: string;
    fixedHeight: string;
    refreshBool: string;
    refreshAction: {} | null;
    useSpinner: boolean;
    spinnerColor: string;
    spinnerSize: string;
}
