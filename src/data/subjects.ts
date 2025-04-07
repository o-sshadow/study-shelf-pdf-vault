export type SubjectCategory = "Mock Exams" | "Revision Notes" | "Past Papers" | "Mark Scheme";

export interface Subject {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
}

// You can customize this list of subjects
export const subjects: Subject[] = [
  {
    id: "chemistry-edexcel",
    name: "Chemistry - Edexcel",
    description: "Chemistry for Edexcel examination board",
    color: "bg-pink-500",
    icon: "⚗️"
  },
  {
    id: "english-aqa",
    name: "English - AQA",
    description: "English literature and language for AQA",
    color: "bg-green-500",
    icon: "📚"
  },
  {
    id: "biology",
    name: "Biology",
    description: "Study of living organisms",
    color: "bg-emerald-500",
    icon: "🧬"
  },
  {
    id: "computer-science",
    name: "Computer Science",
    description: "Programming, algorithms, and computing principles",
    color: "bg-cyan-500",
    icon: "💻"
  },
  {
    id: "maths",
    name: "Maths",
    description: "Mathematics including algebra, calculus, and statistics",
    color: "bg-blue-500",
    icon: "🔢"
  },
  {
    id: "physics",
    name: "Physics",
    description: "Study of matter, energy, and the fundamental forces",
    color: "bg-purple-500",
    icon: "⚛️"
  }
];

// Define the available categories
export const categories: SubjectCategory[] = [
  "Mock Exams",
  "Revision Notes",
  "Past Papers",
  "Mark Scheme"
];

// Mockup PDF data (later this could be dynamically loaded)
export interface PDF {
  id: string;
  title: string;
  description: string;
  path: string;
  subject: string;
  category: SubjectCategory;
  dateAdded: string;
}

