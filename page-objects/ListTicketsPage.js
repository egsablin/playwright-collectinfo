export class ListTicketsPage {
    constructor(page) {
        this.page = page
        this.ticketsContainer = page.locator('[class*="uk-card-body"]')
    }

    visit = async () => {
        await this.page.goto('https://ofsla.ru/national-license/bilety2/')
    }

    getTicketList = async () => {
        await this.ticketsContainer.waitFor()
        const ticketsContainer = await this.ticketsContainer
        const ticketParagraph = await ticketsContainer.locator('p')
        const ticketListCount = await ticketParagraph.count()
        const ticketListArray = []

        for (let i = 0; i < ticketListCount; i++) {
            const ticketLinkElement = await ticketParagraph.nth(i).locator('a')
            const ticketCurrentParagraphText = await ticketParagraph.nth(i).innerText()
            const ticketCurrentNumberText = await ticketCurrentParagraphText.split('\u00A0')[0].trim()
            const ticketCurrentNumber = parseInt(ticketCurrentNumberText.match(/\d+$/)[0], 10)
            const ticketLink = await ticketLinkElement.getAttribute('href')
            const ticketListElementObject = {
                ticketNumber: ticketCurrentNumber,
                ticketLink: ticketLink
            }
            ticketListArray.push(ticketListElementObject)
        }
 
        return ticketListArray
    }
}