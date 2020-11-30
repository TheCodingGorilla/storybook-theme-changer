import React from 'react';
import { ThemeProvider, Theme } from '@emotion/react';
import { useEffect } from 'react';
import { addons } from '@storybook/addons';
import { Story, StoryContext } from '@storybook/react';
import { GLOBAL_VARIABLE } from './constants';
import getTheme from './get-theme';

export function WithThemesProvider(themes: Theme[], Story: Story, Context: StoryContext) {
    const { globals } = Context;
    const themeName = globals[GLOBAL_VARIABLE] ?? themes[0].name;

    useEffect(() => {
        const channel = addons.getChannel();

        channel.emit('setThemes', themes, themeName);
    }, []);

    return (
        <ThemeProvider theme={getTheme(themeName, themes)}>
            <Story />
        </ThemeProvider>
    );
}
