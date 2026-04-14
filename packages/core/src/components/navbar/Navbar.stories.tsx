/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { StoryLabel } from "@storybook-common";

import { Alignment } from "../../common";
import { Button } from "../button/buttons";

import { Navbar } from "./navbar";
import { NavbarDivider } from "./navbarDivider";
import { NavbarGroup } from "./navbarGroup";
import { NavbarHeading } from "./navbarHeading";

const meta: Meta<typeof Navbar> = {
    title: "Core/Navbar",
    component: Navbar,
    decorators: [
        Story => (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "800px",
                    height: "100vh",
                    margin: "0 auto",
                }}
            >
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    args: {
        fixedToTop: false,
    },
    argTypes: {
        fixedToTop: { control: "boolean" },
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => (
        <Navbar {...args}>
            <NavbarGroup align={Alignment.START}>
                <NavbarHeading>Blueprint</NavbarHeading>
                <NavbarDivider />
                <Button variant="minimal" icon="home" text="Home" />
                <Button variant="minimal" icon="document" text="Files" />
            </NavbarGroup>
            <NavbarGroup align={Alignment.END}>
                <Button variant="minimal" icon="notifications" />
                <Button variant="minimal" icon="cog" />
            </NavbarGroup>
        </Navbar>
    ),
};

export const FixedToTop: Story = {
    args: {
        fixedToTop: true,
    },
    render: args => (
        <Navbar {...args}>
            <NavbarGroup align={Alignment.START}>
                <NavbarHeading>Blueprint</NavbarHeading>
                <NavbarDivider />
                <Button variant="minimal" icon="home" text="Home" />
                <Button variant="minimal" icon="document" text="Files" />
            </NavbarGroup>
            <NavbarGroup align={Alignment.END}>
                <Button variant="minimal" icon="notifications" />
                <Button variant="minimal" icon="cog" />
            </NavbarGroup>
        </Navbar>
    ),
};

export const GroupAlignment: Story = {
    render: args => (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: 600 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <StoryLabel title="Start (default)" />
                <Navbar {...args}>
                    <NavbarGroup align={Alignment.START}>
                        <NavbarHeading>Blueprint</NavbarHeading>
                        <NavbarDivider />
                        <Button variant="minimal" icon="home" text="Home" />
                        <Button variant="minimal" icon="document" text="Files" />
                    </NavbarGroup>
                </Navbar>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <StoryLabel title="Center" />
                <Navbar {...args}>
                    <NavbarGroup align={Alignment.CENTER}>
                        <NavbarHeading>Blueprint</NavbarHeading>
                        <NavbarDivider />
                        <Button variant="minimal" icon="home" text="Home" />
                        <Button variant="minimal" icon="document" text="Files" />
                    </NavbarGroup>
                </Navbar>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <StoryLabel title="End" />
                <Navbar {...args}>
                    <NavbarGroup align={Alignment.END}>
                        <NavbarHeading>Blueprint</NavbarHeading>
                        <NavbarDivider />
                        <Button variant="minimal" icon="home" text="Home" />
                        <Button variant="minimal" icon="document" text="Files" />
                    </NavbarGroup>
                </Navbar>
            </div>
        </div>
    ),
};

export const Playground: Story = {
    render: args => (
        <Navbar {...args}>
            <NavbarGroup align={Alignment.START}>
                <NavbarHeading>Blueprint</NavbarHeading>
                <NavbarDivider />
                <Button variant="minimal" icon="home" text="Home" />
                <Button variant="minimal" icon="document" text="Files" />
            </NavbarGroup>
            <NavbarGroup align={Alignment.END}>
                <Button variant="minimal" icon="notifications" />
                <Button variant="minimal" icon="cog" />
            </NavbarGroup>
        </Navbar>
    ),
};
