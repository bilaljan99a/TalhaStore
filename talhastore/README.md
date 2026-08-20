# Talhastore

Free WhatsApp-order store. Koi Shopify fee nahi — sirf GitHub + Cloudflare Pages, dono free hain.

## 1. Apna WhatsApp number aur products add karein

`js/products.js` file kholein aur:
- `STORE.whatsapp` mein apna asli WhatsApp number dalein (format: `923001234567`, koi `+` ya `0` nahi)
- `PRODUCTS` list mein apne asli products, prices, aur photo links dalein
  - Photo ke liye: image kisi bhi jagah upload karein (imgur.com free hai) aur uska direct link `image:` mein paste karein

## 2. GitHub par repository banayein

1. [github.com](https://github.com) par free account banayein (agar nahi hai)
2. "New repository" par click karein, naam dein **talhastore**, Public rakhein
3. Apne computer par terminal/command prompt kholein aur is folder mein ye commands chalayein:

```bash
git init
git add .
git commit -m "Talhastore first version"
git branch -M main
git remote add origin https://github.com/<aapka-username>/talhastore.git
git push -u origin main
```

(`<aapka-username>` ki jagah apna GitHub username likhein)

## 3. Cloudflare Pages se free hosting

1. [dash.cloudflare.com](https://dash.cloudflare.com) par account banayein
2. Left menu se **Workers & Pages** > **Create** > **Pages** > **Connect to Git**
3. Apni `talhastore` GitHub repository select karein
4. Build settings khali chhod dein (kuch build command ki zaroorat nahi — ye plain HTML site hai)
5. **Save and Deploy** dabayein — 1-2 minute mein live link mil jayega (jaise `talhastore.pages.dev`)

## 4. Apna domain connect karein

1. Cloudflare Pages project ke andar **Custom domains** tab par jayein
2. Apna domain type karein (jaise `talhastore.com`)
3. Agar domain Cloudflare par pehle se hai to automatic connect ho jayega
4. Agar domain kisi aur company (Namecheap, GoDaddy) se khareeda hai, to Cloudflare aapko DNS records dega jo aapko us company ke dashboard mein add karne honge — Cloudflare ye steps screen par dikha dega

## Baad mein update karna

Jab bhi naya product add karna ho, `js/products.js` edit karein, phir:

```bash
git add .
git commit -m "naye products add kiye"
git push
```

Cloudflare Pages automatically 1-2 minute mein site update kar dega.
