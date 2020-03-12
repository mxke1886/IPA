import React from 'react'
import ReactDOM from 'react-dom';
import Toast from './Toast'

describe('Toast', () => {
    it('returns correct html and produces no errors', () => {
        const errorfn = jest.fn();
        const consoleError = console.error;
        console.error = errorfn;

        const div = document.createElement("div");
        ReactDOM.render(
            <Toast
                show={true}
                message={"Test Message"}
                onClose={() => {console.log("onClose triggered")}}
                delay={1000}
                position={"fixed"}
                variant={"primary"}
            />,
            div
        )
        expect(errorfn).not.toHaveBeenCalled();
        console.error = consoleError;

        expect(div.innerHTML).toBe('<div><div role="alert" style="position: fixed; top: 15px; right: 4%; z-index: 1000;" class="fade alert alert-primary show">Test Message</div></div>')
    })
})