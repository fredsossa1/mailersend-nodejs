export = Attachment;
declare class Attachment {
  constructor(content: string | Buffer, filename: string);
  setContent(content: string | Buffer): Attachment;
  content: string | Buffer;
  setFilename(filename: string): Attachment;
  filename: string;
}
