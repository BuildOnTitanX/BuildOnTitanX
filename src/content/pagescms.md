---
title: Welcome to My Modular Page
blocks:
  - _block: hero
    heading: heading
    subheading: subheading
    image: /uploads/Scale-logo.jpg
  - _block: card
    title: card1
    description: desc
  - _block: card
    title: Card2
    description: bla bla bla
    image: /uploads/6F6A44A2-769F-42EE-BBD2-A46681F14F31-1024x585.png
  - _block: pageheader
    title: Accessible components
    bgType: bordered
  - _block: accordion
    useChevron: true
    allowMultiple: false
    items:
      - _block: accordion_item
        title: Title1
        content: |-
          *   test
              
          *   test
              
          *   test
        subitems:
          - _block: accordion_subitem
            title: subitem1
            content: |-
              ### bla

              ## blup
          - _block: accordion_subitem
            title: subitem2
            content: "# what"
---