// Sample PDF data based on the actual files in the structure
export const pdfs: PDF[] = [
  // Chemistry - Past Papers
  {
    id: "chem-paper1-questions",
    title: "Chemistry Paper 1 - Question Paper",
    description: "Edexcel Chemistry Paper 1 examination questions",
    path: "/pdfs/Chemistry - Edexcel/Past Papers/Paper 1/Question Paper.pdf",
    subject: "chemistry-edexcel",
    category: "Past Papers",
    dateAdded: "2025-01-10"
  },
  {
    id: "chem-paper1-mark-scheme",
    title: "Chemistry Paper 1 - Mark Scheme",
    description: "Edexcel Chemistry Paper 1 examination mark scheme",
    path: "/pdfs/Chemistry - Edexcel/Past Papers/Paper 1/Mark Scheme.pdf",
    subject: "chemistry-edexcel",
    category: "Mark Scheme",
    dateAdded: "2025-01-10"
  },
  {
    id: "chem-paper2-questions",
    title: "Chemistry Paper 2 - Question Paper",
    description: "Edexcel Chemistry Paper 2 examination questions",
    path: "/pdfs/Chemistry - Edexcel/Past Papers/Paper 2/Question Paper.pdf",
    subject: "chemistry-edexcel",
    category: "Past Papers",
    dateAdded: "2025-01-15"
  },
  {
    id: "chem-paper2-mark-scheme",
    title: "Chemistry Paper 2 - Mark Scheme",
    description: "Edexcel Chemistry Paper 2 examination mark scheme",
    path: "/pdfs/Chemistry - Edexcel/Past Papers/Paper 2/Mark Scheme.pdf",
    subject: "chemistry-edexcel",
    category: "Mark Scheme",
    dateAdded: "2025-01-15"
  },
  
  // Chemistry - Revision Notes (Selected examples)
  {
    id: "chem-atomic-structure",
    title: "Atomic Structure",
    description: "Notes on atomic structure and concepts",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Atomic Structure/Atomic Structure/pdf.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-01"
  },
  {
    id: "chem-calc-masses",
    title: "Calculations involving Masses",
    description: "How to perform calculations with atomic and molecular masses",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Atomic Structure/Calculations involving Masses/yZ4gjfKZ538tfqR5.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-01"
  },
  {
    id: "chem-covalent-bonding",
    title: "Covalent Bonding",
    description: "Notes on covalent bonding concepts",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Atomic Structure/Covalent Bonding/W4PRtfwTz4hkwXFy.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-02"
  },
  {
    id: "chem-periodic-table",
    title: "Periodic Table",
    description: "Notes covering the periodic table",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Atomic Structure/Periodic Table/sTVwdr5sN4VVrgSG.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-02"
  },
  {
    id: "chem-ionic-bonding",
    title: "Ionic Bonding",
    description: "Comprehensive notes on ionic bonding",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Atomic Structure/Ionic Bonding/qmQk5fC7Pq6MpBvv.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-03"
  },
  {
    id: "chem-substance-types",
    title: "Types of Substance",
    description: "Classification and properties of different chemical substances",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Atomic Structure/Types of Substance/MbHJ4hMnQgfk5bNt.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-03"
  },
  {
    id: "chem-acids-bases",
    title: "Acids and Bases",
    description: "Properties and reactions of acids and bases",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Chemical Substances/Acids and bases/pXVxWZj2BmCN4qDW.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-04"
  },
  {
    id: "chem-electrolytic",
    title: "Electrolytic Processes",
    description: "Understanding electrolytic processes in chemistry",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Chemical Substances/Electrolytic Processes/NChNnvvx2VfZRZrp.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-04"
  },
  {
    id: "chem-earth-science",
    title: "Earth and Atmospheric Science",
    description: "Notes on Earth and its atmosphere from a chemical perspective",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Fuels and Earth Science/Earth and Atmospheric Science/yWxVqKwDdn5v49m9.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-05"
  },
  {
    id: "chem-fuels",
    title: "Fuels",
    description: "Study of different types of fuels and their properties",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Fuels and Earth Science/Fuels/PDRDTFHCTJn6YzD8.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-05"
  },
  {
    id: "chem-group-0",
    title: "Group 0 Elements",
    description: "Properties and reactions of Group 0 elements",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Groups in the Periodic Table/Group 0/FsvjWMvCcMfvxXhh.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-06"
  },
  {
    id: "chem-group-1",
    title: "Group 1 Elements",
    description: "Properties and reactions of Group 1 elements",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Groups in the Periodic Table/Group 1/TkzntFcCkPTZNMyv.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-06"
  },
  {
    id: "chem-group-7",
    title: "Group 7 Elements",
    description: "Properties and reactions of Group 7 elements",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Groups in the Periodic Table/Group 7/Kw3wqmR7rP5Wcz39.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-06"
  },
  {
    id: "chem-heat-energy",
    title: "Heat Energy Changes in Chemical Reactions",
    description: "Thermochemistry and energy changes in reactions",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Rates of Reaction and Energy Changes/Heat Energy Changes in Chemical Reactions/s2SwW43gQ7yKhtGY.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-07"
  },
  {
    id: "chem-reaction-rates",
    title: "Rates of Reaction",
    description: "Factors affecting reaction rates and kinetics",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Rates of Reaction and Energy Changes/Rates of Reaction/2S92XZn3bkmvYmCV.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-07"
  },
  {
    id: "chem-obtaining-metals",
    title: "Obtaining and Using Metals",
    description: "Processes for extracting and using metals",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Reactivity of Metals/Obtaining and using metals/GvkXP4krgGP56RN9.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-08"
  },
  {
    id: "chem-reversible-reactions",
    title: "Reversible Reactions and Equilibria",
    description: "Understanding chemical equilibrium and reversible reactions",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Reactivity of Metals/Reversible Reactions and Equillibria/5Ps5XSs2kW4SQkmc.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-08"
  },
  {
    id: "chem-cells-fuel-cells",
    title: "Chemical Cells and Fuel Cells",
    description: "How chemical cells and fuel cells work",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Seperate Chemistry 1/Chemical Cells and fuel cells/fvz8x67Cgq8xgjGJ.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-09"
  },
  {
    id: "chem-dynamic-equilibria",
    title: "Dynamic Equilibria",
    description: "Advanced concepts in chemical equilibrium",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Seperate Chemistry 1/Dynamic equillibria/XzKWJfcqxhxNG3Qb.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-09"
  },
  {
    id: "chem-quantitative-analysis",
    title: "Quantitative Analysis",
    description: "Methods for quantitative chemical analysis",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Seperate Chemistry 1/Quantitative analysis/yF42DPdgctfkcv2m.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-09"
  },
  {
    id: "chem-transition-metals",
    title: "Transition Metals, Alloys and Corrosion",
    description: "Properties of transition metals, alloys, and corrosion processes",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Seperate Chemistry 1/Transition metals, alloys and corrosion/WTxJPwWGrwpdsNc6.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-09"
  },
  {
    id: "chem-alcohols-acids",
    title: "Alcohols and Carboxylic Acids",
    description: "Properties and reactions of alcohols and carboxylic acids",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Seperate Chemistry 2/Alcohols and Carboxylic Acids/4JzfGBmfNqss6mhS.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-10"
  },
  {
    id: "chem-nanoparticles",
    title: "Bulk and Surface Properties of Matter Including Nanoparticles",
    description: "Study of nanoparticles and their unique properties",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Seperate Chemistry 2/Bulk and surface properties of matter including nanoparticles/GmjwQttXn2MGmGcF.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-10"
  },
  {
    id: "chem-hydrocarbons",
    title: "Hydrocarbons",
    description: "Properties and reactions of hydrocarbon compounds",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Seperate Chemistry 2/Hydro Carbons/8pxrTGn5tVcyzFsF.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-10"
  },
  {
    id: "chem-polymers",
    title: "Polymers",
    description: "Properties and applications of polymers",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Seperate Chemistry 2/Polymers/7pWmFCt6WHHy25V9.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-10"
  },
  {
    id: "chem-qualitative-analysis",
    title: "Qualitative Analysis - Test For Ions",
    description: "Techniques for identifying ions in solutions",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Seperate Chemistry 2/Qualitative Analysis - Test For Ions/WfBqrkJYyJRkJmxc.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-10"
  },
  {
    id: "chem-separation-methods",
    title: "Methods of Separating and Purifying Substances",
    description: "Techniques for purification and separation in chemistry",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/States of Matter/Methods of seperating and purifying substances/VBmWjhs6mSGHVMTt.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-11"
  },
  {
    id: "chem-states-of-matter",
    title: "States of Matter",
    description: "Properties of solids, liquids, and gases",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/States of Matter/States of Matter/V8C226h8jb4h5F69.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-11"
  },
  
  // English - Mock Exams
  {
    id: "english-paper1-mock",
    title: "English Paper 1 Mock Exam",
    description: "AQA English mock examination paper 1",
    path: "/pdfs/English - AQA/Mock Exams/Paper 1.pdf",
    subject: "english-aqa",
    category: "Mock Exams",
    dateAdded: "2025-03-01"
  },
  {
    id: "english-paper2-mock",
    title: "English Paper 2 Mock Exam",
    description: "AQA English mock examination paper 2",
    path: "/pdfs/English - AQA/Mock Exams/Paper 2.pdf",
    subject: "english-aqa",
    category: "Mock Exams",
    dateAdded: "2025-03-02"
  },
  
  // English - Mark Schemes
  {
    id: "english-paper1-mark-scheme",
    title: "English Paper 1 Mark Scheme",
    description: "AQA English paper 1 mark scheme",
    path: "/pdfs/English - AQA/Mark Scheme/Paper1.pdf",
    subject: "english-aqa",
    category: "Mark Scheme",
    dateAdded: "2025-03-05"
  },
  {
    id: "english-paper2-mark-scheme",
    title: "English Paper 2 Mark Scheme",
    description: "AQA English paper 2 mark scheme",
    path: "/pdfs/English - AQA/Mark Scheme/Paper2.pdf",
    subject: "english-aqa",
    category: "Mark Scheme",
    dateAdded: "2025-03-06"
  },
  
  // English - Revision Notes (Shakespeare)
  {
    id: "english-shakespeare-essay",
    title: "How to Answer The Shakespeare Essay Question",
    description: "Guide to answering Shakespeare essay questions effectively",
    path: "/pdfs/English - AQA/Revision Notes/Shakespeare/How to Answer The Shakespeare Essay Question/pdf.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-10"
  },
  {
    id: "english-macbeth",
    title: "Macbeth Analysis",
    description: "Comprehensive analysis of Shakespeare's Macbeth",
    path: "/pdfs/English - AQA/Revision Notes/Shakespeare/Macbeth/pdf1.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-10"
  },
  {
    id: "english-romeo-juliet",
    title: "Romeo and Juliet Analysis",
    description: "Study notes for Romeo and Juliet",
    path: "/pdfs/English - AQA/Revision Notes/Shakespeare/Romeo and Juliet/pdf2.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-12"
  },
  {
    id: "english-merchant-venice",
    title: "The Merchant of Venice",
    description: "Analysis of The Merchant of Venice",
    path: "/pdfs/English - AQA/Revision Notes/Shakespeare/The Merchant Of Venice/pdf3.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-13"
  },
  {
    id: "english-much-ado",
    title: "Much Ado About Nothing",
    description: "Analysis of Much Ado About Nothing",
    path: "/pdfs/English - AQA/Revision Notes/Shakespeare/Much Ado About Nothing/pdf4.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-14"
  },
  
  // English - Revision Notes (19th Century Novel)
  {
    id: "english-19th-century-essay",
    title: "How to answer the 19th century novel essay question",
    description: "Guide to answering 19th century novel essay questions",
    path: "/pdfs/English - AQA/Revision Notes/The 19th Century Novel/How to answer the 19th century novel essay question/pdf5.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-15"
  },
  {
    id: "english-christmas-carol",
    title: "A Christmas Carol",
    description: "Study guide for Dickens' A Christmas Carol",
    path: "/pdfs/English - AQA/Revision Notes/The 19th Century Novel/A Christmas Carol/pdf6.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-18"
  },
  {
    id: "english-jekyll-hyde",
    title: "Dr Jekyll and Mr Hyde",
    description: "Analysis of Stevenson's Dr Jekyll and Mr Hyde",
    path: "/pdfs/English - AQA/Revision Notes/The 19th Century Novel/Dr Jekyll and Mr Hyde/pdf7.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-20"
  },
  
  // English - Revision Notes (Modern Texts)
  {
    id: "english-structuring-essay",
    title: "Structuring the Essay",
    description: "Guide to structuring essays for English literature",
    path: "/pdfs/English - AQA/Revision Notes/Modern Texts/Structuring the Essay/pdf8.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-22"
  },
  {
    id: "english-inspector-calls",
    title: "An Inspector Calls",
    description: "Analysis notes for An Inspector Calls",
    path: "/pdfs/English - AQA/Revision Notes/Modern Texts/An Inspector Calls/pdf9.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-15"
  },
  {
    id: "english-lord-flies",
    title: "Lord of the Flies",
    description: "Analysis of Golding's Lord of the Flies",
    path: "/pdfs/English - AQA/Revision Notes/Modern Texts/Lord of the flies/pdf10.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-23"
  },
  
  // English - Revision Notes (Poetry)
  {
    id: "english-poetry-anthology",
    title: "How to answer the Poetry Anthology Question",
    description: "Approach to poetry anthology questions",
    path: "/pdfs/English - AQA/Revision Notes/Poetry Anthology/How to answer the Poetry Anthology Question/pdf11.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-25"
  },
  {
    id: "english-power-conflict",
    title: "Power and Conflict",
    description: "Analysis of Power and Conflict poetry collection",
    path: "/pdfs/English - AQA/Revision Notes/Poetry Anthology/Power and Conflict/pdf12.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-26"
  },
  
  // English - Revision Notes (Unseen Poetry)
  {
    id: "english-unseen-poetry",
    title: "How to answer the Unseen Poetry question",
    description: "Techniques for approaching unseen poetry questions",
    path: "/pdfs/English - AQA/Revision Notes/Unseen Poetry/How to answer the Unseen Poetry question/pdf13.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-28"
  },
  
  // English - Revision Notes (Exam Skills)
  {
    id: "english-exam-tips",
    title: "Exam Tips",
    description: "Tips and strategies for English exams",
    path: "/pdfs/English - AQA/Revision Notes/Exam Skills/Exam Tips/pdf14.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-03-01"
  },
  
  // Biology - Mock Exams
  {
    id: "bio-paper1-question",
    title: "Biology Paper 1 - Questions",
    description: "Biology Paper 1 examination questions",
    path: "/pdfs/Biology/Mock Exams/paper1-question.pdf",
    subject: "biology",
    category: "Mock Exams",
    dateAdded: "2025-01-05"
  },
  {
    id: "bio-paper1-answer",
    title: "Biology Paper 1 - Answers",
    description: "Biology Paper 1 examination answers",
    path: "/pdfs/Biology/Mock Exams/paper1-answer.pdf",
    subject: "biology",
    category: "Mark Scheme",
    dateAdded: "2025-01-05"
  },
  {
    id: "bio-paper2-question",
    title: "Biology Paper 2 - Questions",
    description: "Biology Paper 2 examination questions",
    path: "/pdfs/Biology/Mock Exams/paper2-question.pdf",
    subject: "biology",
    category: "Mock Exams",
    dateAdded: "2025-01-08"
  },
  {
    id: "bio-paper2-answer",
    title: "Biology Paper 2 - Answers",
    description: "Biology Paper 2 examination answers",
    path: "/pdfs/Biology/Mock Exams/paper2-answer.pdf",
    subject: "biology",
    category: "Mark Scheme",
    dateAdded: "2025-01-08"
  },
  
  // Biology - Revision Notes
  {
    id: "bio-animal-hormones",
    title: "Animal Hormones",
    description: "Study notes on animal hormones and endocrine systems",
    path: "/pdfs/Biology/Revision Notes/animalhormones.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-01"
  },
  {
    id: "bio-brain",
    title: "The Brain",
    description: "Comprehensive notes on brain structure and function",
    path: "/pdfs/Biology/Revision Notes/brain.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-02"
  },
  {
    id: "bio-cell-division",
    title: "Cell Division",
    description: "Notes on mitosis, meiosis and cell cycle",
    path: "/pdfs/Biology/Revision Notes/celldivision.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-03"
  },
  {
    id: "bio-circulatory-system",
    title: "Circulatory System",
    description: "Study of the heart and blood circulation",
    path: "/pdfs/Biology/Revision Notes/circulatorysystem.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-04"
  },
  {
    id: "bio-ecosystem-cycles",
    title: "Cycles Within Ecosystems",
    description: "Notes on carbon, nitrogen and water cycles",
    path: "/pdfs/Biology/Revision Notes/cycleswithinecosystems.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-05"
  },
  {
    id: "bio-disease-defence",
    title: "Defence Against Disease",
    description: "Notes on immune system and disease prevention",
    path: "/pdfs/Biology/Revision Notes/defenceagainstdisease.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-06"
  },
  {
    id: "bio-medicine-development",
    title: "Development of Medicines",
    description: "Notes on drug development and testing",
    path: "/pdfs/Biology/Revision Notes/developmentofmedicines.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-07"
  },
  {
    id: "bio-diffusion",
    title: "Diffusion",
    description: "Notes on diffusion processes in cells",
    path: "/pdfs/Biology/Revision Notes/diffusion.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-08"
  },
  {
    id: "bio-disease",
    title: "Disease",
    description: "Notes on disease types and transmission",
    path: "/pdfs/Biology/Revision Notes/disease.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-09"
  },
  {
    id: "bio-enzymes",
    title: "Enzymes",
    description: "Comprehensive notes on enzyme function and kinetics",
    path: "/pdfs/Biology/Revision Notes/enzymes.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-10"
  },
  {
    id: "bio-eukaryotic-organisms",
    title: "Eukaryotic Organisms",
    description: "Notes on eukaryotic cell structure and function",
    path: "/pdfs/Biology/Revision Notes/eukaryoticorganisms.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-11"
  },
  {
    id: "bio-feeding-relationships",
    title: "Feeding Relationships",
    description: "Notes on food chains and trophic levels",
    path: "/pdfs/Biology/Revision Notes/feedingrelationships.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-12"
  },
  {
    id: "bio-food-production",
    title: "Food Production",
    description: "Notes on agricultural techniques and food technology",
    path: "/pdfs/Biology/Revision Notes/foodproduction.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-13"
  },
  {
    id: "bio-gas-exchange",
    title: "Gas Exchange",
    description: "Notes on respiratory systems and gas exchange",
    path: "/pdfs/Biology/Revision Notes/gasexchange.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-14"
  },
  {
    id: "bio-genetic-modification",
    title: "Genetic Modification",
    description: "Notes on GMO technology and applications",
    path: "/pdfs/Biology/Revision Notes/geneticmodification.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-15"
  },
  {
    id: "bio-growth",
    title: "Growth",
    description: "Notes on cell growth and development",
    path: "/pdfs/Biology/Revision Notes/growth.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-16"
  },
  {
    id: "bio-homeostasis",
    title: "Homeostasis",
    description: "Notes on homeostatic mechanisms in organisms",
    path: "/pdfs/Biology/Revision Notes/homeostasis.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-17"
  },
  {
    id:
