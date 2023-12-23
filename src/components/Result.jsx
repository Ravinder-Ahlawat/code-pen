import { useState, useEffect, useContext } from 'react';

import { DataContext } from '../context/DataProvider';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled(Box)`
    height: 41vh;
`

const Result = () => {

    const [src, setSrc] = useState('');
    const { html, css, js } = useContext(DataContext);

    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js ,srcCode])

    return (
        <Container style={html || css || js ? null : { background: '#444857' }}>
            <iframe
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
            />
        </Container>
    )
}

export default Result;