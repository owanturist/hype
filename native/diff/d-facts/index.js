/* @flow */

import {
    type VFactsDict
} from '../../v-dom/v-facts';
import {
    diff as diffAttributes
} from './d-attributes';
import {
    diff as diffEvents
} from './d-events';
import {
    diff as diffProperties
} from './d-properties';
import {
    diff as diffStyles
} from './d-styles';

export const diff = <Msg>(prev: VFactsDict<Msg>, next: VFactsDict<Msg>): ?VFactsDict<Msg> => {
    let diff: ?VFactsDict<Msg>;

    if (prev.attributes) {
        const nextAttributes = diffAttributes(prev.attributes, next.attributes);

        if (nextAttributes) {
            diff = diff || {};
            diff.attributes = nextAttributes;
        }
    }

    if (prev.events) {
        const nextEvents = diffEvents(prev.events, next.events);

        if (nextEvents) {
            diff = diff || {};
            diff.events = nextEvents;
        }
    }

    if (prev.properties) {
        const nextProperties = diffProperties(prev.properties, next.properties);

        if (nextProperties) {
            diff = diff || {};
            diff.properties = nextProperties;
        }
    }

    if (prev.styles) {
        const nextStyles = diffStyles(prev.styles, next.styles);

        if (nextStyles) {
            diff = diff || {};
            diff.styles = nextStyles;
        }
    }

    return diff;
};
