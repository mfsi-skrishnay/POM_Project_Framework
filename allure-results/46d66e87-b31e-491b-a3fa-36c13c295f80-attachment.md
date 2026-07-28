# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: wishlistAddRemove.spec.js >> Scenario 5 - Add Product to Wishlist and Remove It >> Test 1 - Search for an item within the wishlist
- Location: tests\wishlistAddRemove.spec.js:61:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('div[aria-label="Add to Wish List"] h4')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('div[aria-label="Add to Wish List"] h4')

```

```yaml
- navigation "Shortcuts menu":
  - heading "Skip to" [level=2]
  - list "Skip to":
    - listitem:
      - link "main content":
        - /url: "#skippedLink"
        - text: Main content
    - listitem:
      - link "About this item":
        - /url: "#featurebullets_feature_div"
    - listitem:
      - link "Skip to buying options":
        - /url: "#buybox"
        - text: Buying options
    - listitem:
      - link "Reviews":
        - /url: "#customerReviews"
  - heading "Keyboard shortcuts" [level=2]
  - list "Keyboard shortcuts":
    - listitem:
      - link "Search, alt, forward slash":
        - /url: javascript:void(0)
    - listitem:
      - link "Cart, shift, alt, c":
        - /url: javascript:void(0)
    - listitem:
      - link "Home, shift, alt, h":
        - /url: javascript:void(0)
    - listitem:
      - link "Your orders, shift, alt, o":
        - /url: javascript:void(0)
    - listitem:
      - button "Show/hide shortcuts, shift, alt, z"
  - text: To move between items, use your keyboard's up or down arrows.
- banner:
  - navigation "Primary":
    - link "Amazon.in":
      - /url: /ref=nav_logo
      - text: .in
    - button "Deliver to Krishna Ghaziabad 201017‌"
    - search:
      - text: All
      - combobox "Select the department you want to search in":
        - option "All Categories" [selected]
        - option "Alexa Skills"
        - option "Amazon Devices"
        - option "Amazon Fashion"
        - option "Amazon Fresh Meat"
        - option "Amazon Pharmacy"
        - option "Appliances"
        - option "Apps & Games"
        - option "Audible Audiobooks"
        - option "Baby"
        - option "Beauty"
        - option "Books"
        - option "Car & Motorbike"
        - option "Clothing & Accessories"
        - option "Collectibles"
        - option "Computers & Accessories"
        - option "Deals"
        - option "Electronics"
        - option "Furniture"
        - option "Garden & Outdoors"
        - option "Gift Cards"
        - option "Grocery & Gourmet Foods"
        - option "Health & Personal Care"
        - option "Home & Kitchen"
        - option "Industrial & Scientific"
        - option "Jewellery"
        - option "Kindle Store"
        - option "Luggage & Bags"
        - option "Luxury Beauty"
        - option "Movies & TV Shows"
        - option "MP3 Music"
        - option "Music"
        - option "Musical Instruments"
        - option "Office Products"
        - option "Pet Supplies"
        - option "Prime Video"
        - option "Shoes & Handbags"
        - option "Software"
        - option "Sports, Fitness & Outdoors"
        - option "Subscribe & Save"
        - option "Tools & Home Improvement"
        - option "Toys & Games"
        - option "Under ₹500"
        - option "Video Games"
        - option "Watches"
      - searchbox "Search Amazon.in": Laptop
      - button "Go"
    - link "Choose a language for shopping in Amazon India. The current selection is English (EN).":
      - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
      - img "India"
      - text: EN
    - button "Expand to Change Language or Country"
    - link "Hello, Krishna Account & Lists":
      - /url: https://www.amazon.in/gp/css/homepage.html?ref_=nav_youraccount_btn
    - button "Expand Account and Lists"
    - link "Returns & Orders":
      - /url: /gp/css/order-history?ref_=nav_orders_first
    - link "0 items in cart":
      - /url: /gp/cart/view.html?ref_=nav_cart
    - button "Open All Categories Menu": All
    - button "Open Rufus panel": Rufus
    - list:
      - listitem:
        - link "Fresh":
          - /url: /fresh?ref_=nav_cs_grocery
        - button "Fresh Details"
      - listitem:
        - link "Today's Deals":
          - /url: /deals?ref_=nav_cs_gb
      - listitem:
        - link "Prime Video":
          - /url: https://www.primevideo.com/offers/nonprimehomepage/ref_=nav_dvm_crs_in_s_gw_bt_dk_p_hamburgr?ref_=avod_desktop_topnav
      - listitem:
        - link "Sell":
          - /url: /b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3
      - listitem:
        - link "Gift Cards":
          - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
      - listitem:
        - link "Amazon Pay":
          - /url: /gp/sva/dashboard?ref_=nav_cs_apay
      - listitem:
        - link "Buy Again":
          - /url: /gp/buyagain?ie=UTF8&ref_=nav_cs_buy_again
      - listitem:
        - link "Browsing History":
          - /url: /gp/history?ref_=nav_cs_timeline
        - button "Browsing History Details"
      - listitem:
        - link "Gift Ideas":
          - /url: /gcx/-/gfhz/?ref_=nav_cs_giftfinder
      - listitem:
        - link "Subscribe & Save":
          - /url: /auto-deliveries/landing?ref_=nav_cs_sns
      - listitem:
        - link "Krishna 's Amazon.in":
          - /url: /gp/yourstore/home?ref_=nav_cs_ys
      - listitem:
        - link "Health, Household & Personal Care":
          - /url: /health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc
      - listitem:
        - link "AmazonBasics":
          - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
      - listitem:
        - link "Home Improvement":
          - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
      - listitem:
        - link "Prime":
          - /url: /prime?ref_=nav_cs_primelink_nonmember
        - button "Prime Details"
      - listitem:
        - link "Audible":
          - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
      - listitem:
        - link "Customer Service":
          - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
      - listitem:
        - link "Beauty & Personal Care":
          - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
      - listitem:
        - link "Home & Kitchen":
          - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
      - listitem:
        - link "Fashion":
          - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
      - listitem:
        - link "Sports, Fitness & Outdoors":
          - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
      - listitem:
        - link "Toys & Games":
          - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
      - listitem:
        - link "Electronics":
          - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
      - listitem:
        - link "Video Games":
          - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
      - listitem:
        - link "Bestsellers":
          - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
      - listitem:
        - link "Books":
          - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
      - listitem:
        - link "Kindle eBooks":
          - /url: /Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books
      - listitem:
        - link "Car & Motorbike":
          - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
      - listitem:
        - link "Computers":
          - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
      - listitem:
        - link "Mobiles":
          - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
      - listitem:
        - link "Baby":
          - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
      - listitem:
        - link "Pet Supplies":
          - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
      - listitem:
        - link "New Releases":
          - /url: /gp/new-releases/?ref_=nav_cs_newreleases
    - list:
      - listitem:
        - link "Electronics":
          - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=topnav_storetab_top_elec_mega
          - img "Electronics"
      - listitem:
        - link "Mobiles & Accessories":
          - /url: /b/?_encoding=UTF8&node=1389401031&ref_=sv_top_elec_mega_1
        - button "Mobiles & Accessories, You are currently on a drop-down. To open this drop-down, Press Enter."
      - listitem:
        - link "Laptops & Accessories":
          - /url: /b/?_encoding=UTF8&node=976392031&ref_=sv_top_elec_mega_2
        - button "Laptops & Accessories, You are currently on a drop-down. To open this drop-down, Press Enter."
      - listitem:
        - link "TV & Home Entertainment":
          - /url: /b/?_encoding=UTF8&node=1389375031&ref_=sv_top_elec_mega_3
        - button "TV & Home Entertainment, You are currently on a drop-down. To open this drop-down, Press Enter."
      - listitem:
        - link "Audio":
          - /url: /b/?_encoding=UTF8&node=1389335031&ref_=sv_top_elec_mega_4
        - button "Audio, You are currently on a drop-down. To open this drop-down, Press Enter."
      - listitem:
        - link "Cameras":
          - /url: /b/?_encoding=UTF8&node=1388977031&ref_=sv_top_elec_mega_5
        - button "Cameras, You are currently on a drop-down. To open this drop-down, Press Enter."
      - listitem:
        - link "Computer Peripherals":
          - /url: /b/?_encoding=UTF8&node=1375248031&ref_=sv_top_elec_mega_6
        - button "Computer Peripherals, You are currently on a drop-down. To open this drop-down, Press Enter."
      - listitem:
        - link "Smart Technology":
          - /url: /b/?_encoding=UTF8&node=13773797031&ref_=sv_top_elec_mega_7
        - button "Smart Technology, You are currently on a drop-down. To open this drop-down, Press Enter."
      - listitem:
        - link "Musical Instruments":
          - /url: /b/?_encoding=UTF8&node=3677697031&ref_=sv_top_elec_mega_8
        - button "Musical Instruments, You are currently on a drop-down. To open this drop-down, Press Enter."
      - listitem:
        - link "Office & Stationery":
          - /url: /b/?_encoding=UTF8&node=2454172031&ref_=sv_top_elec_mega_9
        - button "Office & Stationery, You are currently on a drop-down. To open this drop-down, Press Enter."
    - dialog
