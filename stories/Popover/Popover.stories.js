import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { State, Store } from "@sambego/storybook-state";

import { Popover, PopoverHeader, PopoverBody, Button } from "../../src";

import PopoverExample from "./PopoverExample";
import PopoverPositionExample from "./PopoverPositionExample";

import Esempi from "./Esempi.md";
import QuattroDirezioni from "./QuattroDirezioni.md";
import ElementiDisabilitati from "./ElementiDisabilitati.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Popover", module);
stories.addDecorator(withA11y);

stories.add(
    "Esempi",
    withDocs(
        Esempi,
        withInfo({
            propTables: [Popover, PopoverHeader, PopoverBody],
            propTablesExclude: [PopoverExample]
        })(() => <PopoverExample />)
    )
);

stories.add(
    "Le quattro direzioni",
    withDocs(
        QuattroDirezioni,
        withInfo({
            propTables: [Popover, PopoverHeader, PopoverBody],
            propTablesExclude: [PopoverPositionExample]
        })(() => <PopoverPositionExample />)
    )
);

const ElementiDisabilitatiComponent = () => {
    const id = "example";
    // Avoid Jest complaints
    const target = () => document.getElementById(id);

    return (
        <div>
            <Button color="primary" id={id} disabled>
                Popover disabilitato
            </Button>
            <Popover placement="right" target={target}>
                <PopoverHeader>Titolo del popover</PopoverHeader>
                <PopoverBody>
                    Ed ecco alcuni contenuti sorprendenti. È molto coinvolgente.
                    Non trovi?
                </PopoverBody>
            </Popover>
        </div>
    );
};
stories.add(
    "Elementi disabilitati",
    withDocs(
        ElementiDisabilitati,
        withInfo({
            propTablesExclude: [Button]
        })(ElementiDisabilitatiComponent)
    )
);

const knobsStories = storiesOf("Componenti/Popover", module);
knobsStories.addDecorator(withA11y);
knobsStories.addDecorator(withKnobs);

const EsempiInterattiviComponent = () => {
    const disabled = boolean("Disabilitato", false);
    const placements = ["top", "bottom", "left", "right"];
    const placement = select("Posizione", placements, placements[0]);
    const title = text("Titolo", "Titolo del popover");
    const body = text(
        "Body",
        "Ed ecco alcuni contenuti sorprendenti. È molto coinvolgente. Non trovi?"
    );
    const store = new Store({
        isOpen: false
    });
    const id = "example";
    // Avoid Jest complaints
    const target = () => document.getElementById(id);

    return (
        <div style={{ padding: 250 }}>
            <Button
                id={id}
                color="primary"
                disabled={disabled}
                onClick={() => store.set({ isOpen: !store.get("isOpen") })}
            >
                Popover {disabled ? "Disabilitato" : ""}
            </Button>

            <State store={store}>
                <Popover
                    placement={placement}
                    target={target}
                    toggle={() => store.set({ isOpen: !store.get("isOpen") })}
                    isOpen={store.get("isOpen")}
                >
                    <PopoverHeader>{title}</PopoverHeader>
                    <PopoverBody>{body}</PopoverBody>
                </Popover>
            </State>
        </div>
    );
};
knobsStories.add(
    "Esempi interattivi",
    withDocs(
        EsempiInterattivi,
        withInfo({
            propTablesExclude: [Button, State]
        })(EsempiInterattiviComponent)
    )
);
