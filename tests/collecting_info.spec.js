import { test } from '@playwright/test'
import { ListTicketsPage } from './../page-objects/ListTicketsPage.js'
import { TicketPage } from './../page-objects/TicketPage.js'
import { QuestionPage } from './../page-objects/QuestionPage.js'
import { addQuestion } from './../db/db.js'

test("Collecting info for SLA Test", async ( { page } ) => {

    const listTicketsPage = new ListTicketsPage(page)
    await listTicketsPage.visit()
    const ticketListArray = await listTicketsPage.getTicketList()
    const ticketsSum = ticketListArray.length

    for (let i = 0; i < ticketsSum; i++) {
        const ticketPage = new TicketPage(page)
        await ticketPage.visitTicket(ticketListArray[i].ticketLink)
        await ticketPage.fillForm()
        for (let i = 0; i < 30; i++) {
            const questionPage = new QuestionPage(page)
            const question = await questionPage.grabQuestionInfo()
            // await addQuestion(ticketListArray[i].ticketNumber, question)
        }
    }

    



})