- main:
  - iframe
  - button "Leave feedback on Sponsored advertisement"
  - list:
    - listitem:
      - link "Computers & Accessories":
        - /url: /computers-and-accessories/b/ref=dp_bc_1?ie=UTF8&node=976392031
    - listitem:
      - link "Laptops":
        - /url: /Laptops/b/ref=dp_bc_2?ie=UTF8&node=1375424031
    - listitem:
      - link "Traditional Laptops":
        - /url: /b/ref=dp_bc_3?ie=UTF8&node=22963796031
  - img "Amazon Prime Logo"
  - text: Enjoy
  - strong: Unlimited FREE Same day/1-day delivery
  - text: ", Prime offers everyday and more"
  - button "Join Prime >>":
    - strong: Join Prime >>
  - group:
    - button "With Exchange Up to 18,100.00 off":
      - heading "With Exchange Up to 18,100.00 off" [level=5]
    - button "Without Exchange 48,990.00 52,055.00" [expanded]:
      - heading "Without Exchange 48,990.00 52,055.00" [level=5]
    - img "Fulfilled"
    - text: Fulfilled FREE delivery Friday, 31 July.
    - link "Details about delivery costs and shipping methods":
      - /url: /gp/help/customer/display.html/?nodeId=200534000
      - text: Details
    - text: +₹129 service fee. Delivery associate will open and verify item.
    - button "Details"
    - text: Or fastest delivery Tomorrow 8 am - 12 pm . Order within 9 hrs 32 mins.
    - link "Details about delivery costs and shipping methods":
      - /url: /gp/help/customer/display.html/?nodeId=200534000
      - text: Details
    - button "Deliver to Krishna - Ghaziabad 201017‌"
    - text: In stock
    - combobox:
      - option "1" [selected]
      - option "2"
      - option "3+"
    - button "Add to cart"
    - button "Buy Now"
    - group "Seller, shipping, and buying option details":
      - heading "Ships from" [level=4]
      - text: Amazon
      - heading "Sold by" [level=4]
      - link "Clicktech Retail Private Ltd":
        - /url: /gp/help/seller/at-a-glance.html/ref=dp_merchant_link?ie=UTF8&seller=AJ6SIZC8YQDZX&asin=B0G3PMNXLJ&ref_=dp_merchant_link&isAmazonFulfilled=1
      - heading "Gift options" [level=4]
      - button "Available at checkout"
      - heading "Payment" [level=4]
      - button "Secure transaction"
    - group "Include":
      - heading "Add a Protection Plan:"
      - checkbox "1 Year Extended warranty by OneAssist for ₹1,929.00"
      - link "1 Year Extended warranty by OneAssist":
        - /url: "#"
      - text: for ₹1,929.00
      - checkbox "1 Year Total Protection by OneAssist for ₹1,999.00"
      - link "1 Year Total Protection by OneAssist":
        - /url: "#"
      - text: for ₹1,999.00
  - button "Add to Wish List"
  - button "Select a list from the drop-down"
  - text: Save up to 15% on this product with business pricing and GST input tax credit
  - link "Create a free account":
    - /url: /business/register/org/landing?ref_=ab_reg_bioab&returnToUrl=%2Fdp%2FB0G3PMNXLJ%3FregistrationStatus%3DREGISTERED&client=abupsell
  - button "Share":
    - button "Share"
  - radiogroup "Image thumbnails":
    - listitem:
      - radio "Product Image":
        - img "Product Image"
    - listitem:
      - radio "Product Image":
        - img "Product Image"
    - listitem:
      - radio "Product Image":
        - img "Product Image"
    - listitem:
      - radio "Product Image":
        - img "Product Image"
    - listitem:
      - radio "Product Image":
        - img "Product Image"
    - listitem:
      - radio "Product Image":
        - img "Product Image"
    - listitem:
      - radio "Product Image 7+":
        - img "Product Image"
        - text: 7+
  - list
  - list:
    - listitem:
      - button "HP 15, 13th Gen Intel Core i3-1315U (8GB DDR4, 512GB SSD), FHD, Micro -Edge, Anti-Glare, 15.6&#39;&#39;/39.6cm, Win11, M365* Office24, Silver, 1.59kg, fd0624tu, FHD Camera, UHD Graphics Laptop":
        - img "HP 15, 13th Gen Intel Core i3-1315U (8GB DDR4, 512GB SSD), FHD, Micro -Edge, Anti-Glare, 15.6&#39;&#39;/39.6cm, Win11, M365* Office24, Silver, 1.59kg, fd0624tu, FHD Camera, UHD Graphics Laptop"
  - link "Click to see full view":
    - /url: "#"
  - heading "Ask Rufus" [level=5]
  - list:
    - listitem:
      - button "Can it run graphic design software?"
    - listitem:
      - button "Does it have a backlit keyboard?"
    - listitem:
      - button "Does it come with a mouse?"
    - listitem:
      - button "Ask something else"
  - button
  - heading "HP 15, 13th Gen Intel Core i3-1315U (8GB DDR4, 512GB SSD), FHD, Micro -Edge, Anti-Glare, 15.6''/39.6cm, Win11, M365* Office24, Silver, 1.59kg, fd0624tu, FHD Camera, UHD Graphics Laptop" [level=1]
  - link "Visit the HP Store":
    - /url: /stores/HP/page/DC0D6D54-3324-4C73-9E66-863A76269836?lp_asin=B0G3PMNXLJ&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto
  - button "5.0 out of 5 stars"
  - link "2 Reviews":
    - /url: "#averageCustomerReviewsAnchor"
    - text: (2)
  - link "Search this page":
    - /url: "#"
  - separator
  - text: ₹2,399 /month (24 months) with EMI on your OneCard
  - button "All EMI Plans"
  - text: ₹48,990.00 with 6 percent savings
  - button "Price history"
  - text: "M.R.P.: ₹52,055.00"
  - img "Fulfilled"
  - text: Fulfilled Inclusive of all taxes
  - table
  - link "Save up to 15% with business pricing and GST input tax credit. Sign up for a free Amazon Business account":
    - /url: /business/register/org/landing?ref_=vpr_dpm&returnToUrl=%2Fdp%2FB0G3PMNXLJ%3FregistrationStatus%3DREGISTERED&client=abupsell
  - heading "Offers" [level=5]
  - region:
    - list:
      - listitem:
        - heading "Bank Offer" [level=6]
        - text: Upto ₹2,449.50 discount on select Credit Cards, SBI Debit Cards
        - link "14 offers":
          - /url: "#"
      - listitem:
        - heading "Cashback" [level=6]
        - text: Upto ₹1,469.00 cashback as Amazon Pay Balance when you pay with select Credit Cards
        - link "5 offers":
          - /url: "#"
      - listitem:
        - heading "No Cost EMI" [level=6]
        - text: Upto ₹1,277.16 EMI interest savings on Amazon Pay ICICI Bank Credit Cards
        - link "1 offer":
          - /url: "#"
    - button "Next page"
  - region:
    - list:
      - listitem:
        - button "10 days Replacement by Brand"
      - listitem:
        - button "Free Delivery"
      - listitem:
        - button "1 Year Warranty Care"
      - listitem:
        - button "Pay on Delivery"
      - listitem:
        - button "Top Brand"
    - button "Next page"
  - list:
    - rowgroup:
      - listitem: Brand HP
      - listitem: Model Name HP Laptop
      - listitem: Screen Size 39.6 Centimetres
      - listitem: Colour Silver
      - listitem: Hard Disk Size 512 GB
      - listitem: CPU Model Core i3
      - listitem: RAM Memory Installed Size 8 GB
      - listitem: Operating System Windows 11 Home
      - listitem: Special Feature Anti Glare Coating, Backlit Keyboard
      - listitem: Graphics Card Description Integrated
  - button "See more"
  - heading "About this item" [level=2]
  - list:
    - listitem: "Processor, Memory & Storage: Intel Core i3-1315U (up to 4.5 GHz with Intel Turbo Boost Technology, 10 MB L3 cache, 6 cores, 8 threads) | Memory: 8 GB DDR4-3200 MT/s (1 x 8 GB) | Storage: 512 GB PCIe NVMe M.2 SSD"
    - listitem: "Operating System & Preinstalled Software: Windows 11 Home Single Language| MS Office Home 2024 + MISC PC Game Pass DA 3M| 1 year Microsoft 365 Basic Free"
    - listitem: "Display & Graphics: 39.6 cm (15.6\") diagonal, FHD (1920 x 1080), micro-edge, anti-glare, 250 nits, 45% NTSC| Graphics: Intel UHD Graphics"
    - listitem: "Ports & Connectivity : 1 USB Type-C 5Gbps signaling rate (supports data transfer only and does not support charging or external monitors); 2 USB Type-A 5Gbps signaling rate; 1 AC smart pin; 1 HDMI 1.4b; 1 headphone/microphone combo| Wireless: Realtek Wi-Fi 6 (2x2) and Bluetooth 5.4 wireless card"
    - listitem: "Other Features: Camera: HP True Vision 1080p FHD camera with temporal noise reduction and integrated dual array digital microphones| Keyboard: Full-size, non-backlit, soft grey keyboard with numeric keypad| Audio: Dual speakers|Battery type: 3-cell, 41 Wh Li-ion polymer; Supports battery fast charge: approximately 50% in 45 minutes|Power supply type 65 W USB Type-C power adapter"
  - text: ›
  - link "See more product details":
    - /url: "#productDetails"
  - link "Report an issue with this product":
    - /url: "#"
  - text: Explore home, kitchen & more products from Solimo. Premium Quality. Great Value. Solimo offers a range of kitchenware, home furnishing, mobile accessories, appliances, home decor, backpacks, mattresses and much more.
  - link "Solimo":
    - /url: /b/ref=soli_hqp?_encoding=UTF8&node=8505267031&pf_rd_p=9bb1f532-7f1d-47c4-96c6-b047e11c8e47&pf_rd_r=XAKRRWWXKPYM70T1TNBJ
    - text: Shop now
  - group:
    - heading "Customers who viewed this item also viewed" [level=2]
    - button "Not interested in specific items"
    - group:
      - list:
        - listitem:
          - link "HP 15 Smartchoice, 13th Gen Intel Core i3-1315U(8GB DDR4,512GB SSD) FHD, Anti-Glare, Micro-Edge, 15.6''/39.6cm, Win11, M365(1yr)*Office24, Silver,1.59kg, fd0572TU, FHD Camera w/Shutter, Backlit Laptop":
            - /url: /HP-i3-1315U-Anti-Glare-Micro-Edge-fd0572TU/dp/B0F4R6GXWJ/ref=pd_sbs_d_sccl_1_1/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0F4R6GXWJ&psc=1
          - link "4.1 out of 5 stars, 134 ratings":
            - /url: /product-reviews/B0F4R6GXWJ/ref=pd_sbs_d_sccl_1_1_cr/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0F4R6GXWJ
          - link "-4%":
            - /url: /HP-i3-1315U-Anti-Glare-Micro-Edge-fd0572TU/dp/B0F4R6GXWJ/ref=pd_sbs_d_sccl_1_1/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0F4R6GXWJ&psc=1
          - link "₹49,990.00":
            - /url: /HP-i3-1315U-Anti-Glare-Micro-Edge-fd0572TU/dp/B0F4R6GXWJ/ref=pd_sbs_d_sccl_1_1/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0F4R6GXWJ&psc=1
          - 'link "M.R.P: ₹52,114.17"':
            - /url: /HP-i3-1315U-Anti-Glare-Micro-Edge-fd0572TU/dp/B0F4R6GXWJ/ref=pd_sbs_d_sccl_1_1/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0F4R6GXWJ&psc=1
          - text: Get it by Thursday, August 13 FREE Delivery by Amazon
        - listitem:
          - link "HP Laptop 15 Intel Core i3 13th Gen (8GB|512 GB SSD)/Window 11 Home 15-FD0533TU Laptop (15.6 inch,Natural Silver,1.59 kg, with MS Office":
            - /url: /HP-Laptop-Window-15-FD0533TU-Natural/dp/B0GR9Q34RL/ref=pd_sbs_d_sccl_1_2/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GR9Q34RL&psc=1
          - link "3.0 out of 5 stars, 4 ratings":
            - /url: /product-reviews/B0GR9Q34RL/ref=pd_sbs_d_sccl_1_2_cr/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GR9Q34RL
          - link "-4%":
            - /url: /HP-Laptop-Window-15-FD0533TU-Natural/dp/B0GR9Q34RL/ref=pd_sbs_d_sccl_1_2/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GR9Q34RL&psc=1
          - link "₹47,490.00":
            - /url: /HP-Laptop-Window-15-FD0533TU-Natural/dp/B0GR9Q34RL/ref=pd_sbs_d_sccl_1_2/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GR9Q34RL&psc=1
          - 'link "M.R.P: ₹49,631.00"':
            - /url: /HP-Laptop-Window-15-FD0533TU-Natural/dp/B0GR9Q34RL/ref=pd_sbs_d_sccl_1_2/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GR9Q34RL&psc=1
          - text: Get it by Monday, August 3 FREE Delivery by Amazon
        - listitem:
          - link "HP 15, Intel Core i3-1315U-13th Gen Laptop (8GB DDR4 Ram,512GB SSD) Anti-Glare, Micro-Edge,15.6'\" FHD, Win11,M365 Basic(1yr),Office Home24, Silver,1.59kg, FHD Camera Shutter, 15-fd0569TU":
            - /url: /HP-i3-1315U-13th-Anti-Glare-Micro-Edge-fd0569TU/dp/B0FKN7Z65N/ref=pd_sbs_d_sccl_1_3/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0FKN7Z65N&psc=1
          - link "3.8 out of 5 stars, 42 ratings":
            - /url: /product-reviews/B0FKN7Z65N/ref=pd_sbs_d_sccl_1_3_cr/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0FKN7Z65N
          - link "₹50,903.00":
            - /url: /HP-i3-1315U-13th-Anti-Glare-Micro-Edge-fd0569TU/dp/B0FKN7Z65N/ref=pd_sbs_d_sccl_1_3/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0FKN7Z65N&psc=1
          - text: Get it by Sunday, August 2 FREE Delivery by Amazon
        - listitem:
          - link "HP Professional 15 (2026), Intel (i3 14th Gen) Core 3 100U - (8 GB DDR5/512 GB SSD/Intel UHD Graphics/Windows 11 Pro) Thin & Light Business Laptop/15.6\" FHD/Fingerprint/Silver/1.5kg/MS Office":
            - /url: /HP-Professional-15-Intel-14th/dp/B0GHSYD43X/ref=pd_sbs_d_sccl_1_4/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GHSYD43X&psc=1
          - link "2.7 out of 5 stars, 12 ratings":
            - /url: /product-reviews/B0GHSYD43X/ref=pd_sbs_d_sccl_1_4_cr/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GHSYD43X
          - link "-27%":
            - /url: /HP-Professional-15-Intel-14th/dp/B0GHSYD43X/ref=pd_sbs_d_sccl_1_4/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GHSYD43X&psc=1
          - link "₹49,200.00":
            - /url: /HP-Professional-15-Intel-14th/dp/B0GHSYD43X/ref=pd_sbs_d_sccl_1_4/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GHSYD43X&psc=1
          - 'link "M.R.P: ₹67,000.00"':
            - /url: /HP-Professional-15-Intel-14th/dp/B0GHSYD43X/ref=pd_sbs_d_sccl_1_4/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GHSYD43X&psc=1
          - text: Get it by Monday, August 3 FREE Delivery by Amazon
        - listitem:
          - link "HP Professional 15 (2026), Intel (i3 14th Gen) Core 3 100U - (8 GB/512 GB SSD/Intel UHD Graphics/Windows 11 Home) Thin & Light Business Laptop/15.6\" Display/Turbo Silver/Copilot Key/1.5kg/MS Office":
            - /url: /HP-Professional-15-Intel-14th/dp/B0GY7YKXY5/ref=pd_sbs_d_sccl_1_5/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GY7YKXY5&psc=1
          - link "4.0 out of 5 stars, 1 ratings":
            - /url: /product-reviews/B0GY7YKXY5/ref=pd_sbs_d_sccl_1_5_cr/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GY7YKXY5
          - link "-51%":
            - /url: /HP-Professional-15-Intel-14th/dp/B0GY7YKXY5/ref=pd_sbs_d_sccl_1_5/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GY7YKXY5&psc=1
          - link "₹49,440.00":
            - /url: /HP-Professional-15-Intel-14th/dp/B0GY7YKXY5/ref=pd_sbs_d_sccl_1_5/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GY7YKXY5&psc=1
          - 'link "M.R.P: ₹1,00,990.00"':
            - /url: /HP-Professional-15-Intel-14th/dp/B0GY7YKXY5/ref=pd_sbs_d_sccl_1_5/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GY7YKXY5&psc=1
          - text: Get it by Monday, August 3 FREE Delivery by Amazon
        - listitem:
          - link "HP Professional 15 (2026), Intel (i3 14th Gen) Core 3 100U - (16 GB/512 GB SSD/Intel UHD Graphics/Windows 11 Home) Thin & Light Business Laptop/15.6\" Display/Turbo Silver/Copilot Key/1.5kg/MS Office":
            - /url: /HP-Professional-15-Intel-14th/dp/B0GHSN1N24/ref=pd_sbs_d_sccl_1_6/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GHSN1N24&psc=1
          - link "5.0 out of 5 stars, 2 ratings":
            - /url: /product-reviews/B0GHSN1N24/ref=pd_sbs_d_sccl_1_6_cr/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GHSN1N24
          - link "-20%":
            - /url: /HP-Professional-15-Intel-14th/dp/B0GHSN1N24/ref=pd_sbs_d_sccl_1_6/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GHSN1N24&psc=1
          - link "₹55,600.00":
            - /url: /HP-Professional-15-Intel-14th/dp/B0GHSN1N24/ref=pd_sbs_d_sccl_1_6/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GHSN1N24&psc=1
          - 'link "M.R.P: ₹69,688.00"':
            - /url: /HP-Professional-15-Intel-14th/dp/B0GHSN1N24/ref=pd_sbs_d_sccl_1_6/522-2559920-9912533?pd_rd_w=STMzO&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47&pd_rd_i=B0GHSN1N24&psc=1
          - text: Get it by Thursday, July 30 FREE Delivery by Amazon
  - region "Related products with free delivery on eligible orders":
    - heading "Related products with free delivery on eligible orders" [level=2]
    - link "Sponsored":
      - /url: "#sp_detail_thematic-prime_theme_for_non_prime_members_feedbackForm"
    - list:
      - listitem:
        - link "Wozoyo HDMI Cable V2.0 with Ethernet, Ultra HD 3D/4K@60Hz, 2 Meter, 18Gbps transmission Speed, HDR, Dolby Atmos, Compatible with all HDMI Devices Laptop Desktop TV Set-top Box Gaming Console":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTIxMjM5MjU4MTYzMjo6Ojo&url=%2Fdp%2FB0GS9DY6Y3%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB0GS9DY6Y3%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DnbwkmqYmGa%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=nbwkmqYmGa&sp_cr=ZAZ
        - link "5.0 out of 5 stars 3 ratings":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTIxMjM5MjU4MTYzMjo6Ojo&url=%2Fdp%2FB0GS9DY6Y3%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB0GS9DY6Y3%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DnbwkmqYmGa%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=nbwkmqYmGa&sp_cr=ZAZ#customerReviews
        - 'link "-63% ₹659.00 M.R.P: ₹1,799.00 M.R.P: ₹1,799.00"':
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTIxMjM5MjU4MTYzMjo6Ojo&url=%2Fdp%2FB0GS9DY6Y3%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB0GS9DY6Y3%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DnbwkmqYmGa%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=nbwkmqYmGa&sp_cr=ZAZ
        - link "FREE delivery Thu, 30 Jul":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTIxMjM5MjU4MTYzMjo6Ojo&url=%2Fdp%2FB0GS9DY6Y3%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB0GS9DY6Y3%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DnbwkmqYmGa%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=nbwkmqYmGa&sp_cr=ZAZ
      - listitem:
        - link "Wozoyo HDMI Cable V2.0 with Ethernet, Ultra HD 3D/4K@60Hz, 5 Meter, 18Gbps transmission Speed, HDR, Dolby Atmos, Compatible with all HDMI Devices Laptop Desktop TV Set-top Box Gaming Console":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTIxMjM5MjU4MjczMjo6Ojo&url=%2Fdp%2FB0GS8XD6YL%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB0GS8XD6YL%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DRSK6vTXYLH%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=RSK6vTXYLH&sp_cr=ZAZ
        - link "5.0 out of 5 stars 1 rating":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTIxMjM5MjU4MjczMjo6Ojo&url=%2Fdp%2FB0GS8XD6YL%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB0GS8XD6YL%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DRSK6vTXYLH%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=RSK6vTXYLH&sp_cr=ZAZ#customerReviews
        - 'link "-60% ₹1,209.00 M.R.P: ₹2,999.00 M.R.P: ₹2,999.00"':
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTIxMjM5MjU4MjczMjo6Ojo&url=%2Fdp%2FB0GS8XD6YL%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB0GS8XD6YL%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DRSK6vTXYLH%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=RSK6vTXYLH&sp_cr=ZAZ
        - link "FREE delivery Thu, 30 Jul":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTIxMjM5MjU4MjczMjo6Ojo&url=%2Fdp%2FB0GS8XD6YL%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB0GS8XD6YL%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DRSK6vTXYLH%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=RSK6vTXYLH&sp_cr=ZAZ
        - link "You pay ₹1,076.00 with coupon":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTIxMjM5MjU4MjczMjo6Ojo&url=%2Fdp%2FB0GS8XD6YL%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB0GS8XD6YL%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DRSK6vTXYLH%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=RSK6vTXYLH&sp_cr=ZAZ
      - listitem:
        - link "HP 15 (i5 14th Gen), Intel Core 5, 16GB RAM (Upgradeable), 512GB SSD, FHD, Anti-Glare, 15.6''/39.6cm, Win11, M365 Basic(1yr), Office24, Silver,1.59kg, fd0682tu, FHD Camera w/Shutter, Backlit Laptop":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMDgyNTkxNjY0NjQzMjo6Ojo&url=%2Fdp%2FB0FFTLRYRV%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB0FFTLRYRV%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DzrqrlL889d%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=zrqrlL889d&sp_cr=ZAZ
        - link "3.6 out of 5 stars 24 ratings":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMDgyNTkxNjY0NjQzMjo6Ojo&url=%2Fdp%2FB0FFTLRYRV%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB0FFTLRYRV%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DzrqrlL889d%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=zrqrlL889d&sp_cr=ZAZ#customerReviews
        - 'link "-2% ₹67,990.00 M.R.P: ₹69,629.00 M.R.P: ₹69,629.00"':
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMDgyNTkxNjY0NjQzMjo6Ojo&url=%2Fdp%2FB0FFTLRYRV%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB0FFTLRYRV%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DzrqrlL889d%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=zrqrlL889d&sp_cr=ZAZ
        - link "FREE delivery Fri, 31 Jul":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMDgyNTkxNjY0NjQzMjo6Ojo&url=%2Fdp%2FB0FFTLRYRV%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB0FFTLRYRV%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DzrqrlL889d%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=zrqrlL889d&sp_cr=ZAZ
      - listitem:
        - link "Lenovo V14 Intel Core i3 13th Gen 14\" FHD (1920x1080) Antiglare 250 Nits Thin and Light Laptop (16GB RAM/512GB SSD/Windows 11 Home/Office Home 2024/Iron Grey/1.43 kg), 83A0A0PCIN":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMDY5NjkyNDAyNDAzMjo6Ojo&url=%2Fdp%2FB0FNQZ9HWX%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB0FNQZ9HWX%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dd3nLvF08qV%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=d3nLvF08qV&sp_cr=ZAZ
        - link "3.6 out of 5 stars 9 ratings":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMDY5NjkyNDAyNDAzMjo6Ojo&url=%2Fdp%2FB0FNQZ9HWX%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB0FNQZ9HWX%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dd3nLvF08qV%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=d3nLvF08qV&sp_cr=ZAZ#customerReviews
        - 'link "-1% ₹70,990.00 M.R.P: ₹72,000.00 M.R.P: ₹72,000.00"':
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMDY5NjkyNDAyNDAzMjo6Ojo&url=%2Fdp%2FB0FNQZ9HWX%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB0FNQZ9HWX%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dd3nLvF08qV%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=d3nLvF08qV&sp_cr=ZAZ
        - link "FREE delivery Fri, 31 Jul":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMDY5NjkyNDAyNDAzMjo6Ojo&url=%2Fdp%2FB0FNQZ9HWX%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB0FNQZ9HWX%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dd3nLvF08qV%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=d3nLvF08qV&sp_cr=ZAZ
      - listitem:
        - link "Lenovo IdeaPad Slim 3 13th Gen Intel Core i3-1315U 15.6 Inch (39.6cm) FHD Thin & Light Laptop (8GB/512GB SSD/Windows 11/Office Home 2024/Grey/1.62Kg), 82X700HJIN/HHIN":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTIwODI4NjcyMDYzMjo6Ojo&url=%2Fdp%2FB0G2SSS2V8%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB0G2SSS2V8%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DpemIAGIjw3%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=pemIAGIjw3&sp_cr=ZAZ
        - link "4.0 out of 5 stars 1 rating":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTIwODI4NjcyMDYzMjo6Ojo&url=%2Fdp%2FB0G2SSS2V8%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB0G2SSS2V8%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DpemIAGIjw3%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=pemIAGIjw3&sp_cr=ZAZ#customerReviews
        - 'link "-1% ₹53,061.00 M.R.P: ₹53,790.00 M.R.P: ₹53,790.00"':
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTIwODI4NjcyMDYzMjo6Ojo&url=%2Fdp%2FB0G2SSS2V8%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB0G2SSS2V8%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DpemIAGIjw3%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=pemIAGIjw3&sp_cr=ZAZ
        - link "FREE delivery Fri, 31 Jul":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTIwODI4NjcyMDYzMjo6Ojo&url=%2Fdp%2FB0G2SSS2V8%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB0G2SSS2V8%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DpemIAGIjw3%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=pemIAGIjw3&sp_cr=ZAZ
      - listitem:
        - link "HyperX Cloud Stinger 2 Core Essential PC Gaming Wired Headset, Lightweight Over Ear Headset with mic, Swivel-to-Mute Function, 40mm Drivers (683L9AA), Black":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMDI4NjU5ODI4MzkzMjo6Ojo&url=%2Fdp%2FB0BCFKG49M%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB0BCFKG49M%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dsold9tMl78%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=sold9tMl78&sp_cr=ZAZ
        - link "4.0 out of 5 stars 4,538 ratings":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMDI4NjU5ODI4MzkzMjo6Ojo&url=%2Fdp%2FB0BCFKG49M%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB0BCFKG49M%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dsold9tMl78%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=sold9tMl78&sp_cr=ZAZ#customerReviews
        - link "Amazon's Choice":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMDI4NjU5ODI4MzkzMjo6Ojo&url=%2Fdp%2FB0BCFKG49M%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB0BCFKG49M%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dsold9tMl78%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=sold9tMl78&sp_cr=ZAZ
        - 'link "-42% ₹2,799.00 M.R.P: ₹4,797.00 M.R.P: ₹4,797.00"':
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMDI4NjU5ODI4MzkzMjo6Ojo&url=%2Fdp%2FB0BCFKG49M%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB0BCFKG49M%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dsold9tMl78%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=sold9tMl78&sp_cr=ZAZ
        - link "FREE delivery 30 Jul - 4 Aug":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMDI4NjU5ODI4MzkzMjo6Ojo&url=%2Fdp%2FB0BCFKG49M%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB0BCFKG49M%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dsold9tMl78%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=sold9tMl78&sp_cr=ZAZ
      - listitem:
        - link "Klenzmo Screen & Camera Lens Cleaner Spray + Cloth – 250ml | Cleans laptop, TV, flat screens, phone displays & camera lenses. Includes microfiber cloth.":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTAyNDI2NDE4NTQzMjo6Ojo&url=%2Fdp%2FB0BLZCPPLS%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB0BLZCPPLS%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DHV58vtzTxL%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=HV58vtzTxL&sp_cr=ZAZ
        - link "4.3 out of 5 stars 1,702 ratings":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTAyNDI2NDE4NTQzMjo6Ojo&url=%2Fdp%2FB0BLZCPPLS%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB0BLZCPPLS%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DHV58vtzTxL%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=HV58vtzTxL&sp_cr=ZAZ#customerReviews
        - 'link "-27% ₹399.00 M.R.P: ₹548.00 M.R.P: ₹548.00"':
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTAyNDI2NDE4NTQzMjo6Ojo&url=%2Fdp%2FB0BLZCPPLS%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB0BLZCPPLS%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DHV58vtzTxL%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=HV58vtzTxL&sp_cr=ZAZ
        - link "FREE delivery Thu, 30 Jul":
          - /url: /sspa/click?ie=UTF8&spc=MTo0NTE3MDAyMzQ1MzQyODA5OjE3ODUyMjYzNzQ6c3BfZGV0YWlsX3RoZW1hdGljOjMwMTAyNDI2NDE4NTQzMjo6Ojo&url=%2Fdp%2FB0BLZCPPLS%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB0BLZCPPLS%26pd_rd_w%3DlhcVF%26content-id%3Damzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_p%3Dcebd979a-4e06-4bc9-ba7d-b9887a34ed18%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DHV58vtzTxL%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=HV58vtzTxL&sp_cr=ZAZ
  - navigation:
    - navigation "Navigate within the product detail page":
      - navigation "Back to top jump link": Top
      - navigation "About this item widget jump link": About this item
      - navigation "Similar widget jump link": Similar
      - navigation "From the brand widget jump link": From the Brand
      - navigation "Questions widget jump link": Questions
      - navigation "Product information widget jump link": Product information
      - navigation "Customer reviews widget jump link": Reviews
    - navigation "Back to top Image jump link":
      - img "HP 15, 13th Gen Intel Core i3-1315U (8GB DDR4, 512GB SSD), FHD, Micro -Edge, Anti-Glare, 15.6''/39.6cm, Win11, M365* Office24, Silver, 1.59kg, fd0624tu, FHD Camera, UHD Graphics Laptop"
    - navigation "Back to top title jump link": HP 15, 13th Gen Intel Core i3-1315U (8GB DDR4, 512GB SSD), FHD, Micro -Edge, Anti-Glare, 15.6''/39.6cm, Win11, M365* Office24, Silver, 1.59kg, fd0624tu, FHD Camera, UHD Graphics Laptop
  - separator
  - heading "From the manufacturer" [level=2]
  - region "Featured content carousel":
    - list:
      - listitem:
        - img "PRIVACY Shutter"
      - listitem:
        - img "15 inch"
      - listitem:
        - img "Long battery"
  - tablist "tablist-section":
    - listitem:
      - tab "slide-1" [selected]
    - listitem:
      - tab "slide-2"
    - listitem:
      - tab "slide-3"
  - img "Intel core i3"
  - region "Featured content carousel":
    - list:
      - listitem:
        - img "Processor"
      - listitem:
        - img "FHD Display"
      - listitem:
        - img "8Gb storage"
  - tablist "tablist-section":
    - listitem:
      - tab "slide-1" [selected]
    - listitem:
      - tab "slide-2"
    - listitem:
      - tab "slide-3"
  - img "Battery"
  - region "Featured content carousel":
    - list:
      - listitem:
        - img "Connectivity"
      - listitem:
        - img "Numeric keypad"
  - tablist "tablist-section":
    - listitem:
      - tab "slide-1" [selected]
    - listitem:
      - tab "slide-2"
  - img "Sustainability"
  - img "Disclaimer"
  - heading "Rufus AI Looking for specific info?" [level=3]
  - textbox "Looking for specific info?":
    - /placeholder: Ask Rufus or search reviews and Q&A
  - button "Submit":
    - img "Submit"
  - list:
    - listitem:
      - button "Can it run graphic design software?"
    - listitem:
      - button "Does it have a backlit keyboard?"
    - listitem:
      - button "Does it come with a mouse?"
    - listitem:
      - button "Is the laptop lightweight?"
  - heading "Top Brand HP" [level=2]:
    - paragraph: Top Brand
    - paragraph: HP
  - list:
    - listitem:
      - paragraph: 86% positive ratings from 100K+ customers
    - listitem:
      - paragraph: 100K+ recent orders from this brand
    - listitem:
      - paragraph: 13+ years on Amazon
  - heading "Product information" [level=1]
  - button "Additional details":
    - heading "Additional details" [level=5]
  - button "Display":
    - heading "Display" [level=5]
  - button "Memory":
    - heading "Memory" [level=5]
  - button "Battery":
    - heading "Battery" [level=5]
  - button "Input Devices":
    - heading "Input Devices" [level=5]
  - heading "Feedback" [level=3]
  - text: Would you like to
  - button "tell us about a lower price?"
  - button "Processor":
    - heading "Processor" [level=5]
  - button "Item details":
    - heading "Item details" [level=5]
  - button "Connectivity":
    - heading "Connectivity" [level=5]
  - button "Ports & Slots":
    - heading "Ports & Slots" [level=5]
  - button "Audio":
    - heading "Audio" [level=5]
  - heading "What is in the box?" [level=2]
  - listitem: Laptop, Power Adapter, User manual
  - listitem: Laptop, Power Adapter, User manual
  - region "Based on your recent views":
    - heading "Based on your recent views" [level=2]
    - link "Sponsored":
      - /url: "#sp_detail2-recent_history_feedbackForm"
    - list:
      - listitem:
        - link "HP Smart Tank 580 All-in-One WiFi Colour Printer | 1 Extra Black Ink Bottle | 1+1 Year Extended Warranty on Registration| Up to 8000 Black & 6000 Colour Prints I Print,Scan & Copy for Office/Home":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDA1NTE2Nzc2NTEzMzI6Ojo6&url=%2Fdp%2FB0BN1S41VH%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB0BN1S41VH%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dwni9ZfrVYQ%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=wni9ZfrVYQ&sp_cr=ZAZ
        - link "4.0 out of 5 stars 1,740 ratings":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDA1NTE2Nzc2NTEzMzI6Ojo6&url=%2Fdp%2FB0BN1S41VH%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB0BN1S41VH%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dwni9ZfrVYQ%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=wni9ZfrVYQ&sp_cr=ZAZ#customerReviews
        - 'link "-21% ₹14,879.00 M.R.P: ₹18,848.00 M.R.P: ₹18,848.00"':
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDA1NTE2Nzc2NTEzMzI6Ojo6&url=%2Fdp%2FB0BN1S41VH%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB0BN1S41VH%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dwni9ZfrVYQ%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=wni9ZfrVYQ&sp_cr=ZAZ
        - link "FREE delivery as soon as Thu, 30 Jul, 7 am - 10 pm":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDA1NTE2Nzc2NTEzMzI6Ojo6&url=%2Fdp%2FB0BN1S41VH%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB0BN1S41VH%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dwni9ZfrVYQ%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=wni9ZfrVYQ&sp_cr=ZAZ
      - listitem:
        - link "HyperX Cloud Stinger 2 Core Essential PC Gaming Wired Headset, Lightweight Over Ear Headset with mic, Swivel-to-Mute Function, 40mm Drivers (683L9AA), Black":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDAyODY1OTgyODM5MzI6Ojo6&url=%2Fdp%2FB0BCFKG49M%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB0BCFKG49M%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dsold9tMl78%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=sold9tMl78&sp_cr=ZAZ
        - link "4.0 out of 5 stars 4,538 ratings":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDAyODY1OTgyODM5MzI6Ojo6&url=%2Fdp%2FB0BCFKG49M%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB0BCFKG49M%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dsold9tMl78%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=sold9tMl78&sp_cr=ZAZ#customerReviews
        - link "Amazon's Choice":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDAyODY1OTgyODM5MzI6Ojo6&url=%2Fdp%2FB0BCFKG49M%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB0BCFKG49M%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dsold9tMl78%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=sold9tMl78&sp_cr=ZAZ
        - 'link "-42% ₹2,799.00 M.R.P: ₹4,797.00 M.R.P: ₹4,797.00"':
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDAyODY1OTgyODM5MzI6Ojo6&url=%2Fdp%2FB0BCFKG49M%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB0BCFKG49M%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dsold9tMl78%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=sold9tMl78&sp_cr=ZAZ
        - link "FREE delivery 30 Jul - 4 Aug":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDAyODY1OTgyODM5MzI6Ojo6&url=%2Fdp%2FB0BCFKG49M%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB0BCFKG49M%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3Dsold9tMl78%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=sold9tMl78&sp_cr=ZAZ
      - listitem:
        - link "Wayona 100W USB C to USB C Cable 1.5M, Type C Fast Charging Cable Compatible with iPhone 16/16 Plus/16 Pro/16 Pro Max,15 Series, Galaxy S25 Ultra,S24/S23/S22, Car Play, MacBook, i Pad, Pixel-Grey":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDA0NzIxMjQ0ODE0MzI6Ojo6&url=%2Fdp%2FB0DTHGVZCV%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB0DTHGVZCV%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3D8uBQrGkENf%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=8uBQrGkENf&sp_cr=ZAZ
        - link "4.4 out of 5 stars 413 ratings":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDA0NzIxMjQ0ODE0MzI6Ojo6&url=%2Fdp%2FB0DTHGVZCV%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB0DTHGVZCV%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3D8uBQrGkENf%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=8uBQrGkENf&sp_cr=ZAZ#customerReviews
        - link "Limited time deal":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDA0NzIxMjQ0ODE0MzI6Ojo6&url=%2Fdp%2FB0DTHGVZCV%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB0DTHGVZCV%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3D8uBQrGkENf%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=8uBQrGkENf&sp_cr=ZAZ
        - 'link "-63% ₹368.98 M.R.P: ₹1,000.00 M.R.P: ₹1,000.00"':
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDA0NzIxMjQ0ODE0MzI6Ojo6&url=%2Fdp%2FB0DTHGVZCV%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB0DTHGVZCV%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3D8uBQrGkENf%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=8uBQrGkENf&sp_cr=ZAZ
        - link "FREE delivery Fri, 31 Jul":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDA0NzIxMjQ0ODE0MzI6Ojo6&url=%2Fdp%2FB0DTHGVZCV%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB0DTHGVZCV%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3D8uBQrGkENf%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=8uBQrGkENf&sp_cr=ZAZ
      - listitem:
        - link "HAMMONDS FLYCATCHER Unisex Leather 15L Laptop Briefcase(Brown)":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDAxMTI5OTAxOTkxMzI6Ojo6&url=%2Fdp%2FB01J1LCHIG%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB01J1LCHIG%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DHdxSzKE3zd%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=HdxSzKE3zd&sp_cr=ZAZ
        - link "4.4 out of 5 stars 1,115 ratings":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDAxMTI5OTAxOTkxMzI6Ojo6&url=%2Fdp%2FB01J1LCHIG%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB01J1LCHIG%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DHdxSzKE3zd%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=HdxSzKE3zd&sp_cr=ZAZ#customerReviews
        - link "Limited time deal":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDAxMTI5OTAxOTkxMzI6Ojo6&url=%2Fdp%2FB01J1LCHIG%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB01J1LCHIG%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DHdxSzKE3zd%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=HdxSzKE3zd&sp_cr=ZAZ
        - 'link "-64% ₹3,569.00 M.R.P: ₹9,999.00 M.R.P: ₹9,999.00"':
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDAxMTI5OTAxOTkxMzI6Ojo6&url=%2Fdp%2FB01J1LCHIG%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB01J1LCHIG%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DHdxSzKE3zd%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=HdxSzKE3zd&sp_cr=ZAZ
        - link "FREE delivery Sun, 2 Aug":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDAxMTI5OTAxOTkxMzI6Ojo6&url=%2Fdp%2FB01J1LCHIG%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB01J1LCHIG%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DHdxSzKE3zd%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=HdxSzKE3zd&sp_cr=ZAZ
        - link "You pay ₹3,497.62 with coupon":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDAxMTI5OTAxOTkxMzI6Ojo6&url=%2Fdp%2FB01J1LCHIG%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB01J1LCHIG%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DHdxSzKE3zd%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=HdxSzKE3zd&sp_cr=ZAZ
      - listitem:
        - link "Wozoyo HDMI Cable V2.0 with Ethernet, Ultra HD 3D/4K@60Hz, 2 Meter, 18Gbps transmission Speed, HDR, Dolby Atmos, Compatible with all HDMI Devices Laptop Desktop TV Set-top Box Gaming Console":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDEyMTIzOTI1ODE2MzI6Ojo6&url=%2Fdp%2FB0GS9DY6Y3%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB0GS9DY6Y3%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DnbwkmqYmGa%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=nbwkmqYmGa&sp_cr=ZAZ
        - link "5.0 out of 5 stars 3 ratings":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDEyMTIzOTI1ODE2MzI6Ojo6&url=%2Fdp%2FB0GS9DY6Y3%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB0GS9DY6Y3%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DnbwkmqYmGa%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=nbwkmqYmGa&sp_cr=ZAZ#customerReviews
        - 'link "-63% ₹659.00 M.R.P: ₹1,799.00 M.R.P: ₹1,799.00"':
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDEyMTIzOTI1ODE2MzI6Ojo6&url=%2Fdp%2FB0GS9DY6Y3%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB0GS9DY6Y3%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DnbwkmqYmGa%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=nbwkmqYmGa&sp_cr=ZAZ
        - link "FREE delivery Thu, 30 Jul":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDEyMTIzOTI1ODE2MzI6Ojo6&url=%2Fdp%2FB0GS9DY6Y3%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB0GS9DY6Y3%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DnbwkmqYmGa%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=nbwkmqYmGa&sp_cr=ZAZ
      - listitem:
        - link "Wozoyo HDMI Cable V2.0 with Ethernet, Ultra HD 3D/4K@60Hz, 5 Meter, 18Gbps transmission Speed, HDR, Dolby Atmos, Compatible with all HDMI Devices Laptop Desktop TV Set-top Box Gaming Console":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDEyMTIzOTI1ODI3MzI6Ojo6&url=%2Fdp%2FB0GS8XD6YL%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB0GS8XD6YL%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DRSK6vTXYLH%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=RSK6vTXYLH&sp_cr=ZAZ
        - link "5.0 out of 5 stars 1 rating":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDEyMTIzOTI1ODI3MzI6Ojo6&url=%2Fdp%2FB0GS8XD6YL%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB0GS8XD6YL%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DRSK6vTXYLH%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=RSK6vTXYLH&sp_cr=ZAZ#customerReviews
        - 'link "-60% ₹1,209.00 M.R.P: ₹2,999.00 M.R.P: ₹2,999.00"':
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDEyMTIzOTI1ODI3MzI6Ojo6&url=%2Fdp%2FB0GS8XD6YL%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB0GS8XD6YL%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DRSK6vTXYLH%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=RSK6vTXYLH&sp_cr=ZAZ
        - link "FREE delivery Thu, 30 Jul":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDEyMTIzOTI1ODI3MzI6Ojo6&url=%2Fdp%2FB0GS8XD6YL%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB0GS8XD6YL%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DRSK6vTXYLH%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=RSK6vTXYLH&sp_cr=ZAZ
        - link "You pay ₹1,076.00 with coupon":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDEyMTIzOTI1ODI3MzI6Ojo6&url=%2Fdp%2FB0GS8XD6YL%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB0GS8XD6YL%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DRSK6vTXYLH%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=RSK6vTXYLH&sp_cr=ZAZ
      - listitem:
        - link "HP Smartchoice Victus, 13th Gen Intel Core i7-13620H, 8GB RTX 5060, 24GB DDR5(Upgradeable) 1TB SSD, 144Hz, FHD, 15.6\"/39.6cm, Win11, M365(1yr)*Office 24, Mica Silver,2.29Kg,fa2308TX, RGB Gaming Laptop":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDA5MDI1MTM3NzM2MzI6Ojo6&url=%2Fdp%2FB0FMYJK33B%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB0FMYJK33B%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DzsICi0wnCz%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=zsICi0wnCz&sp_cr=ZAZ
        - link "4.1 out of 5 stars 39 ratings":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDA5MDI1MTM3NzM2MzI6Ojo6&url=%2Fdp%2FB0FMYJK33B%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB0FMYJK33B%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DzsICi0wnCz%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=zsICi0wnCz&sp_cr=ZAZ#customerReviews
        - 'link "₹1,34,990.00 M.R.P: ₹1,35,620.06 M.R.P: ₹1,35,620.06"':
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDA5MDI1MTM3NzM2MzI6Ojo6&url=%2Fdp%2FB0FMYJK33B%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB0FMYJK33B%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DzsICi0wnCz%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=zsICi0wnCz&sp_cr=ZAZ
        - link "FREE delivery Sat, 8 Aug":
          - /url: /sspa/click?ie=UTF8&spc=MToxMjE3MjkxNTkxNTAzNzE0OjE3ODUyMjYzNzQ6c3BfZGV0YWlsMjozMDA5MDI1MTM3NzM2MzI6Ojo6&url=%2Fdp%2FB0FMYJK33B%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB0FMYJK33B%26pd_rd_w%3D95BQ0%26content-id%3Damzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_p%3D9a67d0ba-b3d8-41ee-8e29-a3d839054b56%26pf_rd_r%3DXAKRRWWXKPYM70T1TNBJ%26pd_rd_wg%3DuNYd6%26pd_rd_r%3D0c38b0d3-b559-4e02-9cc7-a085e3ccbd47%26aref%3DzsICi0wnCz%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWwy&aref=zsICi0wnCz&sp_cr=ZAZ
  - heading "Brands in this category on Amazon" [level=2]
  - button "Leave feedback on Sponsored ad": Sponsored
  - region "Brands in this category on Amazon":
    - generic:
      - group "1 of 2":
        - link "Sponsored ad from Lenovo Tablets. \"The Ultimate Entertainment Tablet.\" Shop Lenovo Tablets.":
          - /url: https://aax-eu-zaz.amazon.in/x/c/JLbp-qb7SjOfXa31f_R8TVYAAAGfp8itPQoAAAH2AQBvbm9fdHhuX2JpZDIgICBvbm9fdHhuX2ltcDEgICCR8dYl/clv1c_ek-ww4PXFdbWDVHQvp_9Itt67UySK2ptnHY41jL2X4M1zkWMwAX7CHks3d49Y5L5s-ShAtXG5Tn9JUo1GUTFlwEH5wHssoYT-j1afifX1KwrsxF4x4UN-kw54vRGrIZ128I7NSrlphMvYq4csqWuxiCbotuNivWetnSY3-7KnOddTm4QRsWG3MECY52fxS07UFuT4UhnBQ2y2umN4xPU52ODOwyuUdmTbX6cbnFta2F4t_4HnBveEwmSQUGXmlWoIIo1eYoAsL-g3XG-myJrNvEHQAHmaoMbhO13ilRZrdxTkpOMCemxBG03VY7bboz6wGlMrDHGrRBv4B_VD8CAyxdb1CmsABadpbtnxXtU9s_sxO3q2lZZV0PwmCLx85L0rv5xWwGDijBCg9Grt6N-3UMSm5vNbHK0KaqE6L3tUtq2bn4GB2rvxHBfQYbdtsgh7-nTKYLR6EFHJSeYNOJx69ofupAC6XlCjA1KYa5w84fys481HIxG-Z8hKCePJ6NM4zNzJuXA0FdNp_2ZS5T2QI0U1yUYwFNYtSv9-ML3nVcVAeMXFO9O_dGCyc82mL5f-As1Z2zovxEudUJIA4tEJbiw5qdOrAVGCXJ1yjMbKO8XrmlvqFZ3U9uaul6qHdCY7k2FM62FOROKmVXDoH1lrpLYNQ9y5JcnjiIncYsnZSKMPiIt2--2WT2SFt4RlLlb6XRzaX2aQMk-fEW85bSdeqgmNCK9G3zI5n9NHlLs7iSmL7IXkr9km2l6in1i4QTv-RJUQP6kZHvFQGqRSEXADvgsSUx1l11u-U3QAumom3xV4bhrdkX8FlVQH90nWvijPtF_a751Oop5Ks7FtTRounVvDg4qT1nGCiYETG3CPlqbPUXYlc-Vt5TcF8w9JP9BepBwyAmvq8mrvcGUaeChJZD5y8y_SwzHamPj20apfb0ldPiR_laRe3ZZQx_CqDMq7sQYYQYR8cPXWHbOR_wzqN_9a5LI3lwbsieFVB-Mg9APbtGoAUTRouZczRDG6KyLe_aVokPAQYQx70QULvVcgA7iS2JmKAaQsewj42A/https://www.amazon.in/stores/page/B38E87B8-7992-4D02-8F16-27F42B96F528/?_encoding=UTF8&store_ref=SB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z&pd_rd_plhdr=t&aaxitk=70a03a5efe328bf5986c6cf03f088f67&hsa_cr_id=0&lp_query=Laptop&lp_slot=desktop-arbies&lp_page_asin=B0G3PMNXLJ&aref=G7foyW8JVJ&pd_rd_i=ad1&ref_=sbx_be_dp_arbies_mblsd_mb0_bkgd&pd_rd_w=AaTCQ&content-id=amzn1.sym.7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_p=7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47
        - link "Lenovo Tablets":
          - /url: https://aax-eu-zaz.amazon.in/x/c/JLbp-qb7SjOfXa31f_R8TVYAAAGfp8itPQoAAAH2AQBvbm9fdHhuX2JpZDIgICBvbm9fdHhuX2ltcDEgICCR8dYl/clv1c_ek-ww4PXFdbWDVHQvp_9Itt67UySK2ptnHY41jL2X4M1zkWMwAX7CHks3d49Y5L5s-ShAtXG5Tn9JUo1GUTFlwEH5wHssoYT-j1afifX1KwrsxF4x4UN-kw54vRGrIZ128I7NSrlphMvYq4csqWuxiCbotuNivWetnSY3-7KnOddTm4QRsWG3MECY52fxS07UFuT4UhnBQ2y2umN4xPU52ODOwyuUdmTbX6cbnFta2F4t_4HnBveEwmSQUGXmlWoIIo1eYoAsL-g3XG-myJrNvEHQAHmaoMbhO13ilRZrdxTkpOMCemxBG03VY7bboz6wGlMrDHGrRBv4B_VD8CAyxdb1CmsABadpbtnxXtU9s_sxO3q2lZZV0PwmCLx85L0rv5xWwGDijBCg9Grt6N-3UMSm5vNbHK0KaqE6L3tUtq2bn4GB2rvxHBfQYbdtsgh7-nTKYLR6EFHJSeYNOJx69ofupAC6XlCjA1KYa5w84fys481HIxG-Z8hKCePJ6NM4zNzJuXA0FdNp_2ZS5T2QI0U1yUYwFNYtSv9-ML3nVcVAeMXFO9O_dGCyc82mL5f-As1Z2zovxEudUJIA4tEJbiw5qdOrAVGCXJ1yjMbKO8XrmlvqFZ3U9uaul6qHdCY7k2FM62FOROKmVXDoH1lrpLYNQ9y5JcnjiIncYsnZSKMPiIt2--2WT2SFt4RlLlb6XRzaX2aQMk-fEW85bSdeqgmNCK9G3zI5n9NHlLs7iSmL7IXkr9km2l6in1i4QTv-RJUQP6kZHvFQGqRSEXADvgsSUx1l11u-U3QAumom3xV4bhrdkX8FlVQH90nWvijPtF_a751Oop5Ks7FtTRounVvDg4qT1nGCiYETG3CPlqbPUXYlc-Vt5TcF8w9JP9BepBwyAmvq8mrvcGUaeChJZD5y8y_SwzHamPj20apfb0ldPiR_laRe3ZZQx_CqDMq7sQYYQYR8cPXWHbOR_wzqN_9a5LI3lwbsieFVB-Mg9APbtGoAUTRouZczRDG6KyLe_aVokPAQYQx70QULvVcgA7iS2JmKAaQsewj42A/https://www.amazon.in/stores/page/B38E87B8-7992-4D02-8F16-27F42B96F528/?_encoding=UTF8&store_ref=SB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z&pd_rd_plhdr=t&aaxitk=70a03a5efe328bf5986c6cf03f088f67&hsa_cr_id=0&lp_query=Laptop&lp_slot=desktop-arbies&lp_page_asin=B0G3PMNXLJ&aref=G7foyW8JVJ&pd_rd_i=ad1&ref_=sbx_be_dp_arbies_mblsd_mb0_ls&pd_rd_w=AaTCQ&content-id=amzn1.sym.7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_p=7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47
          - img "Lenovo Tablets"
        - link "Lenovo Tablets":
          - /url: https://aax-eu-zaz.amazon.in/x/c/JLbp-qb7SjOfXa31f_R8TVYAAAGfp8itPQoAAAH2AQBvbm9fdHhuX2JpZDIgICBvbm9fdHhuX2ltcDEgICCR8dYl/clv1c_ek-ww4PXFdbWDVHQvp_9Itt67UySK2ptnHY41jL2X4M1zkWMwAX7CHks3d49Y5L5s-ShAtXG5Tn9JUo1GUTFlwEH5wHssoYT-j1afifX1KwrsxF4x4UN-kw54vRGrIZ128I7NSrlphMvYq4csqWuxiCbotuNivWetnSY3-7KnOddTm4QRsWG3MECY52fxS07UFuT4UhnBQ2y2umN4xPU52ODOwyuUdmTbX6cbnFta2F4t_4HnBveEwmSQUGXmlWoIIo1eYoAsL-g3XG-myJrNvEHQAHmaoMbhO13ilRZrdxTkpOMCemxBG03VY7bboz6wGlMrDHGrRBv4B_VD8CAyxdb1CmsABadpbtnxXtU9s_sxO3q2lZZV0PwmCLx85L0rv5xWwGDijBCg9Grt6N-3UMSm5vNbHK0KaqE6L3tUtq2bn4GB2rvxHBfQYbdtsgh7-nTKYLR6EFHJSeYNOJx69ofupAC6XlCjA1KYa5w84fys481HIxG-Z8hKCePJ6NM4zNzJuXA0FdNp_2ZS5T2QI0U1yUYwFNYtSv9-ML3nVcVAeMXFO9O_dGCyc82mL5f-As1Z2zovxEudUJIA4tEJbiw5qdOrAVGCXJ1yjMbKO8XrmlvqFZ3U9uaul6qHdCY7k2FM62FOROKmVXDoH1lrpLYNQ9y5JcnjiIncYsnZSKMPiIt2--2WT2SFt4RlLlb6XRzaX2aQMk-fEW85bSdeqgmNCK9G3zI5n9NHlLs7iSmL7IXkr9km2l6in1i4QTv-RJUQP6kZHvFQGqRSEXADvgsSUx1l11u-U3QAumom3xV4bhrdkX8FlVQH90nWvijPtF_a751Oop5Ks7FtTRounVvDg4qT1nGCiYETG3CPlqbPUXYlc-Vt5TcF8w9JP9BepBwyAmvq8mrvcGUaeChJZD5y8y_SwzHamPj20apfb0ldPiR_laRe3ZZQx_CqDMq7sQYYQYR8cPXWHbOR_wzqN_9a5LI3lwbsieFVB-Mg9APbtGoAUTRouZczRDG6KyLe_aVokPAQYQx70QULvVcgA7iS2JmKAaQsewj42A/https://www.amazon.in/stores/page/B38E87B8-7992-4D02-8F16-27F42B96F528/?_encoding=UTF8&store_ref=SB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z&pd_rd_plhdr=t&aaxitk=70a03a5efe328bf5986c6cf03f088f67&hsa_cr_id=0&lp_query=Laptop&lp_slot=desktop-arbies&lp_page_asin=B0G3PMNXLJ&aref=G7foyW8JVJ&pd_rd_i=ad1&ref_=sbx_be_dp_arbies_mblsd_mb0_logo&pd_rd_w=AaTCQ&content-id=amzn1.sym.7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_p=7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47
          - img "Lenovo Tablets"
        - link "The Ultimate Entertainment Tablet":
          - /url: https://aax-eu-zaz.amazon.in/x/c/JLbp-qb7SjOfXa31f_R8TVYAAAGfp8itPQoAAAH2AQBvbm9fdHhuX2JpZDIgICBvbm9fdHhuX2ltcDEgICCR8dYl/clv1c_ek-ww4PXFdbWDVHQvp_9Itt67UySK2ptnHY41jL2X4M1zkWMwAX7CHks3d49Y5L5s-ShAtXG5Tn9JUo1GUTFlwEH5wHssoYT-j1afifX1KwrsxF4x4UN-kw54vRGrIZ128I7NSrlphMvYq4csqWuxiCbotuNivWetnSY3-7KnOddTm4QRsWG3MECY52fxS07UFuT4UhnBQ2y2umN4xPU52ODOwyuUdmTbX6cbnFta2F4t_4HnBveEwmSQUGXmlWoIIo1eYoAsL-g3XG-myJrNvEHQAHmaoMbhO13ilRZrdxTkpOMCemxBG03VY7bboz6wGlMrDHGrRBv4B_VD8CAyxdb1CmsABadpbtnxXtU9s_sxO3q2lZZV0PwmCLx85L0rv5xWwGDijBCg9Grt6N-3UMSm5vNbHK0KaqE6L3tUtq2bn4GB2rvxHBfQYbdtsgh7-nTKYLR6EFHJSeYNOJx69ofupAC6XlCjA1KYa5w84fys481HIxG-Z8hKCePJ6NM4zNzJuXA0FdNp_2ZS5T2QI0U1yUYwFNYtSv9-ML3nVcVAeMXFO9O_dGCyc82mL5f-As1Z2zovxEudUJIA4tEJbiw5qdOrAVGCXJ1yjMbKO8XrmlvqFZ3U9uaul6qHdCY7k2FM62FOROKmVXDoH1lrpLYNQ9y5JcnjiIncYsnZSKMPiIt2--2WT2SFt4RlLlb6XRzaX2aQMk-fEW85bSdeqgmNCK9G3zI5n9NHlLs7iSmL7IXkr9km2l6in1i4QTv-RJUQP6kZHvFQGqRSEXADvgsSUx1l11u-U3QAumom3xV4bhrdkX8FlVQH90nWvijPtF_a751Oop5Ks7FtTRounVvDg4qT1nGCiYETG3CPlqbPUXYlc-Vt5TcF8w9JP9BepBwyAmvq8mrvcGUaeChJZD5y8y_SwzHamPj20apfb0ldPiR_laRe3ZZQx_CqDMq7sQYYQYR8cPXWHbOR_wzqN_9a5LI3lwbsieFVB-Mg9APbtGoAUTRouZczRDG6KyLe_aVokPAQYQx70QULvVcgA7iS2JmKAaQsewj42A/https://www.amazon.in/stores/page/B38E87B8-7992-4D02-8F16-27F42B96F528/?_encoding=UTF8&store_ref=SB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z&pd_rd_plhdr=t&aaxitk=70a03a5efe328bf5986c6cf03f088f67&hsa_cr_id=0&lp_query=Laptop&lp_slot=desktop-arbies&lp_page_asin=B0G3PMNXLJ&aref=G7foyW8JVJ&pd_rd_i=ad1&ref_=sbx_be_dp_arbies_mblsd_mb0_hl&pd_rd_w=AaTCQ&content-id=amzn1.sym.7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_p=7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47
      - group "2 of 2":
        - link "Sponsored ad from Lenovo Accessories. \"Lenovo Range of Wireless Mouse.\" Shop Lenovo Accessories.":
          - /url: https://aax-eu-zaz.amazon.in/x/c/JKyIDiVK0UVJNM8GpNWNEn4AAAGfp8itPwoAAAH2AQBvbm9fdHhuX2JpZDIgICBvbm9fdHhuX2ltcDEgICAm7zDU/clv1c_ek-ww4E3EsbWDUHGII1ymhgAeA0Lu9leABoq9j_hh4qKl3KxRbT-eT4vfnmQfO79ViI2I5iuwXhBDS7XKWKHXa0UfQlzKiMPWy838ukgG-y2_vHrXpyO7xb34-MUBtBz6npLqpHASpeQUGntbxhdQQxbqPGMdtXoJoH2TDakwfZrsTt4lI1hQDb2dw9oHc-AjMo360ZHGS2u1uG1wwPUA3hrEVlhUhIQcE3toxL24HxLuqAckdWc2HHZml7r4oOlI6bicRkhzWSh5XzlJHjOKRqtzdtoXNVGl4rOxpAkKqsufOL2kiAko8pvnqgknvK46Vc8E8erUigYyGXi-iGUS86MMlTrMIXAWlK6IQ5IbvfFwBQJrfIaUytn8dfww487LRxYytWGPPI5XmOv_rMQltcTC8P4aBeToDhWCI2ajMFHb6mjI0pZxv-aPCuXE2_VoyZLQfVJp3qXCG1oe7b0ZZUwlCf4IL_aE1sOM9Sin9_iQtH2M20rxDFs3Fj9LSBZb8ZFSyMlh-8QUiBtrliruolasjZ4Jqoo9L1uSHOQ4gRcR8GjVK8vqPTr-PrHwiXKtxZkZ_0M1QQKOLyMYg2lNSu_fXaM0DITcqEmalljR1LRjV-GQDMWadjXkdboSFdC5K2LMv8-4Dl-s0FoPBjtRBGW7T2MwcU0uiE42Z1W_zkDgQqIVXIy0-xSC0IBGrU1rAoJuQeENO7s9MoTVXwlHxd-1YwskY8PJHWo5n17Xm7V2AsHUrCv-KF9EmT3D_bqi9bdabPoiq7G97qwMWQoeHS1HKvzQuXqjAKN0I8gRzPscEWPN3wJ-6y9FQlJqPXScy7DRsRO3MN-LHF1yZi5eYfHu_s6k8yaClSFXG3mj6oZPZszej9EGHsmqqDHTC1p1qg8_XnHEvAttqGfqTWTiCMh5u6u_JaXsawBNRrRkxLCEWS5Jh56zJvh2NRoQ5T8rrtIhn3RPFuh5USU8Po1cpr1AU4_-TG_VxM153rL9UsrZmOq36bjodkMLQbfg2YFtIQKWF33RMmR7tftl5Z2FS0kxajSUehU-u0oTqm2Og/https://www.amazon.in/stores/page/74F4EC1D-B41B-474E-A9B3-CFF933269C9E/?_encoding=UTF8&store_ref=SB_A0341931EPFL67B2PV9N-A02595572RB052GX9M4M1&pd_rd_plhdr=t&aaxitk=80865eee3e4863737b197e6198220ba6&hsa_cr_id=0&lp_query=Laptop&lp_slot=desktop-arbies&lp_page_asin=B0G3PMNXLJ&aref=pQ2oxNstbJ&pd_rd_i=ad2&ref_=sbx_be_dp_arbies_mblsd_mb1_bkgd&pd_rd_w=AaTCQ&content-id=amzn1.sym.7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_p=7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47
        - link "Lenovo Accessories":
          - /url: https://aax-eu-zaz.amazon.in/x/c/JKyIDiVK0UVJNM8GpNWNEn4AAAGfp8itPwoAAAH2AQBvbm9fdHhuX2JpZDIgICBvbm9fdHhuX2ltcDEgICAm7zDU/clv1c_ek-ww4E3EsbWDUHGII1ymhgAeA0Lu9leABoq9j_hh4qKl3KxRbT-eT4vfnmQfO79ViI2I5iuwXhBDS7XKWKHXa0UfQlzKiMPWy838ukgG-y2_vHrXpyO7xb34-MUBtBz6npLqpHASpeQUGntbxhdQQxbqPGMdtXoJoH2TDakwfZrsTt4lI1hQDb2dw9oHc-AjMo360ZHGS2u1uG1wwPUA3hrEVlhUhIQcE3toxL24HxLuqAckdWc2HHZml7r4oOlI6bicRkhzWSh5XzlJHjOKRqtzdtoXNVGl4rOxpAkKqsufOL2kiAko8pvnqgknvK46Vc8E8erUigYyGXi-iGUS86MMlTrMIXAWlK6IQ5IbvfFwBQJrfIaUytn8dfww487LRxYytWGPPI5XmOv_rMQltcTC8P4aBeToDhWCI2ajMFHb6mjI0pZxv-aPCuXE2_VoyZLQfVJp3qXCG1oe7b0ZZUwlCf4IL_aE1sOM9Sin9_iQtH2M20rxDFs3Fj9LSBZb8ZFSyMlh-8QUiBtrliruolasjZ4Jqoo9L1uSHOQ4gRcR8GjVK8vqPTr-PrHwiXKtxZkZ_0M1QQKOLyMYg2lNSu_fXaM0DITcqEmalljR1LRjV-GQDMWadjXkdboSFdC5K2LMv8-4Dl-s0FoPBjtRBGW7T2MwcU0uiE42Z1W_zkDgQqIVXIy0-xSC0IBGrU1rAoJuQeENO7s9MoTVXwlHxd-1YwskY8PJHWo5n17Xm7V2AsHUrCv-KF9EmT3D_bqi9bdabPoiq7G97qwMWQoeHS1HKvzQuXqjAKN0I8gRzPscEWPN3wJ-6y9FQlJqPXScy7DRsRO3MN-LHF1yZi5eYfHu_s6k8yaClSFXG3mj6oZPZszej9EGHsmqqDHTC1p1qg8_XnHEvAttqGfqTWTiCMh5u6u_JaXsawBNRrRkxLCEWS5Jh56zJvh2NRoQ5T8rrtIhn3RPFuh5USU8Po1cpr1AU4_-TG_VxM153rL9UsrZmOq36bjodkMLQbfg2YFtIQKWF33RMmR7tftl5Z2FS0kxajSUehU-u0oTqm2Og/https://www.amazon.in/stores/page/74F4EC1D-B41B-474E-A9B3-CFF933269C9E/?_encoding=UTF8&store_ref=SB_A0341931EPFL67B2PV9N-A02595572RB052GX9M4M1&pd_rd_plhdr=t&aaxitk=80865eee3e4863737b197e6198220ba6&hsa_cr_id=0&lp_query=Laptop&lp_slot=desktop-arbies&lp_page_asin=B0G3PMNXLJ&aref=pQ2oxNstbJ&pd_rd_i=ad2&ref_=sbx_be_dp_arbies_mblsd_mb1_ls&pd_rd_w=AaTCQ&content-id=amzn1.sym.7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_p=7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47
          - img "Lenovo Accessories"
        - link "Lenovo Accessories":
          - /url: https://aax-eu-zaz.amazon.in/x/c/JKyIDiVK0UVJNM8GpNWNEn4AAAGfp8itPwoAAAH2AQBvbm9fdHhuX2JpZDIgICBvbm9fdHhuX2ltcDEgICAm7zDU/clv1c_ek-ww4E3EsbWDUHGII1ymhgAeA0Lu9leABoq9j_hh4qKl3KxRbT-eT4vfnmQfO79ViI2I5iuwXhBDS7XKWKHXa0UfQlzKiMPWy838ukgG-y2_vHrXpyO7xb34-MUBtBz6npLqpHASpeQUGntbxhdQQxbqPGMdtXoJoH2TDakwfZrsTt4lI1hQDb2dw9oHc-AjMo360ZHGS2u1uG1wwPUA3hrEVlhUhIQcE3toxL24HxLuqAckdWc2HHZml7r4oOlI6bicRkhzWSh5XzlJHjOKRqtzdtoXNVGl4rOxpAkKqsufOL2kiAko8pvnqgknvK46Vc8E8erUigYyGXi-iGUS86MMlTrMIXAWlK6IQ5IbvfFwBQJrfIaUytn8dfww487LRxYytWGPPI5XmOv_rMQltcTC8P4aBeToDhWCI2ajMFHb6mjI0pZxv-aPCuXE2_VoyZLQfVJp3qXCG1oe7b0ZZUwlCf4IL_aE1sOM9Sin9_iQtH2M20rxDFs3Fj9LSBZb8ZFSyMlh-8QUiBtrliruolasjZ4Jqoo9L1uSHOQ4gRcR8GjVK8vqPTr-PrHwiXKtxZkZ_0M1QQKOLyMYg2lNSu_fXaM0DITcqEmalljR1LRjV-GQDMWadjXkdboSFdC5K2LMv8-4Dl-s0FoPBjtRBGW7T2MwcU0uiE42Z1W_zkDgQqIVXIy0-xSC0IBGrU1rAoJuQeENO7s9MoTVXwlHxd-1YwskY8PJHWo5n17Xm7V2AsHUrCv-KF9EmT3D_bqi9bdabPoiq7G97qwMWQoeHS1HKvzQuXqjAKN0I8gRzPscEWPN3wJ-6y9FQlJqPXScy7DRsRO3MN-LHF1yZi5eYfHu_s6k8yaClSFXG3mj6oZPZszej9EGHsmqqDHTC1p1qg8_XnHEvAttqGfqTWTiCMh5u6u_JaXsawBNRrRkxLCEWS5Jh56zJvh2NRoQ5T8rrtIhn3RPFuh5USU8Po1cpr1AU4_-TG_VxM153rL9UsrZmOq36bjodkMLQbfg2YFtIQKWF33RMmR7tftl5Z2FS0kxajSUehU-u0oTqm2Og/https://www.amazon.in/stores/page/74F4EC1D-B41B-474E-A9B3-CFF933269C9E/?_encoding=UTF8&store_ref=SB_A0341931EPFL67B2PV9N-A02595572RB052GX9M4M1&pd_rd_plhdr=t&aaxitk=80865eee3e4863737b197e6198220ba6&hsa_cr_id=0&lp_query=Laptop&lp_slot=desktop-arbies&lp_page_asin=B0G3PMNXLJ&aref=pQ2oxNstbJ&pd_rd_i=ad2&ref_=sbx_be_dp_arbies_mblsd_mb1_logo&pd_rd_w=AaTCQ&content-id=amzn1.sym.7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_p=7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47
          - img "Lenovo Accessories"
        - link "Lenovo Range of Wireless Mouse":
          - /url: https://aax-eu-zaz.amazon.in/x/c/JKyIDiVK0UVJNM8GpNWNEn4AAAGfp8itPwoAAAH2AQBvbm9fdHhuX2JpZDIgICBvbm9fdHhuX2ltcDEgICAm7zDU/clv1c_ek-ww4E3EsbWDUHGII1ymhgAeA0Lu9leABoq9j_hh4qKl3KxRbT-eT4vfnmQfO79ViI2I5iuwXhBDS7XKWKHXa0UfQlzKiMPWy838ukgG-y2_vHrXpyO7xb34-MUBtBz6npLqpHASpeQUGntbxhdQQxbqPGMdtXoJoH2TDakwfZrsTt4lI1hQDb2dw9oHc-AjMo360ZHGS2u1uG1wwPUA3hrEVlhUhIQcE3toxL24HxLuqAckdWc2HHZml7r4oOlI6bicRkhzWSh5XzlJHjOKRqtzdtoXNVGl4rOxpAkKqsufOL2kiAko8pvnqgknvK46Vc8E8erUigYyGXi-iGUS86MMlTrMIXAWlK6IQ5IbvfFwBQJrfIaUytn8dfww487LRxYytWGPPI5XmOv_rMQltcTC8P4aBeToDhWCI2ajMFHb6mjI0pZxv-aPCuXE2_VoyZLQfVJp3qXCG1oe7b0ZZUwlCf4IL_aE1sOM9Sin9_iQtH2M20rxDFs3Fj9LSBZb8ZFSyMlh-8QUiBtrliruolasjZ4Jqoo9L1uSHOQ4gRcR8GjVK8vqPTr-PrHwiXKtxZkZ_0M1QQKOLyMYg2lNSu_fXaM0DITcqEmalljR1LRjV-GQDMWadjXkdboSFdC5K2LMv8-4Dl-s0FoPBjtRBGW7T2MwcU0uiE42Z1W_zkDgQqIVXIy0-xSC0IBGrU1rAoJuQeENO7s9MoTVXwlHxd-1YwskY8PJHWo5n17Xm7V2AsHUrCv-KF9EmT3D_bqi9bdabPoiq7G97qwMWQoeHS1HKvzQuXqjAKN0I8gRzPscEWPN3wJ-6y9FQlJqPXScy7DRsRO3MN-LHF1yZi5eYfHu_s6k8yaClSFXG3mj6oZPZszej9EGHsmqqDHTC1p1qg8_XnHEvAttqGfqTWTiCMh5u6u_JaXsawBNRrRkxLCEWS5Jh56zJvh2NRoQ5T8rrtIhn3RPFuh5USU8Po1cpr1AU4_-TG_VxM153rL9UsrZmOq36bjodkMLQbfg2YFtIQKWF33RMmR7tftl5Z2FS0kxajSUehU-u0oTqm2Og/https://www.amazon.in/stores/page/74F4EC1D-B41B-474E-A9B3-CFF933269C9E/?_encoding=UTF8&store_ref=SB_A0341931EPFL67B2PV9N-A02595572RB052GX9M4M1&pd_rd_plhdr=t&aaxitk=80865eee3e4863737b197e6198220ba6&hsa_cr_id=0&lp_query=Laptop&lp_slot=desktop-arbies&lp_page_asin=B0G3PMNXLJ&aref=pQ2oxNstbJ&pd_rd_i=ad2&ref_=sbx_be_dp_arbies_mblsd_mb1_hl&pd_rd_w=AaTCQ&content-id=amzn1.sym.7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_p=7e7fd29d-32f9-46bd-a74b-f5f2ade509dd&pf_rd_r=XAKRRWWXKPYM70T1TNBJ&pd_rd_wg=uNYd6&pd_rd_r=0c38b0d3-b559-4e02-9cc7-a085e3ccbd47
  - heading "Customer reviews" [level=2]
  - text: 5 out of 5 stars 2 global ratings
  - list:
    - listitem:
      - link "100 percent of reviews have 5 stars":
        - /url: /portal/customer-reviews/B0G3PMNXLJ/ref=acr_dp_hist_5?ie=UTF8&filterByStar=five_star&reviewerType=all_reviews#reviews-filter-bar
    - listitem
    - listitem
    - listitem
    - listitem
  - button "How are ratings calculated?"
  - heading "Top reviews from India" [level=3]
  - list:
    - listitem:
      - link "Sumit Walia":
        - /url: /gp/profile/amzn1.account.AGAPDCC2LW6ZF4H4LLR3SI4MFBHQ?ref=cm_cr_dp_d_bdcrb_top
      - text: 5 out of 5 stars
      - link "Nice laptop value for money":
        - /url: /portal/customer-reviews/srp/-/R1Z1S9ZV2NFEH5/ref=cm_cr_dp_d_rvw_ttl?_encoding=UTF8&ie=UTF8
        - heading "Nice laptop value for money" [level=5]
      - text: Reviewed in India on 30 June 2026
      - link "Verified Purchase":
        - /url: /gp/help/customer/display.html/ref=cm_cr_dp_d_rvw_avp?ie=UTF8&nodeId=G8UYX7LALQC8V9KA
      - paragraph: performance wise good
      - paragraph: battery 🔋 awesome
      - paragraph: Picture and sound good value for money
      - button "Helpful"
      - button "Report Review": Report
  - link "See more reviews":
    - /url: /portal/customer-reviews/B0G3PMNXLJ/ref=cm_cr_dp_d_show_all_top?_encoding=UTF8&ie=UTF8&reviewerType=all_reviews
