# MAZINGIRA
---
### Front-end:
- Repo: [Mazingira-front](https://github.com/Mazingira-Bros/mazingira/tree/main/client)
- Livelink: [front-end](https://mazingira-delta.vercel.app/)

### Back-end:
- Repo: [Mazingira-back](https://github.com/Mazingira-Bros/mazingira/tree/main/api)
- Livelink: [backend](https://mazingira-6hpc.onrender.com/)

ROUTES

This endpoint returns a list of all donors and their details.

get https://mazingira-6hpc.onrender.com/donors

Example Json response:

    {
    "id": 1,
    "name": "Karri Macejkovic",
    "email": "wilford@hoeger-mccullough.biz",    
    "donations": 
    [
    {
    "id": 1,
    "organisation_id": 4,
    "donor_id": 1,
    "amount": 585,
    "preference": "anonymous",
    "frequency": "once"
    },



get https://mazingira-6hpc.onrender.com/organisations

This endpoint returns a list of all organisations and their details.

Example Json response:

    {
    "id": 1,
    "name": "Erdman Inc",
    "email": "pedro@littel-kris.com",
    "description": "Culpa facilis corporis. Aut quisquam provident. Voluptas illum corrupti.",
    "website": "http://kub.com/roland",
    "logo": "https://pigment.github.io/fake-logos/logos/medium/color/9.png",
    "phone_number": "793-748-5527",
    "status": "accepted"
    },

get https://mazingira-6hpc.onrender.com/beneficiaries

This endpoint returns a list of all organisations and their details.

Example Json response:

    {
    "name": "NEVS",
    "image": "https://picsum.photos/300/300/?random",
    "description": "The XSS bandwidth is down, parse the open-source matrix so we can override the HTTP port!",
    "location": "Minsk",
    "organisation_name": "Erdman Inc"
     },

get https://mazingira-6hpc.onrender.com/inventories

This endpoint returns a list of all inventories and their details.

Example Json response:

    {
    "name": "Mediocre Bronze Knife",
    "image": "https://picsum.photos/300/300/?random",
    "description": "A fuga ut. Aliquid qui quibusdam. Earum quia quibusdam.",
    "organisation_name": "Erdman Inc",
    "quantity": 62
    },

get https://mazingira-6hpc.onrender.com/inventories/:id

gets a specific inventory

## Problem Statement
- Environmental degradation is the disintegration of the earth or deterioration of the environment through the consumption of assets, for example, air, water, and soil; the destruction of environments and the eradication of wildlife.
- It is characterized as any change or aggravation to nature’s turf seen to be pernicious or undesirable.
- This process leads to the endangerment of the human race, however, there are limited resources to help combat this at this time.

## Solution
- One of the ways the organization is looking to raise funds is by encouraging repeat donations.
- The goal would be to create a platform that allows users to donate to organizations such as this one regularly, to enable the organization to meet their goals.
- They are looking to create a product that automates the donation process by allowing donors to set up regular donations e.g monthly donations of stipulated amounts.

<!-- ## Contributers -->
 ![](http://ForTheBadge.com/images/badges/built-by-developers.svg)

---
## Team

1. [Mark Njogu](https://github.com/treva556)
2. [Hilary Mwendia](https://github.com/Stiflerzak)
3. [Joseph Mwanzia](https://github.com/JoseMwanzia)
4. [Stephen-Nene](https://github.com/Stephen-nene)
5. [Bruno Kiptoo](https://github.com/BrunoKiptoo)
6. [Khalid](https://github.com/certihimo)
---
