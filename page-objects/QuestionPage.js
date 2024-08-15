export class QuestionPage {
    constructor(page) {
        this.page = page
        this.questionText = page.locator('[class*="qtext"]')
        this.answersText = page.locator('[class*="otp-row-1"]')
        this.nextButton = page.getByRole('button', { name: 'Далее' })
        this.questionImage = page.locator('img')
    }

    grabQuestionInfo = async () => {

    } 
}