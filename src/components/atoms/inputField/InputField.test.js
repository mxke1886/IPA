import React from 'react'
import ReactDOM from 'react-dom';
import InputField from './InputField'
import { Formik } from 'formik';

describe('InputField', () => {
    it('returns correct html and produces no errors', () => {
        const errorfn = jest.fn();
        const consoleError = console.error;
        console.error = errorfn;

        const div = document.createElement("div");
        ReactDOM.render(
            <Formik>
                <InputField
                    label={'Test'}
                    type={'text'}
                    placeholder={'Test'}
                    name={'testfield'}
                />
            </Formik>,
            div
        )
        expect(errorfn).not.toHaveBeenCalled();
        console.error = consoleError;

        expect(div.innerHTML).toBe('<div name="testfield" class="form-group"><label class="form-label">Test</label><input label="Test" placeholder="Test" name="testfield" type="text" class="cornered form-control" value=""></div>')
    })
})