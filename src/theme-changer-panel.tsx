import React from 'react';
import { Theme } from '@emotion/react';
import { styled } from '@storybook/theming';
import { useGlobals } from '@storybook/api';
import { Channel } from '@storybook/addons';
import { useEffect, useState } from 'react';
import { GLOBAL_VARIABLE } from './constants';

const ThemeChangerLabel = styled.label(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',

    fontSize: theme.typography.size.s2 - 1,

    '& > * + *': {
        marginLeft: 10,
    },
}));

const ThemeChangerSelect = styled.select(({ theme }) => ({
    position: 'relative',
    padding: '6px 4px',
    width: '100%',
  
    color: theme.input.color || 'inherit',
    background: theme.input.background,
    borderRadius: theme.input.borderRadius,
    boxShadow: `${theme.input.border} 0 0 0 1px inset`,
  
    fontSize: theme.typography.size.s2 - 1,
    lineHeight: '10',
  
    '&:focus': {
      boxShadow: `${theme.color.secondary} 0 0 0 1px inset`,
      outline: 'none',
    },
}));

function ThemeChangerPanel({ channel }: { channel: Channel }) {
    const [globals, updateGlobals] = useGlobals();
    const [themes, setThemes] = useState<Theme[]>([]);

    let theme = globals[GLOBAL_VARIABLE];

    useEffect(() => {
        channel.on("setThemes", (themes: Theme[], defaultThemeName: String) => {
            setThemes(themes);
            updateGlobals({ [GLOBAL_VARIABLE]: defaultThemeName });
        });
        return () => channel.removeAllListeners("setThemes");
    }, []);

    useEffect(() => {
        theme = globals[GLOBAL_VARIABLE];
    }, [globals[GLOBAL_VARIABLE]]);

    return (
        <ThemeChangerLabel>
            <span>Change theme:</span>
            <ThemeChangerSelect name="theme" value={theme} onChange={(event) => updateGlobals({ [GLOBAL_VARIABLE]: event.target.value })}>
                {themes.map((theme, index) => <option value={theme.name} key={index}>{theme.name}</option>)}
            </ThemeChangerSelect>
        </ThemeChangerLabel>
    );
}

export default ThemeChangerPanel;
