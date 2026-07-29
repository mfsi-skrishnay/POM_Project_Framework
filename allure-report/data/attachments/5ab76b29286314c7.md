# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UploadDownload.spec.js >> Upload Single File
- Location: tests\UploadDownload.spec.js:24:1

# Error details

```
Error: ENOENT: no such file or directory, stat 'C:\Users\Mindfire\Documents\Projects\POM_Project_Framework\UsersMindfireDocumentsProjectsPOM_Project_FrameworkFilessampleFile.pdf.pdf'
```

# Page snapshot

```yaml
- generic [ref=e16]:
  - banner [ref=e17]:
    - generic [ref=e23]:
      - heading "Automation Testing Practice" [level=1] [ref=e25]:
        - link "Automation Testing Practice" [ref=e26] [cursor=pointer]:
          - /url: https://testautomationpractice.blogspot.com/
      - paragraph [ref=e28]: For Selenium, Cypress & Playwright
  - list [ref=e35]:
    - listitem [ref=e36]:
      - link "Home" [ref=e37] [cursor=pointer]:
        - /url: http://testautomationpractice.blogspot.com/
    - listitem [ref=e38]:
      - link "Udemy Courses" [ref=e39] [cursor=pointer]:
        - /url: https://www.pavanonlinetrainings.com/#udemy
    - listitem [ref=e40]:
      - link "Online Trainings" [ref=e41] [cursor=pointer]:
        - /url: https://www.pavanonlinetrainings.com/
    - listitem [ref=e42]:
      - link "Blog" [ref=e43] [cursor=pointer]:
        - /url: https://www.pavantestingtools.com/
    - listitem [ref=e44]:
      - link "PlaywrightPractice" [ref=e45] [cursor=pointer]:
        - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
  - generic [ref=e49]:
    - generic:
      - generic [ref=e59]:
        - generic [ref=e60]:
          - generic [ref=e65]:
            - heading "Download Files" [level=3] [ref=e66]
            - generic [ref=e67]:
              - heading "Download a Text or PDF File" [level=2] [ref=e68]
              - text: "Enter Text:"
              - textbox "Enter Text:" [ref=e69]
              - button "Generate and Download Text File" [ref=e70] [cursor=pointer]
              - button "Generate and Download PDF File" [ref=e71] [cursor=pointer]
              - heading "PDF File with the Browser" [level=2] [ref=e72]
              - button "Download PDF File" [ref=e73] [cursor=pointer]
          - link "Home" [ref=e77] [cursor=pointer]:
            - /url: https://testautomationpractice.blogspot.com/
          - generic [ref=e79]:
            - text: "Subscribe to:"
            - link "Posts (Atom)" [ref=e80] [cursor=pointer]:
              - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
        - generic [ref=e81]:
          - heading "Upload Files" [level=2] [ref=e82]
          - generic [ref=e83]:
            - generic [ref=e84]:
              - button "Choose File" [ref=e85]
              - button "Upload Single File" [ref=e86] [cursor=pointer]
            - paragraph
            - generic [ref=e87]:
              - button "Choose File" [ref=e88]
              - button "Upload Multiple Files" [ref=e89] [cursor=pointer]
            - paragraph
        - generic [ref=e90]:
          - heading "Static Web Table" [level=2] [ref=e91]
          - table [ref=e93]:
            - rowgroup [ref=e94]:
              - row "BookName Author Subject Price" [ref=e95]:
                - columnheader "BookName" [ref=e96]
                - columnheader "Author" [ref=e97]
                - columnheader "Subject" [ref=e98]
                - columnheader "Price" [ref=e99]
              - row "Learn Selenium Amit Selenium 300" [ref=e100]:
                - cell "Learn Selenium" [ref=e101]
                - cell "Amit" [ref=e102]
                - cell "Selenium" [ref=e103]
                - cell "300" [ref=e104]
              - row "Learn Java Mukesh Java 500" [ref=e105]:
                - cell "Learn Java" [ref=e106]
                - cell "Mukesh" [ref=e107]
                - cell "Java" [ref=e108]
                - cell "500" [ref=e109]
              - row "Learn JS Animesh Javascript 300" [ref=e110]:
                - cell "Learn JS" [ref=e111]
                - cell "Animesh" [ref=e112]
                - cell "Javascript" [ref=e113]
                - cell "300" [ref=e114]
              - row "Master In Selenium Mukesh Selenium 3000" [ref=e115]:
                - cell "Master In Selenium" [ref=e116]
                - cell "Mukesh" [ref=e117]
                - cell "Selenium" [ref=e118]
                - cell "3000" [ref=e119]
              - row "Master In Java Amod JAVA 2000" [ref=e120]:
                - cell "Master In Java" [ref=e121]
                - cell "Amod" [ref=e122]
                - cell "JAVA" [ref=e123]
                - cell "2000" [ref=e124]
              - row "Master In JS Amit Javascript 1000" [ref=e125]:
                - cell "Master In JS" [ref=e126]
                - cell "Amit" [ref=e127]
                - cell "Javascript" [ref=e128]
                - cell "1000" [ref=e129]
        - generic [ref=e130]:
          - heading "Dynamic Web Table" [level=2] [ref=e131]
          - generic [ref=e132]:
            - table [ref=e133]:
              - rowgroup [ref=e134]:
                - row "Name Disk (MB/s) Memory (MB) CPU (%) Network (Mbps)" [ref=e135]:
                  - columnheader "Name" [ref=e136]
                  - columnheader "Disk (MB/s)" [ref=e137]
                  - columnheader "Memory (MB)" [ref=e138]
                  - columnheader "CPU (%)" [ref=e139]
                  - columnheader "Network (Mbps)" [ref=e140]
              - rowgroup [ref=e141]:
                - row "Chrome 0.73 MB/s 30.7 MB 5.5% 9.2 Mbps" [ref=e142]:
                  - cell "Chrome" [ref=e143]
                  - cell "0.73 MB/s" [ref=e144]
                  - cell "30.7 MB" [ref=e145]
                  - cell "5.5%" [ref=e146]
                  - cell "9.2 Mbps" [ref=e147]
                - row "System 0.09 MB/s 44.4 MB 7.0% 6.2 Mbps" [ref=e148]:
                  - cell "System" [ref=e149]
                  - cell "0.09 MB/s" [ref=e150]
                  - cell "44.4 MB" [ref=e151]
                  - cell "7.0%" [ref=e152]
                  - cell "6.2 Mbps" [ref=e153]
                - row "Firefox 0.51 MB/s 37.9 MB 8.7% 6.8 Mbps" [ref=e154]:
                  - cell "Firefox" [ref=e155]
                  - cell "0.51 MB/s" [ref=e156]
                  - cell "37.9 MB" [ref=e157]
                  - cell "8.7%" [ref=e158]
                  - cell "6.8 Mbps" [ref=e159]
                - row "Internet Explorer 0.65 MB/s 73.9 MB 0.8% 4.0 Mbps" [ref=e160]:
                  - cell "Internet Explorer" [ref=e161]
                  - cell "0.65 MB/s" [ref=e162]
                  - cell "73.9 MB" [ref=e163]
                  - cell "0.8%" [ref=e164]
                  - cell "4.0 Mbps" [ref=e165]
            - generic [ref=e166]:
              - paragraph [ref=e167]:
                - text: "CPU load of Chrome process:"
                - strong [ref=e168]: 5.5%
              - paragraph [ref=e169]:
                - text: "Memory Size of Firefox process:"
                - strong [ref=e170]: 37.9 MB
              - paragraph [ref=e171]:
                - text: "Network speed of Chrome process:"
                - strong [ref=e172]: 9.2 Mbps
              - paragraph [ref=e173]:
                - text: "Disk space of Firefox process:"
                - strong [ref=e174]: 0.51 MB/s
        - generic [ref=e175]:
          - heading "Pagination Web Table" [level=2] [ref=e176]
          - generic [ref=e178]:
            - table [ref=e179]:
              - rowgroup [ref=e180]:
                - row "ID Name Price Select" [ref=e181]:
                  - columnheader "ID" [ref=e182]
                  - columnheader "Name" [ref=e183]
                  - columnheader "Price" [ref=e184]
                  - columnheader "Select" [ref=e185]
              - rowgroup [ref=e186]:
                - row "1 Smartphone $10.99" [ref=e187]:
                  - cell "1" [ref=e188]
                  - cell "Smartphone" [ref=e189]
                  - cell "$10.99" [ref=e190]
                  - cell [ref=e191]:
                    - checkbox [ref=e192]
                - row "2 Laptop $19.99" [ref=e193]:
                  - cell "2" [ref=e194]
                  - cell "Laptop" [ref=e195]
                  - cell "$19.99" [ref=e196]
                  - cell [ref=e197]:
                    - checkbox [ref=e198]
                - row "3 Tablet $5.99" [ref=e199]:
                  - cell "3" [ref=e200]
                  - cell "Tablet" [ref=e201]
                  - cell "$5.99" [ref=e202]
                  - cell [ref=e203]:
                    - checkbox [ref=e204]
                - row "4 Smartwatch $7.99" [ref=e205]:
                  - cell "4" [ref=e206]
                  - cell "Smartwatch" [ref=e207]
                  - cell "$7.99" [ref=e208]
                  - cell [ref=e209]:
                    - checkbox [ref=e210]
                - row "5 Wireless Earbuds $8.99" [ref=e211]:
                  - cell "5" [ref=e212]
                  - cell "Wireless Earbuds" [ref=e213]
                  - cell "$8.99" [ref=e214]
                  - cell [ref=e215]:
                    - checkbox [ref=e216]
            - list [ref=e217]:
              - listitem [ref=e218]:
                - link "1" [ref=e219] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e220]:
                - link "2" [ref=e221] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e222]:
                - link "3" [ref=e223] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e224]:
                - link "4" [ref=e225] [cursor=pointer]:
                  - /url: "#"
      - generic:
        - generic:
          - complementary
      - complementary [ref=e228]:
        - generic [ref=e229]:
          - generic [ref=e230]:
            - heading "Tabs" [level=2] [ref=e231]
            - generic [ref=e234]:
              - link [ref=e236] [cursor=pointer]:
                - /url: https://wikipedia.org/wiki/
                - img [ref=e237]
              - generic [ref=e238]:
                - textbox [ref=e240]
                - button "Submit" [ref=e242]
          - generic [ref=e244]:
            - heading "Dynamic Button" [level=2] [ref=e245]
            - button "START" [ref=e247] [cursor=pointer]
          - generic [ref=e248]:
            - heading "Alerts & Popups" [level=2] [ref=e249]
            - generic [ref=e250]:
              - button "Simple Alert" [ref=e251] [cursor=pointer]
              - button "Confirmation Alert" [ref=e252] [cursor=pointer]
              - button "Prompt Alert" [ref=e253] [cursor=pointer]
              - paragraph
          - button "New Tab" [ref=e256] [cursor=pointer]
          - button "Popup Windows" [ref=e261] [cursor=pointer]
          - generic [ref=e262]:
            - heading "Mouse Hover" [level=2] [ref=e263]
            - generic [ref=e264]:
              - paragraph [ref=e265]: Move the mouse over the button to open the dropdown menu.
              - button "Point Me" [ref=e267] [cursor=pointer]
          - generic [ref=e268]:
            - heading "Double Click" [level=2] [ref=e269]
            - generic [ref=e270]:
              - text: "Field1:"
              - textbox [ref=e271]: Hello World!
              - text: "Field2:"
              - textbox [ref=e272]
              - button "Copy Text" [ref=e273] [cursor=pointer]
              - paragraph [ref=e274]: Double click on button, the text from Field1 will be copied into Field2.
          - generic [ref=e275]:
            - heading "Drag and Drop" [level=2] [ref=e276]
            - generic:
              - paragraph [ref=e278]: Drag me to my target
              - paragraph [ref=e280]: Drop here
          - generic [ref=e281]:
            - heading "Slider" [level=2] [ref=e282]
            - paragraph [ref=e284]:
              - text: "Price range:"
              - textbox "Price range:" [ref=e285]: $75 - $300
          - generic [ref=e290]:
            - heading "SVG Elements" [level=2] [ref=e291]
            - generic [ref=e293]:
              - img [ref=e294]
              - img [ref=e296]
              - img [ref=e298]
          - generic [ref=e300]:
            - heading "Scrolling DropDown" [level=2] [ref=e301]
            - textbox "Select an item" [ref=e303]
          - generic [ref=e304]:
            - heading "Labels And Links" [level=2] [ref=e305]
            - generic [ref=e307]:
              - generic [ref=e308]:
                - heading "Mobile Labels" [level=4] [ref=e309]
                - generic [ref=e310]: Samsung
                - generic [ref=e311]: Real Me
                - generic [ref=e312]: Moto
              - generic [ref=e313]:
                - heading "Laptop Links" [level=4] [ref=e314]
                - link "Apple" [ref=e315] [cursor=pointer]:
                  - /url: https://www.apple.com/
                - link "Lenovo" [ref=e316] [cursor=pointer]:
                  - /url: https://www.lenovo.com/
                - link "Dell" [ref=e317] [cursor=pointer]:
                  - /url: https://www.dell.com/
              - generic [ref=e318]:
                - heading "Broken Links" [level=4] [ref=e319]
                - link "Errorcode 400" [ref=e320] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=400
                - link "Errorcode 401" [ref=e321] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=401
                - link "Errorcode 403" [ref=e322] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=403
                - link "Errorcode 404" [ref=e323] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=404
                - link "Errorcode 408" [ref=e324] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=408
                - link "Errorcode 500" [ref=e325] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=500
                - link "Errorcode 502" [ref=e326] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=502
                - link "Errorcode 503" [ref=e327] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=503
          - heading "Visitors" [level=2] [ref=e329]
  - contentinfo [ref=e330]:
    - generic [ref=e333]:
      - table [ref=e334]:
        - rowgroup [ref=e335]:
          - row "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files ShadowDOM Mobiles Laptops Blog Choose File Youtube" [ref=e336]:
            - cell "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files" [ref=e337]:
              - generic [ref=e338]:
                - generic [ref=e339]:
                  - heading "Form" [level=2] [ref=e340]
                  - generic [ref=e342]:
                    - generic [ref=e343]:
                      - heading "Section 1" [level=4] [ref=e344]
                      - paragraph [ref=e345]: This is a paragraph in Section 1.
                      - textbox [ref=e346]
                      - button "Submit" [ref=e347] [cursor=pointer]
                    - generic [ref=e348]:
                      - heading "Section 2" [level=4] [ref=e349]
                      - paragraph [ref=e350]: This is a paragraph in Section 2.
                      - textbox [ref=e351]
                      - button "Submit" [ref=e352] [cursor=pointer]
                    - generic [ref=e353]:
                      - heading "Section 3" [level=4] [ref=e354]
                      - paragraph [ref=e355]: This is a paragraph in Section 3.
                      - textbox [ref=e356]
                      - button "Submit" [ref=e357] [cursor=pointer]
                - generic [ref=e358]:
                  - heading "Footer Links" [level=2] [ref=e359]
                  - list [ref=e361]:
                    - listitem [ref=e362]:
                      - link "Home" [ref=e363] [cursor=pointer]:
                        - /url: http://testautomationpractice.blogspot.com/
                    - listitem [ref=e364]:
                      - link "Hidden Elements & AJAX" [ref=e365] [cursor=pointer]:
                        - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
                    - listitem [ref=e366]:
                      - link "Download Files" [ref=e367] [cursor=pointer]:
                        - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
            - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube" [ref=e368]:
              - generic [ref=e370]:
                - heading "ShadowDOM" [level=2] [ref=e371]
                - generic [ref=e372]:
                  - generic [ref=e373]:
                    - generic [ref=e374]: Mobiles
                    - generic [ref=e377]: Laptops
                    - link "Blog" [ref=e378] [cursor=pointer]:
                      - /url: https://www.pavantestingtools.com/
                    - textbox [ref=e379]
                    - checkbox [ref=e380]
                    - button "Choose File" [ref=e381]
                  - link "Youtube" [ref=e382] [cursor=pointer]:
                    - /url: https://www.youtube.com/@sdetpavan/videos
      - generic [ref=e385]:
        - text: Theme images by
        - link "merrymoonmary" [ref=e386] [cursor=pointer]:
          - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
        - text: . Powered by
        - link "Blogger" [ref=e387] [cursor=pointer]:
          - /url: https://www.blogger.com
        - text: .
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const path = require('path');
  3  | 
  4  | test.beforeEach(async ({ page }) => {
  5  |     await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');
  6  | });
  7  | 
  8  | test('Download PDF File', async ({ page }) => {
  9  |         await page.locator('#inputText').fill('THIS IS SAMPLE FILE FOR CHECKING DOWNLOADING IN PLAYWRIGHT');
  10 |         
  11 |         await page.locator('#generatePdf').click();
  12 |         const downloadLink = page.locator('#pdfDownloadLink').first();
  13 |         await expect(downloadLink).toBeVisible();
  14 |         const downloadPromise = page.waitForEvent('download');
  15 |         await downloadLink.click();
  16 |         const download = await downloadPromise;
  17 | 
  18 |         expect(download.suggestedFilename()).toContain('.pdf');
  19 |         const savePath = path.join(__dirname,'../Files',download.suggestedFilename());
  20 |         await download.saveAs(savePath);
  21 |         
  22 |     });
  23 | 
  24 | test('Upload Single File', async ({ page }) => {
  25 |         
> 26 |         await page.setInputFiles('#singleFileInput', 'C:\Users\Mindfire\Documents\Projects\POM_Project_Framework\Files\sampleFile.pdf.pdf');
     |         ^ Error: ENOENT: no such file or directory, stat 'C:\Users\Mindfire\Documents\Projects\POM_Project_Framework\UsersMindfireDocumentsProjectsPOM_Project_FrameworkFilessampleFile.pdf.pdf'
  27 |         await page.locator("[id*='singleFile'] button[type='submit']')").click();
  28 |         await expect(page.locator('#singleFileStatus')).toContainText('Single file selected');
  29 |     });
  30 | 
```