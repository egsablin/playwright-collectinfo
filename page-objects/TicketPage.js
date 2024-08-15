export class TicketPage {
    constructor(page) {
        this.page = page
        this.lastNameInput = page.getByLabel('Фамилия')
        this.firstNameInput = page.getByLabel('Имя')
        this.paraplanSchool = page.getByLabel('Парапланерная школа')
        this.fillFormButton = page.getByRole('button', { name: 'Далее' })
    }

    visitTicket = async (ticketLink) => {
        await this.page.goto(ticketLink)
    }

    fillForm = async () => {
        await this.lastNameInput.waitFor()
        await this.lastNameInput.click()
        await this.lastNameInput.fill('Ivanov')

        await this.firstNameInput.waitFor()
        await this.firstNameInput.click()
        await this.firstNameInput.fill('Ivan')

        await this.paraplanSchool.waitFor()
        await this.paraplanSchool.click()
        await this.paraplanSchool.fill('Paragliding')

        await this.fillFormButton.waitFor()
        await this.fillFormButton.click()
    }

}