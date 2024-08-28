export class QuestionPage {
    constructor(page) {
        this.page = page
        this.questionText = page.locator('[class*="qtext"]')
        this.answersText = page.locator('[class*="otp-row-1"]')
        this.nextButton = page.getByRole('button', { name: 'Далее' })
        this.questionContainer = page.locator('[class*="qcontainer"]')
    }

    grabQuestionInfo = async () => {

        await this.questionContainer.waitFor()
        let questionImgLink = ""
        const questionImage = await this.questionContainer.locator('img').first()
        const questionImageCount = await questionImage.count()
        
        if (questionImageCount > 0) {
            questionImgLink = await questionImage.getAttribute('src')
        }
        
        await this.questionText.waitFor()
        const questionText = await this.questionText.innerText()
        await this.answersText.first().waitFor()
        await this.answersText.first().click()
        const answersCount = await this.answersText.count()
        const answerTextArray = []

        for (let i = 0; i < answersCount; i++) {
            const answer = await this.answersText.nth(i).innerText()
            answerTextArray.push(answer.replace(/\s+/g, ' ').trim())
        }

        const questionObject = {
            "questionImgLink": questionImgLink,
            "questionText": questionText.replace(/\s+/g, ' ').trim(),
            "answersText": answerTextArray
        }

        await this.nextButton.waitFor()
        await this.nextButton.click()
        
        return questionObject

    } 
}