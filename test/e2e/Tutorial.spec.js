import puppeteer from 'puppeteer'

describe('Todo app', () => {
  let browser
  let page

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: ['--window-size=1920,1080'],
    })

    page = await browser.newPage()
    await page.goto('http://localhost:3000/')
  })

  afterAll(async () => {
    await browser.close()
  })

  test('should be titled "Nuxt-TS-boilerplate-with-testing"', async () => {
    await expect(page.title()).resolves.toMatch(
      'Nuxt-TS-boilerplate-with-testing'
    )
  }, 20000)

  test('should match the welcome text', async () => {
    const welcomeText = await page.$eval(
      '.welcome__title',
      (elem) => elem.innerText
    )

    expect(welcomeText).toBe('Welcome to your Nuxt Application')
  }, 20000)
})
