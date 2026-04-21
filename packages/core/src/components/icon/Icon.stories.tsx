/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";

import { Home, IconSize } from "@blueprintjs/icons";
import { Flex } from "@blueprintjs/labs";

import { Colors, Intent } from "../../common";

import { Icon } from "./icon";

const meta: Meta<typeof Icon> = {
    title: "Core/Icon",
    component: Icon,
    decorators: [storybookLayoutDecorator],
    tags: ["autodocs"],
    args: {
        icon: "home",
        intent: Intent.NONE,
        size: IconSize.STANDARD,
        color: undefined,
        title: undefined,
        tagName: "span",
        autoLoad: true,
    },
    argTypes: {
        icon: {
            control: "text",
        },
        intent: {
            control: "select",
            options: Object.values(Intent),
        },
        size: {
            control: "number",
        },
        color: {
            control: "color",
        },
        title: {
            control: "text",
        },
        tagName: {
            control: "text",
        },
        autoLoad: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A basic icon with default styling.
 */
export const Default: Story = {};

/**
 * Use the `intent` prop to apply a semantic color that conveys the purpose or status of the icon.
 */
export const IntentExample: Story = {
    name: "Intent",
    render: args => (
        <Flex gap={4} alignItems="center">
            {Object.values(Intent).map(intent => (
                <Flex key={intent} flexDirection="column" gap={1} alignItems="center">
                    <Icon {...args} intent={intent} />
                    <StoryLabel title={intent} />
                </Flex>
            ))}
        </Flex>
    ),
};

/**
 * Use the `size` prop to control the icon dimensions in pixels.
 */
export const SizeExample: Story = {
    name: "Size",
    render: args => (
        <Flex gap={6} alignItems="center">
            <Flex flexDirection="column" gap={1} alignItems="center">
                <Icon {...args} size={IconSize.STANDARD} />
                <StoryLabel title="Standard (16px)" />
            </Flex>
            <Flex flexDirection="column" gap={1} alignItems="center">
                <Icon {...args} size={IconSize.LARGE} />
                <StoryLabel title="Large (20px)" />
            </Flex>
            <Flex flexDirection="column" gap={1} alignItems="center">
                <Icon {...args} size={32} />
                <StoryLabel title="32px" />
            </Flex>
            <Flex flexDirection="column" gap={1} alignItems="center">
                <Icon {...args} size={48} />
                <StoryLabel title="48px" />
            </Flex>
        </Flex>
    ),
};

/**
 * Use the `color` prop to override the icon fill with a custom CSS color.
 * This takes precedence over `intent`.
 */
export const ColorExample: Story = {
    name: "Color",
    render: args => (
        <Flex gap={4} alignItems="center">
            {[Colors.BLUE3, Colors.FOREST3, Colors.GOLD3, Colors.RED3, Colors.INDIGO4].map(color => (
                <Flex key={color} flexDirection="column" gap={1} alignItems="center">
                    <Icon {...args} color={color} />
                    <StoryLabel title={color} />
                </Flex>
            ))}
        </Flex>
    ),
};

/**
 * The `icon` prop accepts either a string icon name or a React element (typically an icon
 * component from `@blueprintjs/icons`). When an element is provided, `<Icon>` clones it and
 * merges the parent-provided `className` and intent class onto its root.
 */
export const ElementIcon: Story = {
    name: "Element icon",
    render: args => (
        <Flex gap={4} alignItems="center">
            <Flex flexDirection="column" gap={1} alignItems="center">
                <Icon {...args} icon="home" />
                <StoryLabel title='icon="home"' />
            </Flex>
            <Flex flexDirection="column" gap={1} alignItems="center">
                <Icon {...args} icon={<Home size={args.size} />} />
                <StoryLabel title="icon={<Home />}" />
            </Flex>
        </Flex>
    ),
};

/**
 * Use the `title` prop to provide an accessible label. When present, the icon is announced
 * to screen readers; when omitted, the icon is marked `aria-hidden`.
 */
export const TitleExample: Story = {
    name: "Accessibility",
    render: args => (
        <Flex gap={4} alignItems="center">
            <Flex flexDirection="column" gap={1} alignItems="center">
                <Icon {...args} title={undefined} />
                <StoryLabel title="aria-hidden" />
            </Flex>
            <Flex flexDirection="column" gap={1} alignItems="center">
                <Icon {...args} title="Home" />
                <StoryLabel title='title="Home"' />
            </Flex>
        </Flex>
    ),
};

/**
 * Use the `tagName` prop to change the HTML element that wraps the icon's `<svg>`.
 * Defaults to `span`; pass `null` to render the `<svg>` without a wrapper.
 */
export const TagNameExample: Story = {
    name: "Tag name",
    render: args => (
        <Flex gap={4} alignItems="center">
            <Flex flexDirection="column" gap={1} alignItems="center">
                <Icon {...args} tagName="span" />
                <StoryLabel title='tagName="span"' />
            </Flex>
            <Flex flexDirection="column" gap={1} alignItems="center">
                <Icon {...args} tagName="div" />
                <StoryLabel title='tagName="div"' />
            </Flex>
            <Flex flexDirection="column" gap={1} alignItems="center">
                <Icon {...args} tagName={null} />
                <StoryLabel title="tagName={null}" />
            </Flex>
        </Flex>
    ),
};

/**
 * Interactive playground with all props toggleable via Storybook controls.
 */
export const Playground: Story = {
    args: {
        icon: "star",
        intent: Intent.PRIMARY,
        size: IconSize.LARGE,
    },
};
