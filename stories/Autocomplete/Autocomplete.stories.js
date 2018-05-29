import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withDocs } from "../utils";

import AutocompleteExample from "./AutocompleteExample";

import InputAutocomplete from "./InputAutocomplete.md";

const stories = storiesOf("Componenti/Autocomplete", module);
stories.addDecorator(checkA11y);

stories.add(
    "Input autocomplete",
    withDocs(InputAutocomplete, () => (
        <section>
            <AutocompleteExample />
        </section>
    ))
);
