import { profile } from "@/data/portfolioData";

export function GET() {
  const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 186 >>
stream
BT
/F1 24 Tf
72 700 Td
(${profile.name}) Tj
/F1 12 Tf
0 -28 Td
(${profile.title}) Tj
0 -22 Td
(${profile.location}) Tj
0 -42 Td
(${profile.bio}) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
0
%%EOF`;

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${profile.name.toLowerCase().replaceAll(" ", "-")}-resume.pdf"`,
    },
  });
}
