# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UploadDownload.spec.js >> Download PDF File
- Location: tests\UploadDownload.spec.js:8:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for event "download"
============================================================
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
              - textbox "Enter Text:" [ref=e69]: THIS IS SAMPLE FILE FOR CHECKING DOWNLOADING IN PLAYWRIGHT
              - button "Generate and Download Text File" [ref=e70] [cursor=pointer]
              - button "Generate and Download PDF File" [active] [ref=e71] [cursor=pointer]
              - link "Download PDF File" [ref=e72] [cursor=pointer]:
                - /url: blob:https://testautomationpractice.blogspot.com/727cb514-6590-4539-b00f-c83daa5c35e9
              - heading "PDF File with the Browser" [level=2] [ref=e73]
              - button "Download PDF File" [ref=e74] [cursor=pointer]
          - link "Home" [ref=e78] [cursor=pointer]:
            - /url: https://testautomationpractice.blogspot.com/
          - generic [ref=e80]:
            - text: "Subscribe to:"
            - link "Posts (Atom)" [ref=e81] [cursor=pointer]:
              - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
        - generic [ref=e82]:
          - heading "Upload Files" [level=2] [ref=e83]
          - generic [ref=e84]:
            - generic [ref=e85]:
              - button "Choose File" [ref=e86]
              - button "Upload Single File" [ref=e87] [cursor=pointer]
            - paragraph
            - generic [ref=e88]:
              - button "Choose File" [ref=e89]
              - button "Upload Multiple Files" [ref=e90] [cursor=pointer]
            - paragraph
        - generic [ref=e91]:
          - heading "Static Web Table" [level=2] [ref=e92]
          - table [ref=e94]:
            - rowgroup [ref=e95]:
              - row "BookName Author Subject Price" [ref=e96]:
                - columnheader "BookName" [ref=e97]
                - columnheader "Author" [ref=e98]
                - columnheader "Subject" [ref=e99]
                - columnheader "Price" [ref=e100]
              - row "Learn Selenium Amit Selenium 300" [ref=e101]:
                - cell "Learn Selenium" [ref=e102]
                - cell "Amit" [ref=e103]
                - cell "Selenium" [ref=e104]
                - cell "300" [ref=e105]
              - row "Learn Java Mukesh Java 500" [ref=e106]:
                - cell "Learn Java" [ref=e107]
                - cell "Mukesh" [ref=e108]
                - cell "Java" [ref=e109]
                - cell "500" [ref=e110]
              - row "Learn JS Animesh Javascript 300" [ref=e111]:
                - cell "Learn JS" [ref=e112]
                - cell "Animesh" [ref=e113]
                - cell "Javascript" [ref=e114]
                - cell "300" [ref=e115]
              - row "Master In Selenium Mukesh Selenium 3000" [ref=e116]:
                - cell "Master In Selenium" [ref=e117]
                - cell "Mukesh" [ref=e118]
                - cell "Selenium" [ref=e119]
                - cell "3000" [ref=e120]
              - row "Master In Java Amod JAVA 2000" [ref=e121]:
                - cell "Master In Java" [ref=e122]
                - cell "Amod" [ref=e123]
                - cell "JAVA" [ref=e124]
                - cell "2000" [ref=e125]
              - row "Master In JS Amit Javascript 1000" [ref=e126]:
                - cell "Master In JS" [ref=e127]
                - cell "Amit" [ref=e128]
                - cell "Javascript" [ref=e129]
                - cell "1000" [ref=e130]
        - generic [ref=e131]:
          - heading "Dynamic Web Table" [level=2] [ref=e132]
          - generic [ref=e133]:
            - table [ref=e134]:
              - rowgroup [ref=e135]:
                - row "Name CPU (%) Disk (MB/s) Memory (MB) Network (Mbps)" [ref=e136]:
                  - columnheader "Name" [ref=e137]
                  - columnheader "CPU (%)" [ref=e138]
                  - columnheader "Disk (MB/s)" [ref=e139]
                  - columnheader "Memory (MB)" [ref=e140]
                  - columnheader "Network (Mbps)" [ref=e141]
              - rowgroup [ref=e142]:
                - row "Firefox 7.4% 0.18 MB/s 68.9 MB 0.3 Mbps" [ref=e143]:
                  - cell "Firefox" [ref=e144]
                  - cell "7.4%" [ref=e145]
                  - cell "0.18 MB/s" [ref=e146]
                  - cell "68.9 MB" [ref=e147]
                  - cell "0.3 Mbps" [ref=e148]
                - row "Chrome 7.6% 0.63 MB/s 99.0 MB 8.0 Mbps" [ref=e149]:
                  - cell "Chrome" [ref=e150]
                  - cell "7.6%" [ref=e151]
                  - cell "0.63 MB/s" [ref=e152]
                  - cell "99.0 MB" [ref=e153]
                  - cell "8.0 Mbps" [ref=e154]
                - row "System 2.5% 0.55 MB/s 87.8 MB 6.9 Mbps" [ref=e155]:
                  - cell "System" [ref=e156]
                  - cell "2.5%" [ref=e157]
                  - cell "0.55 MB/s" [ref=e158]
                  - cell "87.8 MB" [ref=e159]
                  - cell "6.9 Mbps" [ref=e160]
                - row "Internet Explorer 2.7% 0.21 MB/s 54.6 MB 5.7 Mbps" [ref=e161]:
                  - cell "Internet Explorer" [ref=e162]
                  - cell "2.7%" [ref=e163]
                  - cell "0.21 MB/s" [ref=e164]
                  - cell "54.6 MB" [ref=e165]
                  - cell "5.7 Mbps" [ref=e166]
            - generic [ref=e167]:
              - paragraph [ref=e168]:
                - text: "CPU load of Chrome process:"
                - strong [ref=e169]: 7.6%
              - paragraph [ref=e170]:
                - text: "Memory Size of Firefox process:"
                - strong [ref=e171]: 68.9 MB
              - paragraph [ref=e172]:
                - text: "Network speed of Chrome process:"
                - strong [ref=e173]: 8.0 Mbps
              - paragraph [ref=e174]:
                - text: "Disk space of Firefox process:"
                - strong [ref=e175]: 0.18 MB/s
        - generic [ref=e176]:
          - heading "Pagination Web Table" [level=2] [ref=e177]
          - generic [ref=e179]:
            - table [ref=e180]:
              - rowgroup [ref=e181]:
                - row "ID Name Price Select" [ref=e182]:
                  - columnheader "ID" [ref=e183]
                  - columnheader "Name" [ref=e184]
                  - columnheader "Price" [ref=e185]
                  - columnheader "Select" [ref=e186]
              - rowgroup [ref=e187]:
                - row "1 Smartphone $10.99" [ref=e188]:
                  - cell "1" [ref=e189]
                  - cell "Smartphone" [ref=e190]
                  - cell "$10.99" [ref=e191]
                  - cell [ref=e192]:
                    - checkbox [ref=e193]
                - row "2 Laptop $19.99" [ref=e194]:
                  - cell "2" [ref=e195]
                  - cell "Laptop" [ref=e196]
                  - cell "$19.99" [ref=e197]
                  - cell [ref=e198]:
                    - checkbox [ref=e199]
                - row "3 Tablet $5.99" [ref=e200]:
                  - cell "3" [ref=e201]
                  - cell "Tablet" [ref=e202]
                  - cell "$5.99" [ref=e203]
                  - cell [ref=e204]:
                    - checkbox [ref=e205]
                - row "4 Smartwatch $7.99" [ref=e206]:
                  - cell "4" [ref=e207]
                  - cell "Smartwatch" [ref=e208]
                  - cell "$7.99" [ref=e209]
                  - cell [ref=e210]:
                    - checkbox [ref=e211]
                - row "5 Wireless Earbuds $8.99" [ref=e212]:
                  - cell "5" [ref=e213]
                  - cell "Wireless Earbuds" [ref=e214]
                  - cell "$8.99" [ref=e215]
                  - cell [ref=e216]:
                    - checkbox [ref=e217]
            - list [ref=e218]:
              - listitem [ref=e219]:
                - link "1" [ref=e220] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e221]:
                - link "2" [ref=e222] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e223]:
                - link "3" [ref=e224] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e225]:
                - link "4" [ref=e226] [cursor=pointer]:
                  - /url: "#"
      - generic:
        - generic:
          - complementary
      - complementary [ref=e229]:
        - generic [ref=e230]:
          - generic [ref=e231]:
            - heading "Tabs" [level=2] [ref=e232]
            - generic [ref=e235]:
              - link [ref=e237] [cursor=pointer]:
                - /url: https://wikipedia.org/wiki/
                - img [ref=e238]
              - generic [ref=e239]:
                - textbox [ref=e241]
                - button "Submit" [ref=e243]
          - generic [ref=e245]:
            - heading "Dynamic Button" [level=2] [ref=e246]
            - button "START" [ref=e248] [cursor=pointer]
          - generic [ref=e249]:
            - heading "Alerts & Popups" [level=2] [ref=e250]
            - generic [ref=e251]:
              - button "Simple Alert" [ref=e252] [cursor=pointer]
              - button "Confirmation Alert" [ref=e253] [cursor=pointer]
              - button "Prompt Alert" [ref=e254] [cursor=pointer]
              - paragraph
          - button "New Tab" [ref=e257] [cursor=pointer]
          - button "Popup Windows" [ref=e262] [cursor=pointer]
          - generic [ref=e263]:
            - heading "Mouse Hover" [level=2] [ref=e264]
            - generic [ref=e265]:
              - paragraph [ref=e266]: Move the mouse over the button to open the dropdown menu.
              - button "Point Me" [ref=e268] [cursor=pointer]
          - generic [ref=e269]:
            - heading "Double Click" [level=2] [ref=e270]
            - generic [ref=e271]:
              - text: "Field1:"
              - textbox [ref=e272]: Hello World!
              - text: "Field2:"
              - textbox [ref=e273]
              - button "Copy Text" [ref=e274] [cursor=pointer]
              - paragraph [ref=e275]: Double click on button, the text from Field1 will be copied into Field2.
          - generic [ref=e276]:
            - heading "Drag and Drop" [level=2] [ref=e277]
            - generic:
              - paragraph [ref=e279]: Drag me to my target
              - paragraph [ref=e281]: Drop here
          - generic [ref=e282]:
            - heading "Slider" [level=2] [ref=e283]
            - paragraph [ref=e285]:
              - text: "Price range:"
              - textbox "Price range:" [ref=e286]: $75 - $300
          - generic [ref=e291]:
            - heading "SVG Elements" [level=2] [ref=e292]
            - generic [ref=e294]:
              - img [ref=e295]
              - img [ref=e297]
              - img [ref=e299]
          - generic [ref=e301]:
            - heading "Scrolling DropDown" [level=2] [ref=e302]
            - textbox "Select an item" [ref=e304]
          - generic [ref=e305]:
            - heading "Labels And Links" [level=2] [ref=e306]
            - generic [ref=e308]:
              - generic [ref=e309]:
                - heading "Mobile Labels" [level=4] [ref=e310]
                - generic [ref=e311]: Samsung
                - generic [ref=e312]: Real Me
                - generic [ref=e313]: Moto
              - generic [ref=e314]:
                - heading "Laptop Links" [level=4] [ref=e315]
                - link "Apple" [ref=e316] [cursor=pointer]:
                  - /url: https://www.apple.com/
                - link "Lenovo" [ref=e317] [cursor=pointer]:
                  - /url: https://www.lenovo.com/
                - link "Dell" [ref=e318] [cursor=pointer]:
                  - /url: https://www.dell.com/
              - generic [ref=e319]:
                - heading "Broken Links" [level=4] [ref=e320]
                - link "Errorcode 400" [ref=e321] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=400
                - link "Errorcode 401" [ref=e322] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=401
                - link "Errorcode 403" [ref=e323] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=403
                - link "Errorcode 404" [ref=e324] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=404
                - link "Errorcode 408" [ref=e325] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=408
                - link "Errorcode 500" [ref=e326] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=500
                - link "Errorcode 502" [ref=e327] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=502
                - link "Errorcode 503" [ref=e328] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=503
          - generic [ref=e329]:
            - heading "Visitors" [level=2] [ref=e330]
            - generic [ref=e332]:
              - generic "A chart." [ref=e336]:
                - img "A chart." [ref=e337]
                - generic "A tabular representation of the data in the chart." [ref=e350]:
                  - table [ref=e351]:
                    - rowgroup [ref=e352]:
                      - row [ref=e353]:
                        - columnheader [ref=e354]
                        - columnheader [ref=e355]
                    - rowgroup [ref=e356]:
                      - row "0 88" [ref=e357]:
                        - cell "0" [ref=e358]
                        - cell "88" [ref=e359]
                      - row "1 82" [ref=e360]:
                        - cell "1" [ref=e361]
                        - cell "82" [ref=e362]
                      - row "2 82" [ref=e363]:
                        - cell "2" [ref=e364]
                        - cell "82" [ref=e365]
                      - row "3 75" [ref=e366]:
                        - cell "3" [ref=e367]
                        - cell "75" [ref=e368]
                      - row "4 55" [ref=e369]:
                        - cell "4" [ref=e370]
                        - cell "55" [ref=e371]
                      - row "5 57" [ref=e372]:
                        - cell "5" [ref=e373]
                        - cell "57" [ref=e374]
                      - row "6 91" [ref=e375]:
                        - cell "6" [ref=e376]
                        - cell "91" [ref=e377]
                      - row "7 100" [ref=e378]:
                        - cell "7" [ref=e379]
                        - cell "100" [ref=e380]
                      - row "8 89" [ref=e381]:
                        - cell "8" [ref=e382]
                        - cell "89" [ref=e383]
                      - row "9 80" [ref=e384]:
                        - cell "9" [ref=e385]
                        - cell "80" [ref=e386]
                      - row "10 69" [ref=e387]:
                        - cell "10" [ref=e388]
                        - cell "69" [ref=e389]
                      - row "11 56" [ref=e390]:
                        - cell "11" [ref=e391]
                        - cell "56" [ref=e392]
                      - row "12 57" [ref=e393]:
                        - cell "12" [ref=e394]
                        - cell "57" [ref=e395]
                      - row "13 93" [ref=e396]:
                        - cell "13" [ref=e397]
                        - cell "93" [ref=e398]
                      - row "14 88" [ref=e399]:
                        - cell "14" [ref=e400]
                        - cell "88" [ref=e401]
                      - row "15 89" [ref=e402]:
                        - cell "15" [ref=e403]
                        - cell "89" [ref=e404]
                      - row "16 85" [ref=e405]:
                        - cell "16" [ref=e406]
                        - cell "85" [ref=e407]
                      - row "17 66" [ref=e408]:
                        - cell "17" [ref=e409]
                        - cell "66" [ref=e410]
                      - row "18 51" [ref=e411]:
                        - cell "18" [ref=e412]
                        - cell "51" [ref=e413]
                      - row "19 53" [ref=e414]:
                        - cell "19" [ref=e415]
                        - cell "53" [ref=e416]
                      - row "20 86" [ref=e417]:
                        - cell "20" [ref=e418]
                        - cell "86" [ref=e419]
                      - row "21 93" [ref=e420]:
                        - cell "21" [ref=e421]
                        - cell "93" [ref=e422]
                      - row "22 83" [ref=e423]:
                        - cell "22" [ref=e424]
                        - cell "83" [ref=e425]
                      - row "23 86" [ref=e426]:
                        - cell "23" [ref=e427]
                        - cell "86" [ref=e428]
                      - row "24 69" [ref=e429]:
                        - cell "24" [ref=e430]
                        - cell "69" [ref=e431]
                      - row "25 60" [ref=e432]:
                        - cell "25" [ref=e433]
                        - cell "60" [ref=e434]
                      - row "26 54" [ref=e435]:
                        - cell "26" [ref=e436]
                        - cell "54" [ref=e437]
                      - row "27 82" [ref=e438]:
                        - cell "27" [ref=e439]
                        - cell "82" [ref=e440]
                      - row "28 84" [ref=e441]:
                        - cell "28" [ref=e442]
                        - cell "84" [ref=e443]
                      - row "29 11" [ref=e444]:
                        - cell "29" [ref=e445]
                        - cell "11" [ref=e446]
              - generic [ref=e447]: 8,263,260
  - contentinfo [ref=e448]:
    - generic [ref=e451]:
      - table [ref=e452]:
        - rowgroup [ref=e453]:
          - row "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files ShadowDOM Mobiles Laptops Blog Choose File Youtube" [ref=e454]:
            - cell "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files" [ref=e455]:
              - generic [ref=e456]:
                - generic [ref=e457]:
                  - heading "Form" [level=2] [ref=e458]
                  - generic [ref=e460]:
                    - generic [ref=e461]:
                      - heading "Section 1" [level=4] [ref=e462]
                      - paragraph [ref=e463]: This is a paragraph in Section 1.
                      - textbox [ref=e464]
                      - button "Submit" [ref=e465] [cursor=pointer]
                    - generic [ref=e466]:
                      - heading "Section 2" [level=4] [ref=e467]
                      - paragraph [ref=e468]: This is a paragraph in Section 2.
                      - textbox [ref=e469]
                      - button "Submit" [ref=e470] [cursor=pointer]
                    - generic [ref=e471]:
                      - heading "Section 3" [level=4] [ref=e472]
                      - paragraph [ref=e473]: This is a paragraph in Section 3.
                      - textbox [ref=e474]
                      - button "Submit" [ref=e475] [cursor=pointer]
                - generic [ref=e476]:
                  - heading "Footer Links" [level=2] [ref=e477]
                  - list [ref=e479]:
                    - listitem [ref=e480]:
                      - link "Home" [ref=e481] [cursor=pointer]:
                        - /url: http://testautomationpractice.blogspot.com/
                    - listitem [ref=e482]:
                      - link "Hidden Elements & AJAX" [ref=e483] [cursor=pointer]:
                        - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
                    - listitem [ref=e484]:
                      - link "Download Files" [ref=e485] [cursor=pointer]:
                        - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
            - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube" [ref=e486]:
              - generic [ref=e488]:
                - heading "ShadowDOM" [level=2] [ref=e489]
                - generic [ref=e490]:
                  - generic [ref=e491]:
                    - generic [ref=e492]: Mobiles
                    - generic [ref=e495]: Laptops
                    - link "Blog" [ref=e496] [cursor=pointer]:
                      - /url: https://www.pavantestingtools.com/
                    - textbox [ref=e497]
                    - checkbox [ref=e498]
                    - button "Choose File" [ref=e499]
                  - link "Youtube" [ref=e500] [cursor=pointer]:
                    - /url: https://www.youtube.com/@sdetpavan/videos
      - generic [ref=e503]:
        - text: Theme images by
        - link "merrymoonmary" [ref=e504] [cursor=pointer]:
          - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
        - text: . Powered by
        - link "Blogger" [ref=e505] [cursor=pointer]:
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
> 10 |         const downloadPromise = page.waitForEvent('download');
     |                                      ^ Error: page.waitForEvent: Test timeout of 30000ms exceeded.
  11 |         await page.locator('#generatePdf').click();
  12 |         const download = await downloadPromise;
  13 | 
  14 |         expect(download.suggestedFilename()).toContain('.pdf');
  15 |         const savePath = path.join(__dirname,'../Files',download.suggestedFilename());
  16 |         await download.saveAs(savePath);
  17 |         
  18 |     });
  19 | 
  20 | test('Upload Single File', async ({ page }) => {
  21 |         
  22 |         await page.setInputFiles('#singleFileInput', 'Files/sampleFile.pdf');
  23 |         await page.locator("[id*='singleFile'] button[type='submit']')").click();
  24 |         await expect(page.locator('#singleFileStatus')).toContainText('Single file selected');
  25 |     });
  26 | 
```