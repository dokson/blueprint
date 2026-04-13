/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useArgs, useCallback } from "storybook/preview-api";

import { Intent, Size } from "../../common";

import { Menu } from "./menu";
import { MenuDivider } from "./menuDivider";
import { MenuItem, type MenuItemProps } from "./menuItem";

type MenuStoryArgs = React.ComponentProps<typeof Menu> &
    Pick<
        MenuItemProps,
        "icon" | "text" | "label" | "intent" | "disabled" | "active" | "selected" | "multiline" | "roleStructure"
    >;

// These props are deprecated on Menu — hide them from the Storybook controls panel.
const disabledArgs = ["large", "small"] as const satisfies ReadonlyArray<keyof React.ComponentProps<typeof Menu>>;

// MenuItem-specific arg names — hidden in non-Playground stories.
const menuItemArgNames = [
    "icon",
    "text",
    "label",
    "intent",
    "disabled",
    "active",
    "selected",
    "multiline",
    "roleStructure",
] as const;

const disabledMenuItemArgTypes = menuItemArgNames.reduce(
    (acc, argName) => {
        acc[argName] = { table: { disable: true } };
        return acc;
    },
    {} as Record<(typeof menuItemArgNames)[number], { table: { disable: boolean } }>,
);

const meta: Meta<MenuStoryArgs> = {
    title: "Core/Menu",
    component: Menu,
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
        size: "medium",
        icon: "document",
        text: "Editable Item",
        label: "⌘E",
        intent: "none",
        disabled: false,
        active: false,
        selected: false,
        multiline: false,
        roleStructure: "menuitem",
    },
    argTypes: {
        size: {
            control: "select",
            options: Object.values(Size),
        },
        icon: { control: "text" },
        text: { control: "text" },
        label: { control: "text" },
        intent: {
            control: "select",
            options: Object.values(Intent),
        },
        disabled: { control: "boolean" },
        active: { control: "boolean" },
        selected: { control: "boolean" },
        multiline: { control: "boolean" },
        roleStructure: {
            control: "select",
            options: ["menuitem", "listoption", "listitem", "none"],
        },
        ...disabledArgs.reduce(
            (acc, argName) => {
                acc[argName] = { table: { disable: true } };
                return acc;
            },
            {} as Record<(typeof disabledArgs)[number], { table: { disable: boolean } }>,
        ),
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    argTypes: disabledMenuItemArgTypes,
    render: args => (
        <Menu {...args}>
            <MenuItem icon="new-text-box" text="New text box" />
            <MenuItem icon="new-object" text="New object" />
            <MenuItem icon="new-link" text="New link" />
            <MenuDivider />
            <MenuItem icon="cog" text="Settings" label="⌘," />
        </Menu>
    ),
};

export const IntentExample: Story = {
    name: "Intent",
    argTypes: {
        size: { table: { disable: true } },
        ...disabledMenuItemArgTypes,
    },
    render: args => (
        <div style={{ display: "flex", gap: 8 }}>
            {Object.values(Intent).map(intent => (
                <Menu key={intent} {...args}>
                    <MenuItem icon="graph" text={intent.charAt(0).toUpperCase() + intent.slice(1)} intent={intent} />
                    <MenuItem icon="notifications" text="Active" intent={intent} active={true} />
                </Menu>
            ))}
        </div>
    ),
};

export const SizeExample: Story = {
    name: "Size",
    argTypes: {
        size: { table: { disable: true } },
        ...disabledMenuItemArgTypes,
    },
    render: args => (
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            {Object.values(Size).map(size => (
                <div key={size} style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
                    <span style={{ fontSize: 12, opacity: 0.6, textTransform: "capitalize" }}>{size}</span>
                    <Menu {...args} size={size}>
                        <MenuItem icon="document" text="New file" />
                        <MenuItem icon="folder-close" text="New folder" />
                        <MenuDivider />
                        <MenuItem icon="cog" text="Settings" />
                    </Menu>
                </div>
            ))}
        </div>
    ),
};

export const LabelExample: Story = {
    name: "Label",
    argTypes: {
        size: { table: { disable: true } },
        ...disabledMenuItemArgTypes,
    },
    render: args => (
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 12, opacity: 0.6, textTransform: "capitalize" }}>With label</span>
                <Menu {...args}>
                    <MenuItem icon="floppy-disk" text="Save" label="⌘S" />
                    <MenuItem icon="clipboard" text="Copy" label="⌘S" />
                    <MenuDivider />
                    <MenuItem icon="cog" text="Settings" label="⌘K" />
                </Menu>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 12, opacity: 0.6, textTransform: "capitalize" }}>Without label</span>
                <Menu {...args}>
                    <MenuItem icon="floppy-disk" text="Save" />
                    <MenuItem icon="clipboard" text="Copy" />
                    <MenuDivider />
                    <MenuItem icon="cog" text="Settings" />
                </Menu>
            </div>
        </div>
    ),
};

