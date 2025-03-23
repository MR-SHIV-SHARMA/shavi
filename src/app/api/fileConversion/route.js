import { NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";
import mammoth from "mammoth";
import { read, utils } from "xlsx";
import { parseStringPromise } from "xml2js";
import { readFile } from "fs/promises";
import JSZip from "jszip";
import { parse as parseYAML } from "yaml";
import ini from "ini";
import { parse as parseTOML } from "@iarna/toml";
// import { extract as extractEPUB } from "epub2";
import { parse as parseVCard } from "vcard4";
import { parse as parseICS } from "ical";
import pdfParse from "pdf-parse";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files");

    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, message: "At least one file is required" },
        { status: 400 }
      );
    }

    let convertedFiles = [];

    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const fileType = file.name.split(".").pop().toLowerCase();
      let convertedData = "";

      try {
        switch (fileType) {
          case "pdf":
            convertedData = await convertPDFtoText(arrayBuffer);
            break;
          case "docx":
            convertedData = await convertDOCXtoText(arrayBuffer);
            break;
          case "txt":
          case "md":
          case "rtf":
          case "log":
          case "bat":
          case "sh":
          case "config":
            convertedData = new TextDecoder().decode(arrayBuffer);
            break;
          case "csv":
            convertedData = await convertCSVtoText(arrayBuffer);
            break;
          case "xlsx":
            convertedData = await convertExcelToText(arrayBuffer);
            break;
          case "xml":
            convertedData = await convertXMLtoText(arrayBuffer);
            break;
          case "json":
            convertedData = await convertJSONtoText(arrayBuffer);
            break;
          case "html":
            convertedData = await convertHTMLtoText(arrayBuffer);
            break;
          case "zip":
            convertedData = await convertZIPtoText(arrayBuffer);
            break;
          case "yaml":
            convertedData = await convertYAMLtoText(arrayBuffer);
            break;
          case "ini":
            convertedData = await convertINItoText(arrayBuffer);
            break;
          case "toml":
            convertedData = JSON.stringify(
              parseTOML(new TextDecoder().decode(arrayBuffer)),
              null,
              2
            );
            break;
          case "epub":
            convertedData = await convertEPUBtoText(arrayBuffer);
            break;
          case "vcard":
          case "vcf":
            convertedData = JSON.stringify(
              parseVCard(new TextDecoder().decode(arrayBuffer)),
              null,
              2
            );
            break;
          case "ics":
            convertedData = JSON.stringify(
              parseICS(new TextDecoder().decode(arrayBuffer)),
              null,
              2
            );
            break;
          default:
            convertedData = "Unsupported file format";
        }
      } catch (error) {
        convertedData = `Error processing file: ${error.message}`;
      }

      convertedFiles.push({ filename: file.name, content: convertedData });
    }

    return NextResponse.json({ success: true, data: convertedFiles });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// PDF कन्वर्शन
async function convertPDFtoText(arrayBuffer) {
  const data = await pdfParse(Buffer.from(arrayBuffer));
  return data.text;
}

// DOCX कन्वर्शन
async function convertDOCXtoText(arrayBuffer) {
  const buffer = Buffer.from(arrayBuffer);
//   const { value } = await mammoth.extractRawText({ buffer });
  return value;
}

// CSV कन्वर्शन
async function convertCSVtoText(arrayBuffer) {
  return new TextDecoder().decode(arrayBuffer);
}

// Excel कन्वर्शन
async function convertExcelToText(arrayBuffer) {
  const workbook = read(new Uint8Array(arrayBuffer), { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  return utils.sheet_to_csv(sheet);
}

// XML कन्वर्शन
async function convertXMLtoText(arrayBuffer) {
  const text = new TextDecoder().decode(arrayBuffer);
  const result = await parseStringPromise(text);
  return JSON.stringify(result, null, 2);
}

// JSON कन्वर्शन
async function convertJSONtoText(arrayBuffer) {
  return JSON.stringify(
    JSON.parse(new TextDecoder().decode(arrayBuffer)),
    null,
    2
  );
}

// HTML से टेक्स्ट निकालना
async function convertHTMLtoText(arrayBuffer) {
  return new TextDecoder().decode(arrayBuffer).replace(/<[^>]*>/g, "");
}

// ZIP फाइल से टेक्स्ट निकालना
async function convertZIPtoText(arrayBuffer) {
  const zip = await JSZip.loadAsync(arrayBuffer);
  let fileContents = [];

  for (const [filename, file] of Object.entries(zip.files)) {
    if (!file.dir) {
      const content = await file.async("text");
      fileContents.push(`File: ${filename}\n${content}`);
    }
  }
  return fileContents.join("\n\n");
}

// EPUB कन्वर्शन
async function convertEPUBtoText(arrayBuffer) {
// //   const extracted = await extractEPUB(arrayBuffer);
// // //   return extracted ? extracted.text : "Unable to extract EPUB content";
}

// YAML कन्वर्शन
async function convertYAMLtoText(arrayBuffer) {
  return JSON.stringify(
    parseYAML(new TextDecoder().decode(arrayBuffer)),
    null,
    2
  );
}

// INI कन्वर्शन
async function convertINItoText(arrayBuffer) {
  return JSON.stringify(
    ini.parse(new TextDecoder().decode(arrayBuffer)),
    null,
    2
  );
}
