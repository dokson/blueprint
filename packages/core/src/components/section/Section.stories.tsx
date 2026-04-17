/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Elevation } from "../../common";

import { Tag } from "../tag/tag";

import { Section } from "./section";
import { SectionCard } from "./sectionCard";
import { DashedPaddedContainer, storybookLayoutDecorator, StoryLabel } from "@storybook-common";

const meta: Meta<typeof Section> = {
    title: "Core/Section",
    component: Section,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        title: "Section title",
        elevation: Elevation.ZERO,
        compact: false,
        collapsible: false,
    },
    argTypes: {
        elevation: {
            control: "select",
            options: [Elevation.ZERO, Elevation.ONE],
        },
        compact: {
            control: "boolean",
        },
        collapsible: {
            control: "boolean",
        },
        icon: {
            control: "text",
        },
        subtitle: {
            control: "text",
        },
    },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A basic section with a title and some content.
 */
export const Default: Story = {
    args: {
        title: "Section title",
        children: <SectionCard>Section content goes here.</SectionCard>,
    },
};

/**
 * Use the `elevation` prop to control the visual depth of the section.
 * Section supports `Elevation.ZERO` and `Elevation.ONE`.
 */
export const ElevationExample: Story = {
    name: "Elevation",
    argTypes: {
        elevation: { table: { disable: true } },
    },
    render: args => (
        <div style={{ display: "flex", flexDirection: "column", gap: 30, width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <StoryLabel title="Elevation 0" />
                <Section {...args} elevation={Elevation.ZERO}>
                    <SectionCard>Content with zero elevation.</SectionCard>
                </Section>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <StoryLabel title="Elevation 1" />
                <Section {...args} elevation={Elevation.ONE}>
                    <SectionCard>Content with elevation one.</SectionCard>
                </Section>
            </div>
        </div>
    ),
};

/**
 * Use the `compact` prop to render a section with reduced padding.
 */
export const CompactExample: Story = {
    name: "Compact",
    argTypes: {
        compact: { table: { disable: true } },
    },
    render: args => (
        <div style={{ display: "flex", flexDirection: "column", gap: 30, width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <StoryLabel title="Default" />
                <Section {...args} compact={false}>
                    <SectionCard>Default padding.</SectionCard>
                </Section>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <StoryLabel title="Compact" />
                <Section {...args} compact={true}>
                    <SectionCard>Compact padding.</SectionCard>
                </Section>
            </div>
        </div>
    ),
};

/**
 * Use the `icon` prop to render an icon in the section header,
 * and `subtitle` to display additional context below the title.
 */
export const IconExample: Story = {
    name: "Icon & Subtitle",
    argTypes: {
        icon: { table: { disable: true } },
        subtitle: { table: { disable: true } },
    },
    render: args => (
        <div style={{ display: "flex", flexDirection: "column", gap: 30, width: "100%" }}>
            <div>
                <StoryLabel title="Icon" />
                <DashedPaddedContainer>
                    <Section {...args} icon="settings" title="Settings">
                        <SectionCard>Section with an icon.</SectionCard>
                    </Section>
                </DashedPaddedContainer>
            </div>
            <div>
                <StoryLabel title="Subtitle" />
                <DashedPaddedContainer>
                    <Section {...args} title="Configuration" subtitle="Manage your settings">
                        <SectionCard>Section with a subtitle.</SectionCard>
                    </Section>
                </DashedPaddedContainer>
            </div>
            <div>
                <StoryLabel title="Icon & Subtitle" />
                <DashedPaddedContainer>
                    <Section {...args} icon="cog" title="Advanced" subtitle="Expert-level options">
                        <SectionCard>Section with both icon and subtitle.</SectionCard>
                    </Section>
                </DashedPaddedContainer>
            </div>
        </div>
    ),
};

/**
 * Use the `rightElement` prop to render an element on the right side of the section header.
 */
export const RightElementExample: Story = {
    name: "Right Element",
    render: args => (
        <div>
            <StoryLabel title="Right Element" />
            <DashedPaddedContainer>
                <Section {...args} title="Settings" rightElement={<Tag minimal={true}>Beta</Tag>}>
                    <SectionCard>Section with a right element.</SectionCard>
                </Section>
            </DashedPaddedContainer>
        </div>
    ),
};

/**
 * Use the `collapsible` prop to allow the section to be collapsed.
 * The section is expanded by default and can be toggled by clicking the header.
 */
export const CollapsibleExample: Story = {
    name: "Collapsible",
    argTypes: {
        collapsible: { table: { disable: true } },
    },
    render: args => (
        <div style={{ display: "flex", flexDirection: "row", gap: 30, width: "100%" }}>
            <div>
                <StoryLabel title="Expanded" />
                <DashedPaddedContainer>
                    <Section {...args} collapsible={true} title="Expanded by default">
                        <SectionCard>This section starts expanded.</SectionCard>
                    </Section>
                </DashedPaddedContainer>
            </div>
            <div>
                <StoryLabel title="Collapsed" />
                <DashedPaddedContainer>
                    <Section
                        {...args}
                        collapsible={true}
                        collapseProps={{ defaultIsOpen: false }}
                        title="Collapsed by default"
                    >
                        <SectionCard>This section starts collapsed.</SectionCard>
                    </Section>
                </DashedPaddedContainer>
            </div>
        </div>
    ),
};

/**
 * Interactive playground with all props togglable via Storybook controls.
 */
export const Playground: Story = {
    args: {
        title: "Playground section",
        icon: "folder-open",
        subtitle: "Explore section props",
        elevation: Elevation.ONE,
        children: <SectionCard>Section content goes here.</SectionCard>,
    },
};
