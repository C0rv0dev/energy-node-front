import React from 'react';
import CardComponent from '../components/CardComponent';

function Energy() {
    const formRef = React.useRef<HTMLFormElement>(null);

    return (
        <CardComponent
            hasHeader
            headerTitle="Energy"
            headerBackgroundColor={(theme) => theme.palette.primary.main}
            headerFontColor="white"
            headerAlign="right"
        >
            <form ref={formRef}>
                
            </form>
        </CardComponent>
    );
}

export default Energy;