- complementary "Your recently viewed items and featured recommendations"
- button "Back to top"
- heading "Get to Know Us" [level=6]
- list:
  - listitem:
    - link "About Amazon":
      - /url: https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer
  - listitem:
    - link "Careers":
      - /url: https://amazon.jobs
  - listitem:
    - link "Press Releases":
      - /url: https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer
  - listitem:
    - link "Amazon Science":
      - /url: https://www.amazon.science
- heading "Connect with Us" [level=6]
- list:
  - listitem:
    - link "Facebook":
      - /url: https://www.facebook.com/AmazonIN
  - listitem:
    - link "Twitter":
      - /url: https://x.com/AmazonIN
  - listitem:
    - link "Instagram":
      - /url: https://www.instagram.com/amazondotin
- heading "Make Money with Us" [level=6]
- list:
  - listitem:
    - link "Sell on Amazon":
      - /url: /b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C
  - listitem:
    - link "Sell under Amazon Accelerator":
      - /url: https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT
  - listitem:
    - link "Protect and Build Your Brand":
      - /url: https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT
  - listitem:
    - link "Amazon Global Selling":
      - /url: https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1
  - listitem:
    - link "Supply to Amazon":
      - /url: https://supply.amazon.com/?ref_=footer_sta&lang=en-IN
  - listitem:
    - link "Become an Affiliate":
      - /url: https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc
  - listitem:
    - link "Fulfilment by Amazon":
      - /url: https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter
  - listitem:
    - link "Advertise Your Products":
      - /url: https://advertising.amazon.in/?ref=Amz.in
  - listitem:
    - link "Amazon Pay on Merchants":
      - /url: https://www.amazonpay.in/merchant
