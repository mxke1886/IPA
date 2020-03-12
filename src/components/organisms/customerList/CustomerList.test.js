import React from 'react'
import ReactDOM from 'react-dom';
import CustomerList from './CustomerList'
import { BrowserRouter as Router } from 'react-router-dom';

describe('CustomerList', () => {
    it('returns correct html and produces no errors', () => {
        const errorfn = jest.fn();
        const consoleError = console.error;
        console.error = errorfn;

        const div = document.createElement("div");
        ReactDOM.render(
            <Router>
                <CustomerList
                    customers={[
                        {
                            "id": "1",
                            "salutation": "Herr",
                            "user_name": "testuser210",
                            "first_name": "Test",
                            "last_name": "Benutzer",
                            "birthdate": "21.12.1988",
                            "gender": "Männlich"
                        },
                        {
                            "id": "2",
                            "salutation": "Frau",
                            "user_name": "testuser0",
                            "first_name": "Zweiter",
                            "last_name": "Benutzer",
                            "birthdate": "01.11.1997",
                            "gender": "Weiblich"
                        }
                    ]}
                    customerDatas={[
                        {
                            "id": "1",
                            "address": "Teststrasse 30",
                            "plz": "1234",
                            "city": "Teststadt",
                            "country": "Schweiz",
                            "region": "Bern",
                            "email": "testklient@mail.ch",
                            "telephone_private": "+41000000000",
                            "telephone_mobile": "0761111111",
                            "telephone_business": "0781234567",
                            "reachable_by": "Post"
                        },
                        {
                            "id": "2",
                            "address": "Teststrasse 1",
                            "plz": "3264",
                            "city": "Teststadt 2",
                            "country": "Schweiz",
                            "region": "Bern",
                            "email": "testklient2@mail.ch",
                            "telephone_private": "+41000000000",
                            "telephone_mobile": "0761111111",
                            "telephone_business": "0781234567",
                            "reachable_by": "Post"
                        }
                    ]}
                />
            </Router>
            ,
            div
        )
        expect(errorfn).not.toHaveBeenCalled();
        console.error = consoleError;

        expect(div.innerHTML).toBe('<div class="container"><table class="table table-sm table-striped table-bordered table-hover"><thead><tr><th>Vorname</th><th>Nachname</th><th>E-Mail</th></tr></thead><tbody><tr style="cursor: pointer;"><td>Test</td><td>Benutzer</td><td>testklient@mail.ch</td></tr><tr style="cursor: pointer;"><td>Zweiter</td><td>Benutzer</td><td>testklient2@mail.ch</td></tr></tbody></table></div>')
    })
})