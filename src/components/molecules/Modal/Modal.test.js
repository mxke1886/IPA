import React from 'react'
import ReactDOM from 'react-dom';
import Modal from './Modal'

describe('Modal', () => {
    it('returns correct html and produces no errors', () => {
        const errorfn = jest.fn();
        const consoleError = console.error;
        console.error = errorfn;

        const div = document.createElement("div");
        ReactDOM.render(
            <Modal
                title={"Test Title"}
                show={true}
                onHide={() => {console.log("onHide triggered")}}
                animation={true}
                secondaryButtonAction={() => {console.log("secondaryButtonAction triggered")}}
                secondaryButtonText={"Secondary Button"}
                primaryButtonAction={() => {console.log("primaryButtonAction triggered")}}
                primaryButtonText={"Primary Button"}
                message={"Test Message"}
            />,
            div
        )
        expect(errorfn).not.toHaveBeenCalled();
        console.error = consoleError;

    })
})