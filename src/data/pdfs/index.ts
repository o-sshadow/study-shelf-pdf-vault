
import { PDF } from "../types";
import { chemistryPdfs } from "./chemistry";
import { englishPdfs } from "./english";
import { biologyPdfs } from "./biology";
import { computerSciencePdfs } from "./computer-science";
import { mathsPdfs } from "./maths";
import { physicsPdfs } from "./physics";

// Combine all PDFs into a single array
export const pdfs: PDF[] = [
  ...chemistryPdfs,
  ...englishPdfs,
  ...biologyPdfs,
  ...computerSciencePdfs,
  ...mathsPdfs,
  ...physicsPdfs
];
