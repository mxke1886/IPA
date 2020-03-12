import React from 'react'
import ReactDOM from 'react-dom';
import CustomerDetailsForm from './CustomerDetailsForm'

describe('CustomerDetailsForm', () => {
    it('returns correct html and produces no errors', () => {
        const errorfn = jest.fn();
        const consoleError = console.error;
        console.error = errorfn;

        const div = document.createElement("div");
        ReactDOM.render(
            <CustomerDetailsForm
                customer={{
                    "id": "3",
                    "salutation": "Herr",
                    "user_name": "testuser210",
                    "first_name": "Test",
                    "last_name": "Benutzer",
                    "birthdate": "01.11.1997",
                    "gender": "Männlich"
                }}
            />,
            div
        )
        expect(errorfn).not.toHaveBeenCalled();
        console.error = consoleError;

        expect(div.innerHTML).toBe('<form action="#" class="formik-form"><div></div><section class="section-light"><h3>Persönliche Daten</h3><div name="salutation" class="form-group"><label class="form-label">Anrede</label><select options="Herr,Frau" name="salutation" label="Anrede" class="cornered form-control"><option value="Herr">Herr</option><option value="Frau">Frau</option></select></div><div name="firstName" class="form-group"><label class="form-label">Vorname</label><input label="Vorname" name="firstName" placeholder="Max" type="text" class="cornered form-control" value="Test"></div><div name="lastName" class="form-group"><label class="form-label">Nachname</label><input label="Nachname" name="lastName" placeholder="Muster" type="text" class="cornered form-control" value="Benutzer"></div><div><label class="form-label">Geburtstag</label><div class="form-group"><div class="react-datepicker-wrapper"><div class="react-datepicker__input-container"><input type="text" class="datepicker" value="11.01.1997"></div></div></div></div><div name="gender" class="form-group"><label class="form-label">Geschlecht</label><select options="Männlich,Weiblich,Anderes" name="gender" label="Geschlecht" class="cornered form-control"><option value="Männlich">Männlich</option><option value="Weiblich">Weiblich</option><option value="Anderes">Anderes</option></select></div><div class="btn-container right"><button type="submit" class="btn btn-primary">Speichern</button></div></section></form>')
    })
})