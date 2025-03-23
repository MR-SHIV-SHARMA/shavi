import { NextResponse } from 'next/server';
import { PDFDocument } from 'pdf-lib';
import mammoth from 'mammoth';
import { read, utils } from 'xlsx';
import csvParser from 'csv-parser';
import { parseStringPromise } from 'xml2js';
import { readFile } from 'fs/promises';
import JSZip from 'jszip';
import { parse as parseYAML } from 'yaml';
import ini from 'ini';
import { DOMParser } from 'xmldom';
import plist from 'plist';
import { decode as decodeBase64 } from 'base64-arraybuffer';
import { parse as parseTOML } from '@iarna/toml';
import { extract as extractEPUB } from 'epub2';
import { parse as parseVCard } from 'vcard4';
import { parse as parseICS } from 'ical';

export async function POST(req) {
    try {
        const formData = await req.formData();
        const files = formData.getAll('files');
        
        if (!files || files.length === 0) {
            return NextResponse.json({ success: false, message: 'At least one file is required' }, { status: 400 });
        }

        let convertedFiles = [];
        
        for (const file of files) {
            const arrayBuffer = await file.arrayBuffer();
            const fileType = file.name.split('.').pop().toLowerCase();
            let convertedData = '';

            switch (fileType) {
                case 'pdf':
                    convertedData = await convertPDFtoText(arrayBuffer);
                    break;
                case 'docx':
                    convertedData = await convertDOCXtoText(arrayBuffer);
                    break;
                case 'txt':
                    convertedData = new TextDecoder().decode(arrayBuffer);
                    break;
                case 'csv':
                    convertedData = await convertCSVtoText(arrayBuffer);
                    break;
                case 'xlsx':
                    convertedData = await convertExcelToText(arrayBuffer);
                    break;
                case 'xml':
                    convertedData = await convertXMLtoText(arrayBuffer);
                    break;
                case 'json':
                    convertedData = await convertJSONtoText(arrayBuffer);
                    break;
                case 'html':
                    convertedData = await convertHTMLtoText(arrayBuffer);
                    break;
                case 'zip':
                    convertedData = await convertZIPtoText(arrayBuffer);
                    break;
                case 'md':
                    convertedData = new TextDecoder().decode(arrayBuffer);
                    break;
                case 'yaml':
                    convertedData = await convertYAMLtoText(arrayBuffer);
                    break;
                case 'ini':
                    convertedData = await convertINItoText(arrayBuffer);
                    break;
                case 'plist':
                    convertedData = await convertPLISTtoText(arrayBuffer);
                    break;
                case 'rtf':
                    convertedData = new TextDecoder().decode(arrayBuffer);
                    break;
                case 'log':
                    convertedData = new TextDecoder().decode(arrayBuffer);
                    break;
                case 'bat':
                    convertedData = new TextDecoder().decode(arrayBuffer);
                    break;
                case 'sh':
                    convertedData = new TextDecoder().decode(arrayBuffer);
                    break;
                case 'config':
                    convertedData = new TextDecoder().decode(arrayBuffer);
                    break;
                case 'toml':
                    convertedData = JSON.stringify(parseTOML(new TextDecoder().decode(arrayBuffer)), null, 2);
                    break;
                case 'epub':
                    convertedData = await extractEPUB(arrayBuffer);
                    break;
                case 'vcard':
                case 'vcf':
                    convertedData = JSON.stringify(parseVCard(new TextDecoder().decode(arrayBuffer)), null, 2);
                    break;
                case 'ics':
                    convertedData = JSON.stringify(parseICS(new TextDecoder().decode(arrayBuffer)), null, 2);
                    break;
                default:
                    convertedData = 'Unsupported file format';
            }

            convertedFiles.push({ filename: file.name, content: convertedData });
        }

        return NextResponse.json({ success: true, data: convertedFiles });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

async function convertPDFtoText(arrayBuffer) {
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const pages = pdfDoc.getPages();
    return pages.map(page => page.getTextContent()).map(content => content.items.map(item => item.str).join(' ')).join('\n');
}

async function convertDOCXtoText(arrayBuffer) {
    const buffer = Buffer.from(arrayBuffer);
    const { value } = await mammoth.extractRawText({ buffer });
    return value;
}

async function convertCSVtoText(arrayBuffer) {
    const text = new TextDecoder().decode(arrayBuffer);
    return text;
}

async function convertExcelToText(arrayBuffer) {
    const workbook = read(new Uint8Array(arrayBuffer), { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    return utils.sheet_to_csv(sheet);
}

async function convertXMLtoText(arrayBuffer) {
    const text = new TextDecoder().decode(arrayBuffer);
    const result = await parseStringPromise(text);
    return JSON.stringify(result, null, 2);
}

async function convertJSONtoText(arrayBuffer) {
    const text = new TextDecoder().decode(arrayBuffer);
    return JSON.stringify(JSON.parse(text), null, 2);
}

async function convertHTMLtoText(arrayBuffer) {
    const text = new TextDecoder().decode(arrayBuffer);
    return text.replace(/<[^>]*>/g, '');
}

async function convertZIPtoText(arrayBuffer) {
    const zip = await JSZip.loadAsync(arrayBuffer);
    let fileContents = [];
    
    for (const [filename, file] of Object.entries(zip.files)) {
        if (!file.dir) {
            const content = await file.async('text');
            fileContents.push(`File: ${filename}\n${content}`);
        }
    }
    return fileContents.join('\n\n');
}
