describe('Teste de Requisição', () => {
    let criado;

    it('GET', () => {
        cy.request({
            method: "GET",
            url: 'http://localhost:3000/cars/search/info'
        }).then((response) => {
            expect(response.body).to.exist
        })
    })

    it('GET (id)', () => {
        const a = {
            "_id": "6102e9ef548f233b5ac0a289",
            "size": "Huge",
            "color": "Pink",
            "__v": 0
        }
        cy.request({
            method: "GET",
            url: "http://localhost:3000/cars/search/" + a._id
        }).then((response) => {
            console.log(response.body)
            expect(response.body).deep.equal(a)
        })
    })

    it('POST - Cria', () => {
        const a = {
            "size": "Criado",
            "color": "pelo Cypress",
        }
        cy.request({
            method: "POST",
            url: "http://localhost:3000/cars/create",
            body: a
        }).then((response) => {
            expect(response.body.size).to.equal("Criado")
            criado = response.body._id
        })
    })

    it('PUT - Update', () => {
        const a = {
            "size": "Alterado",
            "color": "pelo Cypress",
        }
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/cars/update/6115701262d98c0d80bf9063",
            body: a
        }).then((response) => {
            expect(response.body.size).to.equal("Alterado")
        })
    })

    it('DELETE (id)', () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/cars/delete/" + criado
        }).then((response) => {
            console.log(response)
            expect(response.body.size).to.equal("Criado")
            expect(response.body._id).to.equal(criado)
            expect(response.statusText).to.equal("OK")
        })
    })
})