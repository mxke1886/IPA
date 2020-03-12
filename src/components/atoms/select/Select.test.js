import React from 'react'
import ReactDOM from 'react-dom';
import Select from './Select'
import { Formik } from 'formik';

describe('Select', () => {
    it('returns correct html and produces no errors', () => {
        const errorfn = jest.fn();
        const consoleError = console.error;
        console.error = errorfn;

        const div = document.createElement("div");
        ReactDOM.render(
            <Formik>
                <Select
                    label={'Test'}
                    options={['testoption1', 'testoption2', 'testoption3']}
                    name={'testfield'}
                />
            </Formik>,
            div
        )
        expect(errorfn).not.toHaveBeenCalled();
        console.error = consoleError;

        expect(div.innerHTML).toBe('<div name="testfield" class="form-group"><label class="form-label">Test</label><select label="Test" options="testoption1,testoption2,testoption3" name="testfield" class="cornered form-control"><option>Bitte auswählen</option><option value="testoption1">testoption1</option><option value="testoption2">testoption2</option><option value="testoption3">testoption3</option></select></div>')
    })
})