export class ListTicketsPage {
    constructor(page) {
        this.page = page
    }

    visit = async () => {
        await this.page.goto('https://ofsla.ru/national-license/bilety2/')
    }
}