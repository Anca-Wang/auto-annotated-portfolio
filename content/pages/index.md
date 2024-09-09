---
type: PageLayout
title: Home
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/2.png
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 100
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: 'Hi, I''m Anca :)'
    subtitle: Frontend Developer | UX Designer | Digital Artist
    styles:
      self:
        height: screen
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-48
          - pl-10
          - pr-10
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
    actions: []
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: See all projects
        url: /projects
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-two.md
      - content/pages/projects/project-three.md
      - content/pages/projects/project-one.md
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-end
    subtitle: Projects
  - type: LabelsSection
    title: Skills
    subtitle: ''
    items:
      - type: Label
        label: HTML
        url: ''
      - type: Label
        label: CSS
        url: ''
      - type: Label
        label: JavaScript
        url: ''
      - type: Label
        label: TypeScript
        url: ''
      - type: Label
        label: React
        url: ''
      - type: Label
        label: Vue
        url: ''
      - type: Label
        label: AJAX
        url: ''
      - type: Label
        label: Tailwind
        url: ''
      - type: Label
        label: Bootstrap
        url: ''
    colors: colors-f
    elementId: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-36
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
  - type: FeaturedItemsSection
    title: Value propositions
    items:
      - type: FeaturedItem
        title: 1. Versitile Talent
        subtitle: ''
        text: |
          I can do both design and frontend develop
        actions: []
        elementId: ''
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: 2. Self-driven character
        subtitle: ''
        text: >
          From a law school student to a frontend engineer and designer within 2
          years, I know exactly what I want, and I work towards my goal
          continuously and productively
        featuredImage:
          type: ImageBlock
          altText: Item image
          caption: Caption of the image
          elementId: ''
        actions: []
        elementId: ''
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: 3. Learning ability
        subtitle: ''
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        featuredImage:
          type: ImageBlock
          altText: Item image
          caption: Caption of the image
          elementId: ''
        actions: []
        elementId: ''
        styles:
          self:
            textAlign: left
    actions: []
    colors: colors-f
    columns: 1
    spacingX: 16
    spacingY: 16
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: ContactSection
    title: Contact Me
    text: |
      I'm looking forward to hearing from you.
    form:
      type: FormBlock
      title: Title of the form
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          width: 1/2
          isRequired: 'true'
        - type: EmailFormControl
          name: email
          label: Name
          hideLabel: true
          placeholder: Your email
          width: 1/2
          isRequired: 'true'
        - type: TextareaFormControl
          name: message
          label: Tell me about your project
          hideLabel: true
          placeholder: Tell me about yourself
          width: full
          isRequired: true
      submitLabel: Send Message
      elementId: contact-form
      styles:
        submitLabel:
          textAlign: left
    colors: colors-f
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
---
