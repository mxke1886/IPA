import React from 'react'
import ReactDOM from 'react-dom';
import CustomerContactForm from './CustomerContactForm'

describe('CustomerContactForm', () => {
    it('returns correct html and produces no errors', () => {
        const errorfn = jest.fn();
        const consoleError = console.error;
        console.error = errorfn;

        const div = document.createElement("div");
        ReactDOM.render(
            <CustomerContactForm
                customerData={{
                    "id": "3",
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
                }}
                regions={['Bern', 'Zürich']}
                countries={['Schweiz', 'Deutschland', 'Österreich']}
            />,
            div
        )
        expect(errorfn).not.toHaveBeenCalled();
        console.error = consoleError;

        expect(div.innerHTML).toBe('<form action="#" class="formik-form"><div></div><section class="section-light"><h3>Kontaktdaten</h3><div class="row"><div class="col"><div name="address" class="form-group"><label class="form-label">Strasse</label><input label="Strasse" name="address" placeholder="Musterstrasse 12" type="text" class="cornered form-control" value="Teststrasse 30"></div><div name="postalCode" class="form-group"><label class="form-label">PLZ</label><input label="PLZ" name="postalCode" placeholder="8000" type="text" class="cornered form-control" value="1234"></div><div name="city" class="form-group"><label class="form-label">Ort</label><input label="Ort" name="city" placeholder="Zürich" type="text" class="cornered form-control" value="Teststadt"></div><div name="region" class="form-group"><label class="form-label">Kanton</label><select options="Bern,Zürich" name="region" label="Kanton" class="cornered form-control"><option value="Bern">Bern</option><option value="Zürich">Zürich</option></select></div><div name="country" class="form-group"><label class="form-label">Land</label><select options="Schweiz,Deutschland,Österreich" name="country" label="Land" class="cornered form-control"><option value="Schweiz">Schweiz</option><option value="Deutschland">Deutschland</option><option value="Österreich">Österreich</option></select></div></div><div class="col"><div name="email" class="form-group"><label class="form-label">E-Mail</label><input label="E-Mail" name="email" placeholder="max@muster.ch" type="email" class="cornered form-control" value="testklient@mail.ch"></div><div name="telephone_private" class="form-group"><label class="form-label">Telefon Privat</label><input label="Telefon Privat" name="telephone_private" placeholder="+41791112233" type="text" class="cornered form-control" value="+41000000000"></div><div name="telephone_mobile" class="form-group"><label class="form-label">Telefon Mobil</label><input label="Telefon Mobil" name="telephone_mobile" placeholder="+41791112233" type="text" class="cornered form-control" value="0761111111"></div><div name="telephone_business" class="form-group"><label class="form-label">Telefon Geschäft</label><input label="Telefon Geschäft" name="telephone_business" placeholder="+41791112233" type="text" class="cornered form-control" value="0781234567"></div><div name="reachable_by" class="form-group"><label class="form-label">Erreichbar per</label><select options="Post,E-Mail,Telefon Privat,Telefon Mobil,Telefon Geschäft" name="reachable_by" label="Erreichbar per" class="cornered form-control"><option value="Post">Post</option><option value="E-Mail">E-Mail</option><option value="Telefon Privat">Telefon Privat</option><option value="Telefon Mobil">Telefon Mobil</option><option value="Telefon Geschäft">Telefon Geschäft</option></select></div><div class="btn-container right"><button type="submit" class="btn btn-primary">Speichern</button></div></div></div></section></form>')
    })
})