- heading "Let Us Help You" [level=6]
- list:
  - listitem:
    - link "Your Account":
      - /url: /gp/css/homepage.html?ref_=footer_ya
  - listitem:
    - link "Returns Centre":
      - /url: /gp/css/returns/homepage.html?ref_=footer_hy_f_4
  - listitem:
    - link "Recalls and Product Safety Alerts":
      - /url: https://www.amazon.in/your-product-safety-alerts?ref_=footer_bsx_ypsa
  - listitem:
    - link "100% Purchase Protection":
      - /url: /gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc
  - listitem:
    - link "Amazon App Download":
      - /url: /gp/browse.html?node=6967393031&ref_=footer_mobapp
  - listitem:
    - link "Help":
      - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he
- link "Amazon India Home":
  - /url: /ref=footer_logo
- link "Choose a language for shopping. Current selection is English.":
  - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang
  - text: English
- button "Expand to Change Language or Country"
- button "Choose a country/region for shopping. The current selection is India.": India
- list:
  - listitem:
    - link "AbeBooks Books, art & collectibles":
      - /url: https://www.abebooks.com/
      - heading "AbeBooks" [level=5]
      - text: Books, art & collectibles
  - listitem:
    - link "Amazon Web Services Scalable Cloud Computing Services":
      - /url: https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter
      - heading "Amazon Web Services" [level=5]
      - text: Scalable Cloud Computing Services
  - listitem:
    - link "Audible Download Audio Books":
      - /url: https://www.audible.in/
      - heading "Audible" [level=5]
      - text: Download Audio Books
  - listitem:
    - link "IMDb Movies, TV & Celebrities":
      - /url: https://www.imdb.com/
      - heading "IMDb" [level=5]
      - text: Movies, TV & Celebrities