export const MulitlineExample: Story = {
    name: "Mulitline",
    argTypes: {
        size: { table: { disable: true } },
        ...disabledMenuItemArgTypes,
    },
    render: args => (
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", width: 200, gap: 4 }}>
                <span style={{ fontSize: 12, opacity: 0.6, textTransform: "capitalize" }}>With multiline</span>
                <Menu {...args}>
                    <MenuItem icon="floppy-disk" text="This is an example of test that is too long" multiline={true} />
                    <MenuItem icon="clipboard" text="This is also an example of test that is too long" multiline={true} />
                    <MenuDivider />
                    <MenuItem icon="cog" text="This final menu option is similarly too long" multiline={true} />
                </Menu>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: 200, gap: 4 }}>
                <span style={{ fontSize: 12, opacity: 0.6, textTransform: "capitalize" }}>Without multiline</span>
                <Menu {...args}>
                    <MenuItem icon="floppy-disk" text="This is an example of test that is too long" />
                    <MenuItem icon="clipboard" text="This is also an example of test that is too long" />
                    <MenuDivider />
                    <MenuItem icon="cog" text="This final menu option is similarly too long" />
                </Menu>
            </div>
        </div>
    ),
};

export const StateExample: Story = {
    name: "State",
    argTypes: {
        size: { table: { disable: true } },
        ...disabledMenuItemArgTypes,
    },
    render: args => (
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
                <span style={{ fontSize: 12, opacity: 0.6 }}>Default</span>
                <Menu {...args}>
                    <MenuItem icon="home" text="Home" />
                    <MenuItem icon="document" text="Files" />
                </Menu>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
                <span style={{ fontSize: 12, opacity: 0.6 }}>Active</span>
                <Menu {...args}>
                    <MenuItem icon="home" text="Home" active={true} />
                    <MenuItem icon="document" text="Files" />
                </Menu>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
                <span style={{ fontSize: 12, opacity: 0.6 }}>Disabled</span>
                <Menu {...args}>
                    <MenuItem icon="home" text="Home" disabled={true} />
                    <MenuItem icon="document" text="Files" disabled={true} />
                </Menu>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
                <span style={{ fontSize: 12, opacity: 0.6 }}>Selected</span>
                <Menu {...args}>
                    <MenuItem icon="home" text="Home" roleStructure="listoption" selected={true} />
                    <MenuItem icon="document" text="Files" roleStructure="listoption" selected={false} />
                </Menu>
            </div>
        </div>
    ),
};

export const IconExample: Story = {
    name: "Icons",
    argTypes: disabledMenuItemArgTypes,
    render: args => (
        <Menu {...args}>
            <MenuItem icon="applications" text="With icon" />
            <MenuItem text="Without icon" />
            <MenuItem icon="graph" text="With icon and label" label="⌘G" />
            <MenuItem icon="add" text="With label element" labelElement={<span>Ctrl+N</span>} />
        </Menu>
    ),
};

export const Playground: Story = {
    render: function Render(args) {
        const { size, icon, text, label, intent, disabled, active, selected, multiline, roleStructure, ...rest } = args;
        const [, updateArgs] = useArgs();
        const handleClick = useCallback(() => updateArgs({ selected: !selected }), [selected, updateArgs]);
        return (
            <Menu size={size} {...rest}>
                <MenuItem
                    icon={icon || undefined}
                    text={text}
                    label={label || undefined}
                    intent={intent}
                    disabled={disabled}
                    active={active}
                    selected={selected}
                    multiline={multiline}
                    roleStructure={roleStructure}
                    onClick={handleClick}
                />
                <MenuItem icon="document-open" text="Open" label="⌘O" />
                <MenuItem icon="floppy-disk" text="Save" label="⌘S" intent="primary" />
                <MenuDivider title="Edit" />
                <MenuItem icon="cut" text="Cut" label="⌘X" />
                <MenuItem icon="clipboard" text="Copy" label="⌘C" />
                <MenuItem icon="duplicate" text="Paste" label="⌘V" />
                <MenuDivider />
                <MenuItem icon="trash" text="Delete" intent="danger" />
                <MenuItem icon="lock" text="Locked" disabled={true} />
            </Menu>
        );
    },
    args: {
        intent: "danger",
        icon: "trash",
        text: "Delete Item",
        label: "⌘D",
    },
};
