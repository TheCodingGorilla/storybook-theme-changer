import React from 'react';
import { addons, types } from '@storybook/addons';
import ThemeChangerPanel from './theme-changer-panel';
import { ADDON_ID } from './constants';

addons.register(ADDON_ID, () => {
    addons.add(ADDON_ID, {
        title: 'Theme Changer',
        type: types.TOOL,
        match: ({ viewMode }) => viewMode === 'story',
        render: () => <ThemeChangerPanel channel={addons.getChannel()} />
    });
});
