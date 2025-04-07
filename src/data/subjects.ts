
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
    id: "bio-human-influences",
    title: "Human Influences on the Environment",
    description: "Study of human impact on ecosystems",
    path: "/pdfs/Biology/Revision Notes/humaninfluences.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-18"
  },
  {
    id: "bio-inheritance",
    title: "Inheritance",
    description: "Notes on genetics and inheritance patterns",
    path: "/pdfs/Biology/Revision Notes/inheritence.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-19"
  },
  {
    id: "bio-natural-selection",
    title: "Natural Selection",
    description: "Notes on evolution and natural selection",
    path: "/pdfs/Biology/Revision Notes/naturalselection.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-20"
  },
  {
    id: "bio-photosynthesis",
    title: "Photosynthesis",
    description: "In-depth notes on photosynthesis",
    path: "/pdfs/Biology/Revision Notes/photosynthesis.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-21"
  },
  {
    id: "bio-plant-hormones",
    title: "Plant Hormones",
    description: "Notes on plant growth regulators and responses",
    path: "/pdfs/Biology/Revision Notes/planthormones.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-22"
  },
  {
    id: "bio-plant-structure",
    title: "Plant Structure",
    description: "Notes on plant anatomy and tissue systems",
    path: "/pdfs/Biology/Revision Notes/plantstructure.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-23"
  },
  {
    id: "bio-reproduction",
    title: "Reproduction",
    description: "Notes on sexual and asexual reproduction",
    path: "/pdfs/Biology/Revision Notes/reproduction.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-24"
  },
  {
    id: "bio-respiration",
    title: "Respiration",
    description: "Comprehensive notes on cellular respiration",
    path: "/pdfs/Biology/Revision Notes/respiration.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-25"
  },
  {
    id: "bio-stem-cells",
    title: "Stem Cells",
    description: "Notes on stem cell biology and applications",
    path: "/pdfs/Biology/Revision Notes/stemcells.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-26"
  },
  {
    id: "bio-organism-environment",
    title: "The Organism in the Environment",
    description: "Notes on ecological adaptations",
    path: "/pdfs/Biology/Revision Notes/theorganismintheenvironment.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-27"
  },
  {
    id: "bio-transport-animals",
    title: "Transport in Animals",
    description: "Study of circulatory and transport systems in animals",
    path: "/pdfs/Biology/Revision Notes/transportinanimals.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-28"
  },
  {
    id: "bio-transport-plants",
    title: "Transport in Plants",
    description: "Notes on xylem, phloem, and water transport in plants",
    path: "/pdfs/Biology/Revision Notes/transportinplants.pdf",
    subject: "biology",
    category: "Revision Notes",
    dateAdded: "2025-02-29"
  },
  
  // Computer Science - Mock Exams
  {
    id: "cs-paper1-question",
    title: "Computer Science Paper 1 - Questions",
    description: "Computer Science Paper 1 examination questions",
    path: "/pdfs/Computer Science/Mock Exams/paper1-question.pdf",
    subject: "computer-science",
    category: "Mock Exams",
    dateAdded: "2025-01-15"
  },
  {
    id: "cs-paper1-answer",
    title: "Computer Science Paper 1 - Answers",
    description: "Computer Science Paper 1 examination answers",
    path: "/pdfs/Computer Science/Mock Exams/paper1-answer.pdf",
    subject: "computer-science",
    category: "Mark Scheme",
    dateAdded: "2025-01-15"
  },
  {
    id: "cs-paper2-question",
    title: "Computer Science Paper 2 - Questions",
    description: "Computer Science Paper 2 examination questions",
    path: "/pdfs/Computer Science/Mock Exams/paper2-question.pdf",
    subject: "computer-science",
    category: "Mock Exams",
    dateAdded: "2025-01-18"
  },
  {
    id: "cs-paper2-answer",
    title: "Computer Science Paper 2 - Answers",
    description: "Computer Science Paper 2 examination answers",
    path: "/pdfs/Computer Science/Mock Exams/paper2-answer.pdf",
    subject: "computer-science",
    category: "Mark Scheme",
    dateAdded: "2025-01-18"
  },
  
  // Computer Science - Revision Notes
  {
    id: "cs-boolean-logic",
    title: "Boolean Logic Diagrams",
    description: "Notes on Boolean logic and circuit diagrams",
    path: "/pdfs/Computer Science/Revision Notes/booleanlogicdiagrams.pdf",
    subject: "computer-science",
    category: "Revision Notes",
    dateAdded: "2025-02-01"
  },
  {
    id: "cs-computational-thinking",
    title: "Computational Thinking and Algorithms",
    description: "Notes on computational thinking techniques",
    path: "/pdfs/Computer Science/Revision Notes/computationalthinkingandalgorithms.pdf",
    subject: "computer-science",
    category: "Revision Notes",
    dateAdded: "2025-02-02"
  },
  {
    id: "cs-cpu",
    title: "CPU",
    description: "Study of CPU architecture and functions",
    path: "/pdfs/Computer Science/Revision Notes/cpu.pdf",
    subject: "computer-science",
    category: "Revision Notes",
    dateAdded: "2025-02-03"
  },
  {
    id: "cs-creating-algorithms",
    title: "Creating Algorithms",
    description: "Notes on algorithm design and implementation",
    path: "/pdfs/Computer Science/Revision Notes/creatingalgorithms.pdf",
    subject: "computer-science",
    category: "Revision Notes",
    dateAdded: "2025-02-04"
  },
  {
    id: "cs-data-storage",
    title: "Data Storage and Compression",
    description: "Notes on data storage techniques and compression",
    path: "/pdfs/Computer Science/Revision Notes/datastorageandcompression.pdf",
    subject: "computer-science",
    category: "Revision Notes",
    dateAdded: "2025-02-05"
  },
  {
    id: "cs-defensive-design",
    title: "Defensive Design and Testing",
    description: "Notes on secure software design and testing methods",
    path: "/pdfs/Computer Science/Revision Notes/defensivedesignandtesting.pdf",
    subject: "computer-science",
    category: "Revision Notes",
    dateAdded: "2025-02-06"
  },
  {
    id: "cs-ethical-legal",
    title: "Ethical, Legal, Cultural and Environmental Impact",
    description: "Study of computing ethics and societal impacts",
    path: "/pdfs/Computer Science/Revision Notes/ethicallegalculturalandenvironmentalimpact.pdf",
    subject: "computer-science",
    category: "Revision Notes",
    dateAdded: "2025-02-07"
  },
  {
    id: "cs-networks-topologies",
    title: "Networks and Topologies",
    description: "Notes on network types and topologies",
    path: "/pdfs/Computer Science/Revision Notes/networksandtopologies.pdf",
    subject: "computer-science",
    category: "Revision Notes",
    dateAdded: "2025-02-08"
  },
  {
    id: "cs-os-utility",
    title: "OS and Utility Software",
    description: "Study of operating systems and utility software",
    path: "/pdfs/Computer Science/Revision Notes/osandutilitysoftware.pdf",
    subject: "computer-science",
    category: "Revision Notes",
    dateAdded: "2025-02-09"
  },
  {
    id: "cs-preventing-threats",
    title: "Preventing Threats",
    description: "Notes on cybersecurity and threat prevention",
    path: "/pdfs/Computer Science/Revision Notes/preventingthreats.pdf",
    subject: "computer-science",
    category: "Revision Notes",
    dateAdded: "2025-02-10"
  },
  {
    id: "cs-storage",
    title: "Primary and Secondary Storage",
    description: "Notes on computer memory and storage",
    path: "/pdfs/Computer Science/Revision Notes/primaryandsecondarystorage.pdf",
    subject: "computer-science",
    category: "Revision Notes",
    dateAdded: "2025-02-11"
  },
  {
    id: "cs-programming-fundamentals",
    title: "Programming Fundamentals",
    description: "Notes on programming concepts and principles",
    path: "/pdfs/Computer Science/Revision Notes/programmingfundamentals.pdf",
    subject: "computer-science",
    category: "Revision Notes",
    dateAdded: "2025-02-12"
  },
  {
    id: "cs-programming-languages",
    title: "Programming Languages and IDEs",
    description: "Overview of programming languages and development environments",
    path: "/pdfs/Computer Science/Revision Notes/programminglanguagesandIDEs.pdf",
    subject: "computer-science",
    category: "Revision Notes",
    dateAdded: "2025-02-13"
  },
  {
    id: "cs-programming-techniques",
    title: "Programming Techniques",
    description: "Advanced programming methods and patterns",
    path: "/pdfs/Computer Science/Revision Notes/programmingtechniques.pdf",
    subject: "computer-science",
    category: "Revision Notes",
    dateAdded: "2025-02-14"
  },
  {
    id: "cs-networks-protocols",
    title: "Wired and Wireless Networks, Protocols and Layers",
    description: "Study of network protocols and the OSI model",
    path: "/pdfs/Computer Science/Revision Notes/wiredandwirelessnetoworksprotocolsandlayers.pdf",
    subject: "computer-science",
    category: "Revision Notes",
    dateAdded: "2025-02-15"
  },
  
  // Maths - Revision Notes
  {
    id: "math-3d-pythagorean",
    title: "3D Pythagoras and Trigonometry",
    description: "Applications of Pythagoras theorem and trigonometry in 3D space",
    path: "/pdfs/Maths/Revision Notes/3dpythagorasandtrigonometry.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-01"
  },
  {
    id: "math-algebraic-fractions",
    title: "Algebraic Fractions",
    description: "Operations with algebraic fractions",
    path: "/pdfs/Maths/Revision Notes/algebraicfrations.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-02"
  },
  {
    id: "math-algebraic-proof",
    title: "Algebraic Proof",
    description: "Techniques for algebraic proofs",
    path: "/pdfs/Maths/Revision Notes/algebraicproof.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-03"
  },
  {
    id: "math-algebraic-roots",
    title: "Algebraic Roots and Indices",
    description: "Working with roots and indices in algebra",
    path: "/pdfs/Maths/Revision Notes/algebraicrootsandindicies.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-04"
  },
  {
    id: "math-angles-polygons",
    title: "Angles in Polygons and Parallel Lines",
    description: "Properties of angles in geometric figures",
    path: "/pdfs/Maths/Revision Notes/anglesinpolygonsandparallellines.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-05"
  },
  {
    id: "math-area-perimeter",
    title: "Area and Perimeter",
    description: "Calculating area and perimeter of shapes",
    path: "/pdfs/Maths/Revision Notes/areaandperimeter.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-06"
  },
  {
    id: "math-similar-shapes",
    title: "Area and Volume of Similar Shapes",
    description: "Scale factors and similar shapes",
    path: "/pdfs/Maths/Revision Notes/areaandvolumeofsimilarshapes.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-07"
  },
  {
    id: "math-averages",
    title: "Averages, Ranges and Data",
    description: "Statistical measures and data analysis",
    path: "/pdfs/Maths/Revision Notes/averagesrangesanddata.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-08"
  },
  {
    id: "math-bearings",
    title: "Bearings, Scale Drawing, Constructions and Loci",
    description: "Geometric constructions and bearings",
    path: "/pdfs/Maths/Revision Notes/bearingsscaledrawingconstructionsandloci.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-09"
  },
  {
    id: "math-circles",
    title: "Circles, Arcs and Sectors",
    description: "Properties and calculations for circles",
    path: "/pdfs/Maths/Revision Notes/circlesarcsandsectors.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-10"
  },
  {
    id: "math-circle-theorems",
    title: "Circle Theorems",
    description: "Geometric theorems related to circles",
    path: "/pdfs/Maths/Revision Notes/circletheorems.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-11"
  },
  {
    id: "math-probability",
    title: "Combined and Conditional Probability",
    description: "Advanced probability concepts",
    path: "/pdfs/Maths/Revision Notes/combinedandconditionalprobability.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-12"
  },
  {
    id: "math-completing-square",
    title: "Completing the Square",
    description: "Quadratic expressions in completed square form",
    path: "/pdfs/Maths/Revision Notes/completingthesquare.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-13"
  },
  // Adding more math PDFs
  {
    id: "math-congruence",
    title: "Congruence, Similarity and Geometrical Proof",
    description: "Concepts of congruence and similarity in geometry",
    path: "/pdfs/Maths/Revision Notes/congruencesimilarityandgeometricalproof.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-14"
  },
  {
    id: "math-coordinate-geometry",
    title: "Coordinate Geometry",
    description: "Working with coordinates and equations of lines",
    path: "/pdfs/Maths/Revision Notes/coordinategeometry.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-15"
  },
  {
    id: "math-cumulative-frequency",
    title: "Cumulative Frequency and Box Plots",
    description: "Statistical representation and analysis",
    path: "/pdfs/Maths/Revision Notes/culmulativefrequencyandboxplots.pdf",
    subject: "maths",
    category: "Revision Notes",
    dateAdded: "2025-02-16"
  },
  
  // Physics - Revision Notes
  {
    id: "physics-atomic-structure",
    title: "Atomic Structure",
    description: "Structure of atoms and related concepts",
    path: "/pdfs/Physics/Revision Notes/atomicstructure.pdf",
    subject: "physics",
    category: "Revision Notes",
    dateAdded: "2025-02-01"
  },
  {
    id: "physics-components",
    title: "Components in Series and Parallel Circuits",
    description: "Circuit analysis for series and parallel configurations",
    path: "/pdfs/Physics/Revision Notes/componentsinseriesandparallelcircuits.pdf",
    subject: "physics",
    category: "Revision Notes",
    dateAdded: "2025-02-02"
  },
  {
    id: "physics-energy-conservation",
    title: "Conservation of Energy",
    description: "Principles of energy conservation",
    path: "/pdfs/Physics/Revision Notes/conservationofenergy.pdf",
    subject: "physics",
    category: "Revision Notes",
    dateAdded: "2025-02-03"
  },
  {
    id: "physics-cosmology",
    title: "Cosmology",
    description: "Study of the universe's origin and evolution",
    path: "/pdfs/Physics/Revision Notes/cosmology.pdf",
    subject: "physics",
    category: "Revision Notes",
    dateAdded: "2025-02-04"
  },
  {
    id: "physics-current",
    title: "Current, Potential Difference and Resistance",
    description: "Fundamental electrical concepts",
    path: "/pdfs/Physics/Revision Notes/currentpotentialdifferenceandresistance.pdf",
    subject: "physics",
    category: "Revision Notes",
    dateAdded: "2025-02-05"
  },
  {
    id: "physics-motion",
    title: "Describing Motion",
    description: "Kinematics and motion analysis",
    path: "/pdfs/Physics/Revision Notes/describingmotion.pdf",
    subject: "physics",
    category: "Revision Notes",
    dateAdded: "2025-02-06"
  },
  {
    id: "physics-efficiency",
    title: "Efficiency and Energy Resources",
    description: "Energy efficiency and renewable resources",
    path: "/pdfs/Physics/Revision Notes/effciencyandenergyresources.pdf",
    subject: "physics",
    category: "Revision Notes",
    dateAdded: "2025-02-07"
  },
  {
    id: "physics-electromagnetic-induction",
    title: "Electromagnetic Induction",
    description: "Principles of electromagnetic induction",
    path: "/pdfs/Physics/Revision Notes/electromagneticinduction.pdf",
    subject: "physics",
    category: "Revision Notes",
    dateAdded: "2025-02-08"
  },
  {
    id: "physics-electromagnetic-waves",
    title: "Electromagnetic Waves",
    description: "Properties and applications of EM waves",
    path: "/pdfs/Physics/Revision Notes/electromagneticwaves.pdf",
    subject: "physics",
    category: "Revision Notes",
    dateAdded: "2025-02-09"
  },
  {
    id: "physics-electromagnetism",
    title: "Electromagnetism and the Motor Effect",
    description: "Principles of electromagnetism",
    path: "/pdfs/Physics/Revision Notes/electromagnetismandthemotoreffect.pdf",
    subject: "physics",
    category: "Revision Notes",
    dateAdded: "2025-02-10"
  },
  {
    id: "physics-energy-transfer",
    title: "Energy Transfer in Circuits",
    description: "Energy considerations in electrical circuits",
    path: "/pdfs/Physics/Revision Notes/energytransferincircuits.pdf",
    subject: "physics",
    category: "Revision Notes",
    dateAdded: "2025-02-11"
  },
  {
    id: "physics-quantities",
    title: "Expressing Quantities and SI Units",
    description: "Working with physical quantities and units",
    path: "/pdfs/Physics/Revision Notes/expressingquantitiesandsiunits.pdf",
    subject: "physics",
    category: "Revision Notes",
    dateAdded: "2025-02-12"
  },
  {
    id: "physics-forces",
    title: "Forces",
    description: "Fundamental concepts of forces",
    path: "/pdfs/Physics/Revision Notes/forces.pdf",
    subject: "physics",
    category: "Revision Notes",
    dateAdded: "2025-02-13"
  },
  {
    id: "physics-elasticity",
    title: "Forces and Elasticity",
    description: "Study of elastic materials and Hooke's Law",
    path: "/pdfs/Physics/Revision Notes/forcesandelasticity.pdf",
    subject: "physics",
    category: "Revision Notes",
    dateAdded: "2025-02-14"
  },
  {
    id: "physics-magnetism",
    title: "Magnetism",
    description: "Principles of magnetism and magnetic fields",
    path: "/pdfs/Physics/Revision Notes/magnetism.pdf",
    subject: "physics",
    category: "Revision Notes",
    dateAdded: "2025-02-15"
  }
];

// Helper function to get a subject by ID
export function getSubjectById(id: string): Subject | undefined {
  return subjects.find(subject => subject.id === id);
}

// Get PDFs by subject and category
export function getPDFsBySubjectAndCategory(subjectId: string, category: string): PDF[] {
  return pdfs.filter(pdf => pdf.subject === subjectId && pdf.category === category);
}

// Get PDFs by subject
export function getPDFsBySubject(subjectId: string): PDF[] {
  return pdfs.filter(pdf => pdf.subject === subjectId);
}

