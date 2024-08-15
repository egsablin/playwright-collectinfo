import { test } from '@playwright/test'
import { ListTicketsPage } from './../page-objects/ListTicketsPage.js'
import { TicketPage } from './../page-objects/TicketPage.js'

test("Collecting info for SLA Test", async ( { page } ) => {

    const listTicketsPage = new ListTicketsPage(page)
    await listTicketsPage.visit()
    await listTicketsPage.chooseTiket(ticketNumber)

    const ticketPage = new TicketPage(page)
    await ticketPage.collectQuestion(questionNumber)

})