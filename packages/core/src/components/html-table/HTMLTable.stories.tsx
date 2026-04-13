/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { HTMLTable } from "./htmlTable";

const sampleRows = [
    { name: "Blueprint", role: "UI Framework", location: "GitHub" },
    { name: "TSX", role: "Type-safe JSX", location: "TypeScript" },
    { name: "Sass", role: "CSS Preprocessor", location: "Node" },
    { name: "Storybook", role: "Component Explorer", location: "Browser" },
    { name: "React", role: "View Library", location: "npm" },
];

function renderTable(props: React.ComponentProps<typeof HTMLTable>) {
    return (
        <HTMLTable {...props}>
            <thead>
                <tr>
                    <th>Project</th>
                    <th>Role</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {sampleRows.map(row => (
                    <tr key={row.name}>
                        <td>{row.name}</td>
                        <td>{row.role}</td>
                        <td>{row.location}</td>
                    </tr>
                ))}
            </tbody>
        </HTMLTable>
    );
}

const meta: Meta<typeof HTMLTable> = {
    title: "Core/HTMLTable",
    component: HTMLTable,
    decorators: [
        Story => (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        bordered: false,
        compact: false,
        interactive: false,
        striped: false,
    },
    argTypes: {
        bordered: { control: "boolean" },
        compact: { control: "boolean" },
        interactive: { control: "boolean" },
        striped: { control: "boolean" },
    },
} satisfies Meta<typeof HTMLTable>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A basic HTML table with default styling.
 */
export const Default: Story = {
    render: args => renderTable(args),
};

/**
 * A table with bordered cells.
 */
export const Bordered: Story = {
    args: { bordered: true },
    render: args => renderTable(args),
};

/**
 * A table with compact row spacing.
 */
export const Compact: Story = {
    args: { compact: true },
    render: args => renderTable(args),
};

/**
 * A table with alternating row stripes.
 */
export const Striped: Story = {
    args: { striped: true },
    render: args => renderTable(args),
};

/**
 * A table with interactive (hoverable) rows.
 */
export const Interactive: Story = {
    args: { interactive: true },
    render: args => renderTable(args),
};

/**
 * Interactive playground with all props togglable via Storybook controls.
 */
export const Playground: Story = {
    args: {
        bordered: true,
        compact: false,
        interactive: true,
        striped: true,
    },
    render: args => renderTable(args),
};