- list:
  - listitem:
    - link "Shopbop Designer Fashion Brands":
      - /url: https://www.shopbop.com/
      - heading "Shopbop" [level=5]
      - text: Designer Fashion Brands
  - listitem:
    - link "Amazon Business Everything For Your Business":
      - /url: /business?ref=footer_aingw
      - heading "Amazon Business" [level=5]
      - text: Everything For Your Business
  - listitem:
    - link "Amazon Music Stream millions of songs":
      - /url: /music/player?ref=footer_apm
      - heading "Amazon Music" [level=5]
      - text: Stream millions of songs
- list:
  - listitem:
    - link "Conditions of Use & Sale":
      - /url: /gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou
  - listitem:
    - link "Privacy Notice":
      - /url: /gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy
  - listitem:
    - link "Interest-Based Ads":
      - /url: /gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba
- text: © 1996-2026, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1   | const { expect } = require('@playwright/test');
  2   | 
  3   | const locators = {
  4   |     productTitle: '#productTitle',
  5   |     productPrice: 'span[class*="priceToPay"]',
  6   |     productRating: 'span[id*=CustomerReview]',
  7   |     deliveryInfo: '#deliveryBlockMessage',
  8   | 
  9   |     MproductTitle: '#title',
  10  |     MproductPrice: 'span[class*="priceToPay"]',
  11  |     MproductRating: '#acrCustomerReviewLink',
  12  |     MdeliveryInfo: '#deliveryBlockMessage',
  13  | 
  14  |     addToCartButton: 'input[id*="add-to-cart"]',
  15  |     goToCartButton: "//a[normalize-space()='Go to Cart']",
  16  |     addedItemPrice: "span[class*='subtotal'] h2",
  17  | 
  18  |     addToWishlistButton: "#wishListMainButton",
  19  |     addToWishlistButtonInput: 'input[id*="button-submit"]', 
  20  |     wishlistdialog: 'div[aria-label="Add to Wish List"]',
  21  |     wishlistConfirmation: 'div[aria-label="Add to Wish List"] h4',
  22  | 
  23  | };
  24  | 
  25  | class ProductDetailsPage {
  26  |     constructor(page, isMobile) {
  27  |     this.page = page;
  28  |     this.isMobile = isMobile;
  29  |     }
  30  | 
  31  |    async validateProductPage() {
  32  |     if (this.isMobile) {
  33  |         await expect(this.page.locator(locators.MproductTitle).first()).toBeVisible();
  34  |         await expect(this.page.locator(locators.MproductPrice).first()).toBeVisible();
  35  |         await expect(this.page.locator(locators.MproductRating).nth(0)).toBeVisible();
  36  |         await expect(this.page.locator(locators.MdeliveryInfo)).toBeVisible();
  37  |     } else {
  38  |         await expect(this.page.locator(locators.productTitle).first()).toBeVisible();
  39  |         await expect(this.page.locator(locators.productPrice).first()).toBeVisible();
  40  |         await expect(this.page.locator(locators.productRating).nth(0)).toBeVisible();
  41  |         await expect(this.page.locator(locators.deliveryInfo)).toBeVisible();
  42  |     }
  43  |     }
  44  | 
  45  |     async validateProductDetails(expectedTitle) {
  46  | 
  47  |     if (this.isMobile) {
  48  |         await expect(this.page.locator(locators.MproductTitle).first()).toContainText(expectedTitle);
  49  | 
  50  |         const productPrice = await this.page.locator(locators.MproductPrice).first().textContent();
  51  |         expect(productPrice).not.toBe('');
  52  | 
  53  |         await expect(this.page.locator(locators.MdeliveryInfo)).toBeVisible();
  54  | 
  55  |     } else {
  56  |         await expect(this.page.locator(locators.productTitle).first()).toContainText(expectedTitle);
  57  | 
  58  |         const productPrice = await this.page.locator(locators.productPrice).first().textContent();
  59  |         expect(productPrice).not.toBe('');
  60  | 
  61  |         await expect(this.page.locator(locators.productRating).nth(0)).toHaveAttribute('aria-label', /Reviews/);
  62  |         await expect(this.page.locator(locators.deliveryInfo)).toBeVisible();
  63  |     }
  64  |     }
  65  | 
  66  |     async returnToSearchResults() {
  67  |         await this.page.close();
  68  |     }
  69  | 
  70  |     async validateProductPrice() {
  71  |         await expect(this.page.locator(locators.productPrice).first()).toBeVisible();
  72  |     }
  73  | 
  74  |     async addToCart() {
  75  |         await this.page.locator(locators.addToCartButton).click();
  76  |     }
  77  | 
  78  |     async getProductTitle() {
  79  |         const title = await this.page.locator(locators.productTitle).first().textContent();
  80  |         return title.trim();
  81  |     }
  82  |     
  83  |     async validateAddToCartConfirmation() {
  84  |         await expect(this.page.locator(locators.goToCartButton).first()).toBeVisible();  
  85  |     }
  86  | 
  87  |     async goToCart() {
  88  |         await this.page.locator(locators.goToCartButton).first().click();
  89  |         await this.page.waitForLoadState('domcontentloaded');
  90  |     }
  91  | 
  92  |    async addToWishlist(expectedButtonText) {
  93  |   //  await expect(this.page.locator(locators.addToWishlistButton)).toBeVisible();
  94  |     const wishlistButtonInput = this.page.locator(locators.addToWishlistButtonInput);
  95  |     await expect(wishlistButtonInput).toHaveValue(expectedButtonText);
  96  |     await this.page.locator(locators.addToWishlistButton).click();
  97  | }
  98  | 
  99  |     async validateAddedToWishlistDialog(expectedTitle) {
> 100 |     await expect(this.page.locator(locators.wishlistConfirmation)).toBeVisible();
      |                                                                    ^ Error: expect(locator).toBeVisible() failed
  101 |     //await expect(this.page.locator(locators.productTitle).first()).toContainText(expectedTitle);
  102 |     }
  103 | 
  104 |     async closeAfterWishlistConfirmation() {
  105 |         await this.page.close();
  106 |         
  107 |     }
  108 | 
  109 | }
  110 | module.exports = { ProductDetailsPage };